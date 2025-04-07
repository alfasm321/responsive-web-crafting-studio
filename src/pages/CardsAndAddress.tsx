
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { ArrowRight, CreditCard, Edit, MoreHorizontal, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CardsAndAddress: React.FC = () => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [cardToDelete, setCardToDelete] = useState<'visa' | 'mastercard' | null>(null);

  const handleDeleteClick = (cardType: 'visa' | 'mastercard') => {
    setCardToDelete(cardType);
    setShowDeleteDialog(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'User Account', href: '/account' },
          { label: 'Dashboard', href: '/account' },
          { label: 'Cards & Address' }
        ]} 
      />
      
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 mb-6 md:mb-0">
            <Sidebar />
          </div>
          
          <div className="flex-1">
            {/* Payment Options */}
            <div className="bg-white p-6 rounded-md shadow-sm mb-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-800">PAYMENT OPTION</h3>
                <Button className="bg-rentev-orange hover:bg-orange-600 text-white flex items-center gap-2">
                  Add Card <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* VISA Card */}
                <Card className="bg-[#194E77] text-white p-5 rounded-md relative">
                  <div className="absolute right-4 top-4">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 text-white">
                          <MoreHorizontal className="h-5 w-5" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 p-0">
                        <div className="flex flex-col">
                          <Button variant="ghost" className="justify-start rounded-none h-10">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Card
                          </Button>
                          <Button 
                            variant="ghost" 
                            className="justify-start text-red-500 rounded-none h-10"
                            onClick={() => handleDeleteClick('visa')}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Card
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-xs text-gray-300">CARD NUMBER</p>
                    <p className="text-sm">**** **** **** 3814</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-gray-300">CARD HOLDER</p>
                      <p className="text-sm">G***** *****</p>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
                  </div>
                </Card>
                
                {/* MasterCard */}
                <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white p-5 rounded-md relative">
                  <div className="absolute right-4 top-4">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 text-white">
                          <MoreHorizontal className="h-5 w-5" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 p-0">
                        <div className="flex flex-col">
                          <Button variant="ghost" className="justify-start rounded-none h-10">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Card
                          </Button>
                          <Button 
                            variant="ghost" 
                            className="justify-start text-red-500 rounded-none h-10"
                            onClick={() => handleDeleteClick('mastercard')}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Card
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-xs text-white/70">CARD NUMBER</p>
                    <p className="text-sm">**** **** **** 1761</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs text-white/70">CARD HOLDER</p>
                      <p className="text-sm">G***** *****</p>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Address Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Billing Address */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <h3 className="text-lg font-medium text-gray-800 mb-4">BILLING ADDRESS</h3>
                
                <div className="space-y-4">
                  <p className="text-sm font-semibold">G***** *****</p>
                  
                  <p className="text-sm text-gray-600">
                    East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C,
                    Flat No. 5D, Dhaka-1200, Chennai
                  </p>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Phone Number:</span> +1-202-555-0118
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Email:</span> g*****@gmail.com
                    </p>
                  </div>
                  
                  <Button variant="outline" className="mt-4 border-blue-500 text-blue-500 hover:bg-blue-50">
                    EDIT ADDRESS
                  </Button>
                </div>
              </div>
              
              {/* Shipping Address */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <h3 className="text-lg font-medium text-gray-800 mb-4">SHIPPING ADDRESS</h3>
                
                <div className="space-y-4">
                  <p className="text-sm font-semibold">G***** *****</p>
                  
                  <p className="text-sm text-gray-600">
                    East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C,
                    Flat No. 5D, Dhaka-1200, Chennai
                  </p>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Phone Number:</span> +1-202-555-0118
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Email:</span> g*****@gmail.com
                    </p>
                  </div>
                  
                  <Button variant="outline" className="mt-4 border-blue-500 text-blue-500 hover:bg-blue-50">
                    EDIT ADDRESS
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />

      {/* Delete Card Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Card</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this {cardToDelete === 'visa' ? 'Visa' : 'Mastercard'} card? 
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => {
                // Here would be the logic to delete the card
                console.log(`Deleting ${cardToDelete} card`);
                setShowDeleteDialog(false);
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CardsAndAddress;
