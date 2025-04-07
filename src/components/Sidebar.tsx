
import React from 'react';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Truck, 
  ShoppingCart, 
  Heart, 
  MapPin, 
  History, 
  Settings, 
  LogOut 
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isActive = false }) => {
  return (
    <li>
      <a href="#" className={`sidebar-menu-item ${isActive ? 'active' : ''}`}>
        <span className="mr-3">{icon}</span>
        <span>{label}</span>
      </a>
    </li>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-full md:w-64 bg-white p-4 border-r">
      <div className="bg-rentev-orange text-white p-3 rounded-md mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <LayoutDashboard className="h-5 w-5 mr-2" />
          Dashboard
        </h2>
      </div>
      
      <nav>
        <ul className="space-y-1">
          <SidebarItem 
            icon={<ClipboardList className="h-5 w-5" />} 
            label="Order History" 
          />
          <SidebarItem 
            icon={<Truck className="h-5 w-5" />} 
            label="Track Order" 
          />
          <SidebarItem 
            icon={<ShoppingCart className="h-5 w-5" />} 
            label="Shopping Cart" 
          />
          <SidebarItem 
            icon={<Heart className="h-5 w-5" />} 
            label="Wishlist" 
          />
          <SidebarItem 
            icon={<MapPin className="h-5 w-5" />} 
            label="Cards & Address" 
          />
          <SidebarItem 
            icon={<History className="h-5 w-5" />} 
            label="Browsing History" 
          />
          <SidebarItem 
            icon={<Settings className="h-5 w-5" />} 
            label="Settings" 
          />
          <SidebarItem 
            icon={<LogOut className="h-5 w-5" />} 
            label="Log-out" 
          />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
