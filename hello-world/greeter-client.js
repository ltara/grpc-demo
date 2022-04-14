const grpc = require('@grpc/grpc-js')
const helloworld = require('./helloworld.js')

function main() {
    var client = new helloworld.Greeter('localhost:5050', grpc.credentials.createInsecure())
    client.sayHello({ name: 'Jack'}, function(err, response) {
        if (err) {
            console.error('Error: ', err)
        } else {
            console.log(response.message);
        }
    })
}

main()