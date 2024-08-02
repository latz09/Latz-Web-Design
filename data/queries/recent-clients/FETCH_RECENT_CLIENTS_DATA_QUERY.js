export const FETCH_RECENT_CLIENTS_DATA_QUERY = `
  *[_type == 'recentClients'] {
    companyName,
    companyUrl,
    "image1Url": image1.asset->url,
    "image2Url": image2.asset->url
  }
`
