
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Clear local storage data
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    localStorage.removeItem('cartItems');
    
    // Show success toast - removed the icon property which caused the type error
    toast({
      title: "Successfully signed out",
      description: "You have been successfully logged out of your account.",
    });
    
    // Redirect after a short delay
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-rentev-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <LogOut className="h-8 w-8 text-rentev-orange" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Signing Out</h1>
        <p className="text-gray-600 mb-6">
          You are being securely signed out of your account.
        </p>
        <div className="flex justify-center">
          <Button 
            onClick={() => navigate('/')} 
            className="bg-rentev-orange hover:bg-rentev-orange/90"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
