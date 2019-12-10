FROM node:13

WORKDIR /usr/src/app/react-app

COPY react-app/package*.json ./
RUN npm install

COPY react-app .
RUN npm run build
RUN ls

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# COPY scripts .
# RUN chmod +x ./scripts/*
# RUN ./scripts/generate_proto.sh

COPY . .

CMD [ "node", "server.js" ]