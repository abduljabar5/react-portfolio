
import React, { useState, useEffect } from 'react';
import welcome from '../images/welcome.png'
import linkedin from "../images/linkedin2.svg"
import gmail from "../images/gmail.svg"
import github from "../images/github.svg"
import htnl from "../images/html.svg"
import nextjs from "../images/nextjs.png"
import css from "../images/css.svg"
import javascript from "../images/javascript.svg"
import bootstrap from "../images/bootstrap.svg"
import node from "../images/node.svg"
import reacticon from "../images/react1.svg"
import 'aos/dist/aos.css';
import AOS from 'aos';
import HeroSection from '../components/Herosection';
import AboutSection from '../components/Aboutsection';
import TechnologySection from '../components/TechnologySection';
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
  useEffect(() => {
        AOS.init();
      }, []);
  return (
    <main>
   <HeroSection text={text} />
   <AboutSection />
 <TechnologySection />
 </main>
  );
}
