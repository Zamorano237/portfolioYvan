/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full py-20 px-4 md:px-10 xl:px-20 bg-[#0F172A] text-slate-100"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20">
        {/* Accompagnements */}
        <div>
          <div className="mb-10">
            <p className="text-sm text-[#2563EB] tracking-widest uppercase">
              2020 - Aujourd’hui
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-1">
              Réalisations ADVALIANS QSE
            </h2>
          </div>
          <div className="relative border-l-[3px] border-slate-600 pl-6 space-y-10">
            <ResumeCard
              title="Consulting & Audit QHSE"
              subTitle="SMQ • Audits • Plan d’actions"
              result="Impact réel"
              des="Accompagnement stratégique personnalisé pour la mise en place de systèmes QHSE robustes. Réalisation d’audits alignés ISO 9001, 14001, 45001 avec plans d’actions opérationnels."
            />
            <ResumeCard
              title="Tableaux de Bord de Pilotage"
              subTitle="Excel & Power BI"
              result="Amélioration continue"
              des="Conception et déploiement de dashboards de suivi des performances QSE, production, RH et RSE. Visualisation claire des KPI et automatisation via VBA ou Power BI."
            />
            <ResumeCard
              title="Digitalisation & Outils web"
              subTitle="Applications & Plateformes"
              result="Transformation digitale"
              des="Création de solutions React/Node.js pour digitaliser les registres, veilles réglementaires, audits et formations. Portails web pour conformité et pilotage digitalisés."
            />
            <ResumeCard
              title="Formations & Sensibilisation"
              subTitle="QHSE • RSE"
              result="+50 000 pros"
              des="Animation de sessions en ligne ou en présentiel sur QSE, RSE, audits internes et tableaux de bord. Taux de satisfaction élevé et impact mesurable."
            />
          </div>
        </div>

        {/* Formations dispensées */}
        <div>
          <div className="mb-10">
            <p className="text-sm text-[#2563EB] tracking-widest uppercase">
              2019 - Aujourd’hui
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-1">
              Formations & Accompagnement
            </h2>
          </div>
          <div className="relative border-l-[3px] border-slate-600 pl-6 space-y-10">
            <ResumeCard
              title="Formations ISO 9001 / RSE"
              subTitle="Experts & opérationnels"
              result="Certifiant"
              des="Conception et animation de programmes de formation professionnelle, adaptés au contexte terrain et à la culture QSE des organisations."
            />
            <ResumeCard
              title="Webinaires & e-learning"
              subTitle="Sessions & supports digitaux"
              result="Interactivité"
              des="Création de webinaires interactifs et contenus pédagogiques e-learning. Quiz, études de cas et supports visuels pour renforcer l’engagement des apprenants."
            />
            <ResumeCard
              title="Coaching & accompagnement"
              subTitle="Stratégie QSE personnalisée"
              result="Sur-mesure"
              des="Accompagnement personnalisé pour le déploiement de démarches qualité, sécurité et environnement dans les PME et grands groupes multisites."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
