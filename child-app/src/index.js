import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const RenderApp = (containerId) =>{
  const root = ReactDOM.createRoot(document.getElementById(containerId));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if(window.location !== undefined){
  window.childComponent = RenderApp; 
}

// RenderApp('root')

export {RenderApp}
