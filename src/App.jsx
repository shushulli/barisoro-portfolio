
import {useState, useEffect} from 'react'
import { LandingPage } from './pages/LandingPage.jsx'
import {Navbar} from './Components/Navbar.jsx'
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import { LightDarkBtn } from './Components/LightDarkBtn.jsx';
import { AboutMe } from './pages/AboutMe.jsx';
import { Projects} from './pages/Projects.jsx';
import { MainLayout } from './Layouts/MainLayout.jsx';
// function for every time the paht changes, it will scroll to top 
function ScrollToTop() {
  // Grab the key as well as the pathname
  const { pathname, key } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, key]); // Trigger on path change OR link click (key change)

  return null;
}

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
      console.log("The site is in dark mode")
    } else {
      document.documentElement.classList.remove('dark');
      console.log("The site is in light mode")
    }
  }, [isDarkMode]);


  return (

    <BrowserRouter>

<ScrollToTop />
    <LightDarkBtn mode={isDarkMode} setMode={setMode} />
<main>
          <Routes>
            {/* Page with no navbar */}
            <Route path="/" element={<LandingPage mode={isDarkMode}/>} />
            {/* Pages with navbar */}
            <Route
          element={<MainLayout navStatus={status} setStatus={setStatus} mode={isDarkMode}/>}
        >
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={null} />
        
        </Route>
      </Routes>
</main>


    </BrowserRouter>
    
  )
}

export default App
