import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavTabs'
import NotFound from './components/pages/NotFound'
import Footer from './components/Footer'
import Home from './components/pages/About'
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Portfolio'
function App() {
    return (
      <>
        <Router >
            <Navbar />
            <Routes>
              <Route 
                path="/" 
                element={<Home />}
              />
              <Route 
                path="/contact" 
                element={<Contact />}
              />
               <Route 
                path="/resume" 
                element={<Resume />}
              />
              <Route 
                path="/projects" 
                element={<Projects />}
              />
              <Route 
                path="/*"
                element={<NotFound />}
              />
            </Routes>
             <Footer />
        </Router>
     </>
    );
  }
  
  export default App;
  