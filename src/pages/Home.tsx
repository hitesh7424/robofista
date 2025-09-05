import { motion } from 'framer-motion'
import Countdown from '../components/Countdown'

const Home = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-center px-4 relative">
      {/* Subtle animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, #00FFF7 0%, transparent 70%)',
              'radial-gradient(circle at 80% 20%, #9D4EDD 0%, transparent 70%)',
              'radial-gradient(circle at 40% 40%, #1E90FF 0%, transparent 70%)',
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-5"
        />
      </div>

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 relative"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-primary via-secondary to-highlight p-1">
            <div className="w-full h-full rounded-full bg-bg-primary flex items-center justify-center">
              <span className="text-3xl md:text-4xl">🤖</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full blur-lg bg-gradient-to-r from-primary/20 to-secondary/20" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-5xl lg:text-6xl font-heading font-black mb-4 tracking-tight relative"
          style={{
            textShadow: '0 0 10px rgba(0, 255, 247, 0.3), 0 0 20px rgba(157, 78, 221, 0.2), 0 0 30px rgba(30, 144, 255, 0.1)',
          }}
        >
          <span className="bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">
            ROBOFIESTA
          </span>
          <br />
          <span className="bg-gradient-to-r from-highlight via-primary to-secondary bg-clip-text text-transparent">
            2K25
          </span>
        </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl font-heading font-semibold text-text-secondary mb-2"
        >
          SYMPOSIUM 2025
        </motion.p> */}
      </motion.div>

      {/* Countdown Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="w-full max-w-4xl"
      >
        <Countdown />
      </motion.div>
    </div>
  )
}

export default Home
