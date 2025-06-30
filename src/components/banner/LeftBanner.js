/** @format */
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {
  FaInternetExplorer,
  FaYoutube,
  FaLinkedinIn,
  FaReact,
  FaMicrosoft,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { AiFillDashboard } from 'react-icons/ai';
import { Fade, Zoom } from 'react-awesome-reveal';

const LeftBanner = () => {
  const handleIconClick = (url) => window.open(url, '_blank');

  const [text] = useTypewriter({
    words: ['Ingénieur QSE.', 'Manager RSE.', 'Consultant-Formateur QHSE-RSE.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-14 text-slate-100 font-sans">
      <div className="flex flex-col gap-5">
        <Fade direction="left">
          <h4 className="text-lg font-semibold text-slate-400 uppercase tracking-widest">
            Bienvenue sur mon CV en ligne
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
            Bonjour, je suis{' '}
            <span className="text-[#2563EB] capitalize">Yvan WATBO</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-white">
            <span>{text}</span>
            <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="#2563EB" />
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            IIngénieur QSE et Manager RSE, je suis un multipotentiel doté de plus de cinq années d'expérience professionnelle dans le management QSE/RSE, le conseil, et l'animation de formations. Je suis passionné par ces domaines et j'ai suivi de nombreuses formations et certifications pour être en mesure de mettre en place, piloter et animer des systèmes de management QSE-RSE, ainsi que de concevoir des outils de pilotage de la performance adaptés au secteur. Je recherche aujourd’hui un poste en CDI ou en CDD dans le domaine dans la QSE-RSE pour contribuer activement à la performance globale d’une entreprise innovante et engagée et de contribuer activement à sa performance face aux enjeux actuels et futurs du management durable.
          </p>
        </Fade>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 justify-between">
        <Zoom>
          <div>
            <h2 className="text-sm uppercase font-semibold mb-3 text-slate-400">Réseaux</h2>
            <div className="flex gap-4 text-xl text-white">
              <span
                className="hover:text-[#2563EB] cursor-pointer"
                onClick={() => handleIconClick('https://qhseacademieandconsulting.com/')}
              >
                <FaInternetExplorer />
              </span>
              <span
                className="hover:text-[#2563EB] cursor-pointer"
                onClick={() => handleIconClick('https://www.youtube.com/@qhseacademieandconsulting')}
              >
                <FaYoutube />
              </span>
              <span
                className="hover:text-[#2563EB] cursor-pointer"
                onClick={() => handleIconClick('https://www.linkedin.com/in/ing-yvan-watbo-%E2%9C%85/')}
              >
                <FaLinkedinIn />
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-sm uppercase font-semibold mb-3 text-slate-400">Outils techniques</h2>
            <div className="flex gap-4 text-xl text-white">
              <FaReact className="hover:text-[#2563EB]" />
              <AiFillDashboard className="hover:text-[#2563EB]" />
              <SiTailwindcss className="hover:text-[#2563EB]" />
              <FaMicrosoft className="hover:text-[#2563EB]" />
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default LeftBanner;
