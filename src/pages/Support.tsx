
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, User, CreditCard, Truck, Heart, ShoppingCart, Building, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Here you would implement the actual search functionality
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section with Search */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div 
          className="relative z-10 py-16 px-4 flex flex-col items-center justify-center bg-center bg-cover" 
          style={{ 
            backgroundImage: "url('/lovable-uploads/97e327e4-0fe7-48ec-94b7-6793d9dd68e4.png')",
            minHeight: "300px"
          }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-rentev-orange px-4 py-1 rounded-md mb-4">
              <span className="font-semibold text-sm uppercase">HELP CENTER</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-8">How we can help you!</h1>
            
            <form onSubmit={handleSearch} className="flex w-full max-w-lg mx-auto">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Enter your question or keyword"
                  className="pl-4 pr-10 py-3 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-rentev-orange text-gray-900"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                type="submit" 
                className="bg-rentev-orange hover:bg-rentev-orange/90 text-white px-6 py-2 rounded-r-md"
              >
                SEARCH
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Support Categories */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">What can we assist you with today?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="border rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-shadow text-center cursor-pointer">
            <Truck className="h-8 w-8 text-rentev-orange mb-3" />
            <h3 className="font-medium">Track Order</h3>
          </div>
          
          <div className="border rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-shadow text-center cursor-pointer">
            <RefreshCw className="h-8 w-8 text-rentev-orange mb-3" />
            <h3 className="font-medium">Reset Password</h3>
          </div>
          
          <div className="border rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-shadow text-center cursor-pointer">
            <CreditCard className="h-8 w-8 text-rentev-orange mb-3" />
            <h3 className="font-medium">Payment Option</h3>
          </div>
          
          <div className="border rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-shadow text-center cursor-pointer">
            <User className="h-8 w-8 text-rentev-orange mb-3" />
            <h3 className="font-medium">User & Account</h3>
          </div>
          
          <div className="border rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-shadow text-center cursor-pointer">
            <Heart className="h-8 w-8 text-rentev-orange mb-3" />
            <h3 className="font-medium">Wishlist & Compare</h3>
          </div>
          
          <div className="border rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-shadow text-center cursor-pointer">
            <Truck className="h-8 w-8 text-rentev-orange mb-3" />
            <h3 className="font-medium">Shipping & Billing</h3>
          </div>
          
          <div className="border rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-shadow text-center cursor-pointer">
            <ShoppingCart className="h-8 w-8 text-rentev-orange mb-3" />
            <h3 className="font-medium">Shopping Cart & Wallet</h3>
          </div>
          
          <div className="border rounded-lg p-6 flex flex-col items-center hover:shadow-md transition-shadow text-center cursor-pointer">
            <Building className="h-8 w-8 text-rentev-orange mb-3" />
            <h3 className="font-medium">Sell on vendor</h3>
          </div>
        </div>
      </section>
      
      {/* Popular Topics */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Popular Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex space-x-2">
                <span className="text-gray-500">•</span>
                <p>How do I create an account?</p>
              </div>
              <div className="flex space-x-2">
                <span className="text-rentev-orange">•</span>
                <p className="text-rentev-orange">I forgot my password. How can I reset it?</p>
              </div>
              <div className="flex space-x-2">
                <span className="text-gray-500">•</span>
                <p>How do I update my account information?</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex space-x-2">
                <span className="text-gray-500">•</span>
                <p>How do I place an order?</p>
              </div>
              <div className="flex space-x-2">
                <span className="text-gray-500">•</span>
                <p>What is the minimum rental duration?</p>
              </div>
              <div className="flex space-x-2">
                <span className="text-gray-500">•</span>
                <p>Can I change or cancel my order?</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex space-x-2">
                <span className="text-gray-500">•</span>
                <p>What payment methods do you accept?</p>
              </div>
              <div className="flex space-x-2">
                <span className="text-gray-500">•</span>
                <p>Can I get a refund if I am not satisfied with the product?</p>
              </div>
              <div className="flex space-x-2">
                <span className="text-gray-500">•</span>
                <p>Do you charge a security deposit?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Us Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-medium text-gray-600 mb-1">Don't find your answer.</h2>
          <h3 className="text-2xl font-bold mb-8">Contact with us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex p-6">
                <div className="bg-blue-50 p-4 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-1">Call us now</h4>
                  <p className="text-sm text-gray-500 mb-2">we are available online from 9:00 AM to 5:00 PM<br/>(GMT+5:45) Talk with us now</p>
                  <p className="font-medium text-lg mb-4">+91 9566684799</p>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    CALL NOW <span className="ml-2">→</span>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex p-6">
                <div className="bg-green-50 p-4 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-1">Chat with us</h4>
                  <p className="text-sm text-gray-500 mb-2">we are available online from 9:00 AM to 5:00 PM<br/>(GMT+5:45) Chat with us now</p>
                  <p className="font-medium text-lg mb-4">RentEverything.shop@gmail.com</p>
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    CONTACT US <span className="ml-2">→</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Support;
