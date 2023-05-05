const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs');
const bodyParser = require('body-parser')


const corsOptions = {
  origin: ['http://127.0.0.1:5173', 'http://localhost:5173']
}

ip = "127.0.0.1";
const port = 8080;

const resourcesJSON = __dirname + '/assets/resources.json'

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/getPlayerResources', (req, res) => {
  console.log("Request received")
  res.sendFile(resourcesJSON);
});

app.put('/putPlayerResources', (req, res) => {
  const resources = req.body;
  console.log(resources)
  const resourceId = resources.id;
  //console.log(resourceId)


  fs.readFile(resourcesJSON, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading resources file');
      return;
    }

    let resourceList = JSON.parse(data);
    let resourceIndex = resourceList.findIndex(resource => resource.id === resourceId);

    if (resourceIndex === -1) {
      res.status(404).send(`Resource with ID ${resourceId} not found`);
      return;
    }

    resourceList[resourceIndex] = resources;

    fs.writeFile(resourcesJSON, JSON.stringify(resourceList), err => {
      if (err) {
        console.error(err);
        res.status(500).send('Error writing resources file');
        return;
      }

      res.send('Resources updated successfully');
    });
  });
});


/*
Input: A full JSON-file of all factions and their resources
Does: Replaces current resources.json with input
*/
app.put('/putAllResources', (req, res) => {
  const resources = req.body;
  fs.writeFile(resourcesJSON, JSON.stringify(resources), err => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing resources file');
      return;
    }

    res.send('Resources updated successfully');
  });
});

app.listen(port,ip, () => {
  console.log('Example app listening on port ${port}');
  });

