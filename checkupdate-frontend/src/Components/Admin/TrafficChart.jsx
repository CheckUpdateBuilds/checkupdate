// TrafficChart.js
import React, { useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement);

const TrafficChart = ({ id, type }) => {
  const data = {
    labels: type === 'line' ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] : ['2025-01-01', '2025-01-02', '2025-01-03'],
    datasets: [
      {
        label: type === 'line' ? 'Website Traffic' : 'Visitors',
        data: type === 'line' ? [10, 30, 50, 70, 40, 60, 80] : [50, 60, 40],
        borderColor: '#C43737',
        backgroundColor: '#C43737',
        fill: false,
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: { display: true, text: type === 'line' ? 'Months' : 'Date' }
      },
      y: {
        title: { display: true, text: 'Visitors' }
      }
    }
  };

  return type === 'line' ? (
    <Line data={data} options={options} />
  ) : (
    <Bar data={data} options={options} />
  );
};

export default TrafficChart;
