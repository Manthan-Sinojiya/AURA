import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useShop();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="animate-fade-in py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-serif inline-block relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-primary">Shopping Cart</h1>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Cart Items */}
          <div className="flex-grow">
            {cartItems.length > 0 && (
              <div className="hidden md:flex justify-between text-sm font-semibold uppercase tracking-wider text-muted border-b border-border pb-4 mb-8">
                <span>Product</span>
                <div className="flex gap-16 pr-8">
                  <span>Quantity</span>
                  <span>Total</span>
                </div>
              </div>
            )}
            
            {cartItems.map(item => (
              <div key={item.id} className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-border mb-6 gap-6 md:gap-0">
                <div className="flex gap-6 items-center w-full md:w-auto">
                  <img src={item.image} alt={item.name} className="w-24 h-32 object-cover bg-bg-secondary" />
                  <div>
                    <h3 className="font-serif text-xl mb-2">{item.name}</h3>
                    <p className="text-muted text-sm mb-2">Size: {item.size}</p>
                    <p className="font-medium">₹{item.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center w-full md:w-auto md:gap-16">
                  <div className="flex items-center border border-border h-12">
                    <button onClick={() => updateQuantity(item.id, -1)} className="px-4 text-muted hover:text-primary transition-colors"><Minus size={16} /></button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="px-4 text-muted hover:text-primary transition-colors"><Plus size={16} /></button>
                  </div>
                  <div className="font-semibold text-lg min-w-[80px] text-right md:text-left">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-muted hover:text-red-500 transition-colors p-2"><Trash2 size={20} /></button>
                </div>
              </div>
            ))}

            {cartItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted mb-6 text-xl">Your cart is empty.</p>
                <Link to="/menu" className="btn btn-primary">Continue Shopping</Link>
              </div>
            )}
          </div>
          
          {/* Order Summary */}
          <div className="w-full lg:w-96 shrink-0 h-fit bg-bg-secondary p-8 lg:p-10">
            <h3 className="font-serif text-2xl mb-8 border-b border-border pb-4">Order Summary</h3>
            
            <div className="flex justify-between mb-4">
              <span className="text-muted">Subtotal</span>
              <span className="font-medium">₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-muted">Shipping</span>
              <span className="text-sm">Calculated at checkout</span>
            </div>
            
            <div className="flex justify-between mt-8 pt-6 border-t border-border font-semibold text-xl">
              <span>Total</span>
              <span>₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            </div>
            
            <button className="btn btn-primary w-full mt-10" disabled={cartItems.length === 0}>Proceed to Checkout</button>
            <div className="text-center mt-6">
              <Link to="/menu" className="text-sm text-muted hover:text-primary underline transition-colors">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
