import React from 'react'
import ReactDOM from 'react-dom/client'
//Solo importammos un elemento el princpal, y luego ahi los vamos anidando//
import App from './components/App.jsx'

import './css/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
