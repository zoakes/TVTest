const log = console.log;

const chartProperties = {
  width:1500,
  height:400,
  timeScale:{
    timeVisible:true,
    secondsVisible:false,
  }
}

// example chart creation -- candle.
// const domElement = document.getElementById('tvchart');
// const chart = LightweightCharts.createChart(domElement,chartProperties);
// const candleSeries = chart.addCandlestickSeries();

// example candlestick data. 
// const data = [
//     { time: '2018-10-19', open: 180.34, high: 180.99, low: 178.57, close: 179.85 },
//     { time: '2018-10-22', open: 180.82, high: 181.40, low: 177.56, close: 178.75 },
//     { time: '2018-10-23', open: 175.77, high: 179.49, low: 175.44, close: 178.53 },
//     { time: '2018-10-24', open: 178.58, high: 182.37, low: 176.31, close: 176.97 },
//     { time: '2018-10-25', open: 177.52, high: 180.50, low: 176.83, close: 179.07 },
//     { time: '2018-10-26', open: 176.88, high: 177.34, low: 170.91, close: 172.23 },
//     { time: '2018-10-29', open: 173.74, high: 175.99, low: 170.95, close: 173.20 },
//     { time: '2018-10-30', open: 173.16, high: 176.43, low: 172.64, close: 176.24 },
//     { time: '2018-10-31', open: 177.98, high: 178.85, low: 175.59, close: 175.88 },
//     { time: '2018-11-01', open: 176.84, high: 180.86, low: 175.90, close: 180.46 },
//     { time: '2018-11-02', open: 182.47, high: 183.01, low: 177.39, close: 179.93 },
//     { time: '2018-11-05', open: 181.02, high: 182.41, low: 179.30, close: 182.19 },
//     { time: '2018-11-06', open: 181.93, high: 182.65, low: 180.05, close: 182.01 },
//     { time: '2018-11-07', open: 183.79, high: 187.68, low: 182.06, close: 187.23 },
//     { time: '2018-11-08', open: 187.13, high: 188.69, low: 185.72, close: 188.00 },
//     { time: '2018-11-09', open: 188.32, high: 188.48, low: 184.96, close: 185.99 },
//     { time: '2018-11-12', open: 185.23, high: 186.95, low: 179.02, close: 179.43 },
//     { time: '2018-11-13', open: 177.30, high: 181.62, low: 172.85, close: 179.00 },
//     { time: '2018-11-14', open: 182.61, high: 182.90, low: 179.15, close: 179.90 },
//     { time: '2018-11-15', open: 179.01, high: 179.67, low: 173.61, close: 177.36 },
//     { time: '2018-11-16', open: 173.99, high: 177.60, low: 173.51, close: 177.02 },
//     { time: '2018-11-19', open: 176.71, high: 178.88, low: 172.30, close: 173.59 }]

// candleSeries.setData(data);