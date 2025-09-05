import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TimelineItem {
  id: number
  date: string
  title: string
  description: string
  status: 'completed' | 'upcoming'
  icon: string
}

const Timeline = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        const response = await fetch('/data/timeline.json')
        const data = await response.json()
        setTimelineData(data)
      } catch (error) {
        console.error('Error fetching timeline:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTimeline()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <div className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-heading font-bold text-center mb-12"
      >
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Symposium Roadmap
        </span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-highlight transform md:-translate-x-px" />

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Timeline node */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className={`absolute left-2 md:left-1/2 w-6 h-6 rounded-full border-2 transform md:-translate-x-1/2 z-10 ${
                  item.status === 'completed'
                    ? 'bg-primary border-primary neon-glow'
                    : 'bg-bg-primary border-secondary'
                }`}
              >
                <motion.span
                  className="absolute inset-0 flex items-center justify-center text-xs"
                  animate={item.status === 'upcoming' ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {item.icon}
                </motion.span>
              </motion.div>

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 glassmorphism rounded-2xl p-6 max-w-md ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                } ${item.status === 'completed' ? 'neon-glow' : 'border border-white/10'}`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary font-body">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
                <p className="text-text-secondary font-body leading-relaxed">
                  {item.description}
                </p>
                
                {/* Status badge */}
                <div className="mt-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'completed'
                        ? 'bg-primary/20 text-primary'
                        : 'bg-secondary/20 text-secondary'
                    }`}
                  >
                    {item.status === 'completed' ? '✓ Completed' : '⏳ Upcoming'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
