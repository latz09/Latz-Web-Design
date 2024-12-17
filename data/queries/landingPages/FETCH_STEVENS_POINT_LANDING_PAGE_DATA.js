export const FETCH_STEVENS_POINT_PAGE_DATA = `
*[_type == "stevensPointPage"]{
  "imageUrl": image.asset->url,
  headline,
  subheadline,
  topHeadline,

}

`;