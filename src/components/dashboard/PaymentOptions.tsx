
import React from 'react';
import { CreditCard, PlusCircle } from 'lucide-react';

const PaymentOptions: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-500">PAYMENT OPTION</h3>
        <button className="flex items-center text-rentev-orange text-sm">
          Add Card <PlusCircle className="h-4 w-4 ml-1" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#194E77] text-white p-4 rounded-md">
          <div className="flex justify-between mb-6">
            <div>
              <p className="text-xs text-gray-300">CARD NUMBER</p>
              <p className="text-sm">**** **** **** 3814</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-gray-300">CARD HOLDER</p>
              <p className="text-sm">G***** *****</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-md">
          <div className="flex justify-between mb-6">
            <div>
              <p className="text-xs text-white/70">CARD NUMBER</p>
              <p className="text-sm">**** **** **** 1761</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-white/70">CARD HOLDER</p>
              <p className="text-sm">G***** *****</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
