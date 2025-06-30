/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      className="w-full py-20 px-4 md:px-10 xl:px-20 bg-[#0F172A] text-slate-100"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20">
        {/* Formation académique */}
        <div>
          <div className="mb-8">
            <p className="text-sm text-[#2563EB] tracking-widest uppercase">2000 - 2025</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-1">Formation Académique</h2>
          </div>
          <div className="border-l-[3px] border-slate-600 pl-6 space-y-10">
            <ResumeCard
              title="CESI École d’Ingénieurs (Nice)"
              subTitle="2024 - en cours"
              result="France"
              des="Master Spécialisé en QSE – Option RSE, en alternance. Développement de compétences stratégiques pour piloter des systèmes intégrés QSE & démarches RSE."
            />
            <ResumeCard
              title="Master Professionnel en QSE"
              subTitle="Université de Douala (2018 - 2020)"
              result="Mention Bien"
              des="Maîtrise des référentiels ISO (9001, 14001, 45001), gestion des risques, audits internes, et amélioration continue dans des environnements industriels exigeants."
            />
            <ResumeCard
              title="Licence en Techniques des Laboratoires"
              subTitle="Université de Douala (2017 - 2018)"
              result="Mention Bien"
              des="Expertise dans la réalisation d’analyses physico-chimiques et biologiques, gestion de la qualité en laboratoire et interprétation rigoureuse des résultats."
            />
            <ResumeCard
              title="Baccalauréat Scientifique (D)"
              subTitle="Collège la Perfection (2013 - 2014)"
              result="Assez-Bien"
              des="Formation scientifique rigoureuse axée sur la logique, l’expérimentation et les bases du raisonnement analytique appliqué."
            />
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="mb-8">
            <p className="text-sm text-[#2563EB] tracking-widest uppercase">2018 - 2024</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-1">Certifications & Attestations</h2>
          </div>
          <div className="border-l-[3px] border-slate-600 pl-6 space-y-10">
            <ResumeCard
              title="Système de Management de la Qualité ISO 9001 version 2015"
              subTitle="Certification obtenue"
              result="2019"
              des="Mise en œuvre et compréhension des exigences de l'ISO 9001:2015 pour l’amélioration continue et la satisfaction client."
            />
            <ResumeCard
              title="Système de Management de la Santé et Sécurité au Travail ISO 45001"
              subTitle="Certification obtenue"
              result="2019"
              des="Principes fondamentaux pour instaurer un environnement de travail sain, prévenir les risques professionnels et assurer la conformité."
            />
            <ResumeCard
              title="Audits Internes – ISO 9001 & ISO 19011"
              subTitle="Certification obtenue"
              result="Sept. 2019"
              des="Techniques d’audit interne conformes aux normes ISO 9001:2015 et ISO 19011:2018, avec mise en situation et rapport d’audit."
            />
            <ResumeCard
              title="Tableaux de Bord & Pilotage de la Performance"
              subTitle="Formation certifiante"
              result="2020"
              des="Création de dashboards Excel pour le suivi des KPIs QSE, financiers et opérationnels avec visualisation des écarts."
            />
            <ResumeCard
              title="Développement web dynamique avec JavaScript"
              subTitle="Formation certifiante"
              result="Avril - Juillet 2022"
              des="Programmation web front-end interactive avec HTML, CSS et JavaScript moderne (DOM, événements, logique métier)."
            />
            <ResumeCard
              title="Création d’applications Full Stack avec Node.js, Express & MongoDB"
              subTitle="Formation certifiante"
              result="Août - Octobre 2022"
              des="Développement complet d’API REST sécurisées avec Node.js et Express, gestion des bases de données avec MongoDB."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
