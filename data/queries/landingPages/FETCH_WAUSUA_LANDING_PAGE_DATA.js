export const FETCH_WAUSUA_LANDING_PAGE_DATA = `
*[_type == "wausuaPage"]{
  "imageUrl": image.asset->url,
  headline,
  subheadline,
  topHeadline,

}

`;