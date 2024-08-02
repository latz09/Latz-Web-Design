export const FETCH_SERVICES_PAGE_DATA_QUERY = `
  *[_type == 'servicesPage' && isActive == true] {
    isActive,
    heading,
    subheading,
    services[] {
      "imageUrl": image.asset->url,
      heading,
      description,
      articleReference {
        title,
        slug
      }
    }
  }
`