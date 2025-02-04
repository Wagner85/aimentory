FROM nginx:stable-slim

# Copy application files
COPY . /usr/share/nginx/html/

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Set environment variable to disable aio
ENV NGINX_ENTRYPOINT_QUIET_LOGS=1
ENV NGINX_WORKER_PROCESSES=1

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
