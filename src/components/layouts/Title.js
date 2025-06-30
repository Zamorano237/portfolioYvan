/** @format */

import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Title = ({ title, des }) => {
  return (
    <Fade direction="up" triggerOnce>
      <div className="flex flex-col items-center gap-2 text-center font-titleFont mb-12">
        <h3 className="text-lg font-semibold uppercase text-designColor tracking-wider">
          {title}
        </h3>
        <h1 className="text-3xl md:text-5xl text-white font-extrabold capitalize leading-tight hover:text-designColor transition-colors duration-300">
          {des}
        </h1>
        <div className="w-24 h-1 mt-2 bg-designColor rounded-full"></div>
      </div>
    </Fade>
  );
};

export default Title;
