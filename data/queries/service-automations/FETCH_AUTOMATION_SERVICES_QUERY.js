export const FETCH_AUTOMATION_SERVICES_QUERY = (filterKey) => `
  *[_type == "automationServices" && filterKey == "${filterKey}"] {
    _id,
    serviceName,
    headline,
    expandedCopy,
    keyBenefits[]{
      benefitTitle,
      benefitDescription,
      "benefitScreenshotUrl": benefitScreenshot.asset->url
    },
    checklist,
    imageVisuals,
    videoVisuals, 
    ctaButtonText,
    ctaButtonLink
  }
`;
