import Image from 'next/image';
import Link from 'next/link';
import { Description, MainHeading, TopHeading } from '../utils/Typography';

const FeaturedArticle = async ({ featuredArticle, synopsis }) => {
	return (
		<Link href={`/articles/${featuredArticle.slug.current}`}>
			<div className='relative w-full h-[33rem] group'>
				{/* Background Image */}
				<Image
					src={featuredArticle.articleImage.asset.url}
					alt={featuredArticle.title}
					layout='fill'
					objectFit='cover'
					className='absolute inset-0 w-full h-full z-0'
				/>

				{/* Overlay */}
				<div className='absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/80 to-dark/40 z-10'></div>

				{/* Title, Subtitle, Synopsis, and Button Centered */}
				<div className='absolute inset-0 z-20 flex flex-col justify-center items-center text-center space-y-6 p-4'>
					{/* Title and Subtitle */}
					<div className='space-y-2'>
						<MainHeading title={featuredArticle.title} theme='text-light ' />
						<TopHeading title={featuredArticle.subTitle} theme='text-light ' />
					</div>

					{/* Synopsis */}
					{synopsis && (
						<div className='text-light lg:text-2xl lg:w-5/6 leading-7 lg:leading-9'>
							<p>{synopsis}</p>
						</div>
					)}

					{/* Button */}
					<div>
						<button className='bg-tertiary text-dark py-2 px-12 rounded-sm font-semibold group-hover:bg-primary group-hover:text-light group-hover:rotate-2 group-hover:scale-110 transition duration-700 text-xl lg:text-3xl'>
							Read Full Article
						</button>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default FeaturedArticle;
