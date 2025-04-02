'use client';

import { motion } from 'framer-motion';

// LandingBackground Component
const LandingBackground = ({ x, y, length, delay, direction }) => {
	// Random thickness for lines
	const thickness = Math.random() * 4 + 1; // Thickness range between 1 and 5px

	// Define animation variants for lines
	const animation = {
		initial: {
			// x: direction === 'horizontal' ? '-100vw' : 0,
			y: direction === 'vertical' ? '-100vh' : 0,
			opacity: 0,
		},
		animate: {
			// x: direction === 'horizontal' ? '100vw' : 0,
			y: direction === 'vertical' ? '100vh' : 0,
			opacity: [0, 1, 0],
			transition: {
				duration: 5.2, // Slow animation
				ease: 'easeInOut',
				repeatDelay: delay,
				repeat: Infinity,
				repeatType: 'loop',
			},
		},
	};

	return (
		<motion.div
		style={{
		  position: 'absolute',
		  top: y,
		  left: x,
		  width: size,
		  height: size,
		  borderRadius: '50%',
		  background: 'rgba(255, 238, 101, 0.3)',
		  filter: 'blur(40px)',
		}}
		animate={{
		  x: [0, 50, -50, 0],
		  y: [0, -30, 30, 0],
		}}
		transition={{
		  duration: 15,
		  repeat: Infinity,
		  ease: 'easeInOut',
		}}
	  />
	);
};

export default LandingBackground;
