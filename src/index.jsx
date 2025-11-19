import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Stacking from './components/Stacking.jsx'
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Stacking />
    <Footer />
  </StrictMode>,
)
