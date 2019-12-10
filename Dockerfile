FROM node:13

ENV TF_SERVING_HOST tf-serving
ENV TF_SERVING_REST_PORT 8501
ENV TF_SERVING_GRPC_PORT 8500
ENV TF_CONFIG_PATH /tensorflow/config/config.conf
ENV TF_MODELS_PATH /tensorflow/models

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