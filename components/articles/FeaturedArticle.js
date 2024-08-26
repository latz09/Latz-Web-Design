import Image from 'next/image';
import Link from 'next/link';
import { Description, MainHeading, TopHeading } from '../utils/Typography';

const FeaturedArticle = async ({ featuredArticle, synopsis }) => {
	return (
		<Link href={`/articles/${featuredArticle.slug.current}`}>
			<div className='relative w-full h-[33rem] group '>
				{/* Background Image */}
				<Image
					src={featuredArticle.articleImage.asset.url}
					alt={featuredArticle.title}
					layout='fill'
					objectFit='cover'
					className='absolute inset-0 w-full h-full z-0'
				/>

				{/* Overlay */}
				<div className='absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/70 to-dark/90 z-10'></div>

				{/* Title, Subtitle, Button, and Synopsis */}
				<div className='absolute inset-0 z-20 flex flex-col justify-between p-4'>
					{/* Title and Subtitle at the Top */}
					<div className='grid place-items-center gap-2 pt-8 text-center'>
						<MainHeading title={featuredArticle.title} theme='text-light ' />
						<TopHeading title={featuredArticle.subTitle} theme='text-light ' />
					</div>

					{/* Button in the Center */}
					<div className='flex justify-center my-4'>
						<button className='bg-tertiary text-dark py-2 px-12 rounded-sm font-semibold group-hover:bg-primary group-hover:text-light group-hover:rotate-2 group-hover:scale-110 transition duration-700 text-xl lg:text-3xl'>
							Read Full Article
						</button>
					</div>

					{/* Synopsis at the Bottom */}
					{synopsis && (
						<div className='flex items-end justify-center pb-4 text-light  lg:text-2xl text-center lg:w-3/4 mx-auto leading-7 lg:leading-9 '>
							<p>{synopsis}</p>
						</div>
					)}
				</div>
			</div>
		</Link>
	);
};

export default FeaturedArticle;
