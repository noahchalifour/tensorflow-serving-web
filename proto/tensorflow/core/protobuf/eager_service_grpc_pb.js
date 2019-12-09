// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tensorflow_core_protobuf_eager_service_pb = require('../../../tensorflow/core/protobuf/eager_service_pb.js');
var tensorflow_core_framework_attr_value_pb = require('../../../tensorflow/core/framework/attr_value_pb.js');
var tensorflow_core_framework_device_attributes_pb = require('../../../tensorflow/core/framework/device_attributes_pb.js');
var tensorflow_core_framework_function_pb = require('../../../tensorflow/core/framework/function_pb.js');
var tensorflow_core_framework_tensor_pb = require('../../../tensorflow/core/framework/tensor_pb.js');
var tensorflow_core_framework_tensor_shape_pb = require('../../../tensorflow/core/framework/tensor_shape_pb.js');
var tensorflow_core_framework_versions_pb = require('../../../tensorflow/core/framework/versions_pb.js');
var tensorflow_core_protobuf_remote_tensor_handle_pb = require('../../../tensorflow/core/protobuf/remote_tensor_handle_pb.js');
var tensorflow_core_protobuf_tensorflow_server_pb = require('../../../tensorflow/core/protobuf/tensorflow_server_pb.js');

function serialize_tensorflow_eager_CloseContextRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_eager_service_pb.CloseContextRequest)) {
    throw new Error('Expected argument of type tensorflow.eager.CloseContextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_eager_CloseContextRequest(buffer_arg) {
  return tensorflow_core_protobuf_eager_service_pb.CloseContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_eager_CloseContextResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_eager_service_pb.CloseContextResponse)) {
    throw new Error('Expected argument of type tensorflow.eager.CloseContextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_eager_CloseContextResponse(buffer_arg) {
  return tensorflow_core_protobuf_eager_service_pb.CloseContextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_eager_CreateContextRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_eager_service_pb.CreateContextRequest)) {
    throw new Error('Expected argument of type tensorflow.eager.CreateContextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_eager_CreateContextRequest(buffer_arg) {
  return tensorflow_core_protobuf_eager_service_pb.CreateContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_eager_CreateContextResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_eager_service_pb.CreateContextResponse)) {
    throw new Error('Expected argument of type tensorflow.eager.CreateContextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_eager_CreateContextResponse(buffer_arg) {
  return tensorflow_core_protobuf_eager_service_pb.CreateContextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_eager_EnqueueRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_eager_service_pb.EnqueueRequest)) {
    throw new Error('Expected argument of type tensorflow.eager.EnqueueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_eager_EnqueueRequest(buffer_arg) {
  return tensorflow_core_protobuf_eager_service_pb.EnqueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_eager_EnqueueResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_eager_service_pb.EnqueueResponse)) {
    throw new Error('Expected argument of type tensorflow.eager.EnqueueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_eager_EnqueueResponse(buffer_arg) {
  return tensorflow_core_protobuf_eager_service_pb.EnqueueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_eager_KeepAliveRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_eager_service_pb.KeepAliveRequest)) {
    throw new Error('Expected argument of type tensorflow.eager.KeepAliveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_eager_KeepAliveRequest(buffer_arg) {
  return tensorflow_core_protobuf_eager_service_pb.KeepAliveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_eager_KeepAliveResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_eager_service_pb.KeepAliveResponse)) {
    throw new Error('Expected argument of type tensorflow.eager.KeepAliveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_eager_KeepAliveResponse(buffer_arg) {
  return tensorflow_core_protobuf_eager_service_pb.KeepAliveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_eager_UpdateContextRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_eager_service_pb.UpdateContextRequest)) {
    throw new Error('Expected argument of type tensorflow.eager.UpdateContextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_eager_UpdateContextRequest(buffer_arg) {
  return tensorflow_core_protobuf_eager_service_pb.UpdateContextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_eager_UpdateContextResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_eager_service_pb.UpdateContextResponse)) {
    throw new Error('Expected argument of type tensorflow.eager.UpdateContextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_eager_UpdateContextResponse(buffer_arg) {
  return tensorflow_core_protobuf_eager_service_pb.UpdateContextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_eager_WaitQueueDoneRequest(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_eager_service_pb.WaitQueueDoneRequest)) {
    throw new Error('Expected argument of type tensorflow.eager.WaitQueueDoneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_eager_WaitQueueDoneRequest(buffer_arg) {
  return tensorflow_core_protobuf_eager_service_pb.WaitQueueDoneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_eager_WaitQueueDoneResponse(arg) {
  if (!(arg instanceof tensorflow_core_protobuf_eager_service_pb.WaitQueueDoneResponse)) {
    throw new Error('Expected argument of type tensorflow.eager.WaitQueueDoneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tensorflow_eager_WaitQueueDoneResponse(buffer_arg) {
  return tensorflow_core_protobuf_eager_service_pb.WaitQueueDoneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// //////////////////////////////////////////////////////////////////////////////
//
// Eager Service defines a TensorFlow service that executes operations eagerly
// on a set of local devices, on behalf of a remote Eager executor.
//
// The service impl will keep track of the various clients and devices it has
// access to and allows the client to enqueue ops on any devices that it is able
// to access and schedule data transfers from/to any of the peers.
//
// A client can generate multiple contexts to be able to independently execute
// operations, but cannot share data between the two contexts.
//
// NOTE: Even though contexts generated by clients should be independent, the
// lower level tensorflow execution engine is not, so they might share some data
// (e.g. a Device's ResourceMgr).
//
// //////////////////////////////////////////////////////////////////////////////
var EagerServiceService = exports.EagerServiceService = {
  // This initializes the worker, informing it about the other workers in the
  // cluster and exchanging authentication tokens which will be used in all
  // other RPCs to detect whether the worker has restarted.
  createContext: {
    path: '/tensorflow.eager.EagerService/CreateContext',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_eager_service_pb.CreateContextRequest,
    responseType: tensorflow_core_protobuf_eager_service_pb.CreateContextResponse,
    requestSerialize: serialize_tensorflow_eager_CreateContextRequest,
    requestDeserialize: deserialize_tensorflow_eager_CreateContextRequest,
    responseSerialize: serialize_tensorflow_eager_CreateContextResponse,
    responseDeserialize: deserialize_tensorflow_eager_CreateContextResponse,
  },
  // This updates the eager context on an existing worker when updating the set
  // of servers in a distributed eager cluster.
  updateContext: {
    path: '/tensorflow.eager.EagerService/UpdateContext',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_eager_service_pb.UpdateContextRequest,
    responseType: tensorflow_core_protobuf_eager_service_pb.UpdateContextResponse,
    requestSerialize: serialize_tensorflow_eager_UpdateContextRequest,
    requestDeserialize: deserialize_tensorflow_eager_UpdateContextRequest,
    responseSerialize: serialize_tensorflow_eager_UpdateContextResponse,
    responseDeserialize: deserialize_tensorflow_eager_UpdateContextResponse,
  },
  // This takes a list of Execute and DeleteTensorHandle operations and enqueues
  // (in async mode) or executes (in sync mode) them on the remote server.
  // All outputs of ops which were not explicitly deleted with
  // DeleteTensorHandle entries will be assumed to be alive and are usable by
  // future calls to Enqueue.
  enqueue: {
    path: '/tensorflow.eager.EagerService/Enqueue',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_eager_service_pb.EnqueueRequest,
    responseType: tensorflow_core_protobuf_eager_service_pb.EnqueueResponse,
    requestSerialize: serialize_tensorflow_eager_EnqueueRequest,
    requestDeserialize: deserialize_tensorflow_eager_EnqueueRequest,
    responseSerialize: serialize_tensorflow_eager_EnqueueResponse,
    responseDeserialize: deserialize_tensorflow_eager_EnqueueResponse,
  },
  // A streaming version of Enqueue.
  // Current server implementation sends one response per received request.
  // The benefit for using a streaming version is that subsequent requests
  // can be sent without waiting for a response to the previous request. This
  // synchronization is required in the regular Enqueue call because gRPC does
  // not guarantee to preserve request order.
  streamingEnqueue: {
    path: '/tensorflow.eager.EagerService/StreamingEnqueue',
    requestStream: true,
    responseStream: true,
    requestType: tensorflow_core_protobuf_eager_service_pb.EnqueueRequest,
    responseType: tensorflow_core_protobuf_eager_service_pb.EnqueueResponse,
    requestSerialize: serialize_tensorflow_eager_EnqueueRequest,
    requestDeserialize: deserialize_tensorflow_eager_EnqueueRequest,
    responseSerialize: serialize_tensorflow_eager_EnqueueResponse,
    responseDeserialize: deserialize_tensorflow_eager_EnqueueResponse,
  },
  // Takes a set of op IDs and waits until those ops are done. Returns any error
  // in the stream so far.
  waitQueueDone: {
    path: '/tensorflow.eager.EagerService/WaitQueueDone',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_eager_service_pb.WaitQueueDoneRequest,
    responseType: tensorflow_core_protobuf_eager_service_pb.WaitQueueDoneResponse,
    requestSerialize: serialize_tensorflow_eager_WaitQueueDoneRequest,
    requestDeserialize: deserialize_tensorflow_eager_WaitQueueDoneRequest,
    responseSerialize: serialize_tensorflow_eager_WaitQueueDoneResponse,
    responseDeserialize: deserialize_tensorflow_eager_WaitQueueDoneResponse,
  },
  // Contexts are always created with a deadline and no RPCs within a deadline
  // will trigger a context garbage collection. KeepAlive calls can be used to
  // delay this. It can also be used to validate the existance of a context ID
  // on remote eager worker. If the context is on remote worker, return the same
  // ID and the current context view ID. This is useful for checking if the
  // remote worker (potentially with the same task name and hostname / port) is
  // replaced with a new process.
  keepAlive: {
    path: '/tensorflow.eager.EagerService/KeepAlive',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_eager_service_pb.KeepAliveRequest,
    responseType: tensorflow_core_protobuf_eager_service_pb.KeepAliveResponse,
    requestSerialize: serialize_tensorflow_eager_KeepAliveRequest,
    requestDeserialize: deserialize_tensorflow_eager_KeepAliveRequest,
    responseSerialize: serialize_tensorflow_eager_KeepAliveResponse,
    responseDeserialize: deserialize_tensorflow_eager_KeepAliveResponse,
  },
  // Closes the context. No calls to other methods using the existing context ID
  // are valid after this.
  closeContext: {
    path: '/tensorflow.eager.EagerService/CloseContext',
    requestStream: false,
    responseStream: false,
    requestType: tensorflow_core_protobuf_eager_service_pb.CloseContextRequest,
    responseType: tensorflow_core_protobuf_eager_service_pb.CloseContextResponse,
    requestSerialize: serialize_tensorflow_eager_CloseContextRequest,
    requestDeserialize: deserialize_tensorflow_eager_CloseContextRequest,
    responseSerialize: serialize_tensorflow_eager_CloseContextResponse,
    responseDeserialize: deserialize_tensorflow_eager_CloseContextResponse,
  },
};

exports.EagerServiceClient = grpc.makeGenericClientConstructor(EagerServiceService);
