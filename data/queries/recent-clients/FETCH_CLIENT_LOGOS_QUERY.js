export const FETCH_CLIENT_LOGOS_QUERY = `
  *[_type == "recentClients" && defined(logo)] | order(order asc) {
    companyName,
    "logoUrl": logo.asset->url
  }
`;
