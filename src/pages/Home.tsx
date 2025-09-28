import { motion } from "framer-motion";
import Countdown from "../components/Countdown";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
        {/* Animated gradient background as primary background */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(0, 255, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(157, 78, 221, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(30, 144, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(0, 255, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(157, 78, 221, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(30, 144, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(0, 255, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(157, 78, 221, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30, 144, 255, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        />

        {/* Vimeo iframe overlay - Fill method for all screen sizes */}
        <iframe
          src="https://player.vimeo.com/video/1115238176?autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&background=1&app_id=58479"
          className="absolute top-0 left-0 opacity-30"
          style={{
            pointerEvents: "none",
            border: "none",
            width: "100vw",
            height: "100vh",
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
            transform: "scale(1.1)",
            transformOrigin: "center center",
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Background Video"
          frameBorder="0"
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content Container */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-4 sm:mb-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mx-auto mb-2"
          >
            <img
              src="/logo/logo2.webp"
              alt="ROBONEXUS Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto object-contain"
              style={{
                filter:
                  "drop-shadow(0 0 15px rgba(0, 255, 247, 0.4)) drop-shadow(0 0 30px rgba(157, 78, 221, 0.3)) drop-shadow(0 0 45px rgba(30, 144, 255, 0.2))",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-2 relative"
          >
            <img
              src="/logo/robo_text_logo.webp"
              alt="ROBONEXUS 2K25"
              className="w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] h-auto mx-auto object-contain max-w-[90vw]"
              style={{
                filter:
                  "drop-shadow(0 0 8px rgba(0, 255, 247, 0.3)) drop-shadow(0 0 16px rgba(157, 78, 221, 0.2)) drop-shadow(0 0 24px rgba(30, 144, 255, 0.1))",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Countdown Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="w-full max-w-4xl px-2"
        >
          <Countdown />
        </motion.div>

        {/* Overall Coordinators Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 sm:mt-12 w-full max-w-6xl px-4"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">
              Overall Coordinators
            </h2>
            
            {/* Faculty Coordinator */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#00FFF7] text-center">
                Faculty Coordinator
              </h3>
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 text-center">
                  <p className="text-base sm:text-lg font-medium text-white mb-1">
                    A.K.BABU (M.E)
                  </p>
                  <a 
                    href="tel:+919840400868" 
                    className="text-[#00FFF7] hover:text-[#9D4EDD] transition-colors duration-300 text-sm sm:text-base"
                  >
                    📞 +91 98404 00868
                  </a>
                </div>
              </div>
            </div>

            {/* Student Coordinators */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#9D4EDD] text-center">
                Student Coordinators
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 text-center">
                  <p className="text-base sm:text-lg font-medium text-white mb-1">
                    GURUAKASH
                  </p>
                  <a 
                    href="tel:+919710830456" 
                    className="text-[#00FFF7] hover:text-[#9D4EDD] transition-colors duration-300 text-sm sm:text-base"
                  >
                    📞 +91 97108 30456
                  </a>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 text-center">
                  <p className="text-base sm:text-lg font-medium text-white mb-1">
                    RANJITH
                  </p>
                  <a 
                    href="tel:+919500063471" 
                    className="text-[#00FFF7] hover:text-[#9D4EDD] transition-colors duration-300 text-sm sm:text-base"
                  >
                    📞 +91 95000 63471
                  </a>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 text-center">
                  <p className="text-base sm:text-lg font-medium text-white mb-1">
                    WILSON
                  </p>
                  <a 
                    href="tel:+918072536987" 
                    className="text-[#00FFF7] hover:text-[#9D4EDD] transition-colors duration-300 text-sm sm:text-base"
                  >
                    📞 +91 80725 36987
                  </a>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 text-center">
                  <p className="text-base sm:text-lg font-medium text-white mb-1">
                    ARUL SELVAM
                  </p>
                  <a 
                    href="tel:+919626166996" 
                    className="text-[#00FFF7] hover:text-[#9D4EDD] transition-colors duration-300 text-sm sm:text-base"
                  >
                    📞 +91 96261 66996
                  </a>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 text-center sm:col-span-2 lg:col-span-1 lg:col-start-2">
                  <p className="text-base sm:text-lg font-medium text-white mb-1">
                    DINESH
                  </p>
                  <a 
                    href="tel:+919500563471" 
                    className="text-[#00FFF7] hover:text-[#9D4EDD] transition-colors duration-300 text-sm sm:text-base"
                  >
                    📞 +91 95005 63471
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
