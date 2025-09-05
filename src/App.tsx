import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Reels from './pages/Reels'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-primary text-text-primary">
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
    </Router>
  )
}

export default App
