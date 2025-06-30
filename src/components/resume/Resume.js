/** @format */

import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from './Experience';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaTrophy } from 'react-icons/fa';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  const menuItems = [
    { key: 'education', label: 'Éducation', icon: <FaGraduationCap /> },
    { key: 'experience', label: 'Expérience', icon: <FaBriefcase /> },
    { key: 'achievement', label: 'Réalisations', icon: <FaTrophy /> },
    { key: 'skills', label: 'Compétences QHSE/DEV', icon: <FaLaptopCode /> },
  ];

  return (
    <section id='resume' className='w-full pt-20 pb-10 border-b-[1px] border-b-black'>
      <div className='flex justify-center uppercase items-center text-center mb-4'>
        <Title title="+5 années d'expériences" des='Mon CV' />
      </div>

      <div className='max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6'>
        {/* Menu sticky vertical avec icônes */}
        <ul className='w-full lg:w-1/4 flex flex-row lg:flex-col gap-2 sticky top-24 h-fit'>
          {menuItems.map((item) => (
            <li
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`resumeLi flex items-center gap-2 shadow-sm cursor-pointer ${
                activeTab === item.key
                  ? 'bg-[#2563EB] text-white border-[#2563EB]'
                  : 'bg-[#1f2937] text-gray-300'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm sm:text-base">{item.label}</span>
            </li>
          ))}
        </ul>

        {/* Contenu dynamique */}
        <div className='w-full lg:w-3/4'>
          {activeTab === 'education' && <Education />}
          {activeTab === 'experience' && <Experience />}
          {activeTab === 'achievement' && <Achievement />}
          {activeTab === 'skills' && <Skills />}
        </div>
      </div>
    </section>
  );
};

export default Resume;
