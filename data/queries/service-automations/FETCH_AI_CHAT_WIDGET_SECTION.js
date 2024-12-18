export const FETCH_AI_CHAT_WIDGET_SECTION = `
*[_type == "aiChatWidgetSection"][0]{
  heading,
  subheading,
  featuredHeading,
  videoVisuals,
  features[]{
    title,
    description,
    icon,
  },
  cta,
  ctaLink
}
`;
