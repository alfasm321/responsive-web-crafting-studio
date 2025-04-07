
import React from 'react';
import AccountInfo from './dashboard/AccountInfo';
import BillingAddress from './dashboard/BillingAddress';
import OrderStats from './dashboard/OrderStats';
import PaymentOptions from './dashboard/PaymentOptions';
import RecentOrders from './dashboard/RecentOrders';
import BrowsingHistory from './dashboard/BrowsingHistory';

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold">Hello, G****</h1>
        <p className="text-gray-600 text-sm mt-1">
          From your account dashboard, you can easily check & view your{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Recent Orders
          </a>
          , manage your{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Shipping and Billing Addresses
          </a>{' '}
          and edit your{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Password and Account Details
          </a>
          .
        </p>
      </div>
      
      <OrderStats />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <AccountInfo />
        <BillingAddress />
      </div>
      
      <PaymentOptions />
      
      <RecentOrders />
      
      <BrowsingHistory />
    </div>
  );
};

export default Dashboard;
