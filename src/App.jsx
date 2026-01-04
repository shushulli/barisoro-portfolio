
import {useState} from 'react'
import { LandingPage } from './pages/LandingPage.jsx'
import {Navbar} from './Components/Navbar.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Footer } from './Components/Footer.jsx';
import { LightDarkBtn } from './Components/LightDarkBtn.jsx';
import { AboutMe } from './pages/AboutMe.jsx';
import { ProjectSection } from './pages/ProjectSection.jsx';
import { Projects} from './pages/Projects.jsx';


function App() {
  const [status, setStatus] = useState(false);  /* status -> if navbar is open or not. setStatus -> function to change the status */
  const [activeTab, setActiveTab] = useState('basic');
  const [isDarkMode,setMode] = useState(false);

  return (

    <BrowserRouter>
<>
    
    <Navbar navStatus={status} setStatus={setStatus} /> {/* Passing props to Navbar */}
    <LightDarkBtn mode={isDarkMode} setMode={setMode} />

          <Routes>
            <Route path="/" element={<LandingPage navStatus={status} setStatus={setStatus} />} />
        <Route path="/aboutme" element={<AboutMe activeTab={activeTab} setActiveTab={setActiveTab}/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ProjectSection />} />
      </Routes>
</>
    </BrowserRouter>
    
  )
}

export default App
