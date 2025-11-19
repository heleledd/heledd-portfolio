import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './components/Main.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main />
  </StrictMode>,
)
