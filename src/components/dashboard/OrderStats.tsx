
import React from 'react';
import { ShoppingCart, Clock, CheckCircle } from 'lucide-react';

const OrderStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-md shadow-sm flex items-center">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <ShoppingCart className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">154</h3>
          <p className="text-sm text-gray-500">Total Orders</p>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow-sm flex items-center">
        <div className="bg-orange-100 p-3 rounded-full mr-4">
          <Clock className="h-5 w-5 text-rentev-pending" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">05</h3>
          <p className="text-sm text-gray-500">Pending Orders</p>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow-sm flex items-center">
        <div className="bg-green-100 p-3 rounded-full mr-4">
          <CheckCircle className="h-5 w-5 text-rentev-completed" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">149</h3>
          <p className="text-sm text-gray-500">Completed Orders</p>
        </div>
      </div>
    </div>
  );
};

export default OrderStats;
