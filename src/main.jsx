import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CotizadorProvider from './context/CotizadorProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CotizadorProvider>
      <App />
    </CotizadorProvider>
  </React.StrictMode>,
)
