
// console.log("scripts.js is loaded");



// function addMarkerToChart(data) {
//     lineSeries.update(data);
    
//     if (data.action) {
//         const marker = {
//             time: data.time,
//             position: data.action === 'buy' ? 'belowBar' : 'aboveBar',
//             color: data.action === 'buy' ? 'green' : 'red',
//             shape: data.action === 'buy' ? 'arrowUp' : 'arrowDown',
//         };
//         lineSeries.setMarkers([marker]);
//     }
// }


// function generateRandomData(previousValue) {
//     const change = (Math.random() - 0.5) * 2;
//     const newValue = previousValue + change;
//     const currentDate = new Date();
//     return {
//         time: `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`,
//         value: newValue
//     };
// }


// const chart = lightweightCharts.createChart(document.getElementById('chart'));
// // const lineSeries = chart.addLineSeries();


// let lastValue = 100;  // Starting value, can be any initial value you prefer

// // // Set initial data
// // const initialData = [
// //     { time: '2023-10-21', value: 98.5 },
// //     { time: '2023-10-22', value: 99.5 },
// //     { time: '2023-10-23', value: lastValue }
// // ];
// // lineSeries.setData(initialData);

// // // Real-time data updates (every 5s)
// // setInterval(() => {
// //     const newData = generateRandomData(lastValue);
// //     lineSeries.update(newData);
// //     lastValue = newData.value;
// // }, 5000);









console.log("scripts.js is loaded");

// // Ensure the library is loaded
// if (typeof lightweightCharts !== "undefined") {
//     console.log("lightweight-charts is available");

//     const chart = lightweightCharts.createChart(document.getElementById('chart'), { width: 400, height: 300 });
//     const lineSeries = chart.addLineSeries();
//     lineSeries.setData([
//         { time: '2023-10-21', value: 98.5 },
//         { time: '2023-10-22', value: 99.5 },
//         { time: '2023-10-23', value: 100 }
//     ]);
// } else {
//     console.log("lightweight-charts is NOT available");
// }


const chart = lightweightCharts.createChart(document.getElementById('chart'), { width: 800, height: 600 });
const lineSeries = chart.addLineSeries();
lineSeries.setData([
    { time: '2023-10-21', value: 99 },
    { time: '2023-10-22', value: 100 }
]);
