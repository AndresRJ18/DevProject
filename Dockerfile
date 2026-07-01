FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy all the remaining files (frontend static files and server.js)
COPY . .

# Expose the port (EasyPanel injects PORT environment variable usually, but 3000 is our default fallback)
EXPOSE 3000

# Start the Node.js server
CMD ["node", "server.js"]
