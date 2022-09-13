FROM node:lts-alpine as build-stage

RUN npm --global install pnpm
WORKDIR /server

COPY ./server/pnpm-lock.yaml ./server/package.json ./
RUN pnpm install

COPY ./server ./

CMD ["pnpm", "dev"]

EXPOSE 8080