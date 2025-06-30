/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* QHSE-RSE */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            compétences
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">QHSE-RSE</h2>
        </div>
        <div className="mt-6 w-full flex flex-col gap-6">
          <SkillBar label="ISO 9001 / 14001 / 45001" level={100} tooltip="Maîtrise des normes internationales qualité, environnement et sécurité" />
          <SkillBar label="Études de dangers & plans d'urgence" level={90} tooltip="Élaboration de documents techniques et réglementaires" />
          <SkillBar label="Tableaux de bord QHSE" level={100} tooltip="Expertise Excel / Power BI / Suivi stratégique" />
          <SkillBar label="Veille réglementaire QHSE" level={70} tooltip="Surveillance des exigences légales" />
          <SkillBar label="Politique QHSE de l’entreprise" level={85} tooltip="Mise en œuvre et animation" />
          <SkillBar label="Gestion des eaux usées" level={80} tooltip="Mise en œuvre de plans d’assainissement" />
          <SkillBar label="Analyses d’échantillons" level={95} tooltip="Compétences en contrôle qualité" />
        </div>
      </div>

      {/* Développement Web */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            compétences
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Développement Web</h2>
        </div>
        <div className="mt-6 w-full flex flex-col gap-6">
          <SkillBar label="React JS" level={80} tooltip="Composants, hooks, routing, architecture SPA" />
          <SkillBar label="HTML 5" level={95} tooltip="Structure sémantique optimisée" />
          <SkillBar label="CSS3" level={80} tooltip="Flex, grid, animations" />
          <SkillBar label="JavaScript" level={75} tooltip="Logique, DOM, événements, fetch API" />
          <SkillBar label="Node JS" level={83} tooltip="Back-end avec Express.js" />
          <SkillBar label="MongoDB" level={90} tooltip="Base NoSQL avec Mongoose & CRUD" />
          <SkillBar label="Microsoft Office" level={98} tooltip="Excel avancé, Word, PowerPoint Pro" />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
