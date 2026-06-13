import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart } = useShop();
  
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[2000]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full md:w-[400px] h-[100vh] bg-white dark:bg-zinc-900 z-[2001] shadow-2xl flex flex-col border-l border-border dark:border-zinc-800"
          >
            {/* Header */}
            <div className="px-6 py-6 border-b border-border dark:border-zinc-800 flex justify-between items-center">
              <h2 className="font-serif text-2xl dark:text-white flex items-center gap-2">
                <ShoppingBag /> Your Cart
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors dark:text-white">
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50 dark:text-zinc-300">
                  <ShoppingBag size={48} className="mb-4" />
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 border-b border-border dark:border-zinc-800 pb-6 last:border-0">
                    <div className="w-24 h-32 bg-gray-100 dark:bg-zinc-800 rounded-md overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-lg dark:text-white line-clamp-2">{item.name}</h3>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 p-1 hover:bg-red-50 dark:hover:bg-red-900/20 rounded">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-sm text-muted dark:text-zinc-400 mt-1">Size: {item.size}</p>
                      <div className="mt-auto flex justify-between items-center">
                        <div className="flex items-center border border-border dark:border-zinc-700 rounded-md">
                          <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-zinc-800 dark:text-white"><Minus size={14} /></button>
                          <span className="px-3 py-1 font-medium dark:text-white text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 hover:bg-gray-100 dark:hover:bg-zinc-800 dark:text-white"><Plus size={14} /></button>
                        </div>
                        <span className="font-medium dark:text-white text-lg">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-border dark:border-zinc-800 p-6 bg-gray-50 dark:bg-zinc-900/50">
                <div className="flex justify-between mb-4 text-lg font-medium dark:text-white">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>
                <p className="text-sm text-muted dark:text-zinc-400 mb-6 text-center">Shipping and taxes calculated at checkout.</p>
                <Link to="/cart" onClick={onClose} className="w-full py-4 bg-primary text-secondary dark:bg-white dark:text-primary rounded-sm font-semibold uppercase tracking-wider hover:bg-accent dark:hover:bg-accent dark:hover:text-white hover:text-white transition-colors flex justify-center items-center">
                  Checkout Now
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
