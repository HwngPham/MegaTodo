FROM node:18.16-alpine as builder
WORKDIR /usr/build
ENV HOST 0.0.0.0
ENV PORT 8000
COPY . .
RUN npm i --omit=dev --package-lock=false


FROM node:18.16-alpine as runner
WORKDIR /usr/www
COPY --from=builder /usr/build .
EXPOSE 8000
CMD ["node", "index.js"]
