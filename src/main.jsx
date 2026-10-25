import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

// Samakan tema Bootstrap dengan mode terang/gelap perangkat
const gelap = window.matchMedia('(prefers-color-scheme: dark)')
const terapkanTema = () =>
  document.documentElement.setAttribute('data-bs-theme', gelap.matches ? 'dark' : 'light')
terapkanTema()
gelap.addEventListener('change', terapkanTema)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
