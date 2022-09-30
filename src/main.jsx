import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('main')).render(
  <React.StrictMode>
    <div style={{marginTop: '60px',
                 display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
  }}>hola</div>
  </React.StrictMode>
)