// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tensorflow_serving_apis_session_service_pb = require('../../tensorflow_serving/apis/session_service_pb.js');
var tensorflow_serving_apis_model_pb = require('../../tensorflow_serving/apis/model_pb.js');
var tensorflow_core_protobuf_config_pb = require('../../tensorflow/core/protobuf/config_pb.js');
var tensorflow_core_protobuf_named_tensor_pb = require('../../tensorflow/core/protobuf/named_tensor_pb.js');

function serialize_tensorflow_serving_SessionRunRequest(arg) {
  if (!(arg instanceof tensorflow_serving_apis_session_service_pb.SessionRunRequest)) {
    throw new Error('Expected argument of type tensorflow.serving.SessionRunRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_serving_SessionRunRequest(buffer_arg) {
  return tensorflow_serving_apis_session_service_pb.SessionRunRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_serving_SessionRunResponse(arg) {
  if (!(arg instanceof tensorflow_serving_apis_session_service_pb.SessionRunResponse)) {
    throw new Error('Expected argument of type tensorflow.serving.SessionRunResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_serving_SessionRunResponse(buffer_arg) {
  return tensorflow_serving_apis_session_service_pb.SessionRunResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// SessionService defines a service with which a client can interact to execute
// Tensorflow model inference. The SessionService::SessionRun method is similar
// to MasterService::RunStep of Tensorflow, except that all sessions are ready
// to run, and you request a specific model/session with ModelSpec.
var SessionServiceService = exports.SessionServiceService = {
  // Runs inference of a given model.
  sessionRun: {
    path: '/tensorflow.serving.SessionService/SessionRun',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_serving_apis_session_service_pb.SessionRunRequest,
    responseType: tensorflow_serving_apis_session_service_pb.SessionRunResponse,
    requestSerialize: serialize_tensorflow_serving_SessionRunRequest,
    requestDeserialize: deserialize_tensorflow_serving_SessionRunRequest,
    responseSerialize: serialize_tensorflow_serving_SessionRunResponse,
    responseDeserialize: deserialize_tensorflow_serving_SessionRunResponse,
  },
};

exports.SessionServiceClient = grpc.makeGenericClientConstructor(SessionServiceService);
