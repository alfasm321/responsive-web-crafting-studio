
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Dashboard from '@/components/Dashboard';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: 'User Account', href: '/account' },
          { label: 'Dashboard' }
        ]} 
      />
      
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 mb-6 md:mb-0">
            <Sidebar />
          </div>
          
          <div className="flex-1">
            <Dashboard />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
