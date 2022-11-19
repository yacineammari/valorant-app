import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/Styles/index.css';
import './components/Styles/nav.css';
import './components/Styles/cards.css';
import './components/Styles/footer.css';
import './components/Styles/popup.css';
import './components/Styles/errors.css';
import './assets/Fonts/ValorantFont.ttf';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);