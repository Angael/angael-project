FROM oven/bun:1.3 AS builder

WORKDIR /app

# Install dependencies (needed to build)
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Copy source and build static site
COPY . .

# Build in two explicit steps to avoid any shell chaining issues
RUN bun run build:static

# Serve with nginx in a tiny final image
FROM nginx:alpine

# Remove default site and copy exported static files
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/out/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

