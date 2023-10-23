// ---------- Modular Build 
import ChartInstance from './modules/ChartInstance.js'

const chartProps = {
    width: 1500,
    height: 200,
    timeScale: {
        timeVisible: true,
        secondsVisible: false,
    }
};



const chartIds = ['chart1', 'chart2', 'chart3', 'chart4','chart5','chart6']; // Add as many as you need (MUsT be in HTML)
const charts = [];

chartIds.forEach(id => {
    const chartInstance = new ChartInstance(id, "123", chartProps);
    charts.push(chartInstance);

});



// chart.timeScale().fitContent(); // this is supposed to auto-scale, not working right?
log("fuck you javascript.");
// WORKS with live_server extension
// AND incognito window!