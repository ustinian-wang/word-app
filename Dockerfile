FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# 复制 dist 目录内容到 nginx 静态目录
COPY dist/ .

# 可选：自定义 nginx 配置（如有 history 路由需求）
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]