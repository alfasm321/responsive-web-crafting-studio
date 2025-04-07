
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Order {
  id: string;
  status: 'IN PROGRESS' | 'COMPLETED' | 'CANCELED';
  date: string;
  total: string;
  products: number;
}

const OrderHistory: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  
  const orders: Order[] = [
    { id: '#96459761', status: 'IN PROGRESS', date: 'Dec 30, 2019 07:52', total: '₹80', products: 5 },
    { id: '#71667367', status: 'COMPLETED', date: 'Dec 7, 2019 23:26', total: '₹70', products: 4 },
    { id: '#95214362', status: 'CANCELED', date: 'Dec 7, 2019 23:26', total: '₹2,300', products: 2 },
    { id: '#71667167', status: 'COMPLETED', date: 'Feb 2, 2019 19:28', total: '₹250', products: 1 },
    { id: '#51746385', status: 'COMPLETED', date: 'Dec 30, 2019 07:52', total: '₹360', products: 2 },
    { id: '#51746385', status: 'CANCELED', date: 'Dec 4, 2019 21:42', total: '₹220', products: 7 },
    { id: '#67397143', status: 'COMPLETED', date: 'Feb 2, 2019 19:28', total: '₹80', products: 1 },
    { id: '#67397143', status: 'COMPLETED', date: 'Mar 20, 2019 23:14', total: '₹160', products: 1 },
    { id: '#67397143', status: 'COMPLETED', date: 'Dec 4, 2019 21:42', total: '₹1,500', products: 3 },
    { id: '#67397143', status: 'COMPLETED', date: 'Dec 30, 2019 07:52', total: '₹1,200', products: 19 },
    { id: '#67397143', status: 'CANCELED', date: 'Dec 30, 2019 05:18', total: '₹1,500', products: 1 },
    { id: '#67397143', status: 'COMPLETED', date: 'Dec 30, 2019 07:52', total: '₹80', products: 1 }
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'status-completed';
      case 'IN PROGRESS':
        return 'status-in-progress';
      case 'CANCELED':
        return 'status-cancelled';
      default:
        return '';
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink 
            onClick={() => handlePageChange(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return pages;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'User Account', href: '/account' },
          { label: 'Dashboard', href: '/account' },
          { label: 'Order History' }
        ]} 
      />
      
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 mb-6 md:mb-0">
            <Sidebar />
          </div>
          
          <div className="flex-1">
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h2 className="text-xl font-bold mb-6">ORDER HISTORY</h2>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="py-2 px-4 text-left text-xs font-medium text-gray-500">ORDER ID</TableHead>
                      <TableHead className="py-2 px-4 text-left text-xs font-medium text-gray-500">STATUS</TableHead>
                      <TableHead className="py-2 px-4 text-left text-xs font-medium text-gray-500">DATE</TableHead>
                      <TableHead className="py-2 px-4 text-left text-xs font-medium text-gray-500">TOTAL</TableHead>
                      <TableHead className="py-2 px-4 text-right text-xs font-medium text-gray-500">ACTION</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order, index) => (
                      <TableRow key={index} className="border-b">
                        <TableCell className="py-3 px-4 text-sm">{order.id}</TableCell>
                        <TableCell className="py-3 px-4">
                          <span className={`status-badge ${getStatusClass(order.status)}`}>{order.status}</span>
                        </TableCell>
                        <TableCell className="py-3 px-4 text-sm">{order.date}</TableCell>
                        <TableCell className="py-3 px-4 text-sm">{`${order.total} (${order.products} Products)`}</TableCell>
                        <TableCell className="py-3 px-4 text-right">
                          <Button variant="ghost" className="text-blue-500 hover:text-blue-700 text-sm flex items-center ml-auto p-0">
                            View Details <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-6">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#" 
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    
                    {renderPageNumbers()}
                    
                    <PaginationItem>
                      <PaginationNext 
                        href="#" 
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm mt-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mb-1">
                    IN PROGRESS
                  </div>
                  <h3 className="text-gray-800">Order ID: <span className="font-medium">#71667167</span></h3>
                  <p className="text-sm text-gray-600">Dec 7, 2019 23:26 • 2 Products</p>
                  <p className="text-sm text-gray-800 font-medium mt-1">₹160.00 IND</p>
                </div>
                <div className="flex-shrink-0">
                  <Button variant="ghost" className="border border-gray-300 rounded-full p-2">
                    <ChevronRight className="h-5 w-5 text-rentev-orange" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderHistory;
