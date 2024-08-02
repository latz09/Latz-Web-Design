export const FETCH_PRICING_PAGE_DATA_QUERY = `
  *[_type == 'processAndPricingPage' && isActive == true] {
    isActive,
    heading,
    subheading,
    steps[] {
      stepHeading,
      stepSubheading,
      description
    },
    sellingPoints[] {
      title,
      description
    }
  }
`
