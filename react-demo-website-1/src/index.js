import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//-- outside (App.js) appliction global/context - state/date 
//-- functional programming/closures can access inner and outer state 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);