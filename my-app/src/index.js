import React from 'react';
import { createRoot } from 'react-dom/client'; // import from react-dom/client instead of react-dom

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/offcanvas';
import './styles/portfolio.css'
import App from './App';

const rootElement = document.getElementById('root');
createRoot(rootElement).render( // use createRoot from react-dom/client
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
