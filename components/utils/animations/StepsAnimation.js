'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StepsAnimation = ({ children }) => {
  const [centeredIndex, setCenteredIndex] = useState(null); // Track the index of the centered step
  const stepRefs = useRef([]); // Refs for each child

  useEffect(() => {
    const handleScroll = () => {
      let closestIndex = null;
      let closestDistance = Number.MAX_VALUE;

      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const distance = Math.abs(
            rect.top + rect.height / 2 - window.innerHeight / 2
          );

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setCenteredIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set centered index

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <motion.div
          ref={(el) => (stepRefs.current[index] = el)}
          key={index}
          className="flex items-center mb-12 text-light"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: centeredIndex === index ? 1 : 0.4 }}
          transition={{ duration: 0.5 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default StepsAnimation;
