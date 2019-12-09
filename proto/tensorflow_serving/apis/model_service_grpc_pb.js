// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tensorflow_serving_apis_get_model_status_pb = require('../../tensorflow_serving/apis/get_model_status_pb.js');
var tensorflow_serving_apis_model_management_pb = require('../../tensorflow_serving/apis/model_management_pb.js');

function serialize_tensorflow_serving_GetModelStatusRequest(arg) {
  if (!(arg instanceof tensorflow_serving_apis_get_model_status_pb.GetModelStatusRequest)) {
    throw new Error('Expected argument of type tensorflow.serving.GetModelStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_serving_GetModelStatusRequest(buffer_arg) {
  return tensorflow_serving_apis_get_model_status_pb.GetModelStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_serving_GetModelStatusResponse(arg) {
  if (!(arg instanceof tensorflow_serving_apis_get_model_status_pb.GetModelStatusResponse)) {
    throw new Error('Expected argument of type tensorflow.serving.GetModelStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_serving_GetModelStatusResponse(buffer_arg) {
  return tensorflow_serving_apis_get_model_status_pb.GetModelStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_serving_ReloadConfigRequest(arg) {
  if (!(arg instanceof tensorflow_serving_apis_model_management_pb.ReloadConfigRequest)) {
    throw new Error('Expected argument of type tensorflow.serving.ReloadConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_serving_ReloadConfigRequest(buffer_arg) {
  return tensorflow_serving_apis_model_management_pb.ReloadConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_serving_ReloadConfigResponse(arg) {
  if (!(arg instanceof tensorflow_serving_apis_model_management_pb.ReloadConfigResponse)) {
    throw new Error('Expected argument of type tensorflow.serving.ReloadConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_serving_ReloadConfigResponse(buffer_arg) {
  return tensorflow_serving_apis_model_management_pb.ReloadConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ModelService provides methods to query and update the state of the server,
// e.g. which models/versions are being served.
var ModelServiceService = exports.ModelServiceService = {
  // Gets status of model. If the ModelSpec in the request does not specify
  // version, information about all versions of the model will be returned. If
  // the ModelSpec in the request does specify a version, the status of only
  // that version will be returned.
  getModelStatus: {
    path: '/tensorflow.serving.ModelService/GetModelStatus',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_serving_apis_get_model_status_pb.GetModelStatusRequest,
    responseType: tensorflow_serving_apis_get_model_status_pb.GetModelStatusResponse,
    requestSerialize: serialize_tensorflow_serving_GetModelStatusRequest,
    requestDeserialize: deserialize_tensorflow_serving_GetModelStatusRequest,
    responseSerialize: serialize_tensorflow_serving_GetModelStatusResponse,
    responseDeserialize: deserialize_tensorflow_serving_GetModelStatusResponse,
  },
  // Reloads the set of served models. The new config supersedes the old one,
  // so if a model is omitted from the new config it will be unloaded and no
  // longer served.
  handleReloadConfigRequest: {
    path: '/tensorflow.serving.ModelService/HandleReloadConfigRequest',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_serving_apis_model_management_pb.ReloadConfigRequest,
    responseType: tensorflow_serving_apis_model_management_pb.ReloadConfigResponse,
    requestSerialize: serialize_tensorflow_serving_ReloadConfigRequest,
    requestDeserialize: deserialize_tensorflow_serving_ReloadConfigRequest,
    responseSerialize: serialize_tensorflow_serving_ReloadConfigResponse,
    responseDeserialize: deserialize_tensorflow_serving_ReloadConfigResponse,
  },
};

exports.ModelServiceClient = grpc.makeGenericClientConstructor(ModelServiceService);
