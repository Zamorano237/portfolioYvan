/** @format */

import React, { useState } from 'react';
import Slider from 'react-slick';
import { RiStarFill } from 'react-icons/ri';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import Title from '../layouts/Title';
import { testimonialOne, testimonialTwo, testimonialThree,testimonialFour,testimonialFive, testimonialSix, quote } from '../../assets';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}>
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}>
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_, next) => setDotActive(next),
    appendDots: (dots) => (
      <div className="mt-6">
        <ul className="flex gap-3 justify-center">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full cursor-pointer ${
          i === dotActive ? 'bg-[#ff014f]' : 'bg-gray-500'
        }`}></div>
    ),
  };

  return (
    <section id="testimonial" className="w-full py-20 border-b-[1px] border-b-black bg-[#0F172A] text-slate-100">
      <div className="flex justify-center items-center text-center">
        <Title title="CE QU'ILS DISENT DE MOI" des="Témoignages professionnels" />
      </div>
      <div className="max-w-6xl mx-auto mt-10">
        <Slider {...settings}>
                    <TestimonialCard
            img={testimonialFour}
            name="Thierry Rosolin"
            role="Directeur Général"
            location="France"
            project="Mise en place du SMQ groupe"
            date="via VIMPACI - Oct 2024 - Aujourd'hui"
            content="Nous avons connu Yvan dans le cadre de son alternance en qualité. Il a joué un rôle déterminant dans la structuration de notre Système de Management Qualité Groupe. Grâce à sa rigueur, ses tableaux de bord et son accompagnement stratégique, nous avons clarifié nos processus et renforcé l’alignement entre filiales."
          />
          <TestimonialCard
            img={testimonialFive}
            name="Jean-Marc Elono"
            role="Directeur d’exploitation"
            location="Cameroun"
            project="Projet de digitalisation et veille réglementaire"
            date="via Care Consulting World - 2021 - 2022"
            content="Yvan a été un élément moteur dans notre projet de digitalisation des outils QHSE et de veille réglementaire. Grâce à son sens de l’analyse et à sa capacité à structurer, nous avons gagné en performance et en conformité. Il a également formé notre personnel avec clarté et impact."
          />
          <TestimonialCard
            img={testimonialSix}
            name="Franck M. Nguene"
            role="Directeur QHSE"
            location="Cameroun"
            project="Amélioration des pratiques HSE terrain"
            date="via SOGEA SATOM - Déc 2018 - Juil 2020"
            content="Yvan a su faire preuve d’initiative dans le suivi terrain HSE. Il a contribué à l’actualisation du DUERP, à la mise en œuvre d’audits internes et à la conduite de causeries sécurité efficaces. Il s’est rapidement intégré dans notre organisation et a marqué les esprits par sa rigueur."
          />
          <TestimonialCard
            img={testimonialOne}
            name="TCHOUMI Bonarchi"
            role="Directeur Technique"
            location="Douala - Cameroun"
            project="Accompagnement ISO 9001 et ICC"
            date="via ITS Cameroun - Jan 2020 - Dec 2020"
            content="Je suis vraiment reconnaissant envers Yvan pour son accompagnement dans la mise en place de la norme ISO 9001 et pour la réussite de notre audit ICC. Son expertise et son professionnalisme ont été inestimables. Il a conçu des tableaux de bord de suivi de la performance qui ont amélioré nos décisions."
          />
          <TestimonialCard
            img={testimonialTwo}
            name="Jordy TUSOLA"
            role="Gérant NTOUCHI EXOTIC"
            location="Lyon - France"
            project="Création d'un site e-commerce"
            date="via Ntouchi Exotic - Jan 2023 - Fév 2023"
            content="Je suis très satisfait du travail d'Yvan pour la création de mon site e-commerce. Il m'a accompagné à chaque étape du projet. Son expertise a permis une mise en ligne efficace et une augmentation de mes ventes."
          />
          <TestimonialCard
            img={testimonialThree}
            name="BORIS FOGUE"
            role="Responsable HSE"
            location="Douala - Cameroun"
            project="Accompagnement et Formation QHSE"
            date="via PLASTICAM - Avr 2022 - Sep 2022"
            content="Yvan m'a accompagné dans la mise en place du système de management QHSE. Ses formations étaient enrichissantes et adaptées à notre contexte. Il a fait preuve d'un grand professionnalisme."
          />
        </Slider>
      </div>
    </section>
  );
};

const TestimonialCard = ({ img, name, role, location, project, date, content }) => (
  <div className="w-full flex flex-col lgl:flex-row gap-8">
    <div className="w-full lgl:w-[35%] flex flex-col items-center bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-lg shadow-lg">
      <img className="h-72 w-72 object-cover rounded-lg mb-4" src={img} alt={name} />
      <p className="text-xs uppercase text-designColor tracking-wide mb-2">{location}</p>
      <h3 className="text-2xl font-bold text-center">{name}</h3>
      <p className="text-base text-gray-400 text-center">{role}</p>
    </div>
    <div className="w-full lgl:w-[65%] flex flex-col justify-between bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-lg shadow-lg">
      <img className="w-16 mb-4" src={quote} alt="quote" />
      <div className="border-b border-gray-700 pb-4 mb-4">
        <h3 className="text-xl font-semibold">{project}</h3>
        <p className="text-sm text-gray-400 mt-1">{date}</p>
        <div className="flex text-yellow-500 mt-2">
          {[...Array(5)].map((_, i) => (
            <RiStarFill key={i} />
          ))}
        </div>
      </div>
      <p className="text-base text-gray-300 leading-relaxed">{content}</p>
    </div>
  </div>
);

export default Testimonial;
