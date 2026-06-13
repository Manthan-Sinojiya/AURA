import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const clickableElement = target.closest('a, button, [data-cursor]');
      
      if (clickableElement || target.classList.contains('cursor-pointer')) {
        setIsHovered(true);
        if (clickableElement?.dataset?.cursor) {
          setCursorText(clickableElement.dataset.cursor);
        } else if (clickableElement?.tagName?.toLowerCase() === 'img') {
          setCursorText('View');
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 40, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 border border-white rounded-full pointer-events-none z-[9998] hidden md:flex items-center justify-center bg-white/5 mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovered && cursorText ? 32 : 24),
          y: mousePosition.y - (isHovered && cursorText ? 32 : 24),
          width: isHovered && cursorText ? 64 : 48,
          height: isHovered && cursorText ? 64 : 48,
          scale: isHovered ? (cursorText ? 1.2 : 1.5) : 1,
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      >
        {isHovered && !cursorText && (
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-1 h-1 bg-white rounded-full"
          />
        )}
        {isHovered && cursorText && (
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-bold text-white uppercase tracking-widest"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
