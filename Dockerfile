FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# 复制 dist 目录内容到 nginx 静态目录
COPY dist/ .

# 直接在Dockerfile中写入nginx.conf
RUN echo '
worker_processes 1;

events { worker_connections 1024; }

http {
    include       mime.types;
    default_type  application/octet-stream;

    # 开启gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
    gzip_min_length 1k;
    gzip_comp_level 6;

    server {
        listen       80;
        server_name  localhost;

        root   /usr/share/nginx/html;
        index  index.html index.htm;

        location / {
            try_files $uri $uri/ /index.html;
        }

        # 缓存静态资源
        location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 30d;
            add_header Cache-Control "public, no-transform";
            access_log off;
        }
    }
}
' > /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]