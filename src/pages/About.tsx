import { motion } from 'framer-motion'

const About = () => {
  const contactInfo = [
    { 
      icon: '📱', 
      label: 'Phone', 
      value: '+91 98404 00868', 
      href: 'tel:+919840400868',
      description: 'Call us for event inquiries'
    },
    { 
      icon: '📷', 
      label: 'Instagram', 
      value: '@robonexus2k25', 
      href: 'https://instagram.com/robonexus2k25',
      description: 'Follow us for updates'
    },
    { 
      icon: '📧', 
      label: 'Email', 
      value: 'robonexus2025@college.edu', 
      href: 'mailto:robonexus2025@college.edu',
      description: 'Send us your queries'
    }
  ]

  const keyFeatures = [
    {
      icon: '🤖',
      title: 'Advanced Robotics',
      description: 'State-of-the-art robotics competitions featuring autonomous systems, AI integration, and cutting-edge technology demonstrations.'
    },
    {
      icon: '🎓',
      title: 'Educational Workshops',
      description: 'Hands-on learning experiences with PLC programming, ROS development, and industry-standard automation tools.'
    },
    {
      icon: '🏆',
      title: 'Competitive Events',
      description: 'Exciting competitions including robot racing, sumo battles, soccer matches, and technical challenges for all skill levels.'
    },
    {
      icon: '🌐',
      title: 'Industry Connect',
      description: 'Networking opportunities with industry professionals, career guidance sessions, and exposure to latest industry trends.'
    }
  ]

  const eventStats = [
    { number: '12+', label: 'Events' },
    { number: '500+', label: 'Expected Participants' }
  ]

  return (
    <div className="min-h-screen pt-20 md:pt-8 px-4 pb-20 md:pb-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About ROBONEXUS 2K25
            </span>
          </h1>
          <p className="text-text-secondary font-body text-lg max-w-3xl mx-auto leading-relaxed">
            Welcome to the ultimate robotics and automation symposium, where innovation meets excellence
            and the future of technology comes to life.
          </p>
        </motion.div>

        {/* Symposium Info */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="glassmorphism rounded-3xl p-8 md:p-12 neon-glow">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                ROBONEXUS 2K25
              </h2>
              <p className="text-text-secondary font-body text-lg leading-relaxed max-w-4xl mx-auto">
                An extraordinary symposium bringing together robotics enthusiasts, students, and industry experts 
                to explore the cutting-edge world of robotics and automation. Experience thrilling competitions, 
                educational workshops, and networking opportunities that will shape the future of technology.
              </p>
            </div>

            {/* Event Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
              {eventStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl glassmorphism"
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-base text-text-secondary font-body">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Department & College Info */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Department Info */}
            <div className="glassmorphism rounded-3xl p-8 neon-glow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                🤖 Department of Robotics & Automation
              </h3>
              <p className="text-text-secondary font-body leading-relaxed mb-4">
                The Department of Robotics and Automation is dedicated to advancing the field of 
                autonomous systems and intelligent machines. Our cutting-edge curriculum and research 
                programs prepare students for the rapidly evolving world of robotics technology.
              </p>
              <ul className="space-y-2 text-text-secondary font-body">
                <li className="flex items-center space-x-2">
                  <span className="text-secondary">✓</span>
                  <span>Advanced Robotics Research Labs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-secondary">✓</span>
                  <span>Industry-Integrated Curriculum</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-secondary">✓</span>
                  <span>State-of-the-art Equipment</span>
                </li>
              </ul>
            </div>

            {/* College Info */}
            <div className="glassmorphism rounded-3xl p-8 neon-glow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                🏛️ Karpaga Vinayaga College of Engineering and Technology
              </h3>
              <p className="text-text-secondary font-body leading-relaxed mb-4">
                A premier institution committed to excellence in engineering education and research. 
                KVCET has been nurturing innovative minds and creating future leaders in technology 
                for over decades.
              </p>
              <ul className="space-y-2 text-text-secondary font-body">
                <li className="flex items-center space-x-2">
                  <span className="text-secondary">✓</span>
                  <span>AICTE Approved Institution</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-secondary">✓</span>
                  <span>World-Class Infrastructure</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-secondary">✓</span>
                  <span>Industry-Academia Partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-highlight to-primary bg-clip-text text-transparent">
              What Makes Us Special
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glassmorphism rounded-2xl p-6 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-heading font-bold text-xl text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary font-body leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="glassmorphism rounded-3xl p-8 md:p-12 neon-glow">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-secondary to-highlight bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="glassmorphism rounded-2xl p-6 text-center hover:neon-glow transition-all duration-300 block"
                >
                  <div className="text-4xl mb-3">{contact.icon}</div>
                  <h3 className="font-heading font-bold text-lg text-primary mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-secondary font-body font-medium mb-2">
                    {contact.value}
                  </p>
                  <p className="text-text-secondary font-body text-sm">
                    {contact.description}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* College Address */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                📍 College Address
              </h3>
              <p className="text-text-secondary font-body leading-relaxed max-w-2xl mx-auto">
                Karpaga Vinayaga College of Engineering and Technology<br />
                GST Road, Chengalpattu District<br />
                Tamil Nadu, India - 603308
              </p>
            </div>
          </div>
        </motion.section>

        {/* Google Map */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="glassmorphism rounded-3xl p-8 neon-glow">
            <h2 className="text-2xl font-heading font-bold text-center text-primary mb-6">
              🗺️ Find Us Here
            </h2>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4649.323481296072!2d79.91111257574374!3d12.590692723113603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a531d49e3a4dc6f%3A0x2485bea2ae7907a2!2sKarpaga%20Vinayaga%20College%20of%20Engineering%20and%20Technology!5e1!3m2!1sen!2sin!4v1759038243749!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KVCET Location"
                className="rounded-2xl"
              />
            </div>
            <p className="text-center text-text-secondary font-body mt-4 text-sm">
              Navigate to our campus easily using the map above or click 
              <a 
                href="https://www.google.com/maps/place/Karpaga+Vinayaga+College+of+Engineering+and+Technology/@12.590692723113603,79.91111257574374,15z/data=!4m6!3m5!1s0x3a531d49e3a4dc6f:0x2485bea2ae7907a2!8m2!3d12.5906927!4d79.9111126!16s%2Fg%2F11c5w7w7w7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary ml-1 underline"
              >
                here for directions
              </a>
            </p>
          </div>
        </motion.section>

        {/* Rewards & Recognition Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="glassmorphism rounded-3xl p-8 md:p-12 neon-glow">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                🏆 Rewards & Recognition
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Technical Events */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glassmorphism rounded-2xl p-6 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Technical Events
                </h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 border border-primary/20">
                    <div className="text-2xl mb-2">🥇</div>
                    <h4 className="font-bold text-primary mb-1">Winner</h4>
                    <p className="text-text-secondary font-body text-sm">Cash Prize + Certificate + Shield</p>
                  </div>
                  <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl p-4 border border-secondary/20">
                    <div className="text-2xl mb-2">🥈</div>
                    <h4 className="font-bold text-secondary mb-1">Runner Up</h4>
                    <p className="text-text-secondary font-body text-sm">Cash Prize + Certificate + Shield</p>
                  </div>
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-3 border border-primary/10">
                    <div className="text-xl mb-1">📜</div>
                    <h5 className="font-semibold text-primary text-sm mb-1">All Participants</h5>
                    <p className="text-text-secondary font-body text-xs">Certificate of Participation</p>
                  </div>
                </div>
              </motion.div>

              {/* Non-Technical Events */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glassmorphism rounded-2xl p-6 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">
                  Non-Technical Events
                </h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 border border-primary/20">
                    <div className="text-2xl mb-2">🥇</div>
                    <h4 className="font-bold text-primary mb-1">Winner</h4>
                    <p className="text-text-secondary font-body text-sm">Certificate + Shield</p>
                  </div>
                  <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-xl p-4 border border-secondary/10">
                    <div className="text-xl mb-2">🎯</div>
                    <p className="text-text-secondary font-body text-sm">
                      <strong className="text-primary">Winner Takes All!</strong><br/>
                      Only the winner receives recognition with certificate and shield
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Participation Recognition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-center"
            >
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10">
                <div className="text-3xl mb-3">📜</div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  Participation Certificate
                </h3>
                <p className="text-text-secondary font-body text-sm max-w-2xl mx-auto">
                  Every participant will receive a certificate of participation, acknowledging their contribution 
                  to ROBONEXUS 2K25 and their commitment to learning and innovation in robotics.
                </p>
              </div>
            </motion.div>

            <div className="mt-6 text-center">
              <p className="text-text-secondary font-body text-sm">
                🎉 <strong>Recognition for Excellence:</strong> All winners and participants will be celebrated 
                during the closing ceremony with proper recognition for their achievements and efforts.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Overall Coordinators Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="glassmorphism rounded-3xl p-8 md:p-12 neon-glow">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Overall Coordinators
              </span>
            </h2>
            
            {/* Faculty Coordinator */}
            <div className="mb-8">
              <h3 className="text-xl font-heading font-bold text-center mb-6 text-primary">
                👨‍🏫 Faculty Coordinator
              </h3>
              <div className="flex justify-center">
                <div className="glassmorphism rounded-2xl p-6 text-center max-w-sm hover:neon-glow transition-all duration-300">
                  <div className="text-2xl mb-2">👨‍💼</div>
                  <h4 className="text-lg font-heading font-bold text-primary mb-2">
                    A.K.BABU (M.E)
                  </h4>
                  <div className="flex items-center justify-center space-x-2 text-text-secondary">
                    <span>📞</span>
                    <a 
                      href="tel:+919840400868" 
                      className="text-highlight hover:text-secondary transition-colors duration-300 font-body"
                    >
                      +91 98404 00868
                    </a>
                  </div>
                  <p className="text-sm text-text-secondary font-body mt-2">
                    For academic and administrative queries
                  </p>
                </div>
              </div>
            </div>

            {/* Student Coordinators */}
            <div>
              <h3 className="text-xl font-heading font-bold text-center mb-6 text-secondary">
                👥 Student Coordinators
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="glassmorphism rounded-2xl p-6 text-center hover:neon-glow transition-all duration-300">
                  <div className="text-2xl mb-2">👤</div>
                  <h4 className="text-lg font-heading font-bold text-primary mb-2">
                    GURUAKASH
                  </h4>
                  <div className="flex items-center justify-center space-x-2 text-text-secondary mb-2">
                    <span>📞</span>
                    <a 
                      href="tel:+916379929194" 
                      className="text-highlight hover:text-secondary transition-colors duration-300 font-body"
                    >
                      +91 63799 29194
                    </a>
                  </div>
                  <p className="text-xs text-text-secondary font-body">
                    Event coordination & support
                  </p>
                </div>
                
                <div className="glassmorphism rounded-2xl p-6 text-center hover:neon-glow transition-all duration-300">
                  <div className="text-2xl mb-2">👤</div>
                  <h4 className="text-lg font-heading font-bold text-primary mb-2">
                    RANJITH
                  </h4>
                  <div className="flex items-center justify-center space-x-2 text-text-secondary mb-2">
                    <span>📞</span>
                    <a 
                      href="tel:+919500740713" 
                      className="text-highlight hover:text-secondary transition-colors duration-300 font-body"
                    >
                      +91 95007 40713
                    </a>
                  </div>
                  <p className="text-xs text-text-secondary font-body">
                    Technical assistance & guidance
                  </p>
                </div>
                
                <div className="glassmorphism rounded-2xl p-6 text-center hover:neon-glow transition-all duration-300">
                  <div className="text-2xl mb-2">👤</div>
                  <h4 className="text-lg font-heading font-bold text-primary mb-2">
                    WILSON
                  </h4>
                  <div className="flex items-center justify-center space-x-2 text-text-secondary mb-2">
                    <span>📞</span>
                    <a 
                      href="tel:+916379996749" 
                      className="text-highlight hover:text-secondary transition-colors duration-300 font-body"
                    >
                      +91 63799 96749
                    </a>
                  </div>
                  <p className="text-xs text-text-secondary font-body">
                    Registration & queries
                  </p>
                </div>
                
                <div className="glassmorphism rounded-2xl p-6 text-center hover:neon-glow transition-all duration-300">
                  <div className="text-2xl mb-2">👤</div>
                  <h4 className="text-lg font-heading font-bold text-primary mb-2">
                    ARUL SELVAM
                  </h4>
                  <div className="flex items-center justify-center space-x-2 text-text-secondary mb-2">
                    <span>📞</span>
                    <a 
                      href="tel:+919025827412" 
                      className="text-highlight hover:text-secondary transition-colors duration-300 font-body"
                    >
                      +91 90258 27412
                    </a>
                  </div>
                  <p className="text-xs text-text-secondary font-body">
                    Workshop coordination
                  </p>
                </div>
                
                <div className="glassmorphism rounded-2xl p-6 text-center hover:neon-glow transition-all duration-300">
                  <div className="text-2xl mb-2">👤</div>
                  <h4 className="text-lg font-heading font-bold text-primary mb-2">
                    DINESH
                  </h4>
                  <div className="flex items-center justify-center space-x-2 text-text-secondary mb-2">
                    <span>📞</span>
                    <a 
                      href="tel:+918072413865" 
                      className="text-highlight hover:text-secondary transition-colors duration-300 font-body"
                    >
                      +91 80724 13865
                    </a>
                  </div>
                  <p className="text-xs text-text-secondary font-body">
                    Competition support
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
                <p className="text-center text-text-secondary font-body text-sm">
                  📞 <strong>Need Help?</strong> Feel free to contact any of our coordinators for assistance with 
                  registration, event queries, technical support, or general information about ROBONEXUS 2K25.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Important Information */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="glassmorphism rounded-3xl p-8 md:p-12 neon-glow">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Important Information
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">
                  📅 Event Schedule
                </h3>
                <ul className="space-y-2 text-text-secondary font-body">
                  <li>• Registration Deadline: October 12, 2025</li>
                  <li>• Event Date: October 13, 2025</li>
                  <li>• Venue: KVCET Campus</li>
                  <li>• Reporting Time: 9:00 AM (All Days)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">
                  💡 What to Bring
                </h3>
                <ul className="space-y-2 text-text-secondary font-body">
                  <li>• Student ID Card</li>
                  <li>• Laptop (for workshops)</li>
                  <li>• Registration Confirmation</li>
                  <li>• Enthusiasm for Robotics! 🚀</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
              <h3 className="text-lg font-heading font-bold text-primary mb-2 text-center">
                🎯 Mission Statement
              </h3>
              <p className="text-text-secondary font-body text-center leading-relaxed">
                To inspire, educate, and connect the next generation of robotics and automation engineers 
                through innovative competitions, world-class workshops, and meaningful industry interactions.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default About