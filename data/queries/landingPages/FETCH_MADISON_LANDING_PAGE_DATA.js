export const FETCH_MADISON_PAGE_DATA = `
*[_type == "madisonPage"]{
  "imageUrl": image.asset->url,
  headline,
  subheadline,
  topHeadline,

}

`;