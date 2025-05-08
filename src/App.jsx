import { LoadingScreen } from './components/loadingscreen';
import './App.css';
import './index.css';
import { useState } from 'react';
import { Nav } from './components/nav';
import { MobileNav } from './components/mobileNav';
import { About } from './components/section/about';
import { Home } from './components/section/home';
import { Projects } from './components/section/projects';
import { Contact } from './components/section/contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-black text-gray-100`}
      >
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
