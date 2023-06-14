FROM node:18.16-alpine

WORKDIR /usr/www
COPY . .

RUN npm i -g pnpm 
RUN pnpm i
RUN pnpm build

EXPOSE 8000
CMD pnpm start
