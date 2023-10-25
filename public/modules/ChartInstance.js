// this really will require a url, to fetc
export default class ChartInstance {
    constructor(containerId, algo_id, props, initialData) {
        this.chart = LightweightCharts.createChart(document.getElementById(containerId), props);
        this.series = this.chart.addBaselineSeries();

        this.chart.applyOptions(darkTheme.chart);
        this.series.applyOptions(darkTheme.series);
        this.algo_id = algo_id;
        if (initialData) this.series.setData(initialData);
        this.lastValue = 50;
        this.lastTime = Math.floor(Date.now() / 1000);
        this.allMarkers = [];
        this.startUpdates();
    }

    // This is all mocked code -- temporary.

    generateDataPoint(previousValue) {
        const randomChange = Math.random() * 2 - 1;
        return previousValue + randomChange;
    }

    // this is where we could plot 'fills', real 'events' to mark within the series.

    generateMarker(time) {
        const randomValue = Math.random();
        if (randomValue > 0.95) {
            return {
                time: time,
                position: 'belowBar',
                color: 'green',
                shape: 'arrowUp',
            };
        } else if (randomValue < .05) {
            return {
                time: time,
                position: 'aboveBar',
                color: 'red',
                shape: 'arrowDown',
            };
        }
        return null;
    }

    // this is where we poll for updates. 

    startUpdates() {
        setInterval(() => {
            this.lastTime += 5;
            this.lastValue = this.generateDataPoint(this.lastValue);
            this.series.update({
                time: this.lastTime,
                value: this.lastValue,
            });

            const marker = this.generateMarker(this.lastTime);
            if (marker) {
                this.allMarkers.push(marker);
                this.series.setMarkers(this.allMarkers);
            }

            const range = this.chart.timeScale().getVisibleRange();
            if (range) {
                const newRange = {
                    from: this.lastTime - 500,
                    to: range.to + 5
                };
                this.chart.timeScale().setVisibleRange(newRange);
            }

        }, 500);
    }
}


var darkTheme = {
	chart: {
		layout: {
			background: {
				type: 'solid',
				color: '#2B2B43',
			},
			lineColor: '#2B2B43',
			textColor: '#D9D9D9',
		},
		watermark: {
			color: 'rgba(0, 0, 0, 0)',
		},
		crosshair: {
			color: '#758696',
		},
		grid: {
			vertLines: {
				color: '#2B2B43',
			},
			horzLines: {
				color: '#363C4E',
			},
		},
	},
	series: {
			topColor: 'rgba(32, 226, 47, 0.56)',
			bottomColor: 'rgba(32, 226, 47, 0.04)',
			lineColor: 'rgba(32, 226, 47, 1)',
	},
};