# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm i -g npm@latest
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]