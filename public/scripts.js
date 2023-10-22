// let properties = {
//     width: 1500,
//     height: 600,
//     timeScale: {
//         timeVisible: true,
//         secondsVisible: false,
//     }
// }

const zc = LightweightCharts.createChart(document.getElementById('zochart'), chartProperties);
const zc_candle = zc.addCandlestickSeries();

// Function to generate random candlestick data:
function generateCandle() {
    const time = Math.floor(Date.now() / 1000);
    const open = Math.random() * (100 - 85) + 85;
    const close = open + Math.random() * 10 - 5;
    const high = Math.max(open, close) + Math.random() * 5;
    const low = Math.min(open, close) - Math.random() * 5;

    return {
        time: time,
        open: open,
        high: high,
        low: low,
        close: close,
    };
}

// Update the chart with random data every 5 seconds:
setInterval(() => {
    const candle = generateCandle();
    candleSeries.update(candle);
    log(`Added candle at time ${candle.time}`);
}, 500);

log("fuck you javascript.");
