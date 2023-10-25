import ChartInstance from './modules/ChartInstance.js'

const chartProps = {
    width: 1500,
    height: 200,
    timeScale: {
        timeVisible: true,
        secondsVisible: false,
    }
};

// Add as many as you need (Must be in HTML) -- no conditional rendering.
const chartIds = ['chart1', 'chart2', 'chart3', 'chart4','chart5','chart6']; 
const charts = [];

chartIds.forEach(id => {
    const chartInstance = new ChartInstance(id, "123", chartProps);
    charts.push(chartInstance);
    // chartInstance.chart.timeScale().fitContent(); 
    // this is supposed to auto-scale, not working right.

});

// ensure it ran fully w console log
log("fuck you javascript.");


// WORKS with live_server extension
// AND incognito window!