import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_REVIEWS_DATA_QUERY as query } from '@/data/queries/reviews/FETCH_REVIEWS_DATA_QUERY';

import Reviews from './Reviews';
import ReviewsIntro from './ReviewsIntro';
import AnimateUp from '../utils/animations/AnimateUp';

const ReviewContainer = async () => {
	const [data] = await fetchData(query);

	return (
		<div className='grid gap-16'>
			<ReviewsIntro />
			<AnimateUp>
				<Reviews data={data.reviewList} />
			</AnimateUp>
		</div>
	);
};

export default ReviewContainer;
