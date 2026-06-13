import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';

const Wishlist = () => {
  const { wishlistItems } = useShop();

  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-serif inline-block relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-primary">Your Wishlist</h1>
          <p className="text-muted text-lg mt-8">Items you've saved for later.</p>
        </div>
        
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {wishlistItems.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-bg-secondary">
            <p className="text-xl text-muted mb-8">Your wishlist is currently empty.</p>
            <Link to="/menu" className="btn btn-primary">Continue Shopping</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
