import './globals.css';

// import Footer from '@/components/layout/Footer';
// import Navigation from '@/components/layout/Navigation';
import { Josefin_Slab } from 'next/font/google';

const josefinSlab = Josefin_Slab({
	// style: 'normal',
	// weight: '800, 700', // Specify the weights and styles you need
	// display: 'swap',
	subsets: ['latin'],
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
			<body className={`${josefinSlab.className}  text-dark`}>
				{/* <Navigation /> */}
				<div className='max-w-7l mx-auto '>
					<div>{children}</div>
					{/* <Footer /> */}
				</div>
			</body>
		</html>
	);
};

export default RootLayout;