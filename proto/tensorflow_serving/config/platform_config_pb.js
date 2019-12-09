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

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
goog.exportSymbol('proto.tensorflow.serving.PlatformConfig', null, global);
goog.exportSymbol('proto.tensorflow.serving.PlatformConfigMap', null, global);

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
proto.tensorflow.serving.PlatformConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.serving.PlatformConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.PlatformConfig.displayName = 'proto.tensorflow.serving.PlatformConfig';
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
proto.tensorflow.serving.PlatformConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.PlatformConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.PlatformConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.PlatformConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceAdapterConfig: (f = msg.getSourceAdapterConfig()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.serving.PlatformConfig}
 */
proto.tensorflow.serving.PlatformConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.PlatformConfig;
  return proto.tensorflow.serving.PlatformConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.PlatformConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.PlatformConfig}
 */
proto.tensorflow.serving.PlatformConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setSourceAdapterConfig(value);
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
proto.tensorflow.serving.PlatformConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.PlatformConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.PlatformConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.PlatformConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceAdapterConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Any source_adapter_config = 1;
 * @return {?proto.google.protobuf.Any}
 */
proto.tensorflow.serving.PlatformConfig.prototype.getSourceAdapterConfig = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 1));
};


/** @param {?proto.google.protobuf.Any|undefined} value */
proto.tensorflow.serving.PlatformConfig.prototype.setSourceAdapterConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tensorflow.serving.PlatformConfig.prototype.clearSourceAdapterConfig = function() {
  this.setSourceAdapterConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.serving.PlatformConfig.prototype.hasSourceAdapterConfig = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.tensorflow.serving.PlatformConfigMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.serving.PlatformConfigMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tensorflow.serving.PlatformConfigMap.displayName = 'proto.tensorflow.serving.PlatformConfigMap';
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
proto.tensorflow.serving.PlatformConfigMap.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.serving.PlatformConfigMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.serving.PlatformConfigMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.PlatformConfigMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    platformConfigsMap: (f = msg.getPlatformConfigsMap()) ? f.toObject(includeInstance, proto.tensorflow.serving.PlatformConfig.toObject) : []
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
 * @return {!proto.tensorflow.serving.PlatformConfigMap}
 */
proto.tensorflow.serving.PlatformConfigMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.serving.PlatformConfigMap;
  return proto.tensorflow.serving.PlatformConfigMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.serving.PlatformConfigMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.serving.PlatformConfigMap}
 */
proto.tensorflow.serving.PlatformConfigMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getPlatformConfigsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.tensorflow.serving.PlatformConfig.deserializeBinaryFromReader, "");
         });
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
proto.tensorflow.serving.PlatformConfigMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.serving.PlatformConfigMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.serving.PlatformConfigMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.serving.PlatformConfigMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlatformConfigsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.tensorflow.serving.PlatformConfig.serializeBinaryToWriter);
  }
};


/**
 * map<string, PlatformConfig> platform_configs = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.tensorflow.serving.PlatformConfig>}
 */
proto.tensorflow.serving.PlatformConfigMap.prototype.getPlatformConfigsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.tensorflow.serving.PlatformConfig>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.tensorflow.serving.PlatformConfig));
};


proto.tensorflow.serving.PlatformConfigMap.prototype.clearPlatformConfigsMap = function() {
  this.getPlatformConfigsMap().clear();
};


goog.object.extend(exports, proto.tensorflow.serving);