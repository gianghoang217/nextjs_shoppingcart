
# Use the official Node.js image as the base image
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lightweight web server for serving the built application
FROM node:18-alpine AS production


# Set the working directory
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=base /app ./

# Install only production dependencies
RUN npm install --production

# Expose the port the application runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
