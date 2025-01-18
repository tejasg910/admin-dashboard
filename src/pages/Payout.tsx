import { BalanceCard } from '@/components/payout/BalanceCard';
import { WeeklySummary } from '@/components/payout/WeeklySummary';
import { PaymentHistory } from '@/components/payout/PaymentHistory';
import { InvoicesList } from '@/components/payout/InvoicesList';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Send, Wallet } from 'lucide-react';

function Payout() {
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
      {/* First row: Balance and Wallet cards */}
      <div className="grid grid-cols-2 gap-6 w-full">
        <BalanceCard
          balance="$673,412.66"
          cardNumber="1234"
          lastUpdate="08/21"
        />
        <Card className="p-6 bg-blue-600">
          <div className="flex justify-between items-start ">
            <div>
              <p className="text-blue-100">Wallet Balance</p>
              <h2 className="text-3xl font-bold mt-1 text-white">$824,571.93</h2>
              <div className="flex items-center mt-2 text-blue-100">
                <Wallet className="h-4 w-4 mr-1" />
                <span>+6.84% from last week</span>
              </div>
              <p className="text-xs text-blue-100 mt-1">Last updated: Today</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="bg-blue-500 hover:bg-blue-400 text-white border-none"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Invoice
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="bg-blue-500 hover:bg-blue-400 text-white border-none"
              >
                <ArrowUpRight className="h-4 w-4 mr-2" />
                Transfer
              </Button>
            </div>
          </div>
        </Card>      </div>

      {/* Second row: Weekly Summary and Invoices */}
      <div className="grid grid-cols-2 gap-6 w-full">
        <WeeklySummary />
        <InvoicesList invoices={invoices} />
      </div>

      {/* Third row: Payment History (full width) */}
      <div className="w-full">
        <PaymentHistory payments={payments} />
      </div>
    </div>
  );
}

export default Payout