'use client'

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCheck = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
    rootMargin: "0px 0px -30% 0px", // Offset from the bottom
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const checkVariants = {
    hidden: { pathLength: 0, strokeOpacity: 0 },
    visible: {
      pathLength: 1,
      strokeOpacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  }; 

  return (
    <div ref={ref} className="flex justify-center items-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary/30 w-16 h-16 lg:w-20 lg:h-20"
      >
        <motion.path
          d="M5 13l4 4L19 7"
          stroke="currentColor"
          variants={checkVariants}
          initial="hidden"
          animate={controls}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedCheck;
