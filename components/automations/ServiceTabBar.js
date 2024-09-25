'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname hook
import {
	FaRegStar,
	FaEnvelope,
	FaSearchLocation,
	FaShieldAlt,
} from 'react-icons/fa';

const services = [
	{
		name: 'Campaigns Pro',
		icon: FaRegStar,
		href: '/automations/campaigns-pro',
	},
	{
		name: 'Inbox Pro',
		icon: FaEnvelope,
		href: '/automations/inbox-pro',
	},
	{
		name: 'Local SEO',
		icon: FaSearchLocation,
		href: '/automations/local-seo',
	},
	{
		name: 'Reputation Management',
		icon: FaShieldAlt,
		href: '/automations/reputation-management',
	},
];

const ServiceTabBar = () => {
	const pathname = usePathname(); // Get the current path

	return (
		<div className='text-light pt-4'>
			<div className='max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 place-items-center px-2 gap-1'>
				{services.map((service, index) => {
					// Check if the current service's href matches the current path
					const isActive = pathname === service.href;

					return (
						<Link href={service.href} key={index} className='w-full'>
							<div
								className={`flex items-center gap-4 h-full w-full p-4 rounded border cursor-pointer scale-95 shadow-lg transition duration-1000 hover:scale-100 hover:shadow-xl ${
									isActive
										? 'bg-primary text-light'
										: 'text-dark border-primary/30'
								}`}
							>
								{service.icon && (
									<service.icon
										className={`text-4xl ${
											isActive ? 'text-light' : 'text-primary'
										}`}
									/>
								)}
								<span className='font-black text-lg'>{service.name}</span>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default ServiceTabBar;
