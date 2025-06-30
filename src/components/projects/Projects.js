/** @format */

import React from 'react';
import Title from '../layouts/Title';
import { Fade } from 'react-awesome-reveal';
import ProjectsCard from './ProjectsCard';
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from '../../assets/index';

const Projects = () => {
  const openLink = (url) => window.open(url, '_blank');

  return (
    <Fade direction="left" triggerOnce>
      <section id="projects" className="w-full py-20 border-b border-slate-700 bg-[#0F172A]">
        {/* Titre */}
        <div className="flex justify-center items-center text-center mb-10">
          <Title
            title="VISITEZ MON PORTFOLIO ET FAITES MOI UN RETOUR"
            des="MES PROJETS"
          />
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 md:px-12">
          <ProjectsCard
            title="E-veille & DigiQHSE"
            des="Chef de projet pour une application de veille réglementaire en zone CEMAC et digitalisation QSE."
            src={projectOne}
            click={() => openLink('https://e-veille.qse-expert.com/web/')}
          />
          <ProjectsCard
            title="Plateforme Advalians-QSE"
            des="Conception d’un portail web pour la promotion des outils QSE-RSE, tableaux de bord et formations."
           src={projectTwo}
            click={() => openLink('https://advalians-qse.fr')}
          />
          <ProjectsCard
            title="•	Création de contenus pédagogiques pour +50K professionnels du secteur"
            des="Création de contenus pédagogiques QSE, RSE et Pilotage pour plus de 50 000 professionnels du secteur."
            src={projectThree}
            click={() => openLink('https://www.linkedin.com/in/ing-yvan-watbo-✅/')}
          />
          <ProjectsCard
            title="Application Gestion de la Santé et Sécurité au Travail"
            des="Développement d’un outil numérique pour le suivi des DUERP, actions correctives et prévention SST."
             src={projectFour}
            click={() => openLink('https://advalians-qse.fr')}
          />
          <ProjectsCard
            title="Dashboards QSE-RSE et Autres"
            des="Création de tableaux de bord Power BI & Excel pour le suivi et le pilotage de la performance dans différents domaines et secteurs."
            src={projectFive}
            click={() => openLink('https://advalians-qse.fr')}
          />
          <ProjectsCard
            title="Digitalisation SMQ"
            des="Structuration d’un SMQ ISO 9001 digital : processus, audits, indicateurs, et revues de direction."
            src={projectSix}
            click={() => openLink('https://advalians-qse.fr')}
          />
        </div>
      </section>
    </Fade>
  );
};

export default Projects;
