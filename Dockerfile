FROM node:16 as builder

WORKDIR /build
COPY . /app
#COPY ./VERSION .
WORKDIR /app
RUN npm install
RUN npm run build



FROM nginx:1.19.0-alpine
# 将构建的React应用复制到Nginx的html目录
COPY --from=builder /app/build /usr/share/nginx/html
# 暴露端口80
EXPOSE 80
# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]