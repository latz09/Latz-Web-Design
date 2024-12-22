import NavigationContainer from '@/components/navigation/NavigationContainer';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import './globals.css';
import { Roboto } from 'next/font/google';

import Footer from '@/components/navigation/Footer';
import ChatPointer from '@/components/utils/ChatPointer';

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	metadataBase: new URL(
		'https://www.latzwebdesign.com/' || 'http://localhost:3000/'
	),
	applicationName: 'Latz Web Design - Midwest Web Design and Development',
	title: {
		default: 'Midwest Web Design and Development - Latz Web Design',
		template: `%s | Latz Web Design`,
	},
	description: `Latz Web Design offers custom, results-driven websites for businesses across the Midwest. From Central Wisconsin to the Twin Cities, we specialize in responsive, SEO-focused web design that helps you grow.`,
	twitter: {
		card: 'summary_large_image',
	},
	keywords: ['midwest web design',
		'web development',
		'custom websites',
		'SEO-focused web design',
		'responsive web design',
		'Stevens Point web design',
		'Twin Cities web design',
		'Central Wisconsin web design',],
};

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body className={`${roboto.className}  text-dark `}>
				{/* Vendasta Chat Widget Script */}

				<Script
					src='https://cdn.apigateway.co/webchat-client..prod/sdk.js'
					data-widget-id='c79ac1d5-a8ee-11ef-87c4-7ac49ff1d0eb'
					defer
				/>
				<ChatPointer />
				<NavigationContainer />
				<div className='max-w-7l mx-auto'>
					<div>{children}</div>
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
