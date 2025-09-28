import { motion } from 'framer-motion'

interface UnderConstructionProps {
  title?: string
  message?: string
  icon?: string
}

const UnderConstruction = ({ 
  title = "Under Construction", 
  message = "This section is currently being developed. Please check back soon!",
  icon = "🚧"
}: UnderConstructionProps) => {
  return (
    <div className="min-h-screen pt-20 md:pt-8 px-4 pb-20 md:pb-8 relative">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-bg-primary via-bg-primary/95 to-bg-primary">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(0, 255, 247, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(157, 78, 221, 0.05) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(30, 144, 255, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(0, 255, 247, 0.05) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(157, 78, 221, 0.05) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(30, 144, 255, 0.05) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-8xl md:text-9xl mb-6"
          >
            {icon}
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-heading font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-text-secondary font-body leading-relaxed mb-8 max-w-2xl"
        >
          {message}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glassmorphism rounded-2xl p-6 max-w-md"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full"
            />
            <span className="text-primary font-semibold">Development in Progress</span>
          </div>
          <p className="text-text-secondary text-sm">
            Our team is working hard to bring you amazing content. Stay tuned for updates!
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-20 left-10 text-primary/20 text-2xl"
        >
          ⚡
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-32 right-20 text-secondary/20 text-3xl"
        >
          🔧
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-32 left-20 text-highlight/20 text-2xl"
        >
          ⚙️
        </motion.div>
      </div>
    </div>
  )
}

export default UnderConstruction