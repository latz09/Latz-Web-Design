// LandingBlob.js
'use client'
import { motion } from 'framer-motion'

const LandingBlob = ({ x, y, size, delay }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: y,
        left: x,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: 'rgba(24, 161, 173, 0.6)',
        filter: 'blur(8px)',
      }}
      animate={{
        x: [0, 30, -30, 0],
        y: [0, -20, 20, 0],
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  )
}

export default LandingBlob
