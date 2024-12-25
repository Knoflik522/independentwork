import React from 'react';
import ReactDOM from 'react-dom/client'; // Використовуйте цей імпорт
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Рендеринг додатка
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Для вимірювання продуктивності
reportWebVitals();
