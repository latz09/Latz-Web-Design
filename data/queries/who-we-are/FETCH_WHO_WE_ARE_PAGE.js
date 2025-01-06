export const FETCH_WHO_WE_ARE_PAGE = `
  *[_type == "whoWeArePage"] {
    mainHeading,
    subHeading,
    paragraphs[] {
      heading,
      text,
      "imageUrl": photo.asset->url
    }
  }
`;
