import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_ARTICLE_CARDS_DATA_QUERY as query } from '@/data/queries/articles/FETCH_ARTICLE_CARDS_DATA_QUERY';

import PageContainer from '@/components/utils/animations/PageContainer';
import Image from 'next/image';
import { MainHeading, TopHeading } from '@/components/utils/Typography';
import AnimateUp from '@/components/utils/animations/AnimateUp';
import Link from 'next/link';

const AllArticlesPage = async () => {
	const data = await fetchData(query);
	// console.log(data)
	return (
		<PageContainer>
            <div className="max-w-7xl mx-auto">
			<div className=' lg:px-4 py-16 lg:py-32 gap-24  grid xl:grid-cols-2 '>
				{data.map((article, index) => (
					<ArticleCard article={article} key={index} />
				))}
			</div>
            </div>
		</PageContainer>
	);
};

export default AllArticlesPage;
export const revalidate = 10;

const ArticleCard = ({ article }) => {
	return (
		<Link href={`/articles/${article.slug.current}`}>
		<AnimateUp>
			<div className=' lg:rounded-t-md space-y-4'>
				<div className='relative w-full h-64'>
					<Image
						src={article.articleImage}
						alt={article.title}
						layout='fill'
						objectFit='cover'
						className='lg:rounded-t-md shadow-lg shadow-primary/30'
					/>
				</div>
				<div className='p-4 text-light space-y-2'>
					<MainHeading title={article.title} theme='text-light ' />
					<TopHeading title={article.subTitle} theme='text-light/80 ' />
				</div>
			</div>
		</AnimateUp>
		</Link>
	);
};
