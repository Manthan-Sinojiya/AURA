import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ text, speed = 20 }) => {
  return (
    <div className="w-full overflow-hidden bg-primary text-secondary py-3 flex whitespace-nowrap dark:bg-zinc-800 dark:text-zinc-100 transition-colors duration-300">
      <motion.div
        className="flex space-x-12 px-4"
        animate={{ x: [0, -1035] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="text-sm font-semibold tracking-[0.2em] uppercase shrink-0">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
