
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Truck, Package, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TrackOrder: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'User Account', href: '/account' },
          { label: 'Dashboard', href: '/account' },
          { label: 'Track Order' }
        ]} 
      />
      
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 mb-6 md:mb-0">
            <Sidebar />
          </div>
          
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-bold mb-6">TRACK YOUR ORDER</h1>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Enter Order Details</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Order Number</label>
                  <Input type="text" placeholder="e.g. 123456789" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <Input type="email" placeholder="email@example.com" />
                </div>
                <div className="mt-6 md:mt-0">
                  <Button className="bg-rentev-orange hover:bg-rentev-orange/90 h-10">
                    Track Order
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Tabs defaultValue="active">
                <TabsList className="mb-6">
                  <TabsTrigger value="active">Active Orders</TabsTrigger>
                  <TabsTrigger value="completed">Completed Orders</TabsTrigger>
                </TabsList>
                
                <TabsContent value="active">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-4 border-b">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                          <p className="text-lg font-semibold">#123456789</p>
                          <p className="text-sm text-gray-500">Order Date: April 5, 2025</p>
                        </div>
                        <Button variant="outline" size="sm" className="mt-2 md:mt-0">
                          View Details
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex flex-col items-center">
                        <div className="flex w-full justify-between mb-4">
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                              <CheckCircle className="h-6 w-6 text-green-600" />
                            </div>
                            <p className="text-xs mt-2 text-center">Order Placed</p>
                          </div>
                          <div className="flex-1 mx-2 mt-5">
                            <div className="h-1 bg-green-500"></div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                              <Package className="h-6 w-6 text-green-600" />
                            </div>
                            <p className="text-xs mt-2 text-center">Processing</p>
                          </div>
                          <div className="flex-1 mx-2 mt-5">
                            <div className="h-1 bg-gray-300"></div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                              <Truck className="h-6 w-6 text-gray-400" />
                            </div>
                            <p className="text-xs mt-2 text-center">Shipped</p>
                          </div>
                          <div className="flex-1 mx-2 mt-5">
                            <div className="h-1 bg-gray-300"></div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                              <CheckCircle className="h-6 w-6 text-gray-400" />
                            </div>
                            <p className="text-xs mt-2 text-center">Delivered</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 w-full p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm"><span className="font-medium">Status:</span> Your order is being processed.</p>
                          <p className="text-sm mt-2"><span className="font-medium">Estimated Delivery:</span> April 12, 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="completed">
                  <div className="text-center py-8">
                    <Clock className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                    <h3 className="text-lg font-medium">No completed orders yet</h3>
                    <p className="text-gray-500 mt-1">Your completed orders will appear here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TrackOrder;
