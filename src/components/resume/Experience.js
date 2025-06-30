/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      className="w-full py-10 px-4 md:px-10 xl:px-20 bg-[#0F172A] text-slate-100 grid grid-cols-1 xl:grid-cols-2 gap-16"
    >
      {/* Expérience QHSE / RSE */}
      <div>
        <div className="mb-8">
          <p className="text-sm text-[#2563EB] tracking-widest uppercase">2018 - Aujourd’hui</p>
          <h2 className="text-2xl md:text-3xl font-bold">Expérience QHSE / RSE</h2>
        </div>
        <div className="border-l-[3px] border-slate-600 pl-6 space-y-10">
          <ResumeCard
            title="VIMPACI (France)"
            subTitle="Chargé de mission QSE-RSE | Oct. 2024 – Aujourd’hui"
            result="France"
            des="Pilotage de la structuration du SMQ au niveau groupe. Déploiement de tableaux de bord Excel/Power BI pour le suivi de la performance. Formation des filiales à la digitalisation QSE et à la culture qualité. Accompagnement à la conformité documentaire et au reporting stratégique dans un contexte multisite international."
          />
          <ResumeCard
            title="Care Consulting World"
            subTitle="Consultant – Formateur QHSE | 2021 – 2022"
            result="Cameroun"
            des="Conduite d’études de dangers et d’impacts environnementaux. Chef de projet pour le développement d'une application de veille réglementaire QHSE en Zone CEMAC. Réalisation d’inspections réglementaires (électricité, levage, pression) et animation de formations professionnelles sectorielles."
          />
          <ResumeCard
            title="ASECNA Cameroun"
            subTitle="Stagiaire QHSE | Sept. – Déc. 2020"
            result="Cameroun"
            des="Analyse des risques professionnels et environnementaux. Rédaction des documents QHSE liés aux exigences réglementaires. Contribution active à la mise en œuvre d’un SME environnemental au sein d’une structure aéronautique, avec présentation d’un mémoire technique à la direction."
          />
          <ResumeCard
            title="SOGEA-SATOM"
            subTitle="Préventeur HSE | Déc. 2018 – Juil. 2020"
            result="Cameroun"
            des="Définition et mise en œuvre de la politique HSE sur plusieurs chantiers. Réalisation d’audits internes et suivi du DUERP. Mise en place de plans de prévention, animation de sessions terrain, formation des équipes à la culture sécurité et gestion des non-conformités."
          />
          <ResumeCard
            title="ADVALIANS QSE"
            subTitle="Consultant – Formateur Indépendant | Avril 2020 – Aujourd’hui"
            result="Multisites"
            des="Création et vente de tableaux de bord QSE-RSE, développement de modules e-learning, accompagnement sur les audits, la veille réglementaire et les systèmes ISO. Interventions à distance ou sur site pour des structures en Afrique et en Europe."
          />
        </div>
      </div>

      {/* Projets Web & Digitalisation */}
      <div className="mb-8">
  <p className="text-sm text-[#2563EB] tracking-widest uppercase">Projets professionnels</p>
  <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mt-1">Réalisations clés</h2>
</div>

<div className="border-l-[3px] border-slate-600 pl-6 space-y-6">
  <ResumeCard
    title="E-veille & DigiQHSE"
    subTitle=""
    result=""
    des="Développement de l’application web E-veille, dédiée à la gestion de la veille réglementaire QHSE, avec des fonctionnalités avancées de suivi et d’alertes automatiques pour les entreprises en Zone CEMAC."
  />
  <ResumeCard
    title="Plateforme Advalians-QSE.fr"
    subTitle=""
    result=""
    des="Création de la plateforme advalians-qse.fr, un portail dédié à la promotion des outils de pilotage QSE-RSE, incluant tableaux de bord, kits documentaires, formations, et accompagnement."
  />
  <ResumeCard
    title="Contenus pédagogiques QSE & RSE"
    subTitle=""
    result=""
    des="Conception et diffusion de contenus pédagogiques destinés à plus de 50 000 professionnels, autour des thématiques du QSE, de la RSE et du pilotage de la performance."
  />
</div>

    </motion.div>
  );
};

export default Experience;
