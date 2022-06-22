FROM node:lts as dependencies
WORKDIR /yfp-app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:lts as builder
ENV NODE_ENV = production
WORKDIR /yfp-app
COPY . .
COPY --from=dependencies /yfp-app/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /yfp-app

COPY --from=builder /yfp-app/public ./public
COPY --from=builder /yfp-app/package.json ./package.json
COPY --from=builder /yfp-app/.next ./.next
COPY --from=builder /yfp-app/node_modules ./node_modules
COPY --from=builder /yfp-app/next.config.js ./


EXPOSE 80/tcp
ENV PORT 80

CMD ["npm", "start"]
