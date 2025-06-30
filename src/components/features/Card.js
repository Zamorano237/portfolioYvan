// Card.jsx
import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const Card = ({ title, des, icon }) => {
  return (
    <Zoom triggerOnce>
      <div className="w-full h-full px-4 py-6 sm:px-6 sm:py-8 rounded-lg sm:rounded-xl shadow-md bg-gradient-to-r from-[#1e293b] to-[#202327] hover:from-[#0f172a] hover:to-[#1c1f22] transition-all duration-300 group">
        <div className="flex flex-col items-start justify-start h-full gap-4">
          {/* Icône */}
          <div className="text-3xl sm:text-4xl text-[#2563EB] mb-2">{icon}</div>

          {/* Titre */}
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-slate-100 leading-snug">
            {title}
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed">
            {des}
          </p>
        </div>
      </div>
    </Zoom>
  );
};

export default Card;
