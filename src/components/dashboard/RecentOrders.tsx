
import React from 'react';
import { ChevronRight } from 'lucide-react';

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
    <tr className="border-b">
      <td className="py-3 px-2 text-sm">{id}</td>
      <td className="py-3 px-2">
        <span className={`status-badge ${getStatusClass()}`}>{status}</span>
      </td>
      <td className="py-3 px-2 text-sm">{date}</td>
      <td className="py-3 px-2 text-sm">{total}</td>
      <td className="py-3 px-2 text-right">
        <button className="text-blue-500 hover:text-blue-700 text-sm flex items-center">
          View Details <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </td>
    </tr>
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
        <button className="flex items-center text-rentev-orange text-sm">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-2 px-2 text-left text-xs font-medium text-gray-500">ORDER ID</th>
              <th className="py-2 px-2 text-left text-xs font-medium text-gray-500">STATUS</th>
              <th className="py-2 px-2 text-left text-xs font-medium text-gray-500">DATE</th>
              <th className="py-2 px-2 text-left text-xs font-medium text-gray-500">TOTAL</th>
              <th className="py-2 px-2 text-right text-xs font-medium text-gray-500">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <Order key={index} {...order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
