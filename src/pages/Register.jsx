import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('role', 'user');
    navigate('/dashboard');
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, staggerChildren: 0.1, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 px-4 bg-bg-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-lg bg-white dark:bg-zinc-900 p-10 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-border relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl mb-3">Create Account</h1>
          <p className="text-muted">Join AURA to enjoy a personalized shopping experience.</p>
        </motion.div>
        
        <form onSubmit={handleRegister} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <label className="block text-xs font-medium mb-2 text-primary/70 uppercase tracking-wider">First Name</label>
              <input type="text" className="w-full p-3 border-b-2 border-border bg-transparent text-primary transition-all duration-300 focus:border-primary outline-none focus:bg-bg-secondary/50" required placeholder="Jane" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="block text-xs font-medium mb-2 text-primary/70 uppercase tracking-wider">Last Name</label>
              <input type="text" className="w-full p-3 border-b-2 border-border bg-transparent text-primary transition-all duration-300 focus:border-primary outline-none focus:bg-bg-secondary/50" required placeholder="Doe" />
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants}>
            <label className="block text-xs font-medium mb-2 text-primary/70 uppercase tracking-wider">Email Address</label>
            <input type="email" className="w-full p-3 border-b-2 border-border bg-transparent text-primary transition-all duration-300 focus:border-primary outline-none focus:bg-bg-secondary/50" required placeholder="you@example.com" />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <label className="block text-xs font-medium mb-2 text-primary/70 uppercase tracking-wider">Password</label>
            <input type="password" className="w-full p-3 border-b-2 border-border bg-transparent text-primary transition-all duration-300 focus:border-primary outline-none focus:bg-bg-secondary/50" required placeholder="Create a strong password" />
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-start gap-3 mt-2">
            <input type="checkbox" id="terms" className="mt-1 w-4 h-4 accent-primary" required />
            <label htmlFor="terms" className="text-sm text-muted leading-relaxed">
              I agree to the <a href="#" className="text-primary font-medium hover:text-accent transition-colors">Terms of Service</a> and <a href="#" className="text-primary font-medium hover:text-accent transition-colors">Privacy Policy</a>.
            </label>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-6">
            <button type="submit" className="w-full bg-primary text-secondary py-4 font-medium uppercase tracking-widest hover:bg-accent transition-colors duration-300 relative overflow-hidden group rounded-sm shadow-md hover:shadow-lg">
              <span className="relative z-10">Create Account</span>
              <div className="absolute inset-0 h-full w-0 bg-white/20 group-hover:w-full transition-all duration-300 ease-out"></div>
            </button>
          </motion.div>
        </form>
        
        <motion.div variants={itemVariants} className="text-center mt-10">
          <p className="text-muted text-sm">
            Already have an account? <Link to="/login" className="text-primary font-bold hover:text-accent transition-colors ml-1 border-b border-primary hover:border-accent pb-0.5">Sign in</Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;
