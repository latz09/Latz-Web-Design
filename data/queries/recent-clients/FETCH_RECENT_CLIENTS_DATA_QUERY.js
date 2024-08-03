export const FETCH_RECENT_CLIENTS_DATA_QUERY = `
  *[_type == 'recentClients'] {
    companyName,
    companyUrl,
    websiteDescription,
    "websiteImageUrl": websiteImage.asset->url,
    "clientLogoUrl": clientLogo.asset->url
  }
`;
