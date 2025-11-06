FROM oven/bun:1 AS builder

WORKDIR /app

# Install all dependencies (needed for build)
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Copy source code and build
COPY . .
RUN bun run build

# Production stage
FROM oven/bun:1

WORKDIR /app

# Install only production dependencies
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --production

# Copy built application from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Expose the port Next.js runs on
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]
