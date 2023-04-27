
import React, { useState, useEffect } from 'react';
import welcome from '../../images/welcome.png'

import linkedin from "../../images/linkedin2.svg"
import gmail from "../../images/gmail.svg"
import github from "../../images/github.svg"
import htnl from "../../images/html.svg"
import css from "../../images/css.svg"
import javascript from "../../images/javascript.svg"
import bootstrap from "../../images/bootstrap.svg"
import node from "../../images/node.svg"
import reacticon from "../../images/react1.svg"
export default function About() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const textToType = "I'm Abduljabar";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => currentIndex + 1);
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setText(textToType.slice(0, currentIndex));
  }, [currentIndex]);
  return (
    <main>
    <section id="hero">
    <div className="hero-container">
      <div className=" fadeIn">
        <div className="hero-logo">
          <img className="" src={welcome} alt="Imperial"></img>
        </div>

        <h1>{text}</h1>
        <h2>A SoftWare Engineer</h2>

        <div className="actions">
          {/* <a href="https://github.com/abduljabar5" target="_blank" ><img src={github} alt=""></img></a> */}
          <a href="https://www.linkedin.com/in/abduljabar-nur-11b18b257/" target="_blank" ><img src={github} alt="linkedin icon"></img></a>
          <a href="https://www.linkedin.com/in/abduljabar-nur-11b18b257/" target="_blank" ><img src={linkedin} alt="linkedin icon"></img></a>
          <a href="mailto:abduljabar.nur.8@gmail.com"><img src={gmail} alt=""></img></a>
        </div>
      </div>
    </div>
  </section>
   <section id="about">
   <div className="container wow">
     <div className="row">
       <div className="col-md-12">
         <h3 className="section-title">About Me</h3>
         <div className="section-title-divider"></div>
         <p className="section-description">I'm a determined person that appreciates technology and programming. After researching numerous employment opportunities in college and concluding that the traditional educational path was not for me, I opted to pursue my love of software development. I have a strong interest in programming and am now studying at the University of Minnesota in a full-stack coding boot camp. My ambition is to use my newly learned skills to assist businesses and organizations in developing innovative solutions to difficult problems. I am a quick learner who thrives in a fast-paced environment. I can't wait to have a positive influence in the tech sector and am eager to see where this path takes me.</p>
       </div>
     </div>
   </div>
 </section>
 <section id="Technology">
    <div className="container wow fadeInUp">
      <div className="row">
        <div className="col-md-12">
          <h3 className="section-title">Technologies learned</h3>
          <div className="section-title-divider"></div>
          <p className="section-description"></p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 service-item ">
          <div className="service-icon"><i className="fa fa-desktop"></i></div>
          <h4 className="service-title"><img src={htnl} alt=" html icon"></img></h4>
          <p className="service-description text-center">HTML5</p>
        </div>
        <div className="col-md-4 service-item">
          <div className="service-icon"><i className="fa fa-bar-chart"></i></div>
          <h4 className="service-title"><img src={css} alt="css icon"></img></h4>
          <p className="service-description text-center">CSS</p>
        </div>
        <div className="col-md-4 service-item">
          <div className="service-icon"><i className="fa fa-paper-plane"></i></div>
          <h4 className="service-title"><img src={javascript} alt="javascript icon"></img></h4>
          <p className="service-description text-center">JavaScript</p>
        </div>
        <div className="col-md-4 service-item">
          <div className="service-icon"><i className="fa fa-photo"></i></div>
          <h4 className="service-title"><img src={node}></img></h4>
          <p className="service-description text-center">Node.js</p>
        </div>
        <div className="col-md-4 service-item">
          <div className="service-icon"><i className="fa fa-road"></i></div>
          <h4 className="service-title"><img src={reacticon} alt=" react icon"></img></h4>
          <p className="service-description text-center">React</p>
        </div>
        <div className="col-md-4 service-item">
          <div className="service-icon"><i className="fa fa-shopping-bag"></i></div>
          <h4 className="service-title"><img src={bootstrap} alt="bootstrap icon"></img></h4>
          <p className="service-description text-center">bootstrap</p>
        </div>
      </div>
      </div>
      </section>
 </main>
  );
}
