'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname hook
import { BsMegaphoneFill, BsFillRocketTakeoffFill } from 'react-icons/bs';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';

const services = [
	{
		name: 'Inbox Pro',
		icon: FaEnvelopeOpenText,
		href: '/automations/inbox-pro',
	},
	{
		name: 'Local SEO',
		icon: FaMapLocationDot,
		href: '/automations/local-seo',
	},
	{
		name: 'Reputation Management',
		icon: BsMegaphoneFill,
		href: '/automations/reputation-management',
	},
	{
		name: 'Campaigns Pro',
		icon: BsFillRocketTakeoffFill,
		href: '/automations/campaigns-pro',
	},
];

const ServiceTabBar = () => {
	const pathname = usePathname(); // Get the current path

	return (
		<div className=' pt-4'>
			<div className='max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 place-items-center px-2 gap-1'>
				{services.map((service, index) => {
					// Check if the current service's href matches the current path
					const isActive = pathname === service.href;

					return (
						<Link href={`${service.href}/#1`} key={index} className='w-full'>
							<div
								className={`flex items-center border gap-4 h-full w-full p-4 rounded cursor-pointer scale-95  transition duration-300 hover:scale-100 hover:shadow-xl ${
									isActive
										? 'shadow-lg bg-dark text-light border-primary/0 scale-100'
										: 'text-dark border-primary/30 scale-90'
								}`}
							>
								{service.icon && (
									<div
										className={`text-4xl p-3 rounded-full   ${
											isActive
												? ' bg-tertiary text-dark shadow-lg'
												: 'text-dark bg-tertiary'
										}`}
									>
										<service.icon />
									</div>
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
