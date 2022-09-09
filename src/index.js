import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import App from './App';
import { LoginProvider } from './context/LoginContext';

// Styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <Router basename='/projx'>
        <App />
      </Router>
    </LoginProvider>
  </React.StrictMode>
);
