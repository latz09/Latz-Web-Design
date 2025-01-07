export const FETCH_WHO_WE_ARE_INTRO = `*[_type == "whoWeAreIntro"][0] {
    heading,
    paragraphs,
    ctaText,
    "imageUrl": image.asset->url
  }`