import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface Event {
  id: number
  title: string
  date: string
  time: string
  description: string
  rules: string[]
  image: string
  category: string
  registrationLink: string
  coordinators?: {
    students: string[]
    faculty: string
  }
  contact?: {
    phone: string[]
    email: string
  }
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
                className="mb-6"
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

              {/* Prizes & Rewards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mb-6"
              >
                <h3 className="text-lg font-heading font-semibold text-secondary mb-3">
                  🏆 Prizes & Rewards
                </h3>
                
                {event.category.toLowerCase().includes('technical') ? (
                  // Technical Events Prizes
                  <div className="space-y-3">
                    <div className="glassmorphism rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">🥇</span>
                        <h4 className="font-heading font-bold text-primary">Winner</h4>
                      </div>
                      <p className="text-text-secondary font-body text-sm ml-8">
                        Cash Prize + Certificate + Shield
                      </p>
                    </div>
                    
                    <div className="glassmorphism rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">🥈</span>
                        <h4 className="font-heading font-bold text-secondary">Runner Up</h4>
                      </div>
                      <p className="text-text-secondary font-body text-sm ml-8">
                        Cash Prize + Certificate + Shield
                      </p>
                    </div>
                    
                    <div className="glassmorphism rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">📜</span>
                        <h4 className="font-heading font-bold text-primary">All Participants</h4>
                      </div>
                      <p className="text-text-secondary font-body text-sm ml-8">
                        Certificate of Participation
                      </p>
                    </div>
                  </div>
                ) : (
                  // Non-Technical Events Prizes
                  <div className="space-y-3">
                    <div className="glassmorphism rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">🥇</span>
                        <h4 className="font-heading font-bold text-primary">Winner</h4>
                      </div>
                      <p className="text-text-secondary font-body text-sm ml-8">
                        Certificate + Shield
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-3 border border-primary/20">
                      <p className="text-center text-text-secondary font-body text-sm">
                        � <strong>Winner Takes All!</strong> Only the winner in non-technical events receives recognition with certificate and shield.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Coordinators */}
              {event.coordinators && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8"
                >
                  <h3 className="text-lg font-heading font-semibold text-secondary mb-4">
                    Event Coordinators
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Faculty Coordinator */}
                    <div className="glassmorphism rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                        <span className="mr-2">👨‍🏫</span>
                        Faculty Coordinator
                      </h4>
                      <p className="text-text-secondary font-body">{event.coordinators.faculty}</p>
                    </div>

                    {/* Student Coordinators */}
                    <div className="glassmorphism rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                        <span className="mr-2">👥</span>
                        Student Coordinators
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {event.coordinators.students.map((student, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            className="flex items-center space-x-2 bg-bg-primary/30 rounded-lg p-2"
                          >
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            <span className="text-text-secondary font-body text-sm">{student}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Overall Coordinators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-8"
              >
                <h3 className="text-lg font-heading font-semibold text-secondary mb-4">
                  Overall Coordinators
                </h3>
                
                <div className="space-y-4">
                  {/* Faculty Coordinator */}
                  <div className="glassmorphism rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                      <span className="mr-2">👨‍🏫</span>
                      Faculty Coordinator
                    </h4>
                    <div className="flex items-center justify-between bg-bg-primary/30 rounded-lg p-3">
                      <div>
                        <p className="text-text-primary font-body font-medium">A.K.BABU (M.E)</p>
                        <p className="text-xs text-text-secondary font-body">Academic & Administrative Queries</p>
                      </div>
                      <motion.a
                        href="tel:+919840400868"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-1 bg-primary/20 hover:bg-primary/30 rounded-lg px-3 py-1 border border-primary/30 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                      >
                        <span className="text-primary">📱</span>
                        <span className="text-text-secondary font-body text-sm">Call</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Student Coordinators */}
                  <div className="glassmorphism rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                      <span className="mr-2">👥</span>
                      Student Coordinators
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-bg-primary/30 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="text-text-primary font-body font-medium text-sm">GURUAKASH</p>
                            <p className="text-xs text-text-secondary font-body">Event Support</p>
                          </div>
                          <motion.a
                            href="tel:+916379929194"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-1 bg-primary/20 hover:bg-primary/30 rounded-lg px-2 py-1 border border-primary/30 hover:border-primary/50 transition-all duration-300 cursor-pointer ml-2"
                          >
                            <span className="text-primary text-xs">📱</span>
                            <span className="text-text-secondary font-body text-xs">63799 29194</span>
                          </motion.a>
                        </div>
                      </div>

                      <div className="bg-bg-primary/30 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="text-text-primary font-body font-medium text-sm">RANJITH</p>
                            <p className="text-xs text-text-secondary font-body">Technical Assistance</p>
                          </div>
                          <motion.a
                            href="tel:+919500740713"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-1 bg-primary/20 hover:bg-primary/30 rounded-lg px-2 py-1 border border-primary/30 hover:border-primary/50 transition-all duration-300 cursor-pointer ml-2"
                          >
                            <span className="text-primary text-xs">📱</span>
                            <span className="text-text-secondary font-body text-xs">95007 40713</span>
                          </motion.a>
                        </div>
                      </div>

                      <div className="bg-bg-primary/30 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="text-text-primary font-body font-medium text-sm">WILSON</p>
                            <p className="text-xs text-text-secondary font-body">Registration Support</p>
                          </div>
                          <motion.a
                            href="tel:+916379996749"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-1 bg-primary/20 hover:bg-primary/30 rounded-lg px-2 py-1 border border-primary/30 hover:border-primary/50 transition-all duration-300 cursor-pointer ml-2"
                          >
                            <span className="text-primary text-xs">📱</span>
                            <span className="text-text-secondary font-body text-xs">63799 96749</span>
                          </motion.a>
                        </div>
                      </div>

                      <div className="bg-bg-primary/30 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="text-text-primary font-body font-medium text-sm">ARUL SELVAM</p>
                            <p className="text-xs text-text-secondary font-body">Workshop Coordination</p>
                          </div>
                          <motion.a
                            href="tel:+919025827412"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-1 bg-primary/20 hover:bg-primary/30 rounded-lg px-2 py-1 border border-primary/30 hover:border-primary/50 transition-all duration-300 cursor-pointer ml-2"
                          >
                            <span className="text-primary text-xs">📱</span>
                            <span className="text-text-secondary font-body text-xs">90258 27412</span>
                          </motion.a>
                        </div>
                      </div>

                      <div className="bg-bg-primary/30 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="text-text-primary font-body font-medium text-sm">DINESH</p>
                            <p className="text-xs text-text-secondary font-body">Competition Support</p>
                          </div>
                          <motion.a
                            href="tel:+918072413865"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-1 bg-primary/20 hover:bg-primary/30 rounded-lg px-2 py-1 border border-primary/30 hover:border-primary/50 transition-all duration-300 cursor-pointer ml-2"
                          >
                            <span className="text-primary text-xs">📱</span>
                            <span className="text-text-secondary font-body text-xs">80724 13865</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                      <p className="text-center text-text-secondary font-body text-xs">
                        💡 <strong>Need General Help?</strong> Contact any overall coordinator for assistance with symposium queries, registration, or general support.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Register button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center pt-4 pb-24 md:pb-6"
              >
                <motion.a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-2xl font-heading font-bold text-bg-primary hover:shadow-2xl transition-all duration-300 neon-glow inline-flex items-center space-x-2"
                >
                  <span>Register Now</span>
                  <span>🚀</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EventModal
