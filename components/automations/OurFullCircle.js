'use client';

import { motion } from 'framer-motion';
import { FaLongArrowAltDown } from 'react-icons/fa';

import { Description, MainHeading } from '@/components/utils/Typography';
import AnimateUp from '../utils/animations/AnimateUp';
import AnimateUpWithBounce from '../utils/animations/AnimateUpWithBounce';

const OurFullCircle = () => {
	return (
		<div className='relative max-w-5xl mx-auto py-8'>
			{/* Rotating Circle with Arrow */}
			<motion.div
				className='absolute inset-0 flex justify-center items-center z-0'
				initial={{ rotate: 0 }}
				animate={{ rotate: 360 }}
				transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
			>
				<svg
					width='600'
					height='600'
					viewBox='0 0 600 600'
					xmlns='http://www.w3.org/2000/svg'
					className='text-primary/20 '
				>
					<defs>
						<marker
							id='arrowhead'
							markerWidth='10'
							markerHeight='10'
							refX='0'
							refY='3'
							orient='auto'
							fill='currentColor'
						>
							<path d='M0,0 L0,6 L9,3 z' />
						</marker>
					</defs>
					<path
						d='M 100 300 a 200 200 0 1 1 400 0' // Bigger arc for larger circle
						stroke='currentColor'
						strokeWidth='3' // Thinner stroke width
						fill='none'
						markerEnd='url(#arrowhead)' // Attach the arrowhead at the end of the path
					/>
				</svg>
			</motion.div>

			{/* Content with Black Background */}
			<AnimateUpWithBounce>
				<div className='relative z-10 grid gap-4 px-4 lg:py-16 '>
					<MainHeading title='Introduction to Our Full-Circle Solutions' />
					<Description description='At Latz Web Design, we go beyond building websites. We create full-circle digital solutions that help your business grow by attracting, engaging, and retaining customers through a combination of custom web design, CRM, and powerful add-ons.' />
				</div>
				<AnimateUp>
					<div className='grid gap-2 place-items-center font-semibold lg:font-black text-lg text-dark/50 mt-12 lg:mt-0'>
						<span>Take a Look Below</span>
					</div>
				</AnimateUp>
			</AnimateUpWithBounce>
		</div>
	);
};

export default OurFullCircle;
