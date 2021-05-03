# Build image
FROM node:15.14.0-alpine3.10 as build

# /app as default workdir
WORKDIR /app

# Copy all project to /app folder (.dockerignore will ignore node_modules and other things)
COPY . .

# Install dependencies
RUN npm install

# Build the project
RUN npm run build

# Mainly Image
FROM node:15.14.0-alpine3.10

# /app as default workdir
WORKDIR /app

# Copy the distribution code the and dependencies files.
COPY --from=build /app/dist/ .
COPY package*.json .

# Install only the production dependencies
RUN npm install --only=prod

# Install dockerize to wait the db service to be up and running
RUN apk update && apk add wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Expose port 3000
EXPOSE 3000

# Execute the application (Will be ignored by docker-compose)
CMD ["node", "main.js"]