'use client';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
    return (
      <div className='grid place-items-center pb-8 gap-4 absolute bottom-8 right-8'>
        <motion.div
          className='w-px h-14 bg-tertiary mb-4'
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        ></motion.div>
        <span className='mt-4 text-xs text-tertiary transform rotate-90 uppercase tracking-widest animate-pulse'>
          s c r o l l
        </span>
      </div>
    );
  };

export default ScrollIndicator;
