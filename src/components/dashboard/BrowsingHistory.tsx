
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ProductProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

const ProductCard: React.FC<ProductProps> = ({ image, title, price, description }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden border shadow-sm">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-2 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-rentev-orange font-medium">₹ {price}</span>
          <button className="bg-white border border-rentev-orange text-rentev-orange px-3 py-1 rounded text-sm">
            Rent it
          </button>
        </div>
      </div>
    </div>
  );
};

const BrowsingHistory: React.FC = () => {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      title: "Modern Floor Lamp",
      price: "250/day",
      description: "Height 20\" H 31\", Color: Wood, Material: Wood and Polish"
    },
    {
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFuaW5nfGVufDB8fDB8fHww&w=1000&q=80",
      title: "Prime Mop with Big Wheels and Stainless Steel Wringer",
      price: "500/day",
      description: "Stainless steel wringer spin mop with big wheel, puller handle, bucket floor, spinning and mopping system 360-degree rotational refills, big size"
    }
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-500">BROWSING HISTORY</h3>
        <button className="flex items-center text-rentev-orange text-sm">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default BrowsingHistory;
