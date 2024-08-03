export const FETCH_HOME_PAGE_DATA_QUERY = `
  *[_type == 'homePage' && isActive == true] {
    isActive,
    "landingImage": landingImage.asset->url,
    landingHeading,
    topHeading,
    landingSubHeading,
    creativeWebDesign {
      heading,
      "creativeWebDesignImageUrl": creativeWebDesignImage.asset->url,
      sections[] {
        title,
        description
      }
    },
    intro {
      title,
      linkTitle,
      paragraphs
    },
    reviews[] {
      reviewText,
      reviewerName,
      websiteName,
      websiteUrl
    },
    services[] {
      title,
      "imageUrl": image.asset->url,
      textContent
    },
    seoOfferings {
      heading,
      subheading,
      onPageSEO {
        heading,
        subheading,
        items[] {
          "imageUrl": image.asset->url,
          title,
          description
        }
      },
      offPageSEO {
        heading,
        subheading,
        items[] {
          "imageUrl": image.asset->url,
          title,
          description
        }
      }
    }
  }
`;
