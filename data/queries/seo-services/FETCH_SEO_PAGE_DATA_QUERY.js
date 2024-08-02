export const FETCH_SEO_PAGE_DATA_QUERY = `
  *[_type == 'seoServicesPage' && isActive == true] {
    isActive,
    heading,
    subheading,
    intro,
    onPageSEO {
      heading,
      subheading,
      included[] {
        title,
        description
      }
    },
    offPageSEO {
      heading,
      subheading,
      included[] {
        title,
        description
      }
    }
  }
`
