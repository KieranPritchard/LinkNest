import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/red-hat-display/900.css';  // Red Hat Display weight 900
import '@fontsource/source-code-pro/400.css';  // Source Code Pro weight 400
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
