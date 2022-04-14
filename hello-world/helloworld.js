const PROTO_PATH = __dirname + '/helloworld.proto'
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true, // 保留字段名称，默认是将它们更改为驼峰式大小写
  longs: String, // 用于表示长值的类型，默认为 Long 对象类型
  enums: String, // 用于表示枚举值的类型，默认为数值
  defaults: true, // 在输出对象上设置默认值，默认为false
  oneofs: true // 将 virtual oneof 属性设置为当前字段的名称，默认为false
})

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)

module.exports = protoDescriptor.helloworld