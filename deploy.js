#!/usr/bin/env node
// Node.js一键部署脚本：构建并同步到远程服务器
// 请根据实际服务器信息修改USER、HOST、TARGET_DIR、PORT

const { execSync } = require('child_process');

const USER = 'demo';
const HOST = '1.2.3.4';
const TARGET_DIR = '/home/demo/wordApp';
const PORT = 22;

function run(cmd, desc) {
  console.log(`\n[部署] ${desc}...`);
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (e) {
    console.error(`[部署] 执行失败: ${cmd}`);
    process.exit(1);
  }
}

// 1. 构建项目
yarnBuild();

// 2. rsync同步到远程服务器
rsyncToServer();

function yarnBuild() {
  run('yarn build', 'yarn build 构建项目');
}

function rsyncToServer() {
  const cmd = `rsync -avz --delete -e "ssh -p ${PORT}" ./ ${USER}@${HOST}:${TARGET_DIR} --exclude node_modules --exclude .git --exclude dist`;
  run(cmd, `rsync同步到${USER}@${HOST}:${TARGET_DIR}`);
  console.log('\n[部署] 完成！请根据实际服务器信息修改deploy.js');
} 