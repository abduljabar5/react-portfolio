import React, { useEffect } from 'react';

import menu from '../images/menu.svg'
function NavTabs() {
  useEffect(() => {
    const navbar = document.querySelector('.navigationbar');
    const textcolor = document.getElementById('textcolor');

    const handleScroll = () => {
      if (navbar && window.scrollY > 100) {
        navbar.classList.add('scrolled');
        if (textcolor) {
          textcolor.style.color = 'white'
        }
      } else if (navbar) {
        navbar.classList.remove('scrolled');
        if (textcolor) {
          textcolor.style.color = '' // Reset to default color
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
 <main>
      <nav className="navbar navbar-expand-lg bg-body-none fixed-top  navbarcontainer navigationbar">
       
        <div id="logo" className="pull-left">
           <h4><a href="#hero">Abduljabar</a> </h4>
       </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav"
            aria-controls="offcanvasNav" aria-expanded="false" aria-label="Toggle navigation"><img src={menu}></img>
           </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav-menu">
             <li className="menu-active"><a href="/">Home</a></li>
             <li><a href="/#about">About</a></li>
             <li><a href="/#Technology">Technology</a></li>
             <li><a href="/Projects">Projects</a></li>
            <li><a href="/contact">Contact Me</a></li>
             <li><a href="/resume">Resume</a></li>
           </ul>
          </div>
       
      </nav><div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavLabel">Menu</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="navbar-nav">
            <a className="nav-link text-center active" aria-current="page" href="/#about">About</a>
            <div className="custom-separator mx-auto bg-primary"></div>
            <a className="nav-link text-center" href="/#technology">Technologies</a>
            <a className="nav-link text-center disabled" href="/projects">Projects</a>
            <a className="nav-link text-center disabled" href="/contact">Contact Me</a>
            <a className="nav-link text-center" href="/reviews">Resume</a>
          </div>
        </div>
      </div>
      </main>
  );
}

export default NavTabs;
