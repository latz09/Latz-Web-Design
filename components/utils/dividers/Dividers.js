const colorMap = {
    primary: 'fill-primary dark:fill-primary',
    secondary: 'fill-secondary dark:fill-secondary',
    tertiary: 'fill-tertiary dark:fill-tertiary',
    dark: 'fill-dark dark:fill-dark',
    light: 'fill-light dark:fill-light',
  };
  
  export const CurveDividerTop = ({ color = 'dark' }) => {
    const fillClass = colorMap[color] || colorMap.dark;
  
    return (
      <svg
        viewBox="0 0 1440 100"
        className={`w-full ${fillClass}`}
        preserveAspectRatio="none"
      >
        <path d="M0,100 C480,0 960,100 1440,0 L1440,100 L0,100 Z" />
      </svg>
    );
  };
  
  export const CurveDividerBottom = ({ color = 'dark' }) => {
    const fillClass = colorMap[color] || colorMap.dark;
  
    return (
      <svg
        viewBox="0 0 1440 100"
        className={`w-full ${fillClass}`}
        preserveAspectRatio="none"
      >
        <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" />
      </svg>
    );
  };
  