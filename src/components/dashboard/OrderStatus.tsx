import { cn } from '@/lib/utils';

interface OrderStatusProps {
  status: 'Delivered' | 'Pending' | 'Cancelled';
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <span
      className={cn(
        'px-2 py-1 rounded-full text-xs',
        status === 'Delivered' && 'bg-green-100 text-green-600',
        status === 'Pending' && 'bg-yellow-100 text-yellow-600',
        status === 'Cancelled' && 'bg-red-100 text-red-600'
      )}
    >
      {status}
    </span>
  );
}