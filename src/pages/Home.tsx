import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Countdown from "../components/Countdown";
import { isFeatureEnabled } from "../config/features";

interface Coordinator {
  id: number;
  name: string;
  designation: string;
  department?: string;
  year?: string;
  branch?: string;
  email: string;
  phone: string;
  avatar: string;
  expertise?: string[];
  specialization?: string[];
  description?: string;
  responsibilities?: string[];
}

interface CoordinatorsData {
  faculty: Coordinator[];
  students: Coordinator[];
  contactInfo: {
    generalEmail: string;
    helplineNumber: string;
    whatsappGroup: string;
    officeHours: string;
    address: string;
  };
}

const Home = () => {
  const [coordinatorsData, setCoordinatorsData] = useState<CoordinatorsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoordinators = async () => {
      try {
        const response = await fetch('/data/coordinators.json');
        const data: CoordinatorsData = await response.json();
        setCoordinatorsData(data);
      } catch (error) {
        console.error('Error fetching coordinators data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinators();
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
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
        {isFeatureEnabled("showBackgroundVideo") && (
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
            }}
          />
        )}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center pt-20 md:pt-8">
        <div className="px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
          {/* Symposium Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
            className="mb-4"
          >
            <img
              src="/logo/logo2.webp"
              alt="Symposium Logo"
              className="w-20 sm:w-24 md:w-28 h-auto mx-auto"
              style={{
                filter: "drop-shadow(0 0 20px rgba(0, 255, 247, 0.4))"
              }}
            />
          </motion.div>

          {/* Text Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 1, type: "spring" }}
            className="mb-6"
          >
            <img
              src="/logo/robo_text_logo.webp"
              alt="ROBONEXUS Logo"
              className="w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto mx-auto drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 0 30px rgba(0, 255, 247, 0.3))"
              }}
            />
          </motion.div>

          {/* Event Date */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-8"
          >
            <div className="glassmorphism px-8 py-4 rounded-2xl inline-block">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00FFF7] mb-2">
                October 13, 2025
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white/80">
                Robotics & Automation Symposium
              </p>
            </div>
          </motion.div>

          {/* Countdown */}
          {isFeatureEnabled("showCountdownTimer") && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="w-full max-w-4xl mx-auto px-2 mb-8"
            >
              <Countdown />
            </motion.div>
          )}

          {/* Events Page Link */}
          {isFeatureEnabled("eventsEnabled") && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mb-8"
            >
              <Link to="/explore">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#00FFF7] to-[#9D4EDD] rounded-2xl font-bold text-black hover:shadow-2xl transition-all duration-300 text-lg sm:text-xl"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(0, 255, 247, 0.3))"
                  }}
                >
                  🎯 Explore Events
                </motion.button>
              </Link>
            </motion.div>
          )}

          {/* Scroll Indicator */}
          {isFeatureEnabled("showCoordinatorContacts") && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex flex-col items-center text-white/70 mt-8"
            >
              <p className="text-base sm:text-lg mb-4 text-center">Scroll to see our overall coordinators</p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl text-[#00FFF7]"
              >
                ↓
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Coordinators Section */}
      {isFeatureEnabled("showCoordinatorContacts") && (
        <div className="relative z-10 min-h-screen bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary">
          <div className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-6xl mx-auto">
              {/* Section Title */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Overall Coordinators
                  </span>
                </h2>
                <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                  The dedicated team behind ROBONEXUS 2K25
                </p>
              </motion.div>

              {/* Coordinators Grid */}
              {!loading && coordinatorsData && (
                <>
                  {/* Faculty Section */}
                  {coordinatorsData.faculty.length > 0 && (
                    <div className="mb-16">
                      <h3 className="text-2xl font-bold text-center mb-8 text-primary">Faculty Coordinator</h3>
                      <div className="flex justify-center">
                        {coordinatorsData.faculty.map((coordinator, index) => (
                          <motion.div
                            key={coordinator.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                          >
                            <div className="glassmorphism p-6 rounded-2xl hover:neon-glow transition-all duration-300 max-w-sm">
                              <div className="text-3xl mb-3">👨‍🏫</div>
                              <h4 className="text-xl font-bold text-primary mb-2">{coordinator.name}</h4>
                              <p className="text-text-secondary text-sm mb-3">{coordinator.designation}</p>
                              <div className="flex items-center justify-center space-x-2 text-text-secondary">
                                <span>📞</span>
                                <a 
                                  href={`tel:${coordinator.phone.replace(/\s/g, '')}`} 
                                  className="text-highlight hover:text-secondary transition-colors"
                                >
                                  {coordinator.phone}
                                </a>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Student Section */}
                  {coordinatorsData.students.length > 0 && (
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold text-center mb-8 text-secondary">Student Coordinators</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {coordinatorsData.students.map((coordinator, index) => (
                          <motion.div
                            key={coordinator.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: (index * 0.1) + 0.3 }}
                            viewport={{ once: true }}
                            className="text-center"
                          >
                            <div className="glassmorphism p-6 rounded-2xl hover:neon-glow transition-all duration-300">
                              <div className="text-2xl mb-3">👨‍🎓</div>
                              <h4 className="text-lg font-bold text-primary mb-2">{coordinator.name}</h4>
                              <div className="flex items-center justify-center space-x-2 text-text-secondary">
                                <span>📞</span>
                                <a 
                                  href={`tel:${coordinator.phone.replace(/\s/g, '')}`} 
                                  className="text-highlight hover:text-secondary transition-colors"
                                >
                                  {coordinator.phone}
                                </a>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Loading State */}
              {loading && (
                <div className="text-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-text-secondary">Loading coordinators...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Prizes & Rewards Section */}
      <div className="relative z-10 bg-gradient-to-b from-bg-primary to-transparent">
        <div className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  🏆 Prizes & Recognition
                </span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Celebrate your achievements and get recognized for your talent
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Technical Events */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-2xl p-6 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-primary mb-4">Technical Events</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 border border-primary/20">
                    <div className="text-2xl mb-2">🥇</div>
                    <h4 className="font-bold text-primary mb-1">Winner</h4>
                    <p className="text-text-secondary text-sm">Cash Prize + Certificate + Shield</p>
                  </div>
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl p-4 border border-secondary/20">
                    <div className="text-2xl mb-2">🥈</div>
                    <h4 className="font-bold text-secondary mb-1">Runner Up</h4>
                    <p className="text-text-secondary text-sm">Cash Prize + Certificate + Shield</p>
                  </div>
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-3 border border-primary/10">
                    <div className="text-xl mb-1">📜</div>
                    <h5 className="font-semibold text-primary text-sm mb-1">All Participants</h5>
                    <p className="text-text-secondary text-xs">Certificate of Participation</p>
                  </div>
                </div>
              </motion.div>

              {/* Non-Technical Events */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-2xl p-6 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-secondary mb-4">Non-Technical Events</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 border border-primary/20">
                    <div className="text-2xl mb-2">🏅</div>
                    <h4 className="font-bold text-primary mb-1">Winner</h4>
                    <p className="text-text-secondary text-sm">Certificate + Shield</p>
                  </div>
                  <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-xl p-4 border border-secondary/10">
                    <div className="text-xl mb-2">🎉</div>
                    <p className="text-text-secondary text-sm">
                      <strong className="text-primary">Everyone's a Winner!</strong><br/>
                      Recognition for all participants with Certificate
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10 max-w-3xl mx-auto">
                <p className="text-text-secondary text-sm">
                  🎊 <strong className="text-primary">Recognition Ceremony:</strong> All winners and participants will be celebrated 
                  during the closing ceremony with proper recognition for their achievements and contributions to ROBONEXUS 2K25.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;