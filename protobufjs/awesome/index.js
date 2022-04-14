const protobuf = require('protobufjs');

protobuf.load("awesome.proto", function(err, root) {
  if (err)
      throw err;

  // 获得 message 类型
  var AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");

  // 有效载荷
  var payload = { awesomeField: "AwesomeString" };

  // 验证有效负载(如可能不完整或无效)
  var errMsg = AwesomeMessage.verify(payload);
  if (errMsg)
      throw Error(errMsg);

  // 创建新 message
  var message = AwesomeMessage.create(payload); // 或使用 .fromObject 如果转换是必要的

  // 将 message 转换为 Uint8Array (浏览器) 或 Buffer (node)
  var buffer = AwesomeMessage.encode(message).finish();
  // 使用 buffer 搞事情...

  // 将 Uint8Array (浏览器) 或 Buffer (node) 解码为 message
  var message = AwesomeMessage.decode(buffer);
  // 使用 message 搞事情...

  // 如果应用程序使用了长度分隔的 buffer，那么也会有 encodeDelimited 的 buffer 和 decodeDelimited 的 buffer。

  // 可以将 message 转换回简单对象
  var object = AwesomeMessage.toObject(message, {
      longs: String,
      enums: String,
      bytes: String,
      // 参见 ConversionOptions
  });
});