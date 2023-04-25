import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavTabs'
import NotFound from './components/pages/NotFound'
import Footer from './components/Footer'
import Home from './components/pages/About'
import Resume from './components/pages/resume'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Portfolio'
function App() {
    return (
      <>
        <Router>
            <Navbar />
            <Routes>
              <Route 
                path="/react-portfolio" 
                element={<Home />}
              />
              <Route 
                path="/react-portfolio/contact" 
                element={<Contact />}
              />
               <Route 
                path="/react-portfolio/resume" 
                element={<Resume />}
              />
              <Route 
                path="/react-portfolio/projects" 
                element={<Projects />}
              />
              <Route 
                path="/react-portfolio/*"
                element={<NotFound />}
              />
            </Routes>
             <Footer />
        </Router>
     </>
    );
  }
  
  export default App;
  