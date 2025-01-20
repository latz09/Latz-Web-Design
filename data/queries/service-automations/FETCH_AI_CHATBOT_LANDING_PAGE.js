export const FETCH_AI_CHATBOT_LANDING_PAGE = `*[_type == "aiChatbotLandingPage"]{
    headline,
    subheadline,
    whyThisAIChatbot[] {
      title,
      description,
      icon
    },
    features[] {
      title,
      icon
    },
    howItWorks[] {
      stepTitle,
      stepDescription,
      icon
    },
    keyBenefits[] {
      benefitTitle,
      benefitDescription,
      icon
    },
    testimonials[] {
      quote,
      author,
      authorTitle
    },
    faqs[] {
      question,
      answer
    },
    cta {
      ctaHeading,
      ctaText,
      ctaSubheading,
      ctaDescription
    },
    footerNote
  }`;
