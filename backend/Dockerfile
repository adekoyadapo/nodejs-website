# Base image build
FROM node:15.9.0-alpine3.13 AS BUILD_IMAGE
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

# Actual Image
FROM node:15.9.0-alpine3.13

WORKDIR /usr/src/app

# copy from build image
COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules

# copy web files
COPY . .

EXPOSE 8000
CMD [ "node", "server.js" ]