import { Card } from '@/components/ui/card';
import { ArrowUpRight, CreditCard, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BalanceCardProps {
  balance: string;
  cardNumber: string;
  lastUpdate: string;
}

export function BalanceCard({ balance, cardNumber, lastUpdate }: BalanceCardProps) {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">Main Balance</p>
          <h2 className="text-3xl font-bold mt-1">{balance}</h2>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <CreditCard className="h-4 w-4 mr-1" />
            <span>**** **** **** {cardNumber}</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">Last updated: {lastUpdate}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
          <Button variant="outline" size="sm">
            <ArrowUpRight className="h-4 w-4 mr-2" />
            Transfer
          </Button>
        </div>
      </div>
    </Card>
  );
}