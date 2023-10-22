// chartProperties, and chart are defined in index.js! DOTN redefine.
const lineSeries = chart.addBaselineSeries();

// Function to generate a random data point
function generateDataPoint(previousValue) {
    const randomChange = Math.random() * 2 - 1; // Random value between -1 and 1
    return previousValue + randomChange;
}

// Function to generate a random marker
function generateMarker(time) {
    const randomValue = Math.random();
    if (randomValue > 0.95) { // 5% chance to generate a marker
        return {
            time: time,
            position: 'belowBar',
            color: 'green',
            shape: 'arrowUp',
        };
    }
    else if (randomValue < .05){
        return {
            time: time,
            position: 'aboveBar',
            color: 'red',
            shape: 'arrowDown',
        };
    }
    return null;
}

// Initial value for the data point
const startTime = Math.floor(Date.now() / 1000);
let lastValue = 50;
let lastTime = Math.floor(Date.now() / 1000);
const allMarkers = [];

// Update the chart with random data and markers every 5 seconds
setInterval(() => {
    lastTime = lastTime + 5; // Increment time by 5 seconds
    lastValue = generateDataPoint(lastValue);
    lineSeries.update({
        time: lastTime,
        value: lastValue,
    });

    const marker = generateMarker(lastTime);
    if (marker) {
        allMarkers.push(marker);
        lineSeries.setMarkers(allMarkers); // Set all markers, including the new one
    }

    // Adjust the visible range of the time scale:
    const range = chart.timeScale().getVisibleRange();
    if (range) {
        const newRange = {
            from: lastTime - 500,
            to: range.to + 5
        };
        chart.timeScale().setVisibleRange(newRange);
    }
}, 500);


// chart.timeScale().fitContent(); // this is supposed to auto-scale, not working right?
log("fuck you javascript.");
// WORKS with live_server extension
// AND incognito window!