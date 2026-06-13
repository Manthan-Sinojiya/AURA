import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import ProductDetails from './pages/ProductDetails';
import { ShopProvider } from './context/ShopContext';
import SmoothScroll from './components/SmoothScroll';
import { Toaster } from 'sonner';
import Marquee from './components/Marquee';
import PageTransition from './components/PageTransition';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <ShopProvider>
      <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-bg-main text-primary font-sans selection:bg-accent selection:text-white cursor-none md:cursor-auto transition-colors duration-300">
        <Toaster position="bottom-right" richColors />
        <CustomCursor />
        <div className="w-full relative z-[60]">
          <Marquee text="FREE SHIPPING ON ORDERS OVER ₹5000 • NEW ARRIVALS • " speed={30} />
        </div>
        <Navbar isSearchOpen={isSearchOpen} onSearchToggle={() => setIsSearchOpen(!isSearchOpen)} />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/menu" element={<PageTransition><Menu /></PageTransition>} />
              <Route path="/product/:id" element={<PageTransition><ProductDetails /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
              <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
              <Route path="/cart" element={<PageTransition><Cart /></PageTransition>} />
              <Route path="/wishlist" element={<PageTransition><Wishlist /></PageTransition>} />
              <Route path="/admin" element={<PageTransition><AdminDashboard /></PageTransition>} />
              <Route path="/dashboard" element={<PageTransition><UserDashboard /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
      </SmoothScroll>
    </ShopProvider>
  );
}

export default App;
