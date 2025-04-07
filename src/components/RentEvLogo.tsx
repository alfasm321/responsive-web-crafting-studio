
import React from 'react';

interface LogoProps {
  variant?: 'header' | 'footer';
  className?: string;
}

const RentEvLogo: React.FC<LogoProps> = ({ variant = 'header', className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="w-12 h-6 bg-rentev-purple rounded-md relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-1 bg-rentev-orange rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <div className="w-12 h-1 bg-rentev-orange rounded-full"></div>
          </div>
        </div>
        <div className="absolute top-2 left-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      {variant === 'footer' && (
        <div className="ml-2 text-2xl font-bold text-rentev-orange">
          <span>Rent</span>
          <span className="text-rentev-purple">Everything.shop</span>
        </div>
      )}
    </div>
  );
};

export default RentEvLogo;
