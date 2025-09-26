import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import EventCard from '../components/EventCard'
import EventModal from '../components/EventModal'
import Loader from '../components/Loader'

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
  contact?: {
    phone: string[]
    email: string
  }
}

const Explore = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)
  const [filter, setFilter] = useState<string>('All')

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/data/events.json')
        const data = await response.json()
        setEvents(data)
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const categories = ['All', ...new Set(events.map(event => event.category))]
  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(event => event.category === filter)

  // Category icons mapping
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
      'All': '🌟',
      'Technical': '🔧',
      'Knowledge': '📚',
      'Fun': '🎮'
    }
    return iconMap[category] || '📋'
  }

  // Calculate statistics
  const eventsByCategory = events.reduce((acc, event) => {
    acc[event.category] = (acc[event.category] || 0) + 1
    return acc
  }, {} as { [key: string]: number })

  const totalPrizeValue = events.reduce((total, event) => {
    if (event.prize.includes('₹')) {
      const prizeNum = parseInt(event.prize.replace(/₹|,/g, ''))
      return total + (isNaN(prizeNum) ? 0 : prizeNum)
    }
    return total
  }, 0)

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  if (loading || showLoader) {
    return <Loader text="Loading Events..." onComplete={() => setShowLoader(false)} />
  }

  return (
    <div className="min-h-screen pt-20 md:pt-8 px-4 pb-20 md:pb-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Robofiesta 2K25 Events
            </span>
          </h1>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto">
            Discover exciting competitions, workshops, and exhibitions designed to challenge
            and inspire the next generation of robotics enthusiasts.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex overflow-x-auto scrollbar-hide gap-3 px-4 md:justify-center md:flex-wrap md:px-0">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`flex-shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-2xl font-heading font-medium transition-all duration-300 flex items-center space-x-2 whitespace-nowrap ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-bg-primary neon-glow'
                    : 'glassmorphism text-text-secondary hover:text-primary border border-white/10'
                }`}
              >
                <span>{getCategoryIcon(category)}</span>
                <span>{category}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <EventCard
                event={event}
                onClick={() => handleEventClick(event)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredEvents.length === 0 && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-heading font-bold text-text-secondary mb-2">
              No events found
            </h3>
            <p className="text-text-secondary font-body">
              Try adjusting your filter or check back later for new events.
            </p>
          </motion.div>
        )}
      </div>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default Explore
