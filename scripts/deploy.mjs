#!/usr/bin/env node
// Node.js一键部署脚本：使用node-ssh模块进行SSH连接和文件传输
// 依赖：execa、inquirer、ora、chalk、node-ssh

/* global console, process */

import inquirer from 'inquirer';
import { oraPromise } from 'ora';
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

async function deployWithSSH(config) {
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
        await ssh.execCommand(`mkdir -p ${config.TARGET_DIR}`);

        console.log(chalk.blue('正在上传文件...'));
        // 上传dist目录
        await ssh.putDirectory('./dist', `${config.TARGET_DIR}/dist`, {
            recursive: true,
            concurrency: 10,
            tick: function(localPath, remotePath, error) {
                if (error) {
                    console.error(`上传失败: ${localPath} -> ${remotePath}`);
                } else {
                    console.log(`上传成功: ${localPath}`);
                }
            }
        });
        // 上传Dockerfile
        await ssh.putFile('./Dockerfile', `${config.TARGET_DIR}/Dockerfile`);

        console.log(chalk.green('文件上传完成！'));

        // 远程构建并启动docker
        console.log(chalk.blue('正在远程构建并启动 Docker 容器...'));
        const { stdout, stderr } = await ssh.execCommand(`
            cd ${config.TARGET_DIR} && \
            docker stop word-app || true && \
            docker rm word-app || true && \
            docker build -t word-app . && \
            docker run -d -p 80:80 --name word-app word-app
        `);
        if (stdout) console.log(stdout);
        if (stderr) console.error(stderr);
        console.log('重启结束');

        ssh.dispose();
        return true;
    } catch (error) {
        console.error('部署出错:', error);
        ssh.dispose();
        return false;
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
            default: config.USER || 'demo'
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
            name: 'TARGET_DIR',
            message: '目标目录:',
            default: config.TARGET_DIR || '/home/demo/wordApp'
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
    try {
        await oraPromise(
            deployWithSSH(config),
            {
                text: `正在部署到${config.USER}@${config.HOST}:${config.TARGET_DIR} ...`,
                successText: chalk.green('部署完成！'),
                failText: chalk.red('部署失败')
            }
        );
    } catch (error) {
        console.error('部署失败:', error);
        process.exit(1);
    }
}

main();
