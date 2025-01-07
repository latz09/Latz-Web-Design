export const FETCH_WHO_WE_ARE_PAGE = `
  *[_type == "whoWeArePage"] {
    mainHeading,
    subHeading,
    "landingImageUrl": landingImage.asset->url,
    paragraphs[] {
      heading,
      text,
      icon,
    },
    "finalImageUrl": finalImage.asset->url,
    cta
  }
`;
