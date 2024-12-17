export const FETCH_LANDING_PAGE_DATA = `
*[_type == "landingPage"]{
  "imageUrl": image.asset->url,
  headline,
  subheadline,
  topHeadline,
  links[]{
    title,
    "slug": slug.current
  }
}

`;
