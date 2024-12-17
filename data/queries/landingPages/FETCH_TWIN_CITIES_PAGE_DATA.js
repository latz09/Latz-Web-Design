export const FETCH_TWIN_CITIES_PAGE_DATA = `
*[_type == "twinCitiesPage"]{
  "imageUrl": image.asset->url,
  headline,
  subheadline,
  topHeadline,

}

`;