
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Eye, EyeOff } from 'lucide-react';

const SettingsForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<{current: boolean, new: boolean, confirm: boolean}>({
    current: false,
    new: false,
    confirm: false
  });

  const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="space-y-8">
      {/* Profile Information Section */}
      <section className="bg-white rounded-md p-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop"
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="display-name" className="block text-sm font-medium text-gray-700 mb-1">Display name</label>
              <Input id="display-name" defaultValue="GXXXXX" />
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <Input id="username" defaultValue="XXXXX" />
            </div>

            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Input id="full-name" defaultValue="GXXXXX" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input id="email" defaultValue="gxxxxx@gmail.com" />
            </div>

            <div>
              <label htmlFor="secondary-email" className="block text-sm font-medium text-gray-700 mb-1">Secondary Email</label>
              <Input id="secondary-email" defaultValue="gxxxx1234@gmail.com" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <Input id="phone" defaultValue="+91 99999 99999" />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country/Region</label>
              <Select defaultValue="Chennai">
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Chennai">Chennai</SelectItem>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <Select defaultValue="xxxx">
                <SelectTrigger>
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="xxxx">xxxx</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
              <Select defaultValue="xx07">
                <SelectTrigger>
                  <SelectValue placeholder="Select zip" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="xx07">xx07</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center md:justify-start">
          <Button className="bg-rentev-orange hover:bg-orange-600">SAVE CHANGES</Button>
        </div>
      </section>

      {/* Billing Address Section */}
      <section className="bg-white rounded-md p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">BILLING ADDRESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="billing-first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <Input id="billing-first-name" defaultValue="xxx" />
          </div>

          <div>
            <label htmlFor="billing-last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <Input id="billing-last-name" defaultValue="xxxx" />
          </div>

          <div>
            <label htmlFor="billing-company" className="block text-sm font-medium text-gray-700 mb-1">Company Name (Optional)</label>
            <Input id="billing-company" />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="billing-address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <Textarea id="billing-address" defaultValue="Road No. 13/A, House no. 130/C, Flat No. 5D" />
          </div>

          <div>
            <label htmlFor="billing-country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <Select defaultValue="Bangladesh">
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="Pakistan">Pakistan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="billing-region" className="block text-sm font-medium text-gray-700 mb-1">Region/State</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="state1">State 1</SelectItem>
                <SelectItem value="state2">State 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="billing-city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <Select defaultValue="xxxx">
              <SelectTrigger>
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xxxx">xxxx</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="billing-zip" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
            <Select defaultValue="xx07">
              <SelectTrigger>
                <SelectValue placeholder="Select zip" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xx07">xx07</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="billing-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input id="billing-email" defaultValue="gxxxxx123@gmail.com" />
          </div>

          <div>
            <label htmlFor="billing-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <Input id="billing-phone" defaultValue="+91 xxxxxxxx" />
          </div>
        </div>

        <div className="mt-6">
          <Button className="bg-rentev-orange hover:bg-orange-600">SAVE CHANGES</Button>
        </div>
      </section>

      {/* Shipping Address Section */}
      <section className="bg-white rounded-md p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">SHIPPING ADDRESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="shipping-first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <Input id="shipping-first-name" defaultValue="xxxx" />
          </div>

          <div>
            <label htmlFor="shipping-last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <Input id="shipping-last-name" defaultValue="xxxx" />
          </div>

          <div>
            <label htmlFor="shipping-company" className="block text-sm font-medium text-gray-700 mb-1">Company Name (Optional)</label>
            <Input id="shipping-company" />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="shipping-address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <Textarea id="shipping-address" defaultValue="Road No. 13/A, House no. 130/C, Flat No. 5D" />
          </div>

          <div>
            <label htmlFor="shipping-country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <Select defaultValue="Bangladesh">
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="Pakistan">Pakistan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="shipping-region" className="block text-sm font-medium text-gray-700 mb-1">Region/State</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="state1">State 1</SelectItem>
                <SelectItem value="state2">State 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="shipping-city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <Select defaultValue="xxxx">
              <SelectTrigger>
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xxxx">xxxx</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="shipping-zip" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
            <Select defaultValue="xx07">
              <SelectTrigger>
                <SelectValue placeholder="Select zip" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xx07">xx07</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="shipping-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input id="shipping-email" defaultValue="gxxxxx123@gmail.com" />
          </div>

          <div>
            <label htmlFor="shipping-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <Input id="shipping-phone" defaultValue="+91 xxxxxxxx" />
          </div>
        </div>

        <div className="mt-6">
          <Button className="bg-rentev-orange hover:bg-orange-600">SAVE CHANGES</Button>
        </div>
      </section>

      {/* Change Password Section */}
      <section className="bg-white rounded-md p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">CHANGE PASSWORD</h2>
        <div className="space-y-4 max-w-lg">
          <div className="relative">
            <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <div className="relative">
              <Input 
                id="current-password" 
                type={showPassword.current ? "text" : "password"} 
              />
              <button 
                type="button"
                onClick={() => togglePasswordVisibility('current')}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword.current ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div>
            <Button className="bg-rentev-orange hover:bg-orange-600">OTP VERIFY</Button>
          </div>

          <div className="relative">
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <div className="relative">
              <Input 
                id="new-password" 
                type={showPassword.new ? "text" : "password"} 
              />
              <button 
                type="button"
                onClick={() => togglePasswordVisibility('new')}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword.new ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">8+ characters</p>
          </div>

          <div className="relative">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <div className="relative">
              <Input 
                id="confirm-password" 
                type={showPassword.confirm ? "text" : "password"} 
              />
              <button 
                type="button"
                onClick={() => togglePasswordVisibility('confirm')}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword.confirm ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div>
            <Button className="bg-rentev-orange hover:bg-orange-600">CHANGE PASSWORD</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SettingsForm;
