const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send('Paste me in uptimerrobot.com')
})

function keepAlive() {
  server.listen(8080, () => {
    console.log("Loading script...")
  })
}

module.exports = keepAlive 
