export const FETCH_RECENT_CLIENTS_DATA_QUERY = (onlyFeatured = false) => `
 *[_type == 'recentClients' ${
		onlyFeatured ? '&& isFeatured == true' : ''
 }] | order(order asc) {
    companyName,
    companyUrl,
    websiteDescription,
    "websiteImageUrl": websiteImage.asset->url,
    "clientLogoUrl": clientLogo.asset->url
  }
`;
