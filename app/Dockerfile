FROM node:lts-alpine as build-stage

RUN npm --global install pnpm
WORKDIR /app

COPY ./app/pnpm-lock.yaml ./app/package.json ./
RUN pnpm install

COPY ./app ./

CMD ["pnpm", "dev", "--host"]

EXPOSE 5173