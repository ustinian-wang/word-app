#!/usr/bin/env node
// Node.js一键部署脚本（第三方模块版）：交互式输入服务器信息，构建并同步到远程服务器
// 依赖：execa、inquirer、ora、chalk

const execa = require('execa');
const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

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
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2), 'utf-8');
}

async function main() {
    // 1. 交互式输入服务器信息
    let config = loadConfig();
    const answers = await inquirer.prompt([
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
            type: 'confirm',
            name: 'save',
            message: '是否保存为默认配置?',
            default: true
        }
    ]);
    if (answers.save) {
        saveConfig(answers);
        console.log(chalk.green('已保存为.deployrc.json'));
    }

    // 2. 构建项目
    const spinner = ora('yarn build 构建项目...').start();
    try {
        await execa('yarn', ['build'], { stdio: 'inherit' });
        spinner.succeed(chalk.green('构建完成'));
    } catch (e) {
        spinner.fail(chalk.red('构建失败'));
        process.exit(1);
    }

    // 3. rsync同步到远程服务器
    const rsyncCmd = [
        '-avz',
        '--delete',
        '-e',
        `ssh -p ${answers.PORT}`,
        './',
        `${answers.USER}@${answers.HOST}:${answers.TARGET_DIR}`,
        '--exclude',
        'node_modules',
        '--exclude',
        '.git',
        '--exclude',
        'dist'
    ];
    const spinner2 = ora(
        `rsync同步到${answers.USER}@${answers.HOST}:${answers.TARGET_DIR} ...`
    ).start();
    try {
        await execa('rsync', rsyncCmd, { stdio: 'inherit' });
        spinner2.succeed(chalk.green('部署完成！'));
    } catch (e) {
        spinner2.fail(chalk.red('rsync同步失败'));
        process.exit(1);
    }
}

main();
