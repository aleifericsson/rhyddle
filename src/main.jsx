import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
  <Helmet>
      <title>Rhyddle by Alif Nafili</title>

      </Helmet>
    <App />
    </HelmetProvider>
  </React.StrictMode>,
)
