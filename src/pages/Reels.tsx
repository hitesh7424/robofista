import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ReelCard from '../components/ReelCard'

interface MediaItem {
  id: number
  type: 'yt-video' | 'video' | 'image'
  title: string
  description: string
  url: string
}

const Reels = () => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('/data/media.json')
        const data = await response.json()
        setMediaItems(data)
      } catch (error) {
        console.error('Error fetching media:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMedia()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop
        const itemHeight = containerRef.current.clientHeight
        // More accurate calculation with bounds checking
        const rawIndex = scrollTop / itemHeight
        const newIndex = Math.max(0, Math.min(Math.round(rawIndex), mediaItems.length - 1))
        
        if (newIndex !== currentIndex) {
          console.log('Scroll Index:', newIndex, 'ScrollTop:', scrollTop, 'ItemHeight:', itemHeight)
          setCurrentIndex(newIndex)
        }
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [currentIndex, mediaItems.length])

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const itemHeight = containerRef.current.clientHeight
      const targetScrollTop = index * itemHeight
      
      console.log('Scrolling to index:', index, 'Target scroll:', targetScrollTop)
      
      containerRef.current.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      })
      
      // Update the current index immediately for better responsiveness
      setCurrentIndex(index)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <div className="relative h-screen overflow-hidden bg-bg-primary md:ml-20">
      {/* Main container */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {mediaItems.map((media, index) => (
          <ReelCard
            key={media.id}
            media={media}
            isActive={index === currentIndex}
          />
        ))}
      </div>

      {/* Navigation dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
        {mediaItems.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => scrollToIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
              index === currentIndex
                ? 'bg-primary border-primary shadow-lg shadow-primary/50'
                : 'bg-transparent border-white/50 hover:border-white/80 hover:bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* Header overlay */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 p-4 bg-gradient-to-b from-bg-primary/80 to-transparent"
      >
        <div className="flex items-center justify-between max-w-md mx-auto">
          <h1 className="text-xl font-heading font-bold text-primary">
            Symposium Reels
          </h1>
          <div className="flex items-center space-x-2 text-text-secondary text-sm">
            <span>{currentIndex + 1}</span>
            <span>/</span>
            <span>{mediaItems.length}</span>
          </div>
        </div>
      </motion.div>

      {/* Loading overlay for first load */}
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-bg-primary flex items-center justify-center z-50"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"
            />
            <p className="text-text-secondary font-body">Loading amazing content...</p>
          </div>
        </motion.div>
      )}

      {/* Empty state */}
      {!loading && mediaItems.length === 0 && (
        <div className="h-full flex items-center justify-center text-center px-4">
          <div>
            <div className="text-6xl mb-4">📱</div>
            <h2 className="text-2xl font-heading font-bold text-text-secondary mb-2">
              No content available
            </h2>
            <p className="text-text-secondary font-body">
              Check back later for exciting reels and media content!
            </p>
          </div>
        </div>
      )}

      {/* Custom CSS for hiding scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default Reels
