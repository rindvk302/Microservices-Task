# Use Node.js image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose app port (adjust per service)
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
