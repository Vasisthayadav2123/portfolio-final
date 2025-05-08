import { LoadingScreen } from './components/loadingscreen'
import './App.css'
import './index.css'
import { useState } from 'react'
import { Nav } from './components/nav'
import { MobileNav } from './components/mobileNav'

function App() {

  const [isLoaded , setIsLoaded] = useState(false);
  const [menuOpen , setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div className={` min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100 `}>
          <Nav  menuOpen={menuOpen} setMenuOpen = {setMenuOpen} />
          <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    </>
  )
}

export default App
