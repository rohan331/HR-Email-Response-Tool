# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
