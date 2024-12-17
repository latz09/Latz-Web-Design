export const FETCH_SERVICES_OVERVIEW = `
*[_type == "generalServicesOverview"][0]{
  heading,
  subheading,
  services[]{
    title,
    description,
    icon
  }
}
`;