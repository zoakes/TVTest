document.addEventListener("DOMContentLoaded", function() {
    const chart = LightweightCharts.createChart(document.getElementById('chart-container'), {
        width: document.documentElement.clientWidth * 0.8,
        height: 300
    });

    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
        { time: '2019-04-11', value: 80.01 },
        { time: '2019-04-12', value: 96.63 },
        // ... add more data points as needed
    ]);
});
