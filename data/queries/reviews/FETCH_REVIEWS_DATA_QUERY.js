export const FETCH_REVIEWS_DATA_QUERY = `
  *[_type == "reviews"] {
    title,
    reviewList[] {
      reviewerName,
      reviewText,
      reviewerTitle,
      websiteName,
      "logo": logo.asset->url
    }
  }
`;
