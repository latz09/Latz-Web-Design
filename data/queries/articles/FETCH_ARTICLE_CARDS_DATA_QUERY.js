export const FETCH_ARTICLE_CARDS_DATA_QUERY = `*[_type == "article"]{
    _id,
    title,
    subTitle,
    slug,
    "articleImage": articleImage.asset->url
  }`;
