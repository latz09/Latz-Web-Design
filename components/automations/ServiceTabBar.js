'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname hook
import { BsMegaphoneFill, BsFillRocketTakeoffFill } from 'react-icons/bs';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { FaMapLocationDot, FaNetworkWired } from 'react-icons/fa6';
import { TopHeading } from '../utils/Typography';

// Define the services array with the relevant data
const services = [
	{
		name: 'Inbox Pro',
		icon: FaEnvelopeOpenText,
		href: '/automations/inbox-pro',
		id: 'inboxPro',
	},
	{
		name: 'Local SEO',
		icon: FaMapLocationDot,
		href: '/automations/local-seo',
		id: 'localSEO',
	},
	{
		name: 'Reputation Management',
		icon: BsMegaphoneFill,
		href: '/automations/reputation-management',
		id: 'reputationManagement',
	},
	{
		name: 'Campaigns Pro',
		icon: BsFillRocketTakeoffFill,
		href: '/automations/campaigns-pro',
		id: 'campaignsPro',
	},
];

const ServiceTabBar = () => {
	const pathname = usePathname(); // Get the current path

	return (
		<div className='space-y-4'>
			{/* Separate link above the mapped links */}
			<div className='max-w-7xl mx-auto px-2 lg:w-1/2 '>
				<Link href={`/automations/#automations`} className='w-full'>
					{/* Check if the current pathname matches the base /automations path */}
					<div
						className={`flex items-center justify-center border gap-12 h-full w-full p-2 rounded cursor-pointer scale-95 transition duration-300 hover:scale-100 hover:shadow-xl ${
							pathname === '/automations'
								? 'shadow-lg bg-dark text-light border-primary/0 scale-100'
								: 'text-dark border-primary/30 scale-90'
						}`}
					>
						<div
							className={`text-5xl lg:text-6xl p-3 rounded-full ${
								pathname === '/automations'
									? 'bg-tertiary text-dark shadow-lg'
									: 'text-dark bg-tertiary'
							}`}
						>
							<FaNetworkWired />
						</div>
						<div className='grid place-items-center text-center'>
							<span className='font-black text-lg'>Business App CRM</span>
							<span className="font-bold opacity-90 text-sm lg:text-base">Manage Your Business with a Customer Relationship Manager</span>
						</div>
					</div>
				</Link>
			</div>

			{/* The service tabs */}
			<div className='text-center pt-8'>
				<TopHeading title='Expand Your Automation Capabilities for Greater Efficiency' />
			</div>
			<div className='max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 place-items-center px-2 gap-1'>
				{services.map((service, index) => {
					// Check if the current service's href matches the current path
					const isActive = pathname === service.href;

					return (
						<Link
							href={`${service.href}/#${service.id}`}
							key={index}
							className='w-full'
						>
							<div
								className={`flex items-center border gap-4 h-full w-full p-4 rounded cursor-pointer scale-95 transition duration-300 hover:scale-100 hover:shadow-xl ${
									isActive
										? 'shadow-lg bg-dark text-light border-primary/0 scale-100'
										: 'text-dark border-primary/30 scale-90'
								}`}
							>
								{service.icon && (
									<div
										className={`text-4xl p-3 rounded-full ${
											isActive
												? 'bg-tertiary text-dark shadow-lg'
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
