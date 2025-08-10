FROM node:21.7.3-bookworm-slim AS deps
WORKDIR /app
RUN npm i -g npm@10.5.0
COPY package*.json ./
RUN npm ci

FROM node:21.7.3-bookworm-slim AS builder
WORKDIR /app
RUN npm i -g npm@10.5.0
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Log versions before build
RUN node -v && npm -v

RUN npm run build

FROM node:21.7.3-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN npm i -g npm@10.5.0
COPY --from=builder /app ./
RUN npm ci --omit=dev
USER node
EXPOSE 3000
CMD ["npm", "run", "start"]
