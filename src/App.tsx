import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import InitialLoader from './components/InitialLoader'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Reels from './pages/Reels'
import About from './pages/About'

function AppContent() {
  const [showInitialLoader, setShowInitialLoader] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLoaderComplete = () => {
    setShowInitialLoader(false)
    // Ensure we're on the home page after loader completes
    if (location.pathname !== '/') {
      navigate('/', { replace: true })
    }
  }

  if (showInitialLoader) {
    return <InitialLoader onComplete={handleLoaderComplete} />
  }

  return (
    <div className={`min-h-screen text-text-primary ${location.pathname === '/' ? 'bg-transparent' : 'bg-bg-primary'}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative md:pl-20 pb-20 md:pb-0"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Navbar />
      </motion.div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
