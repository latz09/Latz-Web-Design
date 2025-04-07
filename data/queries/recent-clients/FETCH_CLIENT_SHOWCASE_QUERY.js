export const FETCH_CLIENT_SHOWCASE_QUERY = `
    *[_type == "clientShowcase"][0] {
        clients[]->{
            companyName,
            companyUrl,
            websiteDescription,
            "websiteImage": websiteImage.asset->url,
            order
        }
    }
`;
