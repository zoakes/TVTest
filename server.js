const express = require('express');
const fs = require('fs');
const chokidar = require('chokidar');
const csvParser = require('csv-parser');
const app = express();
const port = 3000;

let latestData = [];

app.use(express.static('public'));

app.get('/data', (req, res) => {
  res.json(latestData);
});

const watcher = chokidar.watch('data.csv', {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

watcher.on('add', path => readCsv(path)).on('change', path => readCsv(path));

// TODO: make this 'faster'
function readCsv(filePath) {
  const results = [];
  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      latestData = results;
      console.log('CSV update successfully processed');
      console.log('rows processed', results.length);
    });
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
