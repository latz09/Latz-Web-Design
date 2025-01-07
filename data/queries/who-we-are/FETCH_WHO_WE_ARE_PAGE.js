export const FETCH_WHO_WE_ARE_PAGE = `
  *[_type == "whoWeArePage"] {
    mainHeading,
    subHeading,
    "landingImageUrl": landingImage.asset->url,
    paragraphs[] {
      heading,
      text,
      
    },
    "finalImageUrl": finalImage.asset->url,
    cta
  }
`;
