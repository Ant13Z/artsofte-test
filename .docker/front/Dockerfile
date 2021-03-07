FROM node:14.15-alpine3.10

WORKDIR /app

COPY frontend/package.json ./

RUN apk update && yarn global add @angular/cli

CMD cd /app && yarn run start