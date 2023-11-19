import React, {useEffect} from "react";
// import PortfolioContainer from "./components/PortfolioContainer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NavTabs from "./components/NavTabs";
import Contact from "./pages/Contact";
import Footer from './components/Footer'
import 'aos/dist/aos.css';
import AOS from 'aos';
// import './styles/portfolio.css'
const App = () =>
// useEffect(() => {
//     AOS.init();
//   }, []);
    <>
    <NavTabs/>
    <About />
    <Portfolio />
    <Contact/>
    <Footer />
    </>
;

export default App;