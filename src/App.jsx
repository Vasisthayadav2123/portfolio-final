import { LoadingScreen } from './components/loadingscreen'
import './App.css'
import './index.css'
import { useState } from 'react'
import { Nav } from './components/nav'

function App() {

  const [isLoaded , setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div className={` min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100 `}>
          <Nav />
        </div>
    </>
  )
}

export default App
