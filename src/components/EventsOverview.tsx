import { motion } from 'framer-motion'

interface EventsOverviewProps {
  totalEvents: number
  totalPrize: string
  eventsByCategory: { [key: string]: number }
}

const EventsOverview = ({ totalEvents, totalPrize, eventsByCategory }: EventsOverviewProps) => {
  const stats = [
    {
      icon: '🏆',
      label: 'Total Events',
      value: totalEvents.toString(),
      color: 'text-primary'
    },
    {
      icon: '💰',
      label: 'Prize Pool',
      value: totalPrize,
      color: 'text-secondary'
    },
    {
      icon: '🎯',
      label: 'Competitions',
      value: eventsByCategory['Competition'] || 0,
      color: 'text-highlight'
    },
    {
      icon: '🔬',
      label: 'Workshops',
      value: eventsByCategory['Workshop'] || 0,
      color: 'text-primary'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="glassmorphism rounded-2xl p-6 text-center neon-glow hover:shadow-2xl transition-all duration-300"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.2
            }}
            className="text-4xl mb-3"
          >
            {stat.icon}
          </motion.div>
          
          <motion.div
            className={`text-3xl font-heading font-bold mb-2 ${stat.color}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            {stat.value}
          </motion.div>
          
          <div className="text-text-secondary font-body text-sm">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default EventsOverview
