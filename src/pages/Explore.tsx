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
              ROBONEXUS 2K25 Events
            </span>
          </h1>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto">
            Discover exciting competitions, workshops, and exhibitions designed to challenge
            and inspire the next generation of robotics enthusiasts.
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
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
        {events.length === 0 && !loading && (
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
