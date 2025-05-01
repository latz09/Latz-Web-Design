export const OWN_YOUR_STOREFRONT_QUERY = `
  *[_type == "ownYourStorefront"][0]{
    headline,
    subheadline,
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
    shopifyDrawbacks[] {
      problem,
      icon
    },
    howItWorks[] {
      stepTitle,
      stepDescription,
      icon
    },
    cta {
      ctaHeading,
      ctaText,
      ctaDescription
    }
  }
`;
