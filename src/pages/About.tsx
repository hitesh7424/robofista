import { motion } from 'framer-motion'

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Event Director',
      department: 'Robotics Engineering',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      social: { linkedin: '#', twitter: '#', email: 'sarah.johnson@university.edu' }
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Technical Coordinator',
      department: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      social: { linkedin: '#', twitter: '#', email: 'michael.chen@university.edu' }
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Workshop Lead',
      department: 'Automation Systems',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      social: { linkedin: '#', twitter: '#', email: 'emily.rodriguez@university.edu' }
    },
    {
      name: 'Alex Kumar',
      role: 'Student Coordinator',
      department: 'Robotics Club President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      social: { linkedin: '#', twitter: '#', email: 'alex.kumar@student.university.edu' }
    }
  ]

  const contactLinks = [
    { icon: '📧', label: 'Email', value: 'symposium@university.edu', href: 'mailto:symposium@university.edu' },
    { icon: '📱', label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: '📍', label: 'Location', value: 'University Campus, Tech Building', href: '#' },
    { icon: '🌐', label: 'Website', value: 'www.university.edu/robotics', href: 'https://university.edu/robotics' },
  ]

  const socialLinks = [
    { icon: '📘', name: 'Facebook', href: '#', color: 'hover:text-blue-500' },
    { icon: '🐦', name: 'Twitter', href: '#', color: 'hover:text-sky-500' },
    { icon: '📷', name: 'Instagram', href: '#', color: 'hover:text-pink-500' },
    { icon: '💼', name: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
    { icon: '📺', name: 'YouTube', href: '#', color: 'hover:text-red-500' },
  ]

  return (
    <div className="min-h-screen pt-8 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About the Symposium
            </span>
          </h1>
          <p className="text-text-secondary font-body text-lg max-w-3xl mx-auto leading-relaxed">
            Discover the minds behind the most innovative robotics event of the year and learn more
            about our mission to advance the future of automation technology.
          </p>
        </motion.div>

        {/* College Info */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="glassmorphism rounded-3xl p-8 md:p-12 neon-glow">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Institute of Technology
                </h2>
                <p className="text-text-secondary font-body leading-relaxed mb-6">
                  Established in 1965, our Institute of Technology has been at the forefront of
                  engineering education and research. With state-of-the-art facilities and world-class
                  faculty, we continue to push the boundaries of what's possible in robotics and automation.
                </p>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">50+</div>
                    <div className="text-sm text-text-secondary">Years of Excellence</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">5000+</div>
                    <div className="text-sm text-text-secondary">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">200+</div>
                    <div className="text-sm text-text-secondary">Faculty Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">15+</div>
                    <div className="text-sm text-text-secondary">Research Labs</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="University Campus"
                  className="relative rounded-3xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Department Info */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-secondary to-highlight bg-clip-text text-transparent">
              Department of Robotics & Automation
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Our Mission',
                icon: '🎯',
                description: 'To advance the field of robotics through cutting-edge research, innovative education, and collaborative partnerships with industry leaders.'
              },
              {
                title: 'Research Areas',
                icon: '🔬',
                description: 'Autonomous systems, AI integration, human-robot interaction, industrial automation, and bio-inspired robotics.'
              },
              {
                title: 'Innovation Hub',
                icon: '💡',
                description: 'Our labs are equipped with the latest technology, providing students with hands-on experience in designing and building next-generation robots.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glassmorphism rounded-2xl p-6 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-heading font-bold text-xl text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary font-body leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-highlight to-primary bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glassmorphism rounded-2xl p-6 text-center neon-glow hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl" />
                </div>
                
                <h3 className="font-heading font-bold text-lg text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-text-secondary font-body text-xs mb-4">
                  {member.department}
                </p>

                <div className="flex justify-center space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={member.social.email}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    📧
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={member.social.linkedin}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    💼
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={member.social.twitter}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    🐦
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="glassmorphism rounded-3xl p-8 md:p-12 neon-glow">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                {contactLinks.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 glassmorphism rounded-xl hover:neon-glow transition-all duration-300"
                  >
                    <span className="text-2xl">{contact.icon}</span>
                    <div>
                      <div className="font-heading font-semibold text-primary">
                        {contact.label}
                      </div>
                      <div className="text-text-secondary font-body text-sm">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-heading font-bold text-xl text-secondary mb-6">
                  Follow Us
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className={`flex flex-col items-center p-4 glassmorphism rounded-xl text-center transition-all duration-300 ${social.color}`}
                    >
                      <span className="text-2xl mb-2">{social.icon}</span>
                      <span className="text-xs font-body">{social.name}</span>
                    </motion.a>
                  ))}
                </div>

                <div className="glassmorphism rounded-2xl p-6">
                  <h4 className="font-heading font-semibold text-primary mb-3">
                    Newsletter Signup
                  </h4>
                  <p className="text-text-secondary font-body text-sm mb-4">
                    Stay updated with the latest robotics news and symposium announcements.
                  </p>
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 bg-bg-primary/50 border border-white/20 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium text-bg-primary"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default About
