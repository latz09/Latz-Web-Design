import React from 'react';
import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_SERVICES_OVERVIEW as query } from '@/data/queries/services/FETCH_SERVICE_OVERVIEW_DATA_QUERY';
import { MainHeading, TopHeading } from '../utils/Typography';
import ServicesOverview from './ServicesOverview';

const SERVICES_CONTAINER_CLASSES =
	'bg-gradient-to-b from-light via-dark/10 to-light py-16 lg:py-24 px-4 lg:px-8 grid gap-8 mt-2 ';

const ServicesOverviewContainer = async () => {
	// Fetch data
	const data = await fetchData(query);
	const { heading, subheading, services } = data || {};

	return (
		<section className={SERVICES_CONTAINER_CLASSES}>
			<div className='text-center mb-12 space-y-4'>
				<MainHeading title={heading} theme='text-primary' />
				<TopHeading title={subheading} />
			</div>
			<div className="">
			<ServicesOverview services={services} /></div>
		</section>
	);
};

export default ServicesOverviewContainer;
