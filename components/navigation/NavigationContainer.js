'use client'; // Ensure this is a client component

import { useScrollPosition } from '../utils/useScrollPosition';
import { usePathname } from 'next/navigation';

import HomeNavigation from './HomeNavigation';
import DefaultNavigation from './DefaultNavigation';

// Main NavigationContainer component
const NavigationContainer = () => {
  const scrolled = useScrollPosition(); // Use custom scroll position hook
  const pathname = usePathname(); // Get the current pathname

  // Determine if the current route is the homepage
  const isHome = pathname === '/';

  return (
    <div className="">
      {/* {isHome ? (
        <HomeNavigation scrolled={scrolled} />
      ) : (
        <DefaultNavigation scrolled={scrolled} />
      )} */}
      <HomeNavigation scrolled={scrolled} />
    </div>
  );
};

export default NavigationContainer;
