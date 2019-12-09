FROM node:13

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# COPY scripts .
# RUN chmod +x ./scripts/*
# RUN ./scripts/generate_proto.sh

COPY . .

CMD [ "node", "server.js" ]