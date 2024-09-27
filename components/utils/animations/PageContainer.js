'use client';

import { motion } from 'framer-motion';
const PageContainer = ({ children, className }) => {
	return (
		<div className=" mt-[15vh] grid gap-24 ">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1.1 }}
				className={`grid gap-24 ${className}`}
			>
				{children}
			</motion.div>
		</div>
	);
};

export default PageContainer;