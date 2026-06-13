import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/hero.png';
import ScrollReveal from '../components/ScrollReveal';
const About = () => {
  return (
    <div className="animate-fade-in py-12 md:py-24">
      <ScrollReveal>
        <section className="container mx-auto px-4 md:px-8 mb-24">
          <div className="text-center mb-16 relative">
            <h1 className="text-4xl md:text-5xl font-serif inline-block relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-primary">Our Story</h1>
          </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={heroImg} alt="AURA Team" className="w-full h-auto rounded object-cover shadow-lg aspect-square lg:aspect-auto" />
          </div>
          <div className="lg:pl-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Elegance in Simplicity</h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Founded in 2026, AURA was born from a desire to create a wardrobe that transcends seasonal trends. We believe in the power of minimalist design, exceptional quality, and ethical manufacturing.
            </p>
            <p className="text-lg text-muted mb-10 leading-relaxed">
              Our collections are thoughtfully curated to offer versatile pieces that seamlessly integrate into your daily life, empowering you to express your unique style with confidence and grace.
            </p>
            <Link to="/menu" className="btn btn-primary">Discover the Collection</Link>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <section className="bg-bg-secondary py-24">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">The Craftsmanship</h2>
          <p className="text-lg text-muted leading-relaxed">
            Every piece in our collection is a testament to meticulous craftsmanship. We source only the finest sustainable materials, partnering with artisans who share our commitment to uncompromising quality. The result is a selection of garments that not only look exquisite but stand the test of time.
          </p>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
};

export default About;
