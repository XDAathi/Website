import { useState, useEffect } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScrn';
import './index.css';
import { NavBar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import { About } from './components/sections/About';
import { Resume } from './components/sections/Resume';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';

function App(){
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when loading
    if (!isLoaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoaded]);

  return(
  <>
    {!isLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)}/>}{" "}
    <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-indigo-950 text-gray-100`}>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <About />
        <Projects />
        <Skills />
        <Resume />
      </main>
    </div>
  </>
  );
}

export default App;
