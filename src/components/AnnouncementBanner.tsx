import { motion } from 'framer-motion'
import { useState } from 'react'
import { getAnnouncementConfig } from '../config/features'

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true)
  const config = getAnnouncementConfig()

  if (!config.show || !isVisible) return null

  const getStyleByType = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-500/20 border-green-500/30 text-green-100'
      case 'warning':
        return 'bg-yellow-500/20 border-yellow-500/30 text-yellow-100'
      case 'error':
        return 'bg-red-500/20 border-red-500/30 text-red-100'
      default:
        return 'bg-primary/20 border-primary/30 text-white'
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return '✅'
      case 'warning':
        return '⚠️'
      case 'error':
        return '❌'
      default:
        return '📢'
    }
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 p-3 border-b backdrop-blur-md ${getStyleByType(config.type)}`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <span className="text-xl">{getIcon(config.type)}</span>
          <p className="font-medium text-sm md:text-base">{config.message}</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 text-current hover:opacity-75 transition-opacity p-1"
        >
          ✕
        </button>
      </div>
    </motion.div>
  )
}

export default AnnouncementBanner