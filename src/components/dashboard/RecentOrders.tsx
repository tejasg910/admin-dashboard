import { Card } from '@/components/ui/card';
import { OrderStatus } from './OrderStatus';

interface Order {
  product: string;
  customer: string;
  id: string;
  price: string;
  status: 'Delivered' | 'Pending' | 'Cancelled';
}

interface RecentOrdersProps {
  orders: Order[];
}

export function RecentOrders({ orders }: RecentOrdersProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-4">Product Name</th>
              <th className="pb-4">Customer</th>
              <th className="pb-4">Product ID</th>
              <th className="pb-4">Price</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-t">
                <td className="py-4">{order.product}</td>
                <td>{order.customer}</td>
                <td>{order.id}</td>
                <td>{order.price}</td>
                <td>
                  <OrderStatus status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}