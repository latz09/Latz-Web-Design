import React from 'react';
import {
	FaCode,
	FaCog,
	FaRocket,
	FaSearch,
	FaLaptop,
	FaCloud,
} from 'react-icons/fa'; // Import icons
import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_SERVICES_OVERVIEW as query } from '@/data/queries/services/FETCH_SERVICE_OVERVIEW_DATA_QUERY';
import { Description, MainHeading, TopHeading } from '../utils/Typography';
import AnimateUp from '../utils/animations/AnimateUp';

// Tailwind CSS classes
const SERVICES_CONTAINER_CLASSES =
	'bg-gradient-to-b from-light via-primary/10 to-light py-16 lg:py-24 px-4 lg:px-8 grid gap-8 mt-2';
const SERVICES_WRAPPER_CLASSES =
	'max-w-7xl mx-auto grid gap-x-8 gap-y-16 lg:gap-x-16 lg:gap-y-24 md:grid-cols-2 lg:grid-cols-3 text-center';
const SERVICE_CARD_CLASSES = 'flex flex-col  items-center gap-4';
const ICON_CLASSES = 'text-6xl text-primary  ';

const iconMap = {
	FaLaptop: FaLaptop,
	FaCode: FaCode,
	FaCog: FaCog,
	FaRocket: FaRocket,
	FaSearch: FaSearch,
	FaCloud: FaCloud,
};

const ServicesOverviewContainer = async () => {
	// Fetch data from Sanity
	const data = await fetchData(query);
	const { heading, subheading, services } = data || {};

	return (
		<section className={SERVICES_CONTAINER_CLASSES}>
			{/* Section Heading */}
			<div className='text-center mb-12 space-y-4'>
				<MainHeading title={heading} />

				<TopHeading title={subheading} />
			</div>

			{/* Services Grid */}
			<div className={SERVICES_WRAPPER_CLASSES}>
				{services?.map((service, index) => {
					const Icon = iconMap[service.icon] || FaLaptop; // Default icon fallback
					return (
						<AnimateUp key={index}>
							<div className={SERVICE_CARD_CLASSES}>
								<div className=''>
									<Icon className={ICON_CLASSES} />
								</div>

								<TopHeading title={service.title} />

								<Description description={service.description} />
							</div>
						</AnimateUp>
					);
				})}
			</div>
		</section>
	);
};

export default ServicesOverviewContainer;
