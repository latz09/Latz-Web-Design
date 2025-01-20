'use client';
import { MainHeading, TopHeading } from '@/components/utils/Typography';
// (use this if you're in Next.js app router and want a Client Component)

import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
// This imports all Font Awesome icons under the 'FaIcons' namespace
// e.g. FaIcons.FaRobot, FaIcons.FaCheck, FaIcons.FaStar, etc.

const WhyThisChatBot = ({ data }) => {
	return (
		<section className='bg-light'>
			<div className='max-w-5xl mx-auto px-4'>
				<div className='text-center mb-16'>
					<MainHeading title='Why Our AI Assistant?' theme='text-primary' />
			
				</div>

				{/* Features Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2    mx-auto  gap-16'>
					{data.map((item, index) => {
						const IconComponent = FaIcons[item.icon] || FaIcons.FaRobot;

						return (
							<motion.div
								key={index}
								className='p-6  flex flex-col  items-center text-center '
								initial={{ opacity: 0, y: 80 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.7, delay: index * 0.1 }}
							>
								<div className='mb-4 text-primary/70'>
									<IconComponent size={64} />
								</div>

								<h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-dark mb-4 '>
									{item.title}
								</h2>

								<p className='text-dark/80 leading-relaxed'>{item.description}</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default WhyThisChatBot;
