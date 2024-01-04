import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Experience from './pages/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
