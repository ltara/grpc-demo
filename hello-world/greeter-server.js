const grpc = require('@grpc/grpc-js')
const helloworld = require('./helloworld.js')

function sayHello(call, callback) {
    callback(null, { message: 'Hello ' + call.request.name })
}

function main() {
    var server = new grpc.Server()
    server.addService(helloworld.Greeter.service, { sayHello: sayHello })
    server.bindAsync('localhost:5050', grpc.ServerCredentials.createInsecure(), () => {
        server.start()
        console.log('grpc server started')        
    })
}

main()