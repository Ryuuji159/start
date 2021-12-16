FROM node:16 as builder

WORKDIR /usr/app/src

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

##################################################################

FROM nginx:latest as deployer
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/src/public /usr/share/nginx/html
