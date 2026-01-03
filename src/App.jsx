
import {useState} from 'react'
import { LandingPage } from './pages/LandingPage.jsx'
import {Navbar} from './Components/Navbar.jsx'
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
    <>
    <Navbar navStatus={status} setStatus={setStatus} /> {/* Passing props to Navbar */}
    <main> 
    <LandingPage navStatus={status} setStatus={setStatus} />
    <LightDarkBtn mode={isDarkMode} setMode={setMode} />
    <AboutMe activeTab={activeTab} setActiveTab={setActiveTab} />
    <ProjectSection />
    <Projects/>
    </main>
    <Footer />
    </>
  )
}

export default App
