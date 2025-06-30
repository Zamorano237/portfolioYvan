// ResumeCard.jsx
import React from 'react';
import { FaCircle } from 'react-icons/fa';

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="group relative pl-6">
      <span className="absolute -left-[9px] top-2 text-[#2563EB] text-xs">
        <FaCircle />
      </span>
      <div className="bg-gradient-to-br from-[#1e293b] to-[#202327] rounded-lg p-4 sm:p-5 shadow-md group-hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-base sm:text-lg font-semibold text-slate-100">{title}</h3>
          <span className="text-sm font-medium text-[#2563EB] mt-1 sm:mt-0">{result}</span>
        </div>
        <p className="text-sm text-slate-400 mt-1 italic">{subTitle}</p>
        <p className="text-sm text-slate-300 mt-2 leading-relaxed">{des}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
