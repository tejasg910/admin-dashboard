import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

interface Invoice {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  amount: string;
  time: string;
}

interface InvoicesListProps {
  invoices: readonly Invoice[];  // Add 'readonly' here
  
}

export function InvoicesList({ invoices }: InvoicesListProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Invoices Sent</h3>
      <div className="space-y-4">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <img src={invoice.user.avatar} alt={invoice.user.name} />
              </Avatar>
              <div>
                <p className="font-medium">{invoice.user.name}</p>
                <p className="text-sm text-gray-500">{invoice.time}</p>
              </div>
            </div>
            <p className="font-medium">{invoice.amount}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}