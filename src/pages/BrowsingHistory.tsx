
import React, { useState } from 'react';
import { Search, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  rating: number;
  reviewCount: number;
  tag?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  title, 
  price, 
  rating, 
  reviewCount,
  tag
}) => {
  const renderStars = () => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`h-3 w-3 ${i < rating ? "text-yellow-400" : "text-gray-300"}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
      </div>
    );
  };

  return (
    <Card className="overflow-hidden border shadow-sm relative">
      {tag && (
        <div className={`absolute top-2 left-2 text-xs text-white px-2 py-0.5 rounded-sm ${
          tag === 'New' ? 'bg-red-500' : 
          tag === 'Best Seller' ? 'bg-blue-500' : 
          tag === '20% Off' ? 'bg-yellow-500' : 
          'bg-green-500'
        }`}>
          {tag}
        </div>
      )}
      <div className="h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        {renderStars()}
        <h3 className="font-medium text-gray-800 mb-1 line-clamp-2 text-sm h-10">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-rentev-orange font-medium">₹ {price}</span>
          <Button 
            variant="outline" 
            className="border-rentev-orange text-rentev-orange hover:bg-rentev-orange/10 px-3 py-1 h-auto text-sm"
          >
            Rent it
          </Button>
        </div>
      </div>
    </Card>
  );
};

const BrowsingHistoryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const products = [
    // First day products
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "TOZO TW True Wireless Earbuds Bluetooth Headphones",
      price: "250/day",
      rating: 4.5,
      reviewCount: 2351,
      tag: "New"
    },
    {
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFuaW5nfGVufDB8fDB8fHww&w=1000&q=80",
      title: "Samsung Electronics Samsung Galaxy S2 5G",
      price: "500/day",
      rating: 4.2,
      reviewCount: 1240,
      tag: "Best Seller"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/60Hz)",
      price: "50/day",
      rating: 4.7,
      reviewCount: 123,
      tag: ""
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "Portable Washing Machine, 11lbs capacity Washer",
      price: "300/day",
      rating: 4.8,
      reviewCount: 589,
      tag: ""
    },
    // Second day products
    {
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFuaW5nfGVufDB8fDB8fHww&w=1000&q=80",
      title: "Amazon Basics High-Speed HDMI Cable (10ft, Gold-Plated)",
      price: "50/day",
      rating: 4.6,
      reviewCount: 592,
      tag: "Best Seller"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Portable Ice Machine, 11lbs capacity Model: IM-123",
      price: "400/day",
      rating: 4.3,
      reviewCount: 1123,
      tag: ""
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "TOZO TA True Wireless Earbuds Bluetooth Headphones",
      price: "70/day",
      rating: 4.2,
      reviewCount: 987,
      tag: "New"
    },
    // Third day products
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/120Hz)",
      price: "200/day",
      rating: 4.5,
      reviewCount: 457,
      tag: ""
    },
    {
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFuaW5nfGVufDB8fDB8fHww&w=1000&q=80",
      title: "Portable Fire Machine, 11lbs capacity Model: FM-567",
      price: "450/day",
      rating: 4.1,
      reviewCount: 264,
      tag: ""
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "TOZO TA True Wireless Earbuds Bluetooth Headphone",
      price: "110/day",
      rating: 4.9,
      reviewCount: 864,
      tag: "New"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Dell Optiplex 7050-7480 All-in-One Computer Monitor",
      price: "750/day",
      rating: 4.7,
      reviewCount: 1246,
      tag: ""
    },
    // More products
    {
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFuaW5nfGVufDB8fDB8fHww&w=1000&q=80",
      title: "Samsung A7 Fold - Ultra Samsung Galaxy Z",
      price: "900/day",
      rating: 4.8,
      reviewCount: 1567,
      tag: ""
    },
    // Fourth day products
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Wired Over-Ear Gaming Headphones with USB",
      price: "1,000/day",
      rating: 4.6,
      reviewCount: 758,
      tag: ""
    },
    {
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFuaW5nfGVufDB8fDB8fHww&w=1000&q=80",
      title: "Polaroid P2 Dash Photo/Video Tripod with Deluxe Tripod Case",
      price: "1,200/day",
      rating: 4.4,
      reviewCount: 431,
      tag: "20% Off"
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "Dell Optiplex 7050-7480 All-in-One Computer Monitor",
      price: "750/day",
      rating: 4.8,
      reviewCount: 983,
      tag: ""
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Polaroid P2 Dash Photo/Video Tripod with Deluxe Tripod Case",
      price: "1,500/day",
      rating: 4.2,
      reviewCount: 267,
      tag: "Best Seller"
    },
    // Fifth day product
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "4K UHD LED Smart TV with Chromecast Built In",
      price: "2,000/day",
      rating: 4.9,
      reviewCount: 1294,
      tag: "New"
    },
  ];

  // Group products by date
  const groupedProducts: Record<string, ProductCardProps[]> = {
    "17 OCT, 2020": products.slice(0, 4),
    "17 OCT, 2020 ": products.slice(4, 7), // Adding a space to make key unique
    "24 MAY, 2020": products.slice(7, 11),
    "21 DEC, 2020": products.slice(11, 15),
    "22 OCT, 2020": products.slice(15, 16),
  };

  // Filter products based on search query
  const filteredGroupedProducts: Record<string, ProductCardProps[]> = {};
  Object.keys(groupedProducts).forEach(date => {
    const filteredProducts = groupedProducts[date].filter(
      product => product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredProducts.length > 0) {
      filteredGroupedProducts[date] = filteredProducts;
    }
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'User Account', href: '/account' },
          { label: 'Dashboard', href: '/account' },
          { label: 'Browsing History' }
        ]} 
      />
      
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 mb-6 md:mb-0">
            <Sidebar />
          </div>
          
          <div className="flex-1">
            <div className="bg-white rounded-md shadow-sm p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h1 className="text-xl font-bold">Browsing History</h1>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">Turn Browsing History on/off</span>
                  <div className="relative inline-block w-10 h-5 rounded-full bg-green-500">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white shadow-md"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input 
                    placeholder="Search in browsing history" 
                    className="pl-10" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="DD/MM/YYYY" className="pl-10" />
                </div>
              </div>
              
              {Object.keys(filteredGroupedProducts).length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No browsing history found.</p>
                </div>
              ) : (
                <>
                  {Object.entries(filteredGroupedProducts).map(([date, products], dateIndex) => (
                    <div key={dateIndex} className="mb-8">
                      <h2 className="text-sm font-semibold text-gray-700 mb-4">{date}</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {products.map((product, productIndex) => (
                          <ProductCard key={`${dateIndex}-${productIndex}`} {...product} />
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-center mt-8">
                    <Button 
                      variant="outline"
                      className="border-rentev-orange text-rentev-orange hover:bg-rentev-orange/10"
                    >
                      LOAD MORE
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BrowsingHistoryPage;
