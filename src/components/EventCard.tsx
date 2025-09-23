import { motion } from 'framer-motion'

interface Event {
  id: number
  title: string
  date: string
  time: string
  description: string
  rules: string[]
  image: string
  category: string
  prize: string
  registrationLink: string
  coordinators?: {
    students: string[]
    faculty: string
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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative glassmorphism rounded-2xl overflow-hidden cursor-pointer group neon-glow hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" />
        
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary backdrop-blur-sm">
            {event.category}
          </span>
        </div>

        {/* Prize badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary backdrop-blur-sm">
            🏆 {event.prize}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-heading font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors">
          {event.title}
        </h3>
        
        <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
          <div className="flex items-center space-x-1">
            <span>📅</span>
            <span className="font-body">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>🕐</span>
            <span className="font-body">{event.time}</span>
          </div>
        </div>

        <p className="text-text-secondary font-body text-sm leading-relaxed line-clamp-3">
          {event.description}
        </p>

        {/* Coordinators indicator */}
        {event.coordinators && (
          <div className="flex items-center space-x-2 mt-3 text-xs text-secondary">
            <span>👥</span>
            <span className="font-body">
              Faculty: {event.coordinators.faculty} | Students: {event.coordinators.students.length}
            </span>
          </div>
        )}

        {/* Hover indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-center text-primary text-sm font-medium"
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

      {/* Glow effect on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none"
      />
    </motion.div>
  )
}

export default EventCard
