#!/usr/bin/env node
// Node.js一键部署脚本：使用node-ssh模块进行SSH连接和文件传输
// 依赖：execa、inquirer、ora、chalk、node-ssh

/* global console, process */

import inquirer from 'inquirer';
import ora from 'ora';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { NodeSSH } from 'node-ssh';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG_FILE = path.resolve(__dirname, '.deployrc.json');

// 读取本地配置
function loadConfig() {
    if (fs.existsSync(CONFIG_FILE)) {
        return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
    }
    return {};
}

// 保存本地配置
function saveConfig(config) {
    let finalConfig = loadConfig();
    Object.assign(finalConfig, config);
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(finalConfig, null, 2), 'utf-8');
}

async function deployWithSSH(config, spinner) {
    const ssh = new NodeSSH();
    
    try {
        // 读取密钥文件
        const privateKey = fs.readFileSync(config.PRIVATE_KEY_PATH, 'utf8');
        
        // 连接服务器
        await ssh.connect({
            host: config.HOST,
            username: config.USER,
            port: config.PORT,
            privateKey: privateKey
        });

        console.log(chalk.blue('SSH连接成功，开始部署...'));

        // 在远程创建目标目录
        await ssh.execCommand(`mkdir -p ${config.TARGET_APP_DIR}`);
        await ssh.execCommand(`mkdir -p ${config.TARGET_SVR_DIR}`);

        console.log(chalk.blue('正在上传文件...'));

        // --- 修正前端文件上传逻辑 ---
        const localAppDistPath = path.join(config.SRC_APP_DIR, 'dist');
        const localAppDockerfile = path.join(config.SRC_APP_DIR, 'Dockerfile');

        // --- 新增：上传前置检查 ---
        if (!fs.existsSync(localAppDistPath)) {
            console.error(chalk.red.bold('\n❌ 部署中止：找不到要上传的前端构建目录！'));
            console.error(`   检查路径: ${path.resolve(localAppDistPath)}`);
            console.error(`   原因：脚本根据你的配置 (SRC_APP_DIR = "${config.SRC_APP_DIR}") 寻找 'dist' 目录，但没有找到。`);
            console.error(chalk.yellow('   💡 解决方法：请确认 1) 你已经运行了打包命令 (如 yarn build)；2) .deployrc.json 中的 SRC_APP_DIR 路径正确 (通常是 \'.\')。\n'));
            throw new Error('Local dist directory not found');
        }
        if (!fs.existsSync(localAppDockerfile)) {
            console.error(chalk.red.bold(`\n❌ 部署中止：在前端源码目录 "${config.SRC_APP_DIR}" 中找不到 Dockerfile！`));
            console.error(`   检查路径: ${path.resolve(localAppDockerfile)}`);
            console.error(chalk.yellow('   💡 解决方法：请确认 Dockerfile 文件在前端项目根目录下。\n'));
            throw new Error('Local Dockerfile not found');
        }
        // --- 检查结束 ---

        console.log(chalk.blue('正在上传前端构建产物...'));
        await ssh.putDirectory(localAppDistPath, `${config.TARGET_APP_DIR}/dist`, {
            recursive: true,
            concurrency: 10,
            tick: function(localPath, remotePath, error) {
                if (error) {
                    console.error(`前端文件上传失败: ${localPath} -> ${remotePath}`);
                }
            }
        });
        console.log(chalk.green('前端 dist 目录上传完成。'));

        await ssh.putFile(localAppDockerfile, `${config.TARGET_APP_DIR}/Dockerfile`);
        console.log(chalk.green('Dockerfile 上传完成。'));
        // --- 前端上传结束 ---

        // --- 修正后端项目上传逻辑 ---
        console.log(chalk.blue('正在上传后端项目...'));
        try {
            const localBackendPath = config.SRC_SVR_DIR;
            // --- 修改：只在目录存在时才尝试上传 ---
            if (fs.existsSync(localBackendPath)) {
                const remoteBackendPath = config.TARGET_SVR_DIR;
                await ssh.putDirectory(localBackendPath, remoteBackendPath, {
                    recursive: true,
                    concurrency: 10,
                    validate: function(itemPath) {
                        const ignore_list = ['node_modules', '.git'];
                        const base = path.basename(itemPath);
                        return !ignore_list.includes(base);
                    },
                    tick: function(localPath, remotePath, error) {
                        if (error) {
                            console.error(`后端文件上传失败: ${localPath} -> ${remotePath}`);
                        }
                    }
                });
                console.log(chalk.green('后端项目上传完成！'));
            } else {
                console.log(chalk.yellow(`🤷 警告：后端目录 ${path.resolve(localBackendPath)} 不存在，已跳过上传。`));
            }
        } catch (backendError) {
             console.error('上传后端项目时出错:', backendError);
        }
        // --- 后端上传结束 ---

        console.log(chalk.green('所有文件上传完成！'));

        // 远程构建并启动docker
        // 在执行长时命令前，停止加载动画，以清晰地展示实时日志
        spinner.stop();
        console.log(chalk.blue('\n▶️  开始执行远程部署命令 (wa-deployAll)...'));

        await ssh.execCommand('bash -ic "wa-deployAll"', {
            onStdout(chunk) {
                process.stdout.write(chunk.toString('utf-8'));
            },
            onStderr(chunk) {
                process.stderr.write(chunk.toString('utf-8'));
            }
        });

        console.log(chalk.blue('\n✅  远程部署命令执行完成。'));

        ssh.dispose();
        // 因为我们手动管理spinner，所以这里直接返回true
        return true;
    } catch (error) {
        console.error('部署出错:', error);
        ssh.dispose();
        // 抛出错误，让外层catch捕获
        throw error;
    }
}

