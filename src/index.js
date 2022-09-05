import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './index.css';

// Components
import App from './App';
import { LoginProvider } from './context/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>
);
