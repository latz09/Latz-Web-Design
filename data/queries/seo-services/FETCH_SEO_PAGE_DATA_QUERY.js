export const FETCH_SEO_PAGE_DATA_QUERY = `
  *[_type == "seoServices"] {
  title,
  onPageSeoSection {
    heading,
    subheading,
    introDescription,
    features[] {
      feature,
      description
    }
  },
  offPageSeoSection {
    heading,
    subheading,
    introDescription,
    features[] {
      feature,
      description
    }
  }
}
`
