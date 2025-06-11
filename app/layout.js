import NavigationContainer from '@/components/navigation/NavigationContainer';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import './globals.css';
import { Manrope } from 'next/font/google';
import Footer from '@/components/navigation/Footer';
import ChatPointer from '@/components/utils/ChatPointer';
import SnapshotModal from '@/components/snapshot-report/SnapshotModal';
import FetchClientLogos from '@/components/RecentClients/FetchClientLogos';

const manrope = Manrope({
	weight: ['200', '300', '400', '500', '700', '800'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	metadataBase: new URL(
		'https://www.latzwebdesign.com/' || 'http://localhost:3000/'
	),
	applicationName: 'Midwest Web Design & Website Development',
	title: {
		default: 'Midwest Web Design & Website Development - 2025',
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
			<body className={`${manrope.className}  text-dark `}>
				{/* Vendasta Chat Widget Script */}

				<Script
					src='https://cdn.apigateway.co/webchat-client..prod/sdk.js'
					data-widget-id='c79ac1d5-a8ee-11ef-87c4-7ac49ff1d0eb'
					defer
				/>
				{/* <ChatPointer /> */}
				{/* Snapshot Modal */}

				<NavigationContainer />
				<div className='max-w-7l mx-auto'>
					<div>{children}</div>
					{/* <div className='bg-light'>
						<FetchClientLogos />
					</div> */}
					<Footer />
				</div>
				{/* Meta Pixel Code */}
				<Script id='facebook-pixel' strategy='afterInteractive'>
					{`
						!function(f,b,e,v,n,t,s)
						{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						n.queue=[];t=b.createElement(e);t.async=!0;
						t.src=v;s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)}(window, document,'script',
						'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', '638537108682775');
						fbq('track', 'PageView');
					`}
				</Script>
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
