export const FETCH_AUTOMATION_SERVICES_QUERY = (filterKey) => `
  *[_type == "automationServices" && filterKey == "${filterKey}"] {
    _id,
    serviceName,
    headline,
    icon,
    "landingImage": landingImage.asset->url,
    expandedCopy,
    keyBenefits[] {
      benefitTitle,
      benefitDescription,
      "benefitScreenshotUrl": benefitScreenshot.asset->url
    },
    checklist,
    imageVisuals,
    videoVisuals[] {
      videoTitle,
      "videoUrl": videoUrl, // Updated to fetch the YouTube URL
      videoThumbnail {
        asset->{
          _id,
          url
        }
      }
    }, 
    ctaButtonText,
    ctaButtonLink
  }
`;
