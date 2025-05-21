import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScrn';
import './index.css';
import { NavBar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import { About } from './components/sections/About';
import { GiSkills } from 'react-icons/gi';

function App(){
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return(
  <>
    {!isLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)}/>}{" "}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-indigo-950 text-gray-100`}>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <About />
      {/* <Resume />
      <Projects />
      <Skills /> */}
    </div>
  </>
  );
}

export default App;
