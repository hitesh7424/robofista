import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiSearch, FiFile } from 'react-icons/fi'

interface DownloadItem {
  id: number
  title: string
  description: string
  category: string
  fileType: string
  fileSize: string
  fileName: string
  downloadUrl: string
  icon: string
  uploadDate: string
  featured: boolean
}

interface DownloadsData {
  downloadableContent: DownloadItem[]
}

const Downloads = () => {
  const [downloadsData, setDownloadsData] = useState<DownloadsData | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const response = await fetch('/data/downloads.json')
        const data: DownloadsData = await response.json()
        setDownloadsData(data)
      } catch (error) {
        console.error('Error fetching downloads:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDownloads()
  }, [])

  const filteredDownloads = downloadsData?.downloadableContent.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.fileName.toLowerCase().includes(searchQuery.toLowerCase())
  ) || []

  const handleDownload = (item: DownloadItem) => {
    const link = document.createElement('a')
    link.href = item.downloadUrl
    link.download = item.fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading downloads...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 md:pt-8 px-4 pb-20 md:pb-8 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              📁 Downloads
            </span>
          </h1>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Access all important documents and resources for ROBONEXUS 2K25
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-text-secondary" />
            </div>
            <input
              type="text"
              placeholder="Search downloads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 glassmorphism rounded-2xl font-body text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Downloads Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          {filteredDownloads.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-text-secondary font-body text-lg">
                {searchQuery ? 'No downloads found matching your search.' : 'No downloads available.'}
              </p>
            </div>
          ) : (
            filteredDownloads.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism rounded-2xl p-6 hover:neon-glow transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="text-4xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary font-body text-sm mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-text-secondary">
                        <span className="flex items-center space-x-1">
                          <FiFile />
                          <span>{item.fileType.toUpperCase()}</span>
                        </span>
                        <span>{item.fileSize}</span>
                        <span className="hidden sm:inline">{item.fileName}</span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => handleDownload(item)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-bg-primary hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                  >
                    <FiDownload />
                    <span className="hidden sm:inline">Download</span>
                  </motion.button>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Downloads