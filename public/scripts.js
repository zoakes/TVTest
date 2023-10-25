import ChartInstance from './modules/ChartInstance.js'

const chartProps = {
    width: 1500,
    height: 200,
    timeScale: {
        timeVisible: true,
        secondsVisible: false,
    }
};


// Example mapping of algo_id to HTML IDs
const algo_id_to_chart_id = {
    'algo1': 'chart1',
    'algo2': 'chart2',
    'algo3': 'chart3',
    'algo4': 'chart4',
    'algo5': 'chart5',
    'algo6': 'chart6',
};

// Add as many as you need (Must be in HTML) -- no conditional rendering.
// const chartIds = ['chart1', 'chart2', 'chart3', 'chart4','chart5','chart6']; 
const chartIds = Object.values(algo_id_to_chart_id);
const charts = {};

// Here, key is algo_id and value is the chart ID.
Object.entries(algo_id_to_chart_id).forEach(([algoId, chartId]) => {
    charts[algoId] = new ChartInstance(chartId, algoId, chartProps);
    // Additional configuration as needed
});

// Polling for new data -- this will replace other piece inside ChartInstance that polls.
function fetchAndUpdateCharts() {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            // Assuming data is an array of new data points
            data.forEach(row => {
                // Assuming point.algo_id maps to the id of the chart
                if (charts[row.algo_id]) {
                    // Update the chart with the new data
                    charts[row.algo_id].updateWithData(row);
                    
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Start polling
setInterval(fetchAndUpdateCharts, 1000);

// ensure it ran fully w console log
log("fuck yourself javascript.");

// requires incognito window!