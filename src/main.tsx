import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProdottiRedux} from './ProdottiRedux'
import  Navbar from './components/navbar'
import Card from './components/Card'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    
  <ProdottiRedux/>
   
  </StrictMode>,
)
