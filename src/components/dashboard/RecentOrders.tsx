
import React from 'react';
import { ChevronRight } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface OrderProps {
  id: string;
  status: 'IN PROGRESS' | 'COMPLETED' | 'CANCELED';
  date: string;
  total: string;
}

const Order: React.FC<OrderProps> = ({ id, status, date, total }) => {
  const getStatusClass = () => {
    switch (status) {
      case 'COMPLETED':
        return 'status-completed';
      case 'IN PROGRESS':
        return 'status-in-progress';
      case 'CANCELED':
        return 'status-cancelled';
      default:
        return '';
    }
  };
  
  return (
    <TableRow>
      <TableCell className="py-3 px-2 text-sm">{id}</TableCell>
      <TableCell className="py-3 px-2">
        <span className={`status-badge ${getStatusClass()}`}>{status}</span>
      </TableCell>
      <TableCell className="py-3 px-2 text-sm">{date}</TableCell>
      <TableCell className="py-3 px-2 text-sm">{total}</TableCell>
      <TableCell className="py-3 px-2 text-right">
        <Button variant="ghost" className="text-blue-500 hover:text-blue-700 text-sm flex items-center p-0">
          View Details <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </TableCell>
    </TableRow>
  );
};

const RecentOrders: React.FC = () => {
  const orders = [
    { id: '#96459761', status: 'IN PROGRESS' as const, date: 'Dec 30, 2018 05:18', total: '₹1,500.00 (5 Products)' },
    { id: '#71667367', status: 'COMPLETED' as const, date: 'Feb 2, 2019 19:28', total: '₹80.00 (1 Products)' },
    { id: '#90214362', status: 'CANCELED' as const, date: 'Mar 20, 2019 23:14', total: '₹60.29 (2 Products)' },
    { id: '#71667367', status: 'COMPLETED' as const, date: 'Feb 2, 2019 19:28', total: '₹550.11 (1 Products)' },
    { id: '#91746365', status: 'COMPLETED' as const, date: 'Feb 2, 2019 19:28', total: '₹2,356.0 (5 Products)' },
    { id: '#91746365', status: 'CANCELED' as const, date: 'Dec 30, 2018 07:52', total: '₹110.0 (1 Products)' },
    { id: '#67397143', status: 'COMPLETED' as const, date: 'Dec 7, 2019 23:26', total: '₹220.0 (1 Products)' }
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-500">RECENT ORDER</h3>
        <Button variant="ghost" className="flex items-center text-rentev-orange text-sm p-0">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="py-2 px-2 text-left text-xs font-medium text-gray-500">ORDER ID</TableHead>
              <TableHead className="py-2 px-2 text-left text-xs font-medium text-gray-500">STATUS</TableHead>
              <TableHead className="py-2 px-2 text-left text-xs font-medium text-gray-500">DATE</TableHead>
              <TableHead className="py-2 px-2 text-left text-xs font-medium text-gray-500">TOTAL</TableHead>
              <TableHead className="py-2 px-2 text-right text-xs font-medium text-gray-500">ACTION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <Order key={index} {...order} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RecentOrders;
