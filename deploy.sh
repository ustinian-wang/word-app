#!/bin/bash
# 部署脚本：构建并同步到远程服务器
# 请根据实际服务器信息修改USER、HOST、TARGET_DIR、PORT

USER=demo
HOST=1.2.3.4
TARGET_DIR=/home/demo/wordApp
PORT=22

# 1. 构建项目

echo "[部署] yarn build..."
yarn build

# 2. 用rsync同步到远程服务器

echo "[部署] rsync同步到$USER@$HOST:$TARGET_DIR ..."
rsync -avz --delete -e "ssh -p $PORT" ./ $USER@$HOST:$TARGET_DIR --exclude node_modules --exclude .git --exclude dist

echo "[部署] 完成！请根据实际服务器信息修改deploy.sh" 