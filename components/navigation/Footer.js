import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import logo from '@/public/web-design-in-saint-paul-2.png';
import Image from 'next/image';
import Link from 'next/link';
import { navigationLinks } from '@/data/navigationLinks';
import { SocialMediaLinks } from './NavigationContacts';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div className='bg-light'>
			<div className='bg-light grid place-items-center gap-12 py-24'>
				<Link href='/'>
					<Image
						src={logo}
						alt='Web Design in Saint Paul'
						width={200}
						height={100}
						className='opacity-70'
					/>
				</Link>
				<div className=' max-w-5xl w-2/3 lg:w-1/4 opacity-60 mb-8'>
					<SocialMediaLinks />
				</div>
				<div className='grid place-items-center lg:flex gap-8 lg:gap-4 max-w-5xl w-full justify-evenly text-lg lg:text-2xl font-bold tracking-wider'>
					{navigationLinks.map((link, index) => (
						<Link key={index} href={link.href}>
							<span>{link.title}</span>
						</Link>
					))}
					<Link href='/articles'>
						<span className="text-primary">Latest Articles</span>
					</Link>
				</div>
			</div>
			<div className='grid place-items-center gap-2 pb-2'>
				<Link href='/legal/privacy-policy'>
					<span className='text-xs font-semibold'>Privacy Policy</span>
				</Link>
				<div className='flex space-x-2 items-center text-xs sm:text-sm  text-center '>
					Copyright{' '}
					<span className='mx-1 '>
						<AiOutlineCopyrightCircle />{' '}
					</span>{' '}
					{currentYear} Latz Web Design, LLC
				</div>
			</div>
		</div>
	);
};

export default Footer;
