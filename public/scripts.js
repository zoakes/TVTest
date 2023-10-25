import ChartInstance from './modules/ChartInstance.js'

const chartProps = {
    width: 1500,
    height: 200,
    timeScale: {
        timeVisible: true,
        secondsVisible: false,
    }
};


// TODO: create config of algo_ids somehow?
// Example mapping of algo_id to HTML chart (class) IDs 
const algo_id_to_chart_id = {
    'algo1': 'chart1',
    'algo2': 'chart2',
    'algo3': 'chart3',
    'algo4': 'chart4',
    'algo5': 'chart5',
    'algo6': 'chart6',
};

const chartsContainer = document.getElementById('charts-container');
const charts = {};

// Here, key is algo_id and value is the chart ID.
Object.entries(algo_id_to_chart_id).forEach(([algoId, chartId]) => {

    // Dynamic Div Creation + append to parent container.
    const div = document.createElement('div');
    div.id = chartId;
    chartsContainer.appendChild(div);
    
    charts[algoId] = new ChartInstance(chartId, algoId, chartProps);
    // Additional configuration as needed
});


// ------------------------- WS Logic -------------------------------- 

const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
    console.log('Connected to WebSocket server.');
};

ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    
    if (message.type === 'update') {
        message.data.forEach(row => {
            if (charts[row.algo_id]) {
                charts[row.algo_id].updateWithData(row);
            }
        });
    }
};

ws.onerror = (error) => {
    console.log('WebSocket error:', error);
};

// ensure it ran fully w console log
log("fuck yourself javascript.");