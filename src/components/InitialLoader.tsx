import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

interface InitialLoaderProps {
  onComplete: () => void
}

const InitialLoader = ({ onComplete }: InitialLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Show loader for 3 seconds on first visit
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500) // Wait for fade out animation
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-primary overflow-hidden"
        >
          {/* Animated Background */}
          <AnimatedBackground />
          
          {/* Content Overlay - Positioned at bottom */}
          <div className="relative z-10 flex flex-col items-center justify-end pb-24 h-full text-center px-4">
            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                ))}
              </div>
              
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-text-secondary font-body text-sm"
              >
                Initializing Experience...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default InitialLoader
