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
	applicationName: 'Midwest Web Design & Website Development',
	title: {
	  default: 'Midwest Web Design & Website Development - 2024',
	  template: '%s | Latz Web Design',
	},
	description: `Ready to boost your online presence across the Midwest? From Stevens Point to Saint Paul, we create high-converting, SEO-focused websites that drive real business results. Let's build something incredible together—get a free estimate today!`,
	twitter: {
	  card: 'summary_large_image',
	},
	keywords: [
	  'midwest web design',
	  'web design in stevens point',
	  'web design in saint paul',
	  'website development',
	  'SEO-focused web design',
	],
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
