import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
const Contact = () => {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <ScrollReveal>
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16 relative">
          <h1 className="text-4xl md:text-5xl font-serif inline-block relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-primary">Get in Touch</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <div className="pr-0 lg:pr-8">
            <h3 className="text-3xl font-serif mb-6">We're here to help.</h3>
            <p className="text-muted mb-10 text-lg leading-relaxed">
              Whether you have a question about our products, need assistance with an order, or just want to share your thoughts, our team is ready to assist you.
            </p>
            
            <div className="mb-10">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Customer Service</h4>
              <p className="text-muted mb-2">Email: support@aurafashion.com</p>
              <p className="text-muted mb-2">Phone: +1 (800) 123-4567</p>
              <p className="text-muted">Hours: Mon - Fri, 9am - 6pm EST</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Flagship Store</h4>
              <p className="text-muted leading-relaxed">123 Fashion Avenue<br />New York, NY 10012</p>
            </div>
          </div>
          
          <div className="bg-bg-secondary p-8 md:p-12">
            <form className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="form-control" placeholder="Your full name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="form-control" placeholder="Your email address" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" className="form-control" placeholder="What is this regarding?" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea className="form-control resize-y" rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full mt-4">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </div>
  );
};

export default Contact;
