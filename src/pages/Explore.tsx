import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import EventCard from '../components/EventCard'
import EventModal from '../components/EventModal'

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
}

const Explore = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
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

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Explore Events
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
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-2xl font-heading font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-bg-primary neon-glow'
                  : 'glassmorphism text-text-secondary hover:text-primary border border-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Events', value: events.length, icon: '🎯' },
            { label: 'Competitions', value: events.filter(e => e.category === 'Competition').length, icon: '🏆' },
            { label: 'Workshops', value: events.filter(e => e.category === 'Workshop').length, icon: '🔧' },
            { label: 'Exhibitions', value: events.filter(e => e.category === 'Exhibition').length, icon: '🎪' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism rounded-2xl p-6 text-center neon-glow"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary font-body">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
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
