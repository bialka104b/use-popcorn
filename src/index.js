import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode only needed in the development version for debugging
  <React.StrictMode>
    <App />
  </React.StrictMode>
);