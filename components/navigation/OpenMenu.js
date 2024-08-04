'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import ModalOverlay from '../utils/ModalOverlay';

const OpenMenu = ({ scrolled }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    // Function to toggle the modal open state
    const handleToggle = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    // Effect to toggle the no-scroll class on the body
    useEffect(() => {
      if (isModalOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }, [isModalOpen]);
  
    return (
      <>
        <div
          className={`p-3 rounded-full transition duration-1000 ${
            scrolled ? 'text-dark bg-light' : 'text-light bg-dark'
          }`}
          onClick={handleToggle}
        >
          <AiOutlineMenu className="text-xl lg:text-3xl cursor-pointer" />
        </div>
        {/* <AnimatePresence> */}
          {isModalOpen && (<ModalOverlay onClose={handleToggle} />)}
        {/* </AnimatePresence> */}
      </>
    );
  };
  
  export default OpenMenu;