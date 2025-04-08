
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OrderHistory from "./pages/OrderHistory";
import CardsAndAddress from "./pages/CardsAndAddress";
import BrowsingHistory from "./pages/BrowsingHistory";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import TrackOrder from "./pages/TrackOrder";
import ShoppingCart from "./pages/ShoppingCart";
import Wishlist from "./pages/Wishlist";
import Logout from "./pages/Logout";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/account" element={<Index />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="/cards-address" element={<CardsAndAddress />} />
              <Route path="/browsing-history" element={<BrowsingHistory />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/logout" element={<Logout />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
