import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface LoaderProps {
  text?: string
  onComplete?: () => void
}

const Loader = ({ text = "Loading...", onComplete }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Auto-hide loader after 800ms for faster loading
    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onComplete) {
        onComplete()
      }
    }, 800)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return null
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(0, 255, 247, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(157, 78, 221, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(30, 144, 255, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(0, 255, 247, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(157, 78, 221, 0.2) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(30, 144, 255, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(0, 255, 247, 0.2) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(157, 78, 221, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30, 144, 255, 0.2) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 bg-bg-primary"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo with pulse animation */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            scale: { duration: 0.6, repeat: Infinity },
            rotate: { duration: 0.8, repeat: Infinity, ease: 'linear' }
          }}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-primary via-secondary to-highlight p-1"
        >
          <div className="w-full h-full rounded-full bg-bg-primary flex items-center justify-center overflow-hidden">
            <img 
              src="/images/logo1.png" 
              alt="Robofiesta Logo" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </div>
        </motion.div>

        {/* Loading text */}
        <div className="text-center">
          <motion.h2 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="text-xl md:text-2xl font-heading font-bold text-primary mb-4"
          >
            {text}
          </motion.h2>
          
          {/* Animated dots */}
          <div className="flex space-x-2 justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 0.6, 
                  repeat: Infinity,
                  delay: i * 0.15
                }}
                className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-primary via-secondary to-highlight"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Loader
