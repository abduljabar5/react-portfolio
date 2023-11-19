import React, { useState, useEffect } from 'react';
import ProjectItem from '../components/ProjectItem';
import TTCSModal from '../components/TTCSModal';
import movie from '../images/movie.png';
import gymgif from '../images/giphy.gif';
import PopcornPeeksModal from '../components/PopcornPeeksModal';
import GymHomiesModal from '../components/GymHomiesModal';
import EcommerceProjectModal from '../components/EcommerceModal';
import LinkafyProjectModal from '../components/LinkafyModal';

function Portfolio() {
  return (

    <section id="projects">
      <div className="container wow fadeInUp">
        <div className="row">
          <div className="col-md-12">
            <h3 data-aos="zoom-in" className="section-title">Projects</h3>
            <div className="section-title-divider"></div>
            <p className="section-description">Full Stack</p>
          </div>
        </div>

        <div className="row">
          {/* Use ProjectItem components here with different props for each project */}
          <ProjectItem 
            title="Popcorn Peek" 
            liveLink="https://linkafy.vercel.app/655a16ecc3f55ee6e11d5fb8" 
            githubLink="https://github.com/abduljabar5/react-movie-site" 
            modalTarget="exampleModal3"
            image='project1'
            isMainProject={true}
          />
          <ProjectItem 
            title="E-Commerce" 
            liveLink="https://linkafy.vercel.app/655a1729c3f55ee6e11d5fc4" 
            githubLink="https://github.com/abduljabar5/ecommerce" 
            modalTarget="ecommerce"
            image='ecommerce'
            isMainProject={false}
          />
          <ProjectItem 
          title="Linkafy" 
          liveLink="https://linkafy.vercel.app/655a1711c3f55ee6e11d5fbe" 
          githubLink="https://github.com/abduljabar5/link_tracker" 
          modalTarget="linkafyModal"
          image='linkafy'
          isMainProject={false}
          />
          <ProjectItem 
            title="TTCS" 
            liveLink="https://linkafy.vercel.app/655a16a8c3f55ee6e11d5fac" 
            githubLink="https://github.com/abduljabar5/ttcs" 
            modalTarget="exampleModal2"
            image='project2'
            isMainProject={false}
          />
          <ProjectItem 
            title="GYM Homies" 
            liveLink="https://linkafy.vercel.app/655a16d0c3f55ee6e11d5fb2" 
            githubLink="https://github.com/abduljabar5/gym-homie-v-2" 
            modalTarget="exampleModal"
            image='project3'
            isMainProject={false}
          />
          {/* ... More ProjectItems */}
        </div>
      </div>
      
      <PopcornPeeksModal/>
      <TTCSModal />
      <GymHomiesModal />
      <EcommerceProjectModal />
      <LinkafyProjectModal />
    </section>

  );
}
export default Portfolio;