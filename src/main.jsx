import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Testingpage from './testingpage.jsx'
import Headerpage from './header.jsx'
import Addition from './addition.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navpage from './navpage.jsx'
import Area from './area.jsx'
import Registration from './register.jsx'
import Cardskerala from './cardskerala.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navpage/> */}
    {/* <Testingpage/>
    <Headerpage/> */}
    {/* <Addition/> */}
    {/* <Area/>
     */}
    
    {/* <Registration/> */}
    <Cardskerala/>
  </StrictMode>,
)
