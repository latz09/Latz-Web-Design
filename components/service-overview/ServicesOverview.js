'use client';

import React from 'react';
import {
	FaCode,
	FaCog,
	FaRocket,
	FaSearch,
	FaLaptop,
	FaCloud,
	FaPenFancy,
	FaMapMarkerAlt

} from 'react-icons/fa';
import { Description, MainHeading, TopHeading } from '../utils/Typography';
import AnimateUp from '../utils/animations/AnimateUp';
import { motion } from 'framer-motion';

const SERVICES_WRAPPER_CLASSES =
	'max-w-7xl mx-auto grid gap-x-8 gap-y-16 lg:gap-x-16 lg:gap-y-24 md:grid-cols-2 lg:grid-cols-3 text-center ';

const SERVICE_CARD_CLASSES =
	'flex flex-col items-center gap-4 transition duration-500';

const iconMap = {
	FaLaptop: FaLaptop,
	FaCode: FaCode,
	FaCog: FaCog,
	FaRocket: FaRocket,
	FaSearch: FaSearch,
	FaCloud: FaCloud,
	FaPenFancy: FaPenFancy,
	FaMapMarkerAlt: FaMapMarkerAlt
};

const ServicesOverview = ({ services }) => {
	return (
		<div className={SERVICES_WRAPPER_CLASSES}>
			{services?.map((service, index) => {
				const Icon = iconMap[service.icon] || FaLaptop;

				return (
					<AnimateUp key={index}>
						<div className={SERVICE_CARD_CLASSES}>
							<motion.div
								initial={{ scale: 0.8 }}
								whileInView={{ scale: 1, rotate: 12 }}
								transition={{ duration: 1 }}
							>
								<Icon className='text-7xl lg:text-6xl text-dark mb-2  ' />
							</motion.div>
							<motion.div
								initial={{ scale: 0.8 }}
								whileInView={{ scale: 1 }}
								transition={{ duration: 1 }}
							>
								<h2 className='text-xl lg:text-2xl font-bold uppercase text-primary'>
									{service.title}
								</h2>
							</motion.div>
							<motion.div
								initial={{ scale: 0.8, rotate: 4, opacity: .6 }}
								whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
								transition={{ duration: 1 }}
							>
								<Description description={service.description} theme='font-semibold text-dark/80 italic' />
							</motion.div>
						</div>
					</AnimateUp>
				);
			})}
		</div>
	);
};

export default ServicesOverview;
