import { sanityClient } from '@/lib/sanity/sanityConnection';
import { FETCH_SINGLE_POST_QUERY } from '@/data/queries/articles/FETCH_SINGLE_POST_QUERY';
import { FETCH_ARTICLE_CARDS_DATA_QUERY } from '@/data/queries/articles/FETCH_ARTICLE_CARDS_DATA_QUERY';
import PageContainer from '@/components/utils/animations/PageContainer';
import ArticleHeading from '@/components/articles/ArticleHeading';
import ArticleContent from '@/components/articles/ArticleContent';

export async function generateStaticParams() {
	const query = FETCH_ARTICLE_CARDS_DATA_QUERY;
	const articles = await sanityClient.fetch(query);

	return articles.map(({ slug }) => slug);
}

export async function generateMetadata({ params }) {
	const { slug } = params; // Params are automatically provided by the App Router

	const query = FETCH_SINGLE_POST_QUERY(slug);
	const post = await sanityClient.fetch(query);

	return {
		title: post.title,
		description: post.seoSummary,
		openGraph: {
			images: [
				{
					url: post.imageUrl,
					alt: post.title,
				},
			],
		},
	};
}

const ArticlePage = async ({ params }) => {
	const { slug } = params; // Params are automatically provided by the App Router

	const query = FETCH_SINGLE_POST_QUERY(slug);
	const post = await sanityClient.fetch(query);

	return (
		<PageContainer>
			<div className='bg-light '>
				<div className='max-w-7xl mx-auto lg:px-4 lg:py-16'>
					<ArticleHeading
						title={post.title}
						subTitle={post.subTitle}
						imageUrl={post.articleImage.asset.url}
						author={post.author}
					/>
				</div>
                <div className="max-w-5xl mx-auto">
                    <ArticleContent content={post.content} />
                </div>
			</div>
		</PageContainer>
	);
};

export default ArticlePage;

export const revalidate = 10;
