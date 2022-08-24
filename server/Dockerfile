FROM node:lts-alpine as build-stage

WORKDIR /server

RUN apk add pnpm
COPY ./server/pnpm-lock.yaml ./server/package.json ./
RUN pnpm install

COPY ./server ./

CMD ["pnpm", "dev"]

EXPOSE 8080