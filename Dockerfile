FROM node:24-alpine AS builder

WORKDIR /app

# Install dependencies (needed to build)
COPY package.json ./
RUN npm install --frozen-lockfile

# Copy source and build static site
COPY . .

# Build in two explicit steps to avoid any shell chaining issues
RUN npm run build
RUN npm run build:static

# Serve with nginx in a tiny final image
FROM nginx:alpine

# Remove default site and copy exported static files
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/out/* /usr/share/nginx/html/

# Copy nginx configuration for SPA routing
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /$uri.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

