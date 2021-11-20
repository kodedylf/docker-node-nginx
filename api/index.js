const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let response = {
    text: 'Hello, world!'
  };
  res.send(JSON.stringify(response))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
