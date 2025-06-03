import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './Components/NavBar.jsx'
import Insights from './Pages/Insights.jsx'
import Clients from './Components/Clients.jsx'
import Community from './Components/Community.jsx'
import BlogBanner from './Pages/BlogBanner.jsx'
import Blog2 from './Pages/Blog2.jsx'
import Help from './Pages/Help.jsx'
import Customers from './Pages/Customers.jsx'
import Marketing from './Pages/Marketing.jsx'
import Demo from './Pages/Demo.jsx'
import Footer from './Pages/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Insights/>
    <Clients/>
    <Community/>
    <BlogBanner/>
    <Help/>
    <Blog2/>
    <Customers/>
    <Marketing/>
    <Demo/>
    <Footer/>
  </StrictMode>,
)
