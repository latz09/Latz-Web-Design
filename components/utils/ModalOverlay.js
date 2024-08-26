'use client';


import { motion } from 'framer-motion';
import NavigationLinks from '../navigation/NavigationLinks'; // Ensure you have this component
import NavigationLogo, { LogoGuy } from '../navigation/NavigationLogo';
import NavigationContacts from '../navigation/NavigationContacts';
import Link from 'next/link';

const ModalOverlay = ({ onClose }) => {
	return (
		<motion.div
			initial={{ opacity: 1, scale: 0, originX: 1, originY: 0 }}
			animate={{ opacity: 1, scale: 1, originX: 1, originY: 0 }}
			exit={{ opacity: 0, scale: 0 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			className='fixed inset-0 bg-light backdrop-blur-md grid place-items-center h-screen text-dark '
		>
			{/* Top Bar with Logo and Close Button */}
			<div className='absolute top-0 left-0 right-0 flex justify-between items-center px-6 pt-4 lg:py-12 max-w-5xl mx-auto w-full'>
				<div onClick={onClose}>
					<LogoGuy />
				</div>
				<div className='flex items-center space-x-8'>
                    <Link href='/articles' onClick={onClose}>
					<div className='font-black text-xl text-dark tracking-wide border- border-primary'>{`View Latest Articles`}</div>
                    </Link>
					<button
						onClick={onClose}
						className='text-xl font-black hover:text-gray-700'
					>
						✕
					</button>
				</div>
			</div>

			{/* Main Modal Content */}
			<motion.div className='max-w-5xl mx-auto w-full bg-white rounded-lg p-8 relative  grid justif-center mt-8'>
				<div className='flex flex-col gap-16 lg:gap-24 lg:flex-row lg:justify-between   '>
					<div className='flex flex-col space-y-4'>
						<NavigationLinks onLinkClick={onClose} />
					</div>
					<NavigationContacts />
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ModalOverlay;


