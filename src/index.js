import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import App from './App';
import {ThemeContextWrapper} from './Components/ThemeContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <App />
    </ThemeContextWrapper>
  </React.StrictMode>
);