'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Define the type for a record
interface Record {
  date: string; // ISO date string
  amount: number;
}
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const LineChart = ({ records }: { records: Record[] }) => {
  const data = {
    labels: records.map((record) =>
      new Date(record.date).toLocaleDateString()
    ),
    datasets: [
      {
        data: records.map((record) => record.amount),
        borderColor: '#14b8a6', // teal/cyan feel
        backgroundColor: 'rgba(20, 184, 166, 0.2)',
        tension: 0.4, // smooth curve
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: records.map((record) =>
          record.amount < 7 ? '#ef4444' : '#14b8a6'
        ),
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          font: { size: 14, weight: 'bold' },
          color: '#334155', // slate
        },
        ticks: {
          color: '#64748b',
        },
        grid: { display: false },
      },
      y: {
        title: {
          display: true,
          text: 'Amount Spent($)',
          font: { size: 16, weight: 'bold' },
          color: '#334155',
        },
        ticks: {
          color: '#64748b',
        },
        grid: {
          color: '#e5e7eb',
        },
        beginAtZero: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
