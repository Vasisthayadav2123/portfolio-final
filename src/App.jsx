import { LoadingScreen } from './components/loadingscreen';
import LightPillar from './components/LightPillar';
import CardNav from './components/CardNav';
import './App.css';
import './index.css';
import { useState } from 'react';
import { Nav } from './components/Nav';
import { MobileNav } from './components/MobileNav';
import { About } from './components/section/about';
import { Home } from './components/section/home';
import { Projects } from './components/section/projects';
import { Contact } from './components/section/contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const items = [
    {
      label: "About",
      bgColor: "#697ffaff",
      textColor: "#fff",
      links: [
        { label: "github", ariaLabel: "About Company", href: "https://github.com/Vasisthayadav2123" },
        { label: "Careers", ariaLabel: "About Careers", href: "#home" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#4a5cd0ff",
      textColor: "#fff",
      links: [
        { label: "Clout-it", ariaLabel: "Featured Projects", href:"https://cloud-it.vercel.app/sign-in" },
        { label: "featured projects", ariaLabel: "featured projects", href: "#projects" },
        { label: "more projects", ariaLabel: "projects github", href: "https://github.com/Vasisthayadav2123?tab=repositories" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#323294ff", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:vasisthayadav58@gmail.com"},
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/vasistha-yadav-05a952233/" }
      ]
    }
  ];
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* LightPillar as background */}
      <LightPillar
        className="fixed inset-0 -z-10 pointer-events-none"
        topColor="#5227FF"
        bottomColor="#FF9FFC"
        intensity={.9}
        rotationSpeed={0.3}
        glowAmount={0.001}
        pillarWidth={4.0}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={30}
        interactive={false}
        mixBlendMode="normal"
      />

      <CardNav
        className=' sticky top-0 bg-white/1 0 backdrop-blur-xs rounded-xl'
        logo="/Gemini_Generated_Image_g9gtr9g9gtr9g9gt (1).png"
        logoAlt="Company Logo"
        items={items}
        baseColor=""
        menuColor="#ffffff"
        buttonBgColor="#4299e1"
        buttonTextColor="#fff"
        ease="power3.out"
      />
        <div className="relative">  
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
