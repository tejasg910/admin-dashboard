import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Card } from '@/components/ui/card';
import { Users, DollarSign, CreditCard } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { RecentOrders } from '@/components/dashboard/RecentOrders';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Dashboard() {
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Income',
        data: [30000, 35000, 25000, 45000, 35000, 55000, 45000, 60000, 45000, 50000, 45000, 45365],
        borderColor: 'rgb(37, 99, 235)',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        fill: true,
      },
      {
        label: 'Expenses',
        data: [15000, 20000, 15000, 25000, 20000, 30000, 25000, 35000, 25000, 30000, 25000, 15654],
        borderColor: 'rgb(249, 115, 22)',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        fill: true,
      },
    ],
  };

  const deviceData = {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ['rgb(37, 99, 235)', 'rgb(249, 115, 22)', 'rgb(34, 197, 94)'],
      },
    ],
  };

  const topProducts = [
    { name: 'Ipsum 12 Pro Max', price: '$1200' },
    { name: 'Lorem D/200', price: '$850' },
    { name: 'Dolor Headphone', price: '$560' },
    { name: 'Dolor Headphone', price: '$540' },
    { name: 'Ipsum 12 Pro Max', price: '$1200' },
    { name: 'Lorem D/200', price: '$560' },
  ];

  const recentOrders = [
    { product: 'Apple Airpod Pro', customer: 'John Doe', id: '#659784', price: '$454', status: 'Pending' },
    { product: 'Redmi Note 10S', customer: 'Doe John', id: '#894652', price: '$114.55', status: 'Delivered' },
    { product: 'Razer Kraken Headset', customer: 'Linda Sins', id: '#987456', price: '$164.99', status: 'Cancelled' },
    { product: 'iPhone 12 Pro Max', customer: 'Jack Sparrow', id: '#154899', price: '$1250.55', status: 'Delivered' },
  ] as const;

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        <StatsCard
          title="Total Sales"
          value="$45,365.00"
          icon={DollarSign}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-100"
        />
        <StatsCard
          title="Total Expenses"
          value="$15,654.00"
          icon={CreditCard}
          iconColor="text-orange-600"
          iconBgColor="bg-orange-100"
        />
        <StatsCard
          title="Total Visitors"
          value="25,654.00"
          icon={Users}
          iconColor="text-green-600"
          iconBgColor="bg-green-100"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
            <Line data={salesData} options={{ responsive: true }} />
          </Card>
        </div>
        <div className="col-span-1">
          <Card className="p-6 h-full">
            <h3 className="text-lg font-semibold mb-4">Balance Summary</h3>
            <div className="bg-blue-600 text-white rounded-lg p-4 mb-4">
              <p className="text-sm opacity-80">Active Balance</p>
              <h4 className="text-2xl font-bold">$85,654</h4>
              <p className="text-sm mt-2 opacity-80">**** 6544</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Top Products</h4>
              <div className="space-y-2">
                {topProducts.slice(0, 4).map((product, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{product.name}</span>
                    <span className="text-sm font-medium">{product.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Orders Section */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <RecentOrders orders={recentOrders} />
        </div>
        <div>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Order By Device</h3>
            <Pie data={deviceData} options={{ responsive: true }} />
          </Card>
        </div>
      </div>
    </div>
  );
}