export const FETCH_SINGLE_POST_QUERY = (slug) => `
*[_type == 'article' && slug.current == "${slug}"][0] {
    title,
    subTitle,
    "slug": slug.current,
    content[]{
        ...,
        markDefs[]{
            ...,
            _type == "link" => {
                "url": @.href
            }
        }
    },
    author->{
        name,
        image{
            asset->{
                _id,
                url
            },
            alt
        },
        bio
    },
    articleImage{
        asset->{
            _id,
            url
        },
        alt
    },
    publishedAt
}
`;
