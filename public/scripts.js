// chartProperties, and chart are defined in index.js! DOTN redefine.
const lineSeries = chart.addBaselineSeries();


// ZO Chart (other chart below)
const narrow_props = {
    width:1500,
    height:200,
    timeScale:{
      timeVisible:true,
      secondsVisible:false,
    }
  }

const z_chart = LightweightCharts.createChart(document.getElementById('zochart'),narrow_props);
const z_candle = z_chart.addCandlestickSeries();
z_candle.setData(data);

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
let lastValue = 50;
let lastTime = Math.floor(Date.now() / 1000);
const allMarkers = [];

// Update the chart with random data and markers every 5 seconds
// TODO: make regular queries here, and populate the charts w real data (from bq, or local, etc)
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
        lineSeries.setMarkers(allMarkers);
    }

    // Adjust the visible range of the time scale:
    const range = chart.timeScale().getVisibleRange();
    if (range) {
        const newRange = {
            from: lastTime - 500, // think this is in obs, not seconds or time anything.
            to: range.to + 5
        };
        chart.timeScale().setVisibleRange(newRange);
    }

}, 500);


// chart.timeScale().fitContent(); // this is supposed to auto-scale, not working right?
log("fuck you javascript.");
// WORKS with live_server extension
// AND incognito window!