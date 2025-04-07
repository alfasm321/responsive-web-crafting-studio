
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="bg-gray-100 py-2 px-4 md:px-8 lg:px-16">
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link to="/" className="text-gray-600 hover:text-rentev-orange">
            <Home className="h-4 w-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
            {item.href ? (
              <Link to={item.href} className="text-gray-600 hover:text-rentev-orange text-sm">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-800 text-sm">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
