import Link from 'next/link';
import { navigationLinks } from '@/data/navigationLinks';
import NavigationLinkEntry from '../utils/animations/NavigationLinkEntry';

const NavigationLinks = ({ onLinkClick }) => {
	return (
		<div className='flex flex-col space-y-4 lg:space-y-8'>
			{navigationLinks.map((link, index) => (
				<Link
					key={index}
					href={link.href}
					className='text-4xl lg:text-5xl font-black'
					onClick={onLinkClick} // Close modal on link click
				>
					<NavigationLinkEntry>{link.title}</NavigationLinkEntry>
				</Link>
			))}
		</div>
	);
};

export default NavigationLinks;
