import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Payment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  amount: string;
  date: string;
  status: 'completed' | 'pending' | 'cancelled';
  cardInfo: string;
}

interface PaymentHistoryProps {
  payments: Payment[];
}

export function PaymentHistory({ payments }: PaymentHistoryProps) {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Payment History</h3>
        <div className="flex gap-2">
          <button className="text-sm text-gray-500 hover:text-gray-900">Monthly</button>
          <button className="text-sm text-gray-500 hover:text-gray-900">Weekly</button>
          <button className="text-sm text-blue-600 font-medium">Today</button>
        </div>
      </div>
      <div className="space-y-4">
        {payments.map((payment) => (
          <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Avatar>
                <img src={payment.user.avatar} alt={payment.user.name} />
              </Avatar>
              <div>
                <p className="font-medium">{payment.user.name}</p>
                <p className="text-sm text-gray-500">{payment.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">{payment.amount}</p>
              <p className="text-sm text-gray-500">{payment.cardInfo}</p>
            </div>
            <span
              className={cn(
                'px-3 py-1 rounded-full text-sm',
                payment.status === 'completed' && 'bg-green-100 text-green-600',
                payment.status === 'pending' && 'bg-yellow-100 text-yellow-600',
                payment.status === 'cancelled' && 'bg-red-100 text-red-600'
              )}
            >
              {payment.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}