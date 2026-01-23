export const FETCH_APPLETON_PAGE_DATA = `
*[_type == "appletonPage"]{
  "imageUrl": image.asset->url,
  headline,
  subheadline,
  topHeadline,

}

`;