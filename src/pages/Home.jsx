import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import MagneticButton from '../components/MagneticButton';

import heroImg from '../assets/images/hero.png';
import dressImg from '../assets/images/dress.png';
import bagImg from '../assets/images/bag.png';
import shoesImg from '../assets/images/shoes.png';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);

  const featuredProducts = [
    { id: 1, name: "Banarasi Silk Saree", category: "Sarees", price: 12500.00, image: dressImg, isNew: true },
    { id: 2, name: "Embroidered Anarkali Kurti", category: "Kurtis", price: 4500.00, image: bagImg },
    { id: 3, name: "Bridal Lehenga Choli", category: "Lehengas", price: 32000.00, oldPrice: 38000.00, image: shoesImg, discount: true }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-5rem)] min-h-[600px] flex items-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${heroImg})`, y: y1 }}
        ></motion.div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <div className="container mx-auto px-4 md:px-8 text-white max-w-2xl ml-0 md:ml-12 lg:ml-24 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6 tracking-tight">Redefining<br />Ethnic Elegance</h1>
            <p className="text-lg md:text-xl font-light mb-10 opacity-90 leading-relaxed">Discover our exquisite collection of ethnic wear crafted for the modern Indian woman who values both tradition and aesthetics.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <MagneticButton>
                <Link to="/menu" data-cursor="Shop" className="btn bg-white text-black hover:bg-white/90 group relative overflow-hidden inline-flex w-full sm:w-auto">
                  <span className="relative z-10">Shop Collection</span>
                  <span className="absolute inset-0 bg-secondary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/about" data-cursor="Story" className="btn bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all duration-300 inline-flex w-full sm:w-auto">Our Story</Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-6 bg-primary text-secondary overflow-hidden relative w-full border-y border-accent/20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex w-max"
        >
          {Array(6).fill().map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 text-xl md:text-2xl font-serif tracking-widest uppercase whitespace-nowrap">
              <span>ETHNIC ELEGANCE</span>
              <span className="text-accent text-3xl">✦</span>
              <span>MODERN MINIMALISM</span>
              <span className="text-accent text-3xl">✦</span>
              <span>PREMIUM QUALITY</span>
              <span className="text-accent text-3xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Categories */}
      <section className="py-32 bg-bg-main transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 relative"
          >
            <h2 className="text-4xl md:text-5xl font-serif inline-block relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-primary">Shop by Category</h2>
            <p className="mt-8 text-muted max-w-2xl mx-auto">Discover pieces tailored to your personal style and occasion.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}>
              <Link to="/menu?category=sarees" data-cursor="View" className="group block h-[400px] md:h-[500px] relative flex items-end p-8 overflow-hidden bg-bg-secondary rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
                <img src={dressImg} alt="Sarees" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="relative z-20 text-secondary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-4xl font-serif mb-3">Sarees</h3>
                  <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-secondary/80 group-hover:text-accent transition-colors">Shop Now <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" /></span>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link to="/menu?category=kurtis" className="group block h-[400px] md:h-[500px] relative flex items-end p-8 overflow-hidden bg-bg-secondary rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
                <img src={shoesImg} alt="Kurtis" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="relative z-20 text-secondary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-4xl font-serif mb-3">Kurtis</h3>
                  <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-secondary/80 group-hover:text-accent transition-colors">Shop Now <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" /></span>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link to="/menu?category=lehengas" className="group block h-[400px] md:h-[500px] relative flex items-end p-8 overflow-hidden bg-bg-secondary rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
                <img src={bagImg} alt="Lehengas" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="relative z-20 text-secondary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-4xl font-serif mb-3">Lehengas</h3>
                  <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-secondary/80 group-hover:text-accent transition-colors">Shop Now <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" /></span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-24 bg-white dark:bg-zinc-900 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 relative"
          >
            <h2 className="text-4xl md:text-5xl font-serif inline-block relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-primary">Trending Now</h2>
            <p className="mt-8 text-muted max-w-2xl mx-auto">Explore our most coveted pieces, loved by modern minimalists everywhere.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {featuredProducts.map(product => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-20"
          >
            <Link to="/menu" className="btn btn-outline border-2 hover:scale-105 transition-all duration-300">View All Products</Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-32 bg-bg-secondary transition-colors duration-300 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center"
          >
            <motion.div variants={itemVariants} className="px-4 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto border-2 border-primary rounded-full flex items-center justify-center mb-6 text-2xl font-serif">S</div>
              <h4 className="font-sans text-xl uppercase tracking-wider mb-4 font-semibold">Sustainable</h4>
              <p className="text-muted leading-relaxed">Ethically sourced materials and conscious manufacturing processes for a better tomorrow.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="px-4 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto border-2 border-primary rounded-full flex items-center justify-center mb-6 text-2xl font-serif">Q</div>
              <h4 className="font-sans text-xl uppercase tracking-wider mb-4 font-semibold">Premium Quality</h4>
              <p className="text-muted leading-relaxed">Crafted with unwavering attention to detail and designed to last a lifetime.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="px-4 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto border-2 border-primary rounded-full flex items-center justify-center mb-6 text-2xl font-serif">G</div>
              <h4 className="font-sans text-xl uppercase tracking-wider mb-4 font-semibold">Global Shipping</h4>
              <p className="text-muted leading-relaxed">Complimentary express shipping on all orders over ₹2000 worldwide.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
