import NavigationContainer from '@/components/navigation/NavigationContainer';

import './globals.css';

// import Footer from '@/components/layout/Footer';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	// metadataBase: new URL('https://www.latzwebdesign.com/'),
	title: {
		default: 'Latz Web Design',
		template: `%s | Latz Web Design`,
	},
	description: `Your business deserves a website that truly delivers! Experience the difference with personalized web design focused on turning clicks into customers. Discover the power of SEO-integrated, results-driven web design. Ready to outshine the competition? Get a free estimate today!`,
	twitter: {
		card: 'summary_large_image',
	},
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body className={`${roboto.className}  text-dark `}>
				
				<NavigationContainer />
				<div className='max-w-7l mx-auto   '>
					<div>{children}</div>
					{/* <Footer /> */}
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
