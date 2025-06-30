/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const SkillBar = ({ label, level, tooltip }) => {
  const showIcon = level >= 90;

  return (
    <div className="overflow-x-hidden group relative">
      <p className="text-sm uppercase font-semibold text-white">{label}</p>
      <span className="w-full h-2 bg-[#2e2e2e] rounded-md inline-flex mt-2">
        <motion.span
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
          style={{ width: `${level}%` }}
        >
          <span className="absolute -top-7 right-0 text-white text-xs font-medium flex items-center gap-1">
            {showIcon ? <FaCheckCircle className="text-green-400" /> : `${level}%`}
          </span>
        </motion.span>
      </span>
      {tooltip && (
        <span className="absolute -top-10 left-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {tooltip}
        </span>
      )}
    </div>
  );
};

export default SkillBar;
