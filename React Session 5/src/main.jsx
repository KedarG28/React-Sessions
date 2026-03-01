import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './assets/scss/global.scss'
import {ContextA} from './assets/components/Lecture4/contextAPI/contextAPI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextA.Consumer>
    <App />
    </ContextA.Consumer>
  </StrictMode>,
)
