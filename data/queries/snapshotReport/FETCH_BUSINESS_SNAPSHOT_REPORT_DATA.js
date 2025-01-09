export const FETCH_BUSINESS_SNAPSHOT_REPORT_DATA = `
  *[_type == "businessSnapshot"][0] {
    headline,
    subheadline,
    scrollNote,
    "imageUrl": image.asset->url,
    detailsHeadline,
    snapshotDetails[] {
      title,
      whyItMatters,
      icon
    }
  }
`;



