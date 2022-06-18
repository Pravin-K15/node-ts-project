FROM node:18.1.0-alphine
RUN mkdir -p /home/node/tcsapp/node_modules && chown -R node:node /home/node/tcsapp
WORKDIR /home/node/tcsapp
COPY package*.json ./
RUN npm config set legacy-peer-deps true
RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install
USER node