import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './theme.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
{/* <React.StrictMode> */}
root.render(
    <App />
  );
  // </React.StrictMode>

reportWebVitals();
