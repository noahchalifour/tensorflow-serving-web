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

var tensorflow_serving_config_log_collector_config_pb = require('../../tensorflow_serving/config/log_collector_config_pb.js');
goog.object.extend(proto, tensorflow_serving_config_log_collector_config_pb);
goog.exportSymbol('proto.tensorflow.serving.LoggingConfig', null, global);
goog.exportSymbol('proto.tensorflow.serving.SamplingConfig', null, global);

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
proto.tensorflow.serving.SamplingConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.serving.SamplingConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.SamplingConfig.displayName = 'proto.tensorflow.serving.SamplingConfig';
}


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
proto.tensorflow.serving.SamplingConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.SamplingConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.SamplingConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.SamplingConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    samplingRate: +jspb.Message.getFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.tensorflow.serving.SamplingConfig}
 */
proto.tensorflow.serving.SamplingConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.SamplingConfig;
  return proto.tensorflow.serving.SamplingConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.SamplingConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.SamplingConfig}
 */
proto.tensorflow.serving.SamplingConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSamplingRate(value);
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
proto.tensorflow.serving.SamplingConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.SamplingConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.SamplingConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.SamplingConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSamplingRate();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double sampling_rate = 1;
 * @return {number}
 */
proto.tensorflow.serving.SamplingConfig.prototype.getSamplingRate = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.tensorflow.serving.SamplingConfig.prototype.setSamplingRate = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
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
proto.tensorflow.serving.LoggingConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.serving.LoggingConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.LoggingConfig.displayName = 'proto.tensorflow.serving.LoggingConfig';
}


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
proto.tensorflow.serving.LoggingConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.LoggingConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.LoggingConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.LoggingConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    logCollectorConfig: (f = msg.getLogCollectorConfig()) && tensorflow_serving_config_log_collector_config_pb.LogCollectorConfig.toObject(includeInstance, f),
    samplingConfig: (f = msg.getSamplingConfig()) && proto.tensorflow.serving.SamplingConfig.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.serving.LoggingConfig}
 */
proto.tensorflow.serving.LoggingConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.LoggingConfig;
  return proto.tensorflow.serving.LoggingConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.LoggingConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.LoggingConfig}
 */
proto.tensorflow.serving.LoggingConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorflow_serving_config_log_collector_config_pb.LogCollectorConfig;
      reader.readMessage(value,tensorflow_serving_config_log_collector_config_pb.LogCollectorConfig.deserializeBinaryFromReader);
      msg.setLogCollectorConfig(value);
      break;
    case 2:
      var value = new proto.tensorflow.serving.SamplingConfig;
      reader.readMessage(value,proto.tensorflow.serving.SamplingConfig.deserializeBinaryFromReader);
      msg.setSamplingConfig(value);
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
proto.tensorflow.serving.LoggingConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.LoggingConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.LoggingConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.LoggingConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogCollectorConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tensorflow_serving_config_log_collector_config_pb.LogCollectorConfig.serializeBinaryToWriter
    );
  }
  f = message.getSamplingConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tensorflow.serving.SamplingConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional LogCollectorConfig log_collector_config = 1;
 * @return {?proto.tensorflow.serving.LogCollectorConfig}
 */
proto.tensorflow.serving.LoggingConfig.prototype.getLogCollectorConfig = function() {
  return /** @type{?proto.tensorflow.serving.LogCollectorConfig} */ (
    jspb.Message.getWrapperField(this, tensorflow_serving_config_log_collector_config_pb.LogCollectorConfig, 1));
};


/** @param {?proto.tensorflow.serving.LogCollectorConfig|undefined} value */
proto.tensorflow.serving.LoggingConfig.prototype.setLogCollectorConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.serving.LoggingConfig.prototype.clearLogCollectorConfig = function() {
  this.setLogCollectorConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.serving.LoggingConfig.prototype.hasLogCollectorConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SamplingConfig sampling_config = 2;
 * @return {?proto.tensorflow.serving.SamplingConfig}
 */
proto.tensorflow.serving.LoggingConfig.prototype.getSamplingConfig = function() {
  return /** @type{?proto.tensorflow.serving.SamplingConfig} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.serving.SamplingConfig, 2));
};


/** @param {?proto.tensorflow.serving.SamplingConfig|undefined} value */
proto.tensorflow.serving.LoggingConfig.prototype.setSamplingConfig = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tensorflow.serving.LoggingConfig.prototype.clearSamplingConfig = function() {
  this.setSamplingConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.serving.LoggingConfig.prototype.hasSamplingConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.tensorflow.serving);
