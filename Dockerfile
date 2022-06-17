FROM node:lts as dependencies
WORKDIR /yfp-app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:lts as builder
WORKDIR /yfp-app
COPY . .
COPY --from=dependencies /yfp-app/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /yfp-app
ENV AIRTABLE_API_KEY=""
ENV AIRTABLE_PASTAS_TABLE_NAME=""
ENV AIRTABLE_TABLE_BASE=""

COPY --from=builder /yfp-app/public ./public
COPY --from=builder /yfp-app/package.json ./package.json
COPY --from=builder /yfp-app/.next ./.next
COPY --from=builder /yfp-app/node_modules ./node_modules

EXPOSE 80/tcp
CMD ["npm", "start"]