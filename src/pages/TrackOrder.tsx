
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Truck, Package, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

interface OrderStatus {
  orderPlaced: boolean;
  processing: boolean;
  shipped: boolean;
  delivered: boolean;
  estimatedDelivery: string;
  statusMessage: string;
}

const TrackOrder: React.FC = () => {
  const { toast } = useToast();
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isTracking, setIsTracking] = useState<boolean>(false);
  const [orderFound, setOrderFound] = useState<boolean>(false);
  const [orderStatus, setOrderStatus] = useState<OrderStatus>({
    orderPlaced: true,
    processing: true,
    shipped: false,
    delivered: false,
    estimatedDelivery: 'April 12, 2025',
    statusMessage: 'Your order is being processed.'
  });

  const handleTrackOrder = () => {
    // Basic validation
    if (!orderNumber || !email) {
      toast({
        title: "Missing information",
        description: "Please enter both order number and email address",
        variant: "destructive",
      });
      return;
    }

    setIsTracking(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // For demo purposes, we'll consider a specific order number as "found"
      if (orderNumber === '123456789' && email.includes('@')) {
        setOrderFound(true);
        setOrderStatus({
          orderPlaced: true,
          processing: true, 
          shipped: false,
          delivered: false,
          estimatedDelivery: 'April 12, 2025',
          statusMessage: 'Your order is being processed.'
        });
        toast({
          title: "Order found",
          description: "Your order details have been retrieved",
        });
      } else if (orderNumber === '987654321' && email.includes('@')) {
        setOrderFound(true);
        setOrderStatus({
          orderPlaced: true,
          processing: true,
          shipped: true,
          delivered: false,
          estimatedDelivery: 'April 8, 2025',
          statusMessage: 'Your order has been shipped and is on the way.'
        });
        toast({
          title: "Order found",
          description: "Your order details have been retrieved",
        });
      } else {
        setOrderFound(false);
        toast({
          title: "Order not found",
          description: "We couldn't find an order matching these details",
          variant: "destructive",
        });
      }
      setIsTracking(false);
    }, 1500);
  };

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
                  <Input 
                    type="text" 
                    placeholder="e.g. 123456789" 
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="email@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-6 md:mt-0">
                  <Button 
                    className="bg-rentev-orange hover:bg-rentev-orange/90 h-10"
                    onClick={handleTrackOrder}
                    disabled={isTracking}
                  >
                    {isTracking ? "Tracking..." : "Track Order"}
                  </Button>
                </div>
              </div>
              
              {!orderFound && isTracking && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2 animate-spin" />
                  <span>Searching for your order...</span>
                </div>
              )}
              
              {!orderFound && !isTracking && orderNumber && email && (
                <div className="mt-4 p-3 bg-red-50 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span>No order found with these details. Please check and try again.</span>
                </div>
              )}
            </div>
            
            {orderFound && (
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
                            <p className="text-lg font-semibold">#{orderNumber}</p>
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
                              <div className={`w-10 h-10 rounded-full ${orderStatus.processing ? 'bg-green-100' : 'bg-gray-100'} flex items-center justify-center`}>
                                <Package className={`h-6 w-6 ${orderStatus.processing ? 'text-green-600' : 'text-gray-400'}`} />
                              </div>
                              <p className="text-xs mt-2 text-center">Processing</p>
                            </div>
                            <div className="flex-1 mx-2 mt-5">
                              <div className={`h-1 ${orderStatus.shipped ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className={`w-10 h-10 rounded-full ${orderStatus.shipped ? 'bg-green-100' : 'bg-gray-100'} flex items-center justify-center`}>
                                <Truck className={`h-6 w-6 ${orderStatus.shipped ? 'text-green-600' : 'text-gray-400'}`} />
                              </div>
                              <p className="text-xs mt-2 text-center">Shipped</p>
                            </div>
                            <div className="flex-1 mx-2 mt-5">
                              <div className={`h-1 ${orderStatus.delivered ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className={`w-10 h-10 rounded-full ${orderStatus.delivered ? 'bg-green-100' : 'bg-gray-100'} flex items-center justify-center`}>
                                <CheckCircle className={`h-6 w-6 ${orderStatus.delivered ? 'text-green-600' : 'text-gray-400'}`} />
                              </div>
                              <p className="text-xs mt-2 text-center">Delivered</p>
                            </div>
                          </div>
                          
                          <div className="mt-4 w-full p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm"><span className="font-medium">Status:</span> {orderStatus.statusMessage}</p>
                            <p className="text-sm mt-2"><span className="font-medium">Estimated Delivery:</span> {orderStatus.estimatedDelivery}</p>
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
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TrackOrder;
