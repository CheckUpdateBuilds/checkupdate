import React, { useEffect } from 'react';
import { Chart } from 'chart.js';

const ChartComponent = () => {
    useEffect(() => {
        const canvas = document.getElementById('performanceChart');
        const ctx = canvas.getContext('2d');

        // Destroy any existing chart to avoid conflicts
        if (canvas.chart) {
            canvas.chart.destroy();
        }

        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['SEO', 'AI', 'ML', 'Web Dev'],
                datasets: [{
                    label: 'Views',
                    data: [1200, 900, 750, 1050],
                    backgroundColor: '#C43737',
                    borderColor: '#C43737',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        enabled: true
                    }
                }
            }
        });

        // Store the chart instance on the canvas element
        canvas.chart = chart;

        // Cleanup the chart when the component unmounts
        return () => {
            if (canvas.chart) {
                canvas.chart.destroy();
            }
        };
    }, []);

    return (
        <div className="row mt-4">
            <div className="col-md-12">
                <canvas id="performanceChart"></canvas>
            </div>
        </div>
    );
};

export default ChartComponent;
