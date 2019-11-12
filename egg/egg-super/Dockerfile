FROM node:10.17.0

COPY . /egg-super

WORKDIR /egg-super

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org \
		&& cnpm install pm2 -g

EXPOSE 7001:7001
