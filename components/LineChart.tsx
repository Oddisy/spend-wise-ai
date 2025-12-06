'use client'
import { ChartOptions, ChartData, ChartType } from 'chart.js';
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
  Filler,
} from 'chart.js';

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

interface Record {
  date: string;
  amount: number;
}

const LineChart = ({ records }: { records: Record[] }) => {
  const data: ChartData<'line'> = {
    labels: records.map((record) =>
      new Date(record.date).toLocaleDateString()
    ),
    datasets: [
      {
        data: records.map((r) => r.amount),
        borderColor: '#14b8a6',
        backgroundColor: 'rgba(20, 184, 166, 0.2)',
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: records.map((r) =>
          r.amount < 7 ? '#ef4444' : '#14b8a6'
        ),
        fill: true,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
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
          font: { size: 14, weight: 'bold' } as any, // <--- cast to any
          color: '#334155',
        },
        ticks: { color: '#64748b' },
        grid: { display: false },
      },
      y: {
        title: {
          display: true,
          text: 'Amount Spent($)',
          font: { size: 16, weight: 'bold' } as any, // <--- cast to any
          color: '#334155',
        },
        ticks: { color: '#64748b' },
        grid: { color: '#e5e7eb' },
        beginAtZero: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
