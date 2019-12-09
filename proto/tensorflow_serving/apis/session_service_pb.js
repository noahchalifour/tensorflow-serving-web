/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var tensorflow_serving_apis_model_pb = require('../../tensorflow_serving/apis/model_pb.js');
goog.object.extend(proto, tensorflow_serving_apis_model_pb);
var tensorflow_core_protobuf_config_pb = require('../../tensorflow/core/protobuf/config_pb.js');
goog.object.extend(proto, tensorflow_core_protobuf_config_pb);
var tensorflow_core_protobuf_named_tensor_pb = require('../../tensorflow/core/protobuf/named_tensor_pb.js');
goog.object.extend(proto, tensorflow_core_protobuf_named_tensor_pb);
goog.exportSymbol('proto.tensorflow.serving.SessionRunRequest', null, global);
goog.exportSymbol('proto.tensorflow.serving.SessionRunResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tensorflow.serving.SessionRunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.serving.SessionRunRequest.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.serving.SessionRunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.SessionRunRequest.displayName = 'proto.tensorflow.serving.SessionRunRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.serving.SessionRunRequest.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tensorflow.serving.SessionRunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.SessionRunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.SessionRunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.SessionRunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelSpec: (f = msg.getModelSpec()) && tensorflow_serving_apis_model_pb.ModelSpec.toObject(includeInstance, f),
    feedList: jspb.Message.toObjectList(msg.getFeedList(),
    tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto.toObject, includeInstance),
    fetchList: jspb.Message.getRepeatedField(msg, 3),
    targetList: jspb.Message.getRepeatedField(msg, 4),
    options: (f = msg.getOptions()) && tensorflow_core_protobuf_config_pb.RunOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tensorflow.serving.SessionRunRequest}
 */
proto.tensorflow.serving.SessionRunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.SessionRunRequest;
  return proto.tensorflow.serving.SessionRunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.SessionRunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.SessionRunRequest}
 */
proto.tensorflow.serving.SessionRunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorflow_serving_apis_model_pb.ModelSpec;
      reader.readMessage(value,tensorflow_serving_apis_model_pb.ModelSpec.deserializeBinaryFromReader);
      msg.setModelSpec(value);
      break;
    case 2:
      var value = new tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto;
      reader.readMessage(value,tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto.deserializeBinaryFromReader);
      msg.addFeed(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFetch(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTarget(value);
      break;
    case 5:
      var value = new tensorflow_core_protobuf_config_pb.RunOptions;
      reader.readMessage(value,tensorflow_core_protobuf_config_pb.RunOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tensorflow.serving.SessionRunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.SessionRunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.SessionRunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.SessionRunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tensorflow_serving_apis_model_pb.ModelSpec.serializeBinaryToWriter
    );
  }
  f = message.getFeedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto.serializeBinaryToWriter
    );
  }
  f = message.getFetchList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getTargetList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tensorflow_core_protobuf_config_pb.RunOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional ModelSpec model_spec = 1;
 * @return {?proto.tensorflow.serving.ModelSpec}
 */
proto.tensorflow.serving.SessionRunRequest.prototype.getModelSpec = function() {
  return /** @type{?proto.tensorflow.serving.ModelSpec} */ (
    jspb.Message.getWrapperField(this, tensorflow_serving_apis_model_pb.ModelSpec, 1));
};


/** @param {?proto.tensorflow.serving.ModelSpec|undefined} value */
proto.tensorflow.serving.SessionRunRequest.prototype.setModelSpec = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.serving.SessionRunRequest.prototype.clearModelSpec = function() {
  this.setModelSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.serving.SessionRunRequest.prototype.hasModelSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated tensorflow.NamedTensorProto feed = 2;
 * @return {!Array<!proto.tensorflow.NamedTensorProto>}
 */
proto.tensorflow.serving.SessionRunRequest.prototype.getFeedList = function() {
  return /** @type{!Array<!proto.tensorflow.NamedTensorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto, 2));
};


/** @param {!Array<!proto.tensorflow.NamedTensorProto>} value */
proto.tensorflow.serving.SessionRunRequest.prototype.setFeedList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tensorflow.NamedTensorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.NamedTensorProto}
 */
proto.tensorflow.serving.SessionRunRequest.prototype.addFeed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tensorflow.NamedTensorProto, opt_index);
};


proto.tensorflow.serving.SessionRunRequest.prototype.clearFeedList = function() {
  this.setFeedList([]);
};


/**
 * repeated string fetch = 3;
 * @return {!Array<string>}
 */
proto.tensorflow.serving.SessionRunRequest.prototype.getFetchList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.tensorflow.serving.SessionRunRequest.prototype.setFetchList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.tensorflow.serving.SessionRunRequest.prototype.addFetch = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.tensorflow.serving.SessionRunRequest.prototype.clearFetchList = function() {
  this.setFetchList([]);
};


