import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'; // Import your custom global styles here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);