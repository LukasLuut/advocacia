import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterAppProvider from '../Router.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterAppProvider />
  </StrictMode>,
)
