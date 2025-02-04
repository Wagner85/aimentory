FROM node:alpine

# Create app directory
WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy application files
COPY . .

# Expose port
EXPOSE 80

# Start serve
CMD ["serve", "-s", ".", "-l", "80"]
