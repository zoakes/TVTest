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

let latestTimestamp = 0; // Assuming timestamp is a numeric value like Unix epoch

function readCsv(filePath) {
  const newRows = []; // Store only new rows

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (data) => {
      const rowTimestamp = parseInt(data.time); // Convert timestamp to a number, if it isn't already
      if (rowTimestamp > latestTimestamp) {
        newRows.push(data); // Add only new rows
        latestTimestamp = rowTimestamp; // Update the latest timestamp
      }
    })
    .on('end', () => {
      if (newRows.length > 0) {
        latestData = newRows; // Update latestData with only new rows
        console.log(`New CSV data processed with ${newRows.length} new row(s)`);
      }
    });
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
