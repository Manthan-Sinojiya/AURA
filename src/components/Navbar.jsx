import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu as MenuIcon, X, Moon, Sun } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import CartDrawer from './CartDrawer';

const Navbar = ({ isSearchOpen, onSearchToggle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems, wishlistItems } = useShop();

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className="sticky top-0 w-full bg-bg-main/95 backdrop-blur-md z-50 border-b border-border h-20 flex items-center transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center w-full">
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="font-serif text-2xl font-bold tracking-widest text-primary">
          AURA
        </Link>

        {/* Desktop Navigation */}
        <nav className={`
          absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto h-[calc(100vh-5rem)] md:h-auto
          bg-bg-main md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-start
          gap-8 transition-transform duration-300 ease-in-out md:translate-x-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl md:text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/menu" onClick={() => setIsMobileMenuOpen(false)} className="text-xl md:text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors relative group">
            Shop
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl md:text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl md:text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6 text-primary">
          <button onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle Dark Mode" className="hover:text-accent transition-colors">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Animated Expandable Search Pill */}
          <div className="flex items-center">
            <div 
              className={`flex items-center bg-bg-secondary dark:bg-zinc-800 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
                isSearchOpen 
                  ? 'w-[160px] md:w-[220px] opacity-100 border border-border px-3 py-1.5' 
                  : 'w-0 opacity-0 border border-transparent px-0 py-1.5'
              }`}
            >
              <Search size={14} className="text-muted shrink-0 mr-2" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-transparent border-none outline-none text-sm text-primary placeholder:text-muted/60"
                autoFocus={isSearchOpen}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim()) {
                    onSearchToggle();
                    navigate(`/menu?search=${encodeURIComponent(e.target.value.trim())}`);
                  }
                }}
              />
              <button onClick={onSearchToggle} className="text-muted hover:text-accent transition-colors shrink-0 ml-1">
                <X size={14} strokeWidth={2} />
              </button>
            </div>
            
            <button 
              onClick={onSearchToggle} 
              aria-label="Search" 
              className={`hover:text-accent transition-all duration-300 flex items-center justify-center ${
                isSearchOpen ? 'w-0 opacity-0 overflow-hidden scale-0' : 'w-5 opacity-100 scale-100'
              }`}
            >
              <Search size={20} className="shrink-0" />
            </button>
          </div>

          <Link to="/login" aria-label="User Account" className="hover:text-accent transition-colors">
            <User size={20} />
          </Link>
          <Link to="/wishlist" aria-label="Wishlist" className="relative hover:text-accent transition-colors hidden md:block">
            <Heart size={20} />
            <span className="absolute -top-2 -right-2 bg-primary text-secondary text-[10px] w-4 h-4 flex items-center justify-center rounded-full">{wishlistCount}</span>
          </Link>
          <button onClick={() => setIsCartOpen(true)} aria-label="Shopping Cart" className="relative hover:text-accent transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-primary text-secondary text-[10px] w-4 h-4 flex items-center justify-center rounded-full">{cartCount}</span>
          </button>
        </div>
      </div>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;
