const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/data', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ error: 'Error reading file' });
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      res.status(500).send({ error: 'Error parsing JSON data' });
    }
  });
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
