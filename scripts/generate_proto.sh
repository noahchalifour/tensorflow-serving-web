#!/bin/bash

TENSORFLOW_DIR=tensorflow
SERVING_DIR=serving
OUT_DIR=proto

mkdir -p $OUT_DIR

grpc_tools_node_protoc -I=$SERVING_DIR -I=$TENSORFLOW_DIR \
    serving/tensorflow_serving/config/*.proto \
    serving/tensorflow_serving/apis/*.proto \
    serving/tensorflow_serving/sources/storage_path/*.proto \
    serving/tensorflow_serving/util/*.proto \
    tensorflow/tensorflow/core/lib/core/*.proto \
    tensorflow/tensorflow/core/protobuf/*.proto \
    --js_out=import_style=commonjs,binary:$OUT_DIR \
    --grpc_out=$OUT_DIR \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`