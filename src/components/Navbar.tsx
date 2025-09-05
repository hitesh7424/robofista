import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiHome, FiCalendar, FiCamera, FiInfo } from 'react-icons/fi'

interface NavItem {
  id: string
  route: string
  icon: React.ReactNode
  label: string
}

const navItems: NavItem[] = [
  { id: 'home', route: '/', icon: <FiHome size={24} />, label: 'Home' },
  { id: 'explore', route: '/explore', icon: <FiCalendar size={24} />, label: 'Events' },
  { id: 'reels', route: '/reels', icon: <FiCamera size={24} />, label: 'Media' },
  { id: 'about', route: '/about', icon: <FiInfo size={24} />, label: 'About' },
]

const Navbar = () => {
  const location = useLocation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navVariants = {
    hidden: { 
      y: isMobile ? 100 : 0, 
      x: isMobile ? 0 : -100,
      opacity: 0 
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const itemVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed z-[100] backdrop-blur-xl bg-bg-primary/30 ${
        isMobile
          ? 'bottom-0 left-0 right-0 px-6 py-4'
          : 'top-0 left-0 bottom-0 w-20 px-3 py-6 flex-col'
      }`}
    >
      <div className={`flex items-center ${
        isMobile 
          ? 'justify-center space-x-8' 
          : 'flex-col h-full'
      }`}>
        {/* Desktop Logo */}
        {!isMobile && (
          <motion.div 
            variants={itemVariants}
            className="mb-8 mt-4"
          >
            <Link to="/" className="flex items-center justify-center">
              <img 
                src="/logo/logo2.webp" 
                alt="Robofiesta Logo" 
                className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        )}
        
        {/* Navigation Items */}
        <div className={`flex ${isMobile ? 'space-x-8' : 'flex-col space-y-8 flex-1 justify-center'}`}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.route
          
          return (
            <motion.div key={item.id} variants={itemVariants} whileHover="hover" whileTap="tap" className="relative">
              <Link
                to={item.route}
                className={`flex flex-col items-center space-y-1 transition-all duration-300 p-2 rounded-2xl ${
                  isActive
                    ? 'text-primary neon-text scale-110 bg-primary/10'
                    : 'text-text-secondary hover:text-primary hover:bg-white/5'
                }`}
              >
                <motion.div
                  className={`text-2xl ${isActive ? 'animate-pulse' : ''}`}
                  animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {item.icon}
                </motion.div>
                {!isMobile && (
                  <span className="text-xs font-body font-medium tracking-wide text-center">
                    {item.label}
                  </span>
                )}
              </Link>
              
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className={`absolute bg-gradient-to-r from-primary to-secondary rounded-full ${
                    isMobile 
                      ? 'w-8 h-1 -bottom-1 left-1/2 transform -translate-x-1/2' 
                      : 'w-1 h-8 -right-1 top-1/2 transform -translate-y-1/2'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          )
        })}
        </div>
      </div>
      
      {/* Subtle glow effect */}
      <div className={`absolute inset-0 blur-2xl bg-gradient-to-r from-primary/10 to-secondary/10 -z-10`} />
    </motion.nav>
  )
}

export default Navbar
