
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import SettingsForm from '@/components/settings/SettingsForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'User Account', href: '/account' },
          { label: 'Dashboard', href: '/account' },
          { label: 'Settings' }
        ]} 
      />
      
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 mb-6 md:mb-0">
            <Sidebar />
          </div>
          
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-bold mb-6">ACCOUNT SETTING</h1>
            <SettingsForm />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Settings;
