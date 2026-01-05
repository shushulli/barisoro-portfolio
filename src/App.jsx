
import {useState, useEffect} from 'react'
import { LandingPage } from './pages/LandingPage.jsx'
import {Navbar} from './Components/Navbar.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { LightDarkBtn } from './Components/LightDarkBtn.jsx';
import { AboutMe } from './pages/AboutMe.jsx';
import { Projects} from './pages/Projects.jsx';
import { MainLayout } from './Layouts/MainLayout.jsx';

function App() {
  /* status:  if mobile navbar is open or not. setStatus:function to change the status. default:closed */
  // passed to Navbar
  const [status, setStatus] = useState(false);  
  // Passed to LightDarkBtn
const [isDarkMode, setMode] = useState(false); 
// UseEffect

useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);


  return (

    <BrowserRouter>

<div className='bg-linear-to-b from-indigo-300 to-pink-300 via-fuchsia-700 dark:bg-none dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-500'>

    <LightDarkBtn mode={isDarkMode} setMode={setMode} />
<main>
          <Routes>
            
            <Route path="/" element={<LandingPage/>} />
            <Route
          element={<MainLayout navStatus={status} setStatus={setStatus} />}
        >
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<AboutMe/>} />
        </Route>
      </Routes>
</main>
</div>

    </BrowserRouter>
    
  )
}

export default App
