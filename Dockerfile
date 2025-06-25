FROM busybox:latest

# Create directory for web files
WORKDIR /var/www/html

# Copy all web files
COPY . .

# Expose port 80
EXPOSE 80

# Start busybox httpd
CMD ["httpd", "-f", "-v", "-p", "80", "-h", "/var/www/html"]
