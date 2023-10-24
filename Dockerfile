# Dockerfile
FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the local code to the container
COPY app/ ./

# Expose the port the app will run on
EXPOSE 3000

# Command to run the application
CMD [ "node", "app.js" ]