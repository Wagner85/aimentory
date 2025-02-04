# Build stage
FROM node:alpine as build

WORKDIR /app
COPY . .

# Optimize images if needed
RUN if [ -d "images" ]; then \
    apk add --no-cache imagemagick && \
    find images -type f -name "*.png" -exec convert {} -strip -quality 85 {} \; && \
    find images -type f -name "*.jpg" -exec convert {} -strip -quality 85 {} \; \
    ; fi

# Production stage
FROM nginx:alpine

# Install additional tools
RUN apk add --no-cache curl

# Copy optimized files
COPY --from=build /app /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create nginx cache directory
RUN mkdir -p /var/cache/nginx

# Set permissions
RUN chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /usr/share/nginx/html

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
