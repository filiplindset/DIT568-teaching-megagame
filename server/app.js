const express = require('express')
const app = express()
const cors = require('cors')

const corsOptions = {
  origin: 'http://127.0.0.1:5173'
}

ip = "127.0.0.1";
const port = 8080;

app.use(cors(corsOptions));

app.get('/getPlayerResources', (req, res) => {
  console.log("Request received")
  res.sendFile(__dirname + '/assets/resources.json');
});

app.listen(port,ip, () => {
  console.log('Example app listening on port ${port}')
  });

