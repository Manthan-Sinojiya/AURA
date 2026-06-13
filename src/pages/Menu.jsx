import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

import dressImg from '../assets/images/dress.png';
import bagImg from '../assets/images/bag.png';
import shoesImg from '../assets/images/shoes.png';

const Menu = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const initialCategory = queryParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(
    initialCategory.toLowerCase() === 'all' ? 'All' : initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1)
  );
  const [sortOption, setSortOption] = useState('Newest Arrivals');

  const allProducts = [
    { id: 1, name: "Banarasi Silk Saree", category: "Sarees", price: 12500.00, image: dressImg, isNew: true },
    { id: 2, name: "Embroidered Anarkali Kurti", category: "Kurtis", price: 4500.00, image: bagImg },
    { id: 3, name: "Bridal Lehenga Choli", category: "Lehengas", price: 32000.00, oldPrice: 38000.00, image: shoesImg, discount: true },
    { id: 4, name: "Cotton Printed Suit Set", category: "Suit Sets", price: 2100.00, image: dressImg },
    { id: 5, name: "Chikankari Georgette Kurti", category: "Kurtis", price: 3200.00, image: bagImg },
    { id: 6, name: "Kanjeevaram Silk Saree", category: "Sarees", price: 18000.00, image: shoesImg }
  ];

  const categories = ['All', 'Sarees', 'Kurtis', 'Lehengas', 'Suit Sets'];

  const filteredAndSortedProducts = useMemo(() => {
    let result = allProducts;
    
    // Filter
    if (activeCategory !== 'All') {
      result = result.filter(product => product.category.toLowerCase() === activeCategory.toLowerCase());
    }

    // Sort
    if (sortOption === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'Newest Arrivals') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [allProducts, activeCategory, sortOption]);

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
    >
      <div className="bg-bg-secondary py-16 md:py-24 text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">The Collection</h1>
        <p className="text-muted text-lg">Explore our curated selection of timeless pieces.</p>
      </div>

      <div className="container mx-auto px-4 md:px-8 mb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="mb-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 border-b border-border pb-2">Categories</h4>
              <ul className="flex flex-col gap-3">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left w-full ${activeCategory === cat ? 'text-primary font-medium' : 'text-muted hover:text-primary transition-colors'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 border-b border-border pb-2">Sort By</h4>
              <select 
                className="form-control py-3 text-sm cursor-pointer"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="Newest Arrivals">Newest Arrivals</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredAndSortedProducts.map((product, index) => (
                  <ScrollReveal key={product.id} delay={index * 0.1}>
                    <ProductCard product={product} />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-muted">
                <p>No products found in this category.</p>
                <button onClick={() => setActiveCategory('All')} className="mt-4 text-primary underline">View All Products</button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
