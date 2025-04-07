
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  href: string;
  isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, href, isActive = false }) => {
  return (
    <li>
      <Link to={href} className={`sidebar-menu-item ${isActive ? 'active' : ''}`}>
        <span className="mr-3">{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

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
            icon={<LayoutDashboard className="h-5 w-5" />} 
            label="Dashboard" 
            href="/account"
            isActive={path === "/" || path === "/account"}
          />
          <SidebarItem 
            icon={<ClipboardList className="h-5 w-5" />} 
            label="Order History" 
            href="/order-history"
            isActive={path === "/order-history"}
          />
          <SidebarItem 
            icon={<Truck className="h-5 w-5" />} 
            label="Track Order" 
            href="/track-order"
          />
          <SidebarItem 
            icon={<ShoppingCart className="h-5 w-5" />} 
            label="Shopping Cart" 
            href="/cart"
          />
          <SidebarItem 
            icon={<Heart className="h-5 w-5" />} 
            label="Wishlist" 
            href="/wishlist"
          />
          <SidebarItem 
            icon={<MapPin className="h-5 w-5" />} 
            label="Cards & Address" 
            href="/address"
          />
          <SidebarItem 
            icon={<History className="h-5 w-5" />} 
            label="Browsing History" 
            href="/browsing-history"
          />
          <SidebarItem 
            icon={<Settings className="h-5 w-5" />} 
            label="Settings" 
            href="/settings"
          />
          <SidebarItem 
            icon={<LogOut className="h-5 w-5" />} 
            label="Log-out" 
            href="/logout"
          />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
