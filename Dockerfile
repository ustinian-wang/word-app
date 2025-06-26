FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# 复制 dist 目录内容到 nginx 静态目录
COPY dist/ .

# 复制自定义nginx配置
COPY etc/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]