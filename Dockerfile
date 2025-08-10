# ===================== build ====================
FROM node:21.7.3-alpine AS builder
WORKDIR /app

# For native modules that expect glibc symbols
RUN apk add --no-cache libc6-compat

# Lock npm to 10.5.0
RUN npm i -g npm@10.5.0

# Install deps
COPY package*.json ./
RUN npm ci

# Build
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ===================== run ======================
FROM node:21.7.3-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Needed at runtime for some native deps
RUN apk add --no-cache libc6-compat

# Lock npm (optional)
RUN npm i -g npm@10.5.0

# Copy built app and deps (keep binaries consistent with Alpine)
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Drop privileges
USER node

EXPOSE 3000
CMD ["npm", "run", "start"]
