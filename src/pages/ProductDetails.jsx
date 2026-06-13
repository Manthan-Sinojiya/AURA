import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ShoppingBag, Heart, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import dressImg from '../assets/images/dress.png';
import bagImg from '../assets/images/bag.png';
import shoesImg from '../assets/images/shoes.png';

const allProducts = [
  { id: 1, name: "Banarasi Silk Saree", category: "Sarees", price: 12500.00, images: [dressImg, bagImg, shoesImg], isNew: true, description: "An authentic handwoven Banarasi silk saree featuring intricate zari work. Perfect for weddings and grand festive occasions. Comes with a matching unstitched blouse piece." },
  { id: 2, name: "Embroidered Anarkali Kurti", category: "Kurtis", price: 4500.00, images: [bagImg, shoesImg, dressImg], description: "A beautiful floor-length Anarkali kurti crafted from premium georgette. Adorned with delicate thread embroidery and mirror work detailing around the neckline." },
  { id: 3, name: "Bridal Lehenga Choli", category: "Lehengas", price: 32000.00, oldPrice: 38000.00, images: [shoesImg, bagImg, dressImg], discount: true, description: "A stunning heavy bridal lehenga in rich velvet, embellished with traditional zardosi and sequence embroidery. Includes a matching designer blouse and a net dupatta." },
  { id: 4, name: "Cotton Printed Suit Set", category: "Suit Sets", price: 2100.00, images: [dressImg, shoesImg, bagImg], description: "A comfortable yet elegant pure cotton suit set featuring traditional block prints. Includes a straight-cut kurta, matching pants, and a soft mulmul dupatta. Ideal for daily or office wear." },
  { id: 5, name: "Chikankari Georgette Kurti", category: "Kurtis", price: 3200.00, images: [bagImg, dressImg, shoesImg], description: "A timeless lucknowi chikankari kurti on a soft pastel georgette base. Features exquisite hand-embroidery that exudes elegance and grace." },
  { id: 6, name: "Kanjeevaram Silk Saree", category: "Sarees", price: 18000.00, images: [shoesImg, dressImg, bagImg], description: "A classic authentic Kanjeevaram silk saree directly from the looms of South India. Features a contrasting temple border and a rich golden pallu." }
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  
  const product = allProducts.find(p => p.id === parseInt(id));
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');

  useEffect(() => {
    if (!product) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }, 4000); // Auto scroll every 4 seconds
    
    return () => clearInterval(timer);
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/menu')} className="btn btn-primary">Back to Shop</button>
      </div>
    );
  }

  const isLiked = isInWishlist(product.id);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="py-12 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-8">
        
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8">
          <ArrowLeft size={20} /> Back
        </button>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Image Carousel */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="relative aspect-[3/4] bg-bg-secondary overflow-hidden group rounded-xl shadow-sm">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={product.images[currentImageIndex]} 
                  alt={product.name} 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
              
              {/* Carousel Controls */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-zinc-900/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white dark:hover:bg-zinc-800 text-primary hover:scale-110 shadow-lg z-10"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-zinc-900/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white dark:hover:bg-zinc-800 text-primary hover:scale-110 shadow-lg z-10"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-24 h-32 shrink-0 overflow-hidden rounded-md transition-all duration-300 ${currentImageIndex === idx ? 'border-2 border-primary scale-105 shadow-md' : 'border border-border opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-sm text-muted uppercase tracking-wider mb-3 font-semibold">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">{product.name}</h1>
              
              <div className="text-3xl font-medium mb-8 flex items-end gap-4">
                <span>₹{product.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                {product.oldPrice && (
                  <span className="text-muted line-through text-xl opacity-70 mb-1">₹{product.oldPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                )}
              </div>
              
              <p className="text-lg text-muted leading-relaxed mb-10 border-b border-border pb-10">
                {product.description}
              </p>
            </motion.div>
            
            {/* Size Selector */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-10"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold uppercase tracking-wider text-sm">Select Size</span>
                <button className="text-sm text-muted underline hover:text-primary transition-colors">Size Guide</button>
              </div>
              <div className="flex gap-3 flex-wrap">
                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 flex items-center justify-center rounded-md font-medium text-lg transition-all duration-300 ${selectedSize === size ? 'bg-primary text-secondary shadow-lg scale-105' : 'bg-bg-secondary text-primary hover:bg-border'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>
            
            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex gap-4 mt-auto"
            >
              <button 
                onClick={() => addToCart({...product, size: selectedSize})} 
                className="btn btn-primary flex-1 py-4 flex items-center justify-center gap-3 text-lg rounded-md hover:shadow-xl transition-all"
              >
                <ShoppingBag size={22} /> Add to Cart
              </button>
              <button 
                onClick={() => toggleWishlist(product)} 
                className={`w-16 h-16 shrink-0 flex items-center justify-center rounded-md transition-all duration-300 ${isLiked ? 'bg-primary text-secondary shadow-lg' : 'bg-bg-secondary text-primary hover:bg-border'}`}
                title={isLiked ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                <Heart size={26} fill={isLiked ? "currentColor" : "none"} className={isLiked ? "scale-110 transition-transform" : ""} />
              </button>
            </motion.div>
            
            {/* Additional Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-12 space-y-5 text-sm text-muted"
            >
              <div className="flex justify-between border-t border-border pt-5 group hover:text-primary transition-colors cursor-pointer">
                <span className="font-semibold uppercase tracking-wider">Materials & Care</span>
                <span>+</span>
              </div>
              <div className="flex justify-between border-t border-border pt-5 group hover:text-primary transition-colors cursor-pointer">
                <span className="font-semibold uppercase tracking-wider">Shipping & Returns</span>
                <span>+</span>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
