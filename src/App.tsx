import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import InitialLoader from './components/InitialLoader'
import AnnouncementBanner from './components/AnnouncementBanner'
import MaintenanceMode from './components/MaintenanceMode'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Downloads from './pages/Downloads'
import Reels from './pages/Reels'
import About from './pages/About'
import { featureConfig } from './config/features'

function AppContent() {
  const [showInitialLoader, setShowInitialLoader] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Only show initial loader on first visit to home page
    const hasVisited = sessionStorage.getItem('hasVisited')
    if (!hasVisited && location.pathname === '/') {
      setShowInitialLoader(true)
      sessionStorage.setItem('hasVisited', 'true')
    }
  }, [location.pathname])

  const handleLoaderComplete = () => {
    setShowInitialLoader(false)
    // Don't force navigation - stay on current page
  }

  // Check for maintenance mode
  if (featureConfig.maintenanceMode) {
    return <MaintenanceMode message={featureConfig.maintenanceMessage} />
  }

  if (showInitialLoader) {
    return <InitialLoader onComplete={handleLoaderComplete} />
  }

  return (
    <div className={`min-h-screen text-text-primary ${location.pathname === '/' ? 'bg-transparent' : 'bg-bg-primary'}`}>
      <AnnouncementBanner />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative md:pl-20 pb-20 md:pb-0"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/downloads" element={<Downloads />} />
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
