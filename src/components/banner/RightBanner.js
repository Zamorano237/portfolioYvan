/** @format */

import React from 'react';
import { bannerImg } from '../../assets/index';
import { motion } from 'framer-motion';

const RightBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="w-full lgl:w-1/2 flex justify-center items-center relative"
    >
      {/* Image animée */}
      <motion.img
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        src={bannerImg}
        alt="Yvan Watbo"
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 object-cover rounded-xl shadow-lg"
      />

      {/* Fond stylisé */}
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#0F172A] to-[#1e293b] shadow-lg rounded-xl"></div>
    </motion.div>
  );
};

export default RightBanner;
