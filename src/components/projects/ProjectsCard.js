/** @format */

import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { Zoom } from 'react-awesome-reveal';

const ProjectsCard = ({ title, des, src, click }) => {
  return (
    <Zoom triggerOnce>
      <div className="w-full p-4 sm:p-5 h-auto rounded-lg sm:rounded-xl shadow-md bg-gradient-to-br from-[#1e293b] to-[#202327] group hover:from-[#0f172a] hover:to-[#1a1d21] transition-all duration-500">
        {/* Image */}
        <div className="w-full h-40 sm:h-52 overflow-hidden rounded-md">
          <img
            className="w-full h-95 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
            src={src}
            alt={title}
          />
        </div>

        {/* Contenu */}
        <div className="w-full mt-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-semibold text-slate-100 tracking-wide uppercase">
              {title}
            </h3>
            {click && (
              <span
                onClick={click}
                className="text-lg w-9 h-9 rounded-full bg-black flex justify-center items-center text-slate-400 hover:text-[#2563EB] transition-colors duration-300 cursor-pointer"
              >
                <FaGlobe />
              </span>
            )}
          </div>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed tracking-normal">
            {des}
          </p>
        </div>
      </div>
    </Zoom>
  );
};

export default ProjectsCard;
