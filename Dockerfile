FROM nginx:alpine

# Install curl for healthcheck
RUN apk add --no-cache curl

# Copy application files
COPY . /usr/share/nginx/html/

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
