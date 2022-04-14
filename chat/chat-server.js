const grpc = require("@grpc/grpc-js")
const chat_proto = require("./chat.js")
const fs = require('fs')
const YAML = require('yaml')

let messages = []

const files = fs.readdirSync(__dirname + '\\data')
files.forEach((item) => {
  const file = fs.readFileSync(__dirname + '\\data\\' + item, 'utf8')
  const message = YAML.parse(file).conversations.map(ele => {
    return {
      question: ele[0],
      answer: ele[1]
    }
  })
  messages.push(message)
})
messages = messages.flat()

function answerMessage(question) {
  const allAnswer = []
  let answer = ''
  messages.forEach(item => {
    if (item.question == question) {
      allAnswer.push(item.answer)
    }
  })
  if (allAnswer.length === 1) {
    return answer = allAnswer[0]
  }
  if (allAnswer.length > 1) {
    return answer = allAnswer[Math.floor(Math.random() * (allAnswer.length - 0))]
  }
  return answer = '我不知道'
}

function chat(call) {
  call.on("data", function (data) {
    const question = data.question // 接收客户端传来的值
    call.write({ answer: answerMessage(question) })
  });
  call.on("end", function () {
    call.end()
  })
}

function main() {
  var server = new grpc.Server()
  server.addService(chat_proto.Chater.service, { chat: chat });
  server.bindAsync(
    "localhost:5050",
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
      console.log("grpc server started")
    }
  )
}

main()
