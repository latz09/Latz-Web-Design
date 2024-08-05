export const FETCH_CMS_PAGE_DATA_QUERY = `*[_type == "customCMS"][0]{
  title,
  introText,
  keyBenefits[]{
    heading,
    bullets[]{
      title,
      description
    }
  },
  clientSuccessStory,

  images[]{
    "url": asset->url, // Fetch the image URL
    caption,
    altText
  }
}`;


// contentManagementSection{
//     heading,
//     introDescription,
//     "cmsImageUrl": cmsImage.asset->url, // Fetch the CMS image URL
//     features[]{
//       feature,
//       description
//     },
//     closingHeading
//   },