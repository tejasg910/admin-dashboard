import { Card } from '@/components/ui/card';
import { Line } from 'react-chartjs-2';

export function WeeklySummary() {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Income',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(34, 197, 94)',
        tension: 0.4,
      },
      {
        label: 'Expenses',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'rgb(239, 68, 68)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Weekly Summary</h3>
      <Line data={data} options={options} />
    </Card>
  );
}