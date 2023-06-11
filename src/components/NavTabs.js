import React, { useEffect, useState } from 'react';
import { Offcanvas, Navbar, Nav, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import menu from '../images/navbutton.svg'
function NavTabs({ currentPage, handlePageChange }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handlePageChangeAndClose = (page) => {
    handlePageChange(page);
    handleClose();
  };
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
       <Button className="navbar-toggler" onClick={handleShow}>
          <img className='navbutton' src={menu} />
        </Button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav-menu">
          <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
           </ul>
          </div>
       
      </nav>
      <Offcanvas show={show} onHide={handleClose} placement="end" id="offcanvasNav" aria-labelledby="offcanvasNavLabel">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
  <Nav className="navbar-nav">
    <Nav.Link
      href="#about"
      onClick={() => handlePageChangeAndClose('About')}
      className={currentPage === 'About' ? 'nav-link text-center active text-center' : 'nav-link text-center text-center'}
    >
      Home
    </Nav.Link>
    <Nav.Link
      href="#Portfolio"
      onClick={() => handlePageChangeAndClose('Portfolio')}
      className={currentPage === 'Portfolio' ? 'nav-link text-center active text-center' : 'nav-link text-center text-center'}
    >
      Projects
    </Nav.Link>
    <Nav.Link
      href="#contact"
      onClick={() => handlePageChangeAndClose('Contact')}
      className={currentPage === 'Contact' ? 'nav-link text-center active text-center' : 'nav-link text-center text-center'}
    >
      Contact
    </Nav.Link>
    <Nav.Link
      href="#Resume"
      onClick={() => handlePageChangeAndClose('Resume')}
      className={currentPage === 'Resume' ? 'nav-link text-center active text-center' : 'nav-link text-center text-center'}
    >
      Resume
    </Nav.Link>
  </Nav>
</Offcanvas.Body>

      </Offcanvas>
      </main>
  );
}
{/* <Link className="nav-link text-center" to="/#technology">Technologies</Link> */}
export default NavTabs;
