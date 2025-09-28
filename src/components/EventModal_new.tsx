import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { isEventRegistrationEnabled, getRegistrationMessage } from '../config/features'

interface Event {
  id: number
  title: string
  date: string
  time: string
  description: string
  rules: string[]
  image: string
  category: string
}

interface EventModalProps {
  event: Event | null
  isOpen: boolean
  onClose: () => void
}

const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!event) return null

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-bg-primary/90 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative glassmorphism rounded-3xl overflow-hidden max-w-2xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto neon-glow"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full glassmorphism flex items-center justify-center text-text-secondary hover:text-primary transition-colors"
            >
              ✕
            </motion.button>

            {/* Header image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary backdrop-blur-sm">
                  {event.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 pb-20 md:pb-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4"
              >
                {event.title}
              </motion.h2>

              {/* Date and time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0 mb-6"
              >
                <div className="flex items-center space-x-2 text-text-secondary">
                  <span className="text-lg">📅</span>
                  <span className="font-body">{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <span className="text-lg">🕐</span>
                  <span className="font-body">{event.time}</span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <h3 className="text-lg font-heading font-semibold text-secondary mb-3">
                  About This Event
                </h3>
                <p className="text-text-secondary font-body leading-relaxed">
                  {event.description}
                </p>
              </motion.div>

              {/* Rules */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-lg font-heading font-semibold text-secondary mb-3">
                  Rules & Guidelines
                </h3>
                <ul className="space-y-2">
                  {event.rules.map((rule, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start space-x-3 text-text-secondary font-body"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{rule}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Register button */}
              {isEventRegistrationEnabled(event.id) ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center pt-4 pb-24 md:pb-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-2xl font-heading font-bold text-bg-primary hover:shadow-2xl transition-all duration-300 neon-glow"
                  >
                    Register Now
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center pt-4 pb-24 md:pb-6 text-center"
                >
                  <p className="text-text-secondary text-sm mb-2">
                    {getRegistrationMessage()}
                  </p>
                  <button
                    disabled
                    className="px-8 py-3 bg-gray-600 rounded-2xl font-heading font-bold text-gray-400 cursor-not-allowed"
                  >
                    Registration Closed
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EventModal
