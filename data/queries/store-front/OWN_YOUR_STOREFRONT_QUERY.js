export const OWN_YOUR_STOREFRONT_QUERY = `
  *[_type == "ownYourStorefront"][0]{
    headline,
    subheadline,
    "heroImageUrl": heroImage.asset->url,
    paintPointHeading,
    painPointQuestions[] {
      questions
    },
    painPointAnswers[] {
      answers
    },
    coreBenefits[] {
      title,
      description,
      icon
    },
    whoItsFor,
    "whoItsForImageUrl": whoItsForImage.asset->url,
    shopifyDrawbacks[] {
      problem,
      icon
    },
    howItWorks[] {
      stepTitle,
      stepDescription,
      icon
    },
    "howItWorksImageUrl": howItWorksImage.asset->url,
    cta {
      ctaHeading,
      ctaText,
      ctaDescription,
      "ctaImageUrl": ctaImage.asset->url
    }
  }
`;
