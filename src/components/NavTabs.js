import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import menu from '../images/navbutton.svg'
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
           <h4><a to="#hero">Abduljabar</a> </h4>
       </div>
          <a className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav"
            aria-controls="offcanvasNav" aria-expanded="false" aria-label="Toggle navigation"><img className='navbutton' src={menu}></img>
           </a>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav-menu">
             <li className="menu-active"><Link to="/">Home</Link></li>
             <li><Link to ="/#about">About</Link></li>
             <li><Link to="/#Technology">Technology</Link></li>
             <li><Link to="/Projects">Projects</Link></li>
            <li>< Link to="contact">Contact Me</Link></li>
             <li><Link to="/resume">Resume</Link></li>
           </ul>
          </div>
       
      </nav><div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavLabel">Menu</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="navbar-nav">
            <a className="nav-link text-center active" aria-current="page" to="/#about">About</a>
            <div className="custom-separator mx-auto bg-primary"></div>
            <Link className="nav-link text-center" to="/#technology">Technologies</Link>
            <Link className="nav-link text-center" to="/projects">Projects</Link>
            <Link className="nav-link text-center" to="/contact">Contact Me</Link>
            <Link className="nav-link text-center" to="/resume">Resume</Link>
          </div>
        </div>
      </div>
      </main>
  );
}

export default NavTabs;
