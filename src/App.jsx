
import {useState} from 'react'
import { LandingPage } from './pages/LandingPage.jsx'
import {Navbar} from './Components/Navbar.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { LightDarkBtn } from './Components/LightDarkBtn.jsx';
import { AboutMe } from './pages/AboutMe.jsx';
import { Projects} from './pages/Projects.jsx';


function App() {
  /* status:  if mobile navbar is open or not. setStatus:function to change the status. default:closed */
  // passed to Navbar
  const [status, setStatus] = useState(false);  
  // Passed to LightDarkBtn
const [isDarkMode, setMode] = useState(false); 



  return (

    <BrowserRouter>
<div className='bg-linear-to-b from-indigo-300 to-pink-300 via-fuchsia-700'>

    <Navbar navStatus={status} setStatus={setStatus} /> 
    <LightDarkBtn mode={isDarkMode} setMode={setMode} />
<main>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<AboutMe/>} />
      </Routes>
</main>
</div>
    </BrowserRouter>
    
  )
}

export default App
