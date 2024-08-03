"use client"; // Ensure this is a client component

import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this value to set when the class changes
      const scrollThreshold = 120; // Change this value to your preference
      setScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrolled;
};
