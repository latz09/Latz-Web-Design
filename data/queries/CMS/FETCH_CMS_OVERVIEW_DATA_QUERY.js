export const FETCH_CMS_OVERVIEW_DATA_QUERY = `*[_type == "customCMS"][0].contentManagementSection{
  heading,
  introDescription,
  "cmsImageUrl": cmsImage.asset->url, // Fetch the CMS image URL
  features[]{
    feature,
    description
  },
  closingHeading
}`;
