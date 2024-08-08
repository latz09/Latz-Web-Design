'use client';

import { motion } from 'framer-motion';

// LandingBackground Component
const LandingBackground = ({ x, y, length, delay, direction }) => {
	// Random thickness for lines
	const thickness = Math.random() * 4 + 1; // Thickness range between 1 and 5px

	// Define animation variants for lines
	const animation = {
		initial: {
			x: direction === 'horizontal' ? '-100vw' : 0,
			y: direction === 'vertical' ? '-100vh' : 0,
			opacity: 0,
		},
		animate: {
			x: direction === 'horizontal' ? '100vw' : 0,
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
				width: direction === 'horizontal' ? length : `${thickness}px`,
				height: direction === 'vertical' ? length : `${thickness}px`,
				backgroundColor: 'rgba(24, 161, 173, .5)', // Semi-transparent color
				borderRadius: '1px',
				filter: 'blur(1px)', // Apply blur effect for motion blur
			}}
			variants={animation}
			initial='initial'
			animate='animate'
		/>
	);
};

export default LandingBackground;
