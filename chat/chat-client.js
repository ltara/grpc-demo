const grpc = require("@grpc/grpc-js")
const chat_proto = require("./chat.js")
const readline = require('readline')

const client = new chat_proto.Chater(
  "localhost:5050",
  grpc.credentials.createInsecure()
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function runChat(callback) {
  const call = client.chat()

  rl.on('line', function(question) {
    call.write({ question })
    if (question === "bye") {
      call.end()
      rl.close()
    }
    rl.prompt(true)
  }).on('close',function(){
    process.exit(0)
  })

  call.on("data", function (message) {
    console.log(message.answer)
  })
  call.on("end", callback)

  rl.setPrompt('chat> ')
  rl.prompt(true)
}

function main() {
  runChat(function () {
    console.log('chat finished!!!')
  })
}

main()
