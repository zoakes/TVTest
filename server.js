const express = require('express');
const fs = require('fs');
const chokidar = require('chokidar');
const csvParser = require('csv-parser');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const port = 3000;

let latestTimestamp = 0;
let latestData = [];

app.use(express.static('public'));

// WebSocket connection handling
wss.on('connection', (ws) => {
    console.log('Client connected via WebSocket.');
    // ws.send(JSON.stringify({ type: 'initial', data: latestData })); // Optionally send initial data
});

function broadcastNewData(newRows) {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'update', data: newRows }));
        }
    });
}

const watcher = chokidar.watch('data.csv', {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

watcher.on('add', path => readCsv(path)).on('change', path => readCsv(path));

function readCsv(filePath) {
    const newRows = [];

    fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => {
            const rowTimestamp = parseInt(data.time);
            if (rowTimestamp > latestTimestamp) {
                newRows.push(data);
                latestTimestamp = rowTimestamp;
            }
        })
        .on('end', () => {
            if (newRows.length > 0) {
                latestData = newRows; // Retain only the new rows
                broadcastNewData(newRows); // Broadcast new rows
                console.log(`New CSV data processed with ${newRows.length} new row(s)`);
            }
        });
}

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
