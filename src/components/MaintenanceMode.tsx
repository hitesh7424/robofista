import { motion } from 'framer-motion'
import { featureConfig } from '../config/features'

interface MaintenanceModeProps {
  message?: string
}

const MaintenanceMode = ({ message }: MaintenanceModeProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-bg-primary via-bg-primary/95 to-bg-primary">
      {/* Animated Background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(0, 255, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(157, 78, 221, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(30, 144, 255, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(0, 255, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(157, 78, 221, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(30, 144, 255, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="/logo/logo2.webp"
            alt="ROBONEXUS Logo"
            className="w-24 h-24 mx-auto object-contain mb-4"
            style={{
              filter: "drop-shadow(0 0 20px rgba(0, 255, 247, 0.4))"
            }}
          />
          <img
            src="/logo/robo_text_logo.webp"
            alt="ROBONEXUS 2K25"
            className="w-80 h-auto mx-auto object-contain max-w-full"
            style={{
              filter: "drop-shadow(0 0 10px rgba(0, 255, 247, 0.3))"
            }}
          />
        </motion.div>

        {/* Maintenance Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl md:text-7xl mb-4"
          >
            ⚙️
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl md:text-5xl font-heading font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Under Maintenance
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-text-secondary font-body leading-relaxed mb-8"
        >
          {message || featureConfig.maintenanceMessage}
        </motion.p>

        {/* Status Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="glassmorphism rounded-2xl p-6 max-w-md mx-auto"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full"
            />
            <span className="text-primary font-semibold">System Maintenance</span>
          </div>
          <p className="text-text-secondary text-sm">
            We appreciate your patience while we make improvements to serve you better.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 text-text-secondary text-sm"
        >
          <p>For urgent inquiries, please contact:</p>
          <a 
            href="tel:+919840400868" 
            className="text-primary hover:text-secondary transition-colors duration-300 font-medium"
          >
            +91 98404 00868
          </a>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute top-20 left-10 text-primary/20 text-2xl"
        >
          🔧
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute top-32 right-20 text-secondary/20 text-3xl"
        >
          ⚡
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="absolute bottom-20 left-20 text-highlight/20 text-2xl"
        >
          🚀
        </motion.div>
      </div>
    </div>
  )
}

export default MaintenanceMode