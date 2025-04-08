
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  rental: {
    period: string;
    duration: number;
  };
}

const ShoppingCart: React.FC = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Professional DSLR Camera",
      image: "/placeholder.svg",
      price: 25.00,
      quantity: 1,
      rental: {
        period: "day",
        duration: 7
      }
    },
    {
      id: 2,
      name: "Wireless Bluetooth Speaker",
      image: "/placeholder.svg",
      price: 10.00,
      quantity: 2,
      rental: {
        period: "day",
        duration: 3
      }
    }
  ]);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse saved cart:", e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  
  const handleQuantityChange = (id: number, change: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
    
    toast({
      title: "Cart updated",
      description: "Item quantity has been updated",
    });
  };
  
  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart",
    });
  };

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === 'discount10') {
      setDiscount(10);
      toast({
        title: "Coupon applied",
        description: "10% discount has been applied to your order",
      });
    } else if (couponCode.toLowerCase() === 'discount20') {
      setDiscount(20);
      toast({
        title: "Coupon applied",
        description: "20% discount has been applied to your order",
      });
    } else {
      toast({
        title: "Invalid coupon",
        description: "The coupon code you entered is invalid",
        variant: "destructive",
      });
    }
  };
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity * item.rental.duration), 0);
  const discountAmount = subtotal * (discount / 100);
  const tax = (subtotal - discountAmount) * 0.08;
  const total = subtotal - discountAmount + tax;

  const handleCheckout = () => {
    toast({
      title: "Proceeding to checkout",
      description: `Total amount: $${total.toFixed(2)}`,
    });
    // Here you would typically navigate to a checkout page
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'User Account', href: '/account' },
          { label: 'Dashboard', href: '/account' },
          { label: 'Shopping Cart' }
        ]} 
      />
      
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 mb-6 md:mb-0">
            <Sidebar />
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl md:text-2xl font-bold">YOUR CART</h1>
              <span className="text-sm text-gray-500">{cartItems.length} Items</span>
            </div>
            
            {cartItems.length > 0 ? (
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-4 border-b last:border-0">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{item.name}</h3>
                              <button 
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-gray-400 hover:text-red-500"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                              Rental: {item.rental.duration} {item.rental.period}s
                            </p>
                            <div className="flex justify-between items-center mt-4">
                              <div className="flex items-center border rounded-md">
                                <button 
                                  onClick={() => handleQuantityChange(item.id, -1)}
                                  className="px-2 py-1 hover:bg-gray-100"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="px-4">{item.quantity}</span>
                                <button 
                                  onClick={() => handleQuantityChange(item.id, 1)}
                                  className="px-2 py-1 hover:bg-gray-100"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                              <div className="font-medium">
                                ${(item.price * item.quantity * item.rental.duration).toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
                    <div className="flex gap-4">
                      <Input 
                        type="text" 
                        placeholder="Enter coupon code" 
                        className="flex-1"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button variant="outline" onClick={handleApplyCoupon}>Apply Coupon</Button>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-80">
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount ({discount}%)</span>
                          <span>-${discountAmount.toFixed(2)}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span className="text-gray-500">Tax (8%)</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex justify-between font-medium text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-6 bg-rentev-orange hover:bg-rentev-orange/90" onClick={handleCheckout}>
                      Proceed to Checkout
                    </Button>
                    
                    <Button variant="outline" className="w-full mt-3" onClick={() => window.history.back()}>
                      Continue Shopping
                    </Button>
                  </div>
                  
                  <div className="mt-4 bg-gray-50 rounded-lg p-4 text-sm">
                    <p className="flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4 text-rentev-orange" />
                      Free shipping on rentals over $100
                    </p>
                    <p className="mt-2">Need help? Contact our support team</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <ShoppingBag className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet.</p>
                <Button className="bg-rentev-orange hover:bg-rentev-orange/90" onClick={() => window.history.back()}>
                  Continue Shopping
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

export default ShoppingCart;
