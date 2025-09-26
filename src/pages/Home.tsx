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
      </div>
    </div>
  );
};

export default Home;
