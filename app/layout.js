import NavigationContainer from '@/components/navigation/NavigationContainer';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Roboto } from 'next/font/google';
import Footer from '@/components/navigation/Footer';

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	metadataBase: new URL('https://www.latzwebdesign.com/' || 'http://localhost:3000/'),
	applicationName: 'St Paul Web design and Website Development',
	title: {
		default: 'St. Paul Web Design and Website Development - 2024',
		template: `%s | Latz Web Design`,
	},
	description: `Your business deserves a website that truly delivers! Experience the difference with personalized web design focused on turning clicks into customers. Discover the power of SEO-integrated, results-driven web design. Ready to outshine the competition? Get a free estimate today!`,
	twitter: {
		card: 'summary_large_image',
	},
	keywords: ['web design in saint paul, web design services'],
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body className={`${roboto.className}  text-dark `}>
				
				<NavigationContainer />
				<div className='max-w-7l mx-auto   '>
					<div>{children}</div>
					<Footer />
					
				</div>
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
