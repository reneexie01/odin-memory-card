import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Api } from './components.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Api />
  </StrictMode>,
)
