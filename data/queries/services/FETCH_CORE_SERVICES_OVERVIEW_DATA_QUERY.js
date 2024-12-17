export const FETCH_CORE_SERVICES_OVERVIEW_DATA_QUERY = `
*[_type == "coreServices"] {
  title,
  "customWebsiteDevelopment": customWebsiteDevelopment{
    title,
    features
  },
  "integratedCrmSolutions": integratedCrmSolutions{
    title,
    features[] {
      feature,
      icon
    }
  },
  "aiPoweredAddOns": aiPoweredAddOns{
    title,
    features[] {
      title,
      subtitle,
      icon,
      "slug": slug.current
    }
  }
}[0]
`;
