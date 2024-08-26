import Image from 'next/image';
import { MainHeading, TopHeading } from '../utils/Typography';
import Link from 'next/link';
import { SocialMediaLinks } from '../navigation/NavigationContacts';

const ArticleHeading = ({ title, subTitle, imageUrl, author }) => {
	// console.log('author', author.name);
	return (
		<div className='grid lg:grid-cols-3 gap-8 place-items-center lg:gap-5'>
			<Image
				src={imageUrl}
				alt={title}
				width={1920}
				height={1080}
				priority
				className='lg:rounded-t-xl rounded-b-sm shadow-lg shadow-primary/40'
			/>
			<div className='lg:col-span-2 grid gap-2 px-2'>
				<MainHeading
					title={title}
					theme='text-primary text-center lg:text-start'
				/>
				<TopHeading
					title={subTitle}
					theme='text-dark/80 lg:ml-1 text-center lg:text-start'
				/>
				<Link href='/'>
					<div className='lg:my-2 lg:mx-1 font-semibold text-dark/80 text-center lg:text-start'>
						Written by Jordan Latz{' '}
						<span className='font-bold text-primary'>@LatzWebDesign</span>
					</div>
				</Link>

				{/* <div className='w-1/2 mx-auto opacity-70'>
					<SocialMediaLinks />
				</div> */}
			</div>
		</div>
	);
};

export default ArticleHeading;
