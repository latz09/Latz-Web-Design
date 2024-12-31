export const FETCH_PLOVER_LANDING_PAGE_DATA = `
*[_type == "ploverPage"]{
  "imageUrl": image.asset->url,
  headline,
  subheadline,
  topHeadline,

}

`;