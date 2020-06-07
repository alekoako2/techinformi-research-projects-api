FROM node:lts-alpine3.9

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 4002

CMD ["yarn", "start"]
