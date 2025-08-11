"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"

import SectionIndicator from "./components/SectionIndicator" // Import the new component
import VoiceQnAModal from "./components/VoiceQnAModal"
import "./index.css"

function App() {
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false)

  useEffect(() => {
    if (isVoiceModalOpen) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
    return () => {
      document.body.classList.remove("no-scroll")
    }
  }, [isVoiceModalOpen])

  return (
    <div className="App">
      <Navbar />
      <Home onOpenVoiceModal={() => setIsVoiceModalOpen(true)} />
      <About />
      <Projects />
      <Skills />
      <Contact />
    
      <SectionIndicator /> {/* Add the SectionIndicator here */}
      {isVoiceModalOpen && <VoiceQnAModal onClose={() => setIsVoiceModalOpen(false)} />}
    </div>
  )
}

export default App
