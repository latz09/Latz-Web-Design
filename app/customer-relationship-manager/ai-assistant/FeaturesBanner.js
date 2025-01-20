"use client";

import React from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";

const FeaturesBanner = ({ data }) => {
  // If an icon name is missing/invalid, fallback to FaRobot
  const fallbackIcon = FaIcons.FaRobot;

  // Duplicate the array for a "repeat" effect
  const marqueeData = [...data, ...data];

  return (
    <div className="fixed bottom-0 left-0 w-full overflow-hidden bg-dark py-4 z-50">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        // Move from left (−100%) to right (+100%) infinitely
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 65,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      >
        {marqueeData.map((item, index) => {
          const IconComponent = FaIcons[item.icon] || fallbackIcon;
          return (
            <div 
              key={index} 
              className="flex items-center gap-2 px-4"
            >
              <IconComponent size={16} className="text-tertiary/60" />
              <span className="text-tertiary/80 font-thin">
                {item.title}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FeaturesBanner;