async function main() {
    // 1. 交互式输入服务器信息
    let config = loadConfig();
    let list = [
        {
            type: 'input',
            name: 'USER',
            message: '服务器用户名:',
            default: config.USER || 'root'
        },
        {
            type: 'input',
            name: 'HOST',
            message: '服务器IP:',
            default: config.HOST || '1.2.3.4'
        },
        {
            type: 'input',
            name: 'PORT',
            message: 'SSH端口:',
            default: config.PORT || 22
        },
        {
            type: 'input',
            name: 'SRC_APP_DIR',
            message: '前端源码目录 (本地相对路径):',
            default: config.SRC_APP_DIR || '.'
        },
        {
            type: 'input',
            name: 'TARGET_APP_DIR',
            message: '前端部署目录 (远程绝对路径):',
            default: config.TARGET_APP_DIR || '/root/code/word-app/app'
        },
        {
            type: 'input',
            name: 'SRC_SVR_DIR',
            message: '后端源码目录 (本地相对路径):',
            default: config.SRC_SVR_DIR || '../web/word-svr'
        },
        {
            type: 'input',
            name: 'TARGET_SVR_DIR',
            message: '后端部署目录 (远程绝对路径):',
            default: config.TARGET_SVR_DIR || '/root/code/word-app/svr'
        },
        {
            type: 'input',
            name: 'PRIVATE_KEY_PATH',
            message: '密钥文件路径(.pem):',
            default: config.PRIVATE_KEY_PATH || ''
        },
        {
            type: 'confirm',
            name: 'save',
            message: '是否保存为默认配置?',
            default: true
        }
    ].filter(item => !config[item.name]);
    
    if(list.length > 0){
        const answers = await inquirer.prompt(list);
        saveConfig(answers);
        console.log(chalk.green('已保存为.deployrc.json'));
    }

    // 2. 构建项目
    // try {
    //     await oraPromise(
    //         execa('yarn', ['build'], { stdio: 'inherit' }),
    //         {
    //             text: 'yarn build 构建项目...',
    //             successText: chalk.green('构建完成'),
    //             failText: chalk.red('构建失败')
    //         }
    //     );
    // } catch (error) {
    //     console.error('构建失败:', error);
    //     process.exit(1);
    // }

    // 3. 使用SSH部署到远程服务器
    // --- 修改：手动管理 ora spinner，以支持实时日志输出 ---
    const spinner = ora(`正在部署到 ${config.USER}@${config.HOST} ...`).start();
    try {
        const result = await deployWithSSH(config, spinner);
        if (result) {
            spinner.succeed(chalk.green('部署完成！'));
        } else {
            // 虽然内部已经处理了错误，但以防万一
            spinner.fail(chalk.red('部署失败，请检查上面的日志。'));
        }
    } catch { // 'error' 变量在这里是不需要的
        spinner.fail(chalk.red('部署失败，请检查上面的日志。'));
        // 退出进程，表示失败
        process.exit(1);
    }
}

main();
