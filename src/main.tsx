import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RouterAppProvider from '../Router';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Elemento root não encontrado');
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterAppProvider />
  </StrictMode>
);
