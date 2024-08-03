const Review = ({ reviews, reviewerName }) => {
	//    console.log(reviewerName)

	// Find the review by reviewerName
	const selectedReview = reviews.find(
		(review) => review.reviewerName === reviewerName
	);

	// Fallback to the first review if no match is found
	const reviewData = selectedReview || reviews[0];

	// Check if there's any review data
	if (!reviewData) {
		return <div>No review available</div>;
	}

	return (
		<div className='  py-24 bg-dark text-light font-semiold'>
			<div className='max-w-6xl mx-auto grid gap-4'>
				<div className="text-2xl text-center grid gap-4 ">
					<p className="leading-[3rem]">{reviewData.reviewText}</p>
					<h3>-{reviewData.reviewerName}</h3>
				</div>
				<p className="text-center text-light">
					<strong>Website:</strong>{' '}
					<a href={reviewData.websiteUrl}>{reviewData.websiteName}</a>
				</p>
			</div>
		</div>
	);
};

export default Review;