/**
 * repeated string target = 4;
 * @return {!Array<string>}
 */
proto.tensorflow.serving.SessionRunRequest.prototype.getTargetList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.tensorflow.serving.SessionRunRequest.prototype.setTargetList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.tensorflow.serving.SessionRunRequest.prototype.addTarget = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.tensorflow.serving.SessionRunRequest.prototype.clearTargetList = function() {
  this.setTargetList([]);
};


/**
 * optional tensorflow.RunOptions options = 5;
 * @return {?proto.tensorflow.RunOptions}
 */
proto.tensorflow.serving.SessionRunRequest.prototype.getOptions = function() {
  return /** @type{?proto.tensorflow.RunOptions} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_protobuf_config_pb.RunOptions, 5));
};


/** @param {?proto.tensorflow.RunOptions|undefined} value */
proto.tensorflow.serving.SessionRunRequest.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.tensorflow.serving.SessionRunRequest.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.serving.SessionRunRequest.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tensorflow.serving.SessionRunResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.serving.SessionRunResponse.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.serving.SessionRunResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.SessionRunResponse.displayName = 'proto.tensorflow.serving.SessionRunResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.serving.SessionRunResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tensorflow.serving.SessionRunResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.SessionRunResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.SessionRunResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.SessionRunResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelSpec: (f = msg.getModelSpec()) && tensorflow_serving_apis_model_pb.ModelSpec.toObject(includeInstance, f),
    tensorList: jspb.Message.toObjectList(msg.getTensorList(),
    tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto.toObject, includeInstance),
    metadata: (f = msg.getMetadata()) && tensorflow_core_protobuf_config_pb.RunMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tensorflow.serving.SessionRunResponse}
 */
proto.tensorflow.serving.SessionRunResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.SessionRunResponse;
  return proto.tensorflow.serving.SessionRunResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.SessionRunResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.SessionRunResponse}
 */
proto.tensorflow.serving.SessionRunResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new tensorflow_serving_apis_model_pb.ModelSpec;
      reader.readMessage(value,tensorflow_serving_apis_model_pb.ModelSpec.deserializeBinaryFromReader);
      msg.setModelSpec(value);
      break;
    case 1:
      var value = new tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto;
      reader.readMessage(value,tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto.deserializeBinaryFromReader);
      msg.addTensor(value);
      break;
    case 2:
      var value = new tensorflow_core_protobuf_config_pb.RunMetadata;
      reader.readMessage(value,tensorflow_core_protobuf_config_pb.RunMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tensorflow.serving.SessionRunResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.SessionRunResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.SessionRunResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.SessionRunResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelSpec();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tensorflow_serving_apis_model_pb.ModelSpec.serializeBinaryToWriter
    );
  }
  f = message.getTensorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tensorflow_core_protobuf_config_pb.RunMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional ModelSpec model_spec = 3;
 * @return {?proto.tensorflow.serving.ModelSpec}
 */
proto.tensorflow.serving.SessionRunResponse.prototype.getModelSpec = function() {
  return /** @type{?proto.tensorflow.serving.ModelSpec} */ (
    jspb.Message.getWrapperField(this, tensorflow_serving_apis_model_pb.ModelSpec, 3));
};


/** @param {?proto.tensorflow.serving.ModelSpec|undefined} value */
proto.tensorflow.serving.SessionRunResponse.prototype.setModelSpec = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.tensorflow.serving.SessionRunResponse.prototype.clearModelSpec = function() {
  this.setModelSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.serving.SessionRunResponse.prototype.hasModelSpec = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated tensorflow.NamedTensorProto tensor = 1;
 * @return {!Array<!proto.tensorflow.NamedTensorProto>}
 */
proto.tensorflow.serving.SessionRunResponse.prototype.getTensorList = function() {
  return /** @type{!Array<!proto.tensorflow.NamedTensorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto, 1));
};


/** @param {!Array<!proto.tensorflow.NamedTensorProto>} value */
proto.tensorflow.serving.SessionRunResponse.prototype.setTensorList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.NamedTensorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.NamedTensorProto}
 */
proto.tensorflow.serving.SessionRunResponse.prototype.addTensor = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.NamedTensorProto, opt_index);
};


proto.tensorflow.serving.SessionRunResponse.prototype.clearTensorList = function() {
  this.setTensorList([]);
};


/**
 * optional tensorflow.RunMetadata metadata = 2;
 * @return {?proto.tensorflow.RunMetadata}
 */
proto.tensorflow.serving.SessionRunResponse.prototype.getMetadata = function() {
  return /** @type{?proto.tensorflow.RunMetadata} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_protobuf_config_pb.RunMetadata, 2));
};


/** @param {?proto.tensorflow.RunMetadata|undefined} value */
proto.tensorflow.serving.SessionRunResponse.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.serving.SessionRunResponse.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.serving.SessionRunResponse.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.tensorflow.serving);