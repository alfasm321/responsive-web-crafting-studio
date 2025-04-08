
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Trash2, Star, Share2, Filter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface WishlistItem {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  available: boolean;
}

const Wishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = React.useState<WishlistItem[]>([
    {
      id: 1,
      name: "Professional DSLR Camera",
      image: "/placeholder.svg",
      price: 25.00,
      rating: 4.5,
      available: true
    },
    {
      id: 2,
      name: "Bluetooth Speaker System",
      image: "/placeholder.svg",
      price: 15.00,
      rating: 4.0,
      available: true
    },
    {
      id: 3,
      name: "Ergonomic Office Chair",
      image: "/placeholder.svg",
      price: 8.50,
      rating: 4.8,
      available: false
    },
    {
      id: 4,
      name: "Smart Home Assistant",
      image: "/placeholder.svg",
      price: 12.00,
      rating: 3.5,
      available: true
    }
  ]);
  
  const handleRemoveItem = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'User Account', href: '/account' },
          { label: 'Dashboard', href: '/account' },
          { label: 'Wishlist' }
        ]} 
      />
      
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 mb-6 md:mb-0">
            <Sidebar />
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl md:text-2xl font-bold">MY WISHLIST</h1>
              <span className="text-sm text-gray-500">{wishlistItems.length} Items</span>
            </div>
            
            {wishlistItems.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-rentev-orange" />
                    <span>Saved Items</span>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex gap-1 items-center">
                        <Filter className="h-4 w-4" />
                        <span>Sort</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                      <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                      <DropdownMenuItem>Newest First</DropdownMenuItem>
                      <DropdownMenuItem>Rating</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-48 object-cover"
                        />
                        <button 
                          onClick={() => handleRemoveItem(item.id)} 
                          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm"
                        >
                          <Trash2 className="h-4 w-4 text-gray-500 hover:text-red-500" />
                        </button>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-medium">{item.name}</h3>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-yellow-400' : 
                                i < item.rating ? 'text-yellow-400 fill-yellow-400 stroke-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="ml-1 text-sm text-gray-500">{item.rating}</span>
                        </div>
                        
                        <div className="mt-2 mb-3">
                          <span className="font-medium text-lg">${item.price.toFixed(2)}</span>
                          <span className="text-gray-500 text-sm ml-1">per day</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            className="flex-1 bg-rentev-orange hover:bg-rentev-orange/90"
                            disabled={!item.available}
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Add to Cart
                          </Button>
                          <Button variant="outline" size="icon">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        {!item.available && (
                          <p className="text-red-500 text-sm mt-2">Currently unavailable</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <Heart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
                <p className="text-gray-500 mb-6">Save items you want to rent later by clicking the heart icon.</p>
                <Button className="bg-rentev-orange hover:bg-rentev-orange/90">
                  Explore Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
