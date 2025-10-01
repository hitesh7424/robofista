import { motion } from 'framer-motion'
import { featureConfig } from '../config/features'

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
    students: {name: string, phone: string | null}[]
    faculty: {name: string, phone: string | null}
  }
  contact?: {
    phone: string[]
    email: string
  }
}

interface EventCardProps {
  event: Event
  onClick: () => void
}

const EventCard = ({ event, onClick }: EventCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })
  }

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
      'Technical': '🔧',
      'Knowledge-Based': '📚',
      'Fun/Non-Technical': '🎮'
    }
    return iconMap[category] || '📋'
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative glassmorphism rounded-2xl overflow-hidden cursor-pointer group neon-glow hover:shadow-2xl transition-all duration-300 h-80"
    >
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      </div>

      {/* Content overlaid on image */}
      <div className="relative z-10 h-full flex flex-col justify-between p-4">
        {/* Top section with badges */}
        <div className="flex justify-between items-start">
          {/* Category badge */}
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/30 text-white backdrop-blur-sm space-x-1 border border-primary/20">
            <span>{getCategoryIcon(event.category)}</span>
            <span>{event.category}</span>
          </span>
        </div>

        {/* Bottom section with main content */}
        <div className="text-white">
          <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          
          <div className="flex items-center space-x-4 text-sm text-white/90">
            <div className="flex items-center space-x-1">
              <span>📅</span>
              <span className="font-body">{formatDate(event.date)}</span>
            </div>
            {featureConfig.showEventTimes && (
              <div className="flex items-center space-x-1">
                <span>🕐</span>
                <span className="font-body">{event.time}</span>
              </div>
            )}
          </div>

          {/* Hover indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="flex items-center text-primary text-sm font-medium mt-4"
          >
            <span>View Details</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="ml-2"
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Glow effect on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 pointer-events-none z-20"
      />
    </motion.div>
  )
}

export default EventCard
