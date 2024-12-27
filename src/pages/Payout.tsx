import { BalanceCard } from '@/components/payout/BalanceCard';
import { WeeklySummary } from '@/components/payout/WeeklySummary';
import { PaymentHistory } from '@/components/payout/PaymentHistory';
import { InvoicesList } from '@/components/payout/InvoicesList';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Send } from 'lucide-react';

export default function Payout() {
  const payments = [
    {
      id: '1',
      user: {
        name: 'William Stephan',
        avatar: 'https://i.pravatar.cc/150?img=1',
      },
      amount: '$55,533',
      date: 'June 5, 2020, 08:22 AM',
      status: 'completed',
      cardInfo: 'MasterCard x4534',
    },
    {
      id: '2',
      user: {
        name: 'Olivia Brownlee',
        avatar: 'https://i.pravatar.cc/150?img=2',
      },
      amount: '$15,533',
      date: 'June 4, 2020, 09:22 AM',
      status: 'pending',
      cardInfo: 'MasterCard x4534',
    },
    {
      id: '3',
      user: {
        name: 'Angela Moss',
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
      amount: '$35,533',
      date: 'June 3, 2020, 10:22 AM',
      status: 'cancelled',
      cardInfo: 'MasterCard x4534',
    },
  ] as const;

  const invoices = [
    {
      id: '1',
      user: {
        name: 'Steven Store',
        avatar: 'https://i.pravatar.cc/150?img=4',
      },
      amount: '$562',
      time: '2h ago',
    },
    {
      id: '2',
      user: {
        name: 'David Ignis',
        avatar: 'https://i.pravatar.cc/150?img=5',
      },
      amount: '$672',
      time: '4h ago',
    },
    {
      id: '3',
      user: {
        name: 'Olivia Shah',
        avatar: 'https://i.pravatar.cc/150?img=6',
      },
      amount: '$759',
      time: '6h ago',
    },
    {
      id: '4',
      user: {
        name: 'Melanie Wong',
        avatar: 'https://i.pravatar.cc/150?img=7',
      },
      amount: '$545',
      time: '8h ago',
    },
  ] as const;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <BalanceCard
            balance="$673,412.66"
            cardNumber="1234"
            lastUpdate="08/21"
          />
          <div className="mt-6">
            <WeeklySummary />
          </div>
        </div>
        <div>
          <Card className="p-6 bg-blue-600 text-white">
            <h3 className="text-lg font-semibold mb-2">Wallet Balance</h3>
            <p className="text-3xl font-bold mb-4">$824,571.93</p>
            <p className="text-sm opacity-80">+6.84% from last week</p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Button variant="secondary" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Invoice
              </Button>
              <Button variant="secondary" className="w-full">
                <ArrowUpRight className="h-4 w-4 mr-2" />
                Transfer
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <PaymentHistory payments={payments} />
        </div>
        <div>
          <InvoicesList invoices={invoices} />
        </div>
      </div>
    </div>
  );
}