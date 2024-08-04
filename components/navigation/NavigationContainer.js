'use client'; // Ensure this is a client component

import { useScrollPosition } from '../utils/useScrollPosition';
import { usePathname } from 'next/navigation';


import HomeNavigation from './HomeNavigation';

// Main NavigationContainer component
const NavigationContainer = () => {
	
	const scrolled = useScrollPosition(); // Use custom scroll position hook
	const pathname = usePathname(); // Get the current pathname

	// Determine if the current route is the homepage
	const isHome = pathname === '/';

	return (
		<>
			<HomeNavigation scrolled={scrolled} />
			
		</>
	);
};

export default NavigationContainer;

// import DefaultNavigation from './DefaultNavigation';

{
	/* {isHome ? (
        <HomeNavigation scrolled={scrolled} />
      ) : (
        <DefaultNavigation scrolled={scrolled} />
      )} */
}
