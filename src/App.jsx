import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Experience from './pages/Experience'
import ContactMe from './pages/ContactMe'
import Award from './pages/Award'
import SplashCursor from './components/SplashCursor'
import NotFound from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <SplashCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/award" element={<Award />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
