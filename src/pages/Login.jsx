import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'Admin@123') {
      localStorage.setItem('role', 'admin');
      navigate('/admin');
    } else if (password === 'user123') {
      localStorage.setItem('role', 'user');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 px-4 bg-bg-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md bg-white dark:bg-zinc-900 p-10 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-border relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl mb-3">Welcome Back</h1>
          <p className="text-muted">Enter your details to access your account.</p>
        </motion.div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <motion.div variants={itemVariants}>
            <label className="block text-xs font-medium mb-2 text-primary/70 uppercase tracking-wider">Email Address</label>
            <input
              type="email"
              className="w-full p-3 border-b-2 border-border bg-transparent text-primary transition-all duration-300 focus:border-primary outline-none focus:bg-bg-secondary/50"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-medium text-primary/70 uppercase tracking-wider">Password</label>
              <a href="#" className="text-xs text-accent hover:text-primary transition-colors font-medium tracking-wide">Forgot password?</a>
            </div>
            <input
              type="password"
              className="w-full p-3 border-b-2 border-border bg-transparent text-primary transition-all duration-300 focus:border-primary outline-none focus:bg-bg-secondary/50"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>
          <motion.div variants={itemVariants} className="mt-6">
            <button type="submit" className="w-full bg-primary text-secondary py-4 font-medium uppercase tracking-widest hover:bg-accent transition-colors duration-300 relative overflow-hidden group rounded-sm shadow-md hover:shadow-lg">
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 h-full w-0 bg-white/20 group-hover:w-full transition-all duration-300 ease-out"></div>
            </button>
          </motion.div>
        </form>

        <motion.div variants={itemVariants} className="text-center mt-10">
          <p className="text-muted text-sm">
            Don't have an account? <Link to="/register" className="text-primary font-bold hover:text-accent transition-colors ml-1 border-b border-primary hover:border-accent pb-0.5">Create one</Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
