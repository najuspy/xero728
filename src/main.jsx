import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ConnectToXeroButton from './ConnectToXeroButton.jsx'
import FetchXeroData from './FetchXeroData.jsx' 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ConnectToXeroButton/>
    <FetchXeroData/>
  </React.StrictMode>,
)
