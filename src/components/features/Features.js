// Features.jsx
import React from 'react';
import {
  FaLaptopCode,
  FaUniversity,
  FaChalkboardTeacher,
  FaCogs,
  FaTools,
} from 'react-icons/fa';
import {
  SiPowerbi,
  SiCheckmarx,
  SiMicrosoftexcel,
} from 'react-icons/si';
import { MdOutlineAnalytics } from 'react-icons/md';
import { BsClipboardCheck } from 'react-icons/bs';
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b border-slate-700 bg-[#0F172A]"
    >
      <Title title="Compétences" des="QSE-RSE & Informatique" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 md:px-8">
        <Card
          title="Systèmes de management QSE"
          des="Implémentation et amélioration continue de systèmes ISO 9001, 14001, 45001 avec structuration documentaire et pilotage des processus."
          icon={<SiCheckmarx />}
        />
        <Card
          title="Audits internes & conformité"
          des="Réalisation d’audits qualité, sécurité, environnement. Analyse des écarts, plan d’action, accompagnement à la conformité réglementaire."
          icon={<FaUniversity />}
        />
        <Card
          title="Tableaux de bord & KPIs"
          des="Conception de dashboards QSE-RSE sur Excel ou Power BI pour le suivi opérationnel et stratégique des performances."
          icon={<SiPowerbi />}
        />
        <Card
          title="Veille réglementaire"
          des="Outils de veille et suivi des exigences légales. Évaluation de conformité, reporting et alertes réglementaires intégrées."
          icon={<MdOutlineAnalytics />}
        />
        <Card
          title="Formation & sensibilisation"
          des="Animation de formations et ateliers QSE-RSE. Approche pédagogique adaptée aux enjeux terrains et contextes métiers."
          icon={<FaChalkboardTeacher />}
        />
        <Card
          title="Gestion de projets transverses"
          des="Conduite de projets qualité et RSE avec coordination interservices, outils de suivi, reporting et communication structurée."
          icon={<FaCogs />}
        />
        <Card
          title="Suivi de plans d’action"
          des="Mise en œuvre de plans d’actions correctifs, revues de processus, suivi d’échéances et mobilisation des responsables d’actions."
          icon={<BsClipboardCheck />}
        />
        <Card
          title="Suite Microsoft Office"
          des="Expertise sur Excel, PowerPoint, Word. Création de supports interactifs, automatisations et formation sur les outils bureautiques."
          icon={<SiMicrosoftexcel />}
        />
        <Card
          title="Développement web"
          des="Création d’outils web sur mesure (React, Node.js) pour digitaliser les supports QHSE, dashboards, registres et veilles."
          icon={<FaLaptopCode />}
        />
        <Card
          title="Outils numériques & contenu"
          des="Création de contenus professionnels (visuels, vidéos), gestion d’outils collaboratifs, animation de réseaux professionnels."
          icon={<FaTools />}
        />
      </div>
    </section>
  );
};

export default Features;
