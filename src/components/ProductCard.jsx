import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const isLiked = isInWishlist(product.id);

  return (
    <motion.div 
      className="group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-xl overflow-hidden hover:shadow-xl dark:hover:shadow-white/10 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden bg-bg-secondary dark:bg-zinc-800 aspect-[3/4]">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover origin-center absolute inset-0"
          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <motion.img 
          src={product.image} 
          alt={`${product.name} secondary`} 
          className="w-full h-full object-cover origin-center absolute inset-0 blur-[2px] contrast-125"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.05 : 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ filter: 'hue-rotate(15deg) brightness(0.9)' }}
        />
        
        {/* Actions Overlay */}
        <div className={`absolute inset-x-0 bottom-0 p-4 flex gap-3 justify-center bg-gradient-to-t from-black/40 to-transparent transition-all duration-500 ease-out ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors ${isLiked ? 'bg-primary text-secondary' : 'bg-secondary text-primary hover:bg-primary hover:text-secondary'}`} 
            title={isLiked ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => { e.preventDefault(); addToCart(product); }}
            className="bg-secondary text-primary px-6 h-12 rounded-full flex items-center justify-center gap-2 shadow-lg font-semibold text-sm uppercase tracking-wider hover:bg-primary hover:text-secondary transition-colors" 
            title="Add to Cart"
          >
            <ShoppingBag size={18} />
            <span>Add to Cart</span>
          </motion.button>
        </div>
        
        {product.isNew && <span className="absolute top-4 left-4 bg-primary text-secondary px-3 py-1.5 text-xs font-bold uppercase tracking-widest shadow-md">New</span>}
        {product.discount && <span className="absolute top-4 right-4 bg-accent text-white px-3 py-1.5 text-xs font-bold uppercase tracking-widest shadow-md">Sale</span>}
      </div>
      
      <div className="flex flex-col text-center p-6 flex-grow dark:bg-zinc-900 transition-colors duration-300">
        <span className="text-xs text-muted dark:text-zinc-400 uppercase tracking-widest mb-3 font-semibold">{product.category}</span>
        <Link to={`/product/${product.id}`} className="font-serif text-xl mb-3 hover:text-accent transition-colors line-clamp-1 dark:text-zinc-100">
          {product.name}
        </Link>
        <div className="text-lg font-medium mt-auto dark:text-zinc-200">
          <span>₹{product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
          {product.oldPrice && (
            <span className="text-muted dark:text-zinc-500 line-through ml-3 text-sm opacity-70">₹{product.oldPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
