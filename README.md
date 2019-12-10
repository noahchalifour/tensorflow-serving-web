# Tensorflow Serving Web

This is a web management console for Tensorflow Serving built using Node.js, Express, and React. It allows you to view all the models in your Tensorflow Serving server, inspects all your models and add/remove models.

## Features

<ul>
    <li>View all models</li>
    <li>Get model status/metadata</li>
    <li>Add models</li>
    <li>Add model versions</li>
    <li>Delete models</li>
</ul>

## Getting Started

Before you can get started you are going to need to clone the repo.

`git clone https://github.com/noahchalifour/tensorflow-serving-web`

The repo contains all the proto files necessary to run the app, however if you want to regenerate the proto files from scratch you must clone the repo recursely to include the `tensorflow` and `serving` submodules.

`git clone --recurse https://github.com/noahchalifour/tensorflow-serving-web`

Once the app is deployed, it will be accessible from http://localhost:8000

### Deploy using Compose

To quickly get started you can use the `docker-compose` tool to startup all the required containers. To do so, run the following command:

`docker-compose up -d`

### Configure with existing Tensorflow Serving

If you already have an instance of Tensorflow Serving running then you can attach this web management console to your existing instance.

> **_NOTE:_**  If your Tensorflow Serving is hosted in another docker container, you must have a volume mounted in your Tensorflow Serving container that has your config, and another volume mounted that contains your models.

Follow these steps to configure with existing server:

1. Build the image by running the command: `docker build -t tensorflow-serving-web .`
2. Run the image using the following command to connect to your existing Tensorflow Serving server:

```
docker run -d \
    -e TF_SERVING_HOST={{ host }} \
    -e TF_SERVING_REST_PORT={{ rest_port }} \
    -e TF_SERVING_GRPC_PORT={{ grpc }} \
    -e TF_CONFIG_PATH=/tensorflow/config/{{ tf_config_filename }}
    -v {{ path_to_config_dir }}:/tensorflow/config \
    -v {{ path_to_models_base_dir }:/tensorflow/models \
    -p 8000:8000 \
    --name tensorflow-serving-web \
    tensorflow-serving-web
```

## Author

Noah Chalifour, chalifournoah@gmail.com