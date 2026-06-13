import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bg-secondary pt-24 border-t border-border mt-auto">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="font-serif text-2xl tracking-widest mb-6">AURA</h3>
          <p className="text-muted text-sm leading-relaxed mb-6">
            Elevating everyday style with premium quality and sustainable fashion. Experience the new era of elegance.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-secondary hover:border-primary transition-colors">IG</a>
            <a href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-secondary hover:border-primary transition-colors">TW</a>
            <a href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-secondary hover:border-primary transition-colors">FB</a>
          </div>
        </div>
        
        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li><Link to="/menu" className="hover:text-primary hover:pl-1 transition-all">New Arrivals</Link></li>
            <li><Link to="/menu" className="hover:text-primary hover:pl-1 transition-all">Sarees</Link></li>
            <li><Link to="/menu" className="hover:text-primary hover:pl-1 transition-all">Kurtis</Link></li>
            <li><Link to="/menu" className="hover:text-primary hover:pl-1 transition-all">Lehengas</Link></li>
            <li><Link to="/menu" className="hover:text-primary hover:pl-1 transition-all">Suit Sets</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-muted">
            <li><Link to="/about" className="hover:text-primary hover:pl-1 transition-all">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary hover:pl-1 transition-all">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-primary hover:pl-1 transition-all">Store Locator</Link></li>
            <li><Link to="/contact" className="hover:text-primary hover:pl-1 transition-all">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-6">Newsletter</h4>
          <p className="text-muted text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Enter your email address" className="form-control py-3" required />
            <button type="submit" className="btn btn-primary w-full py-3">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-border py-6 text-center text-muted text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} AURA Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
