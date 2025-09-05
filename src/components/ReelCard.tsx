import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// Helper function to convert YouTube URL to embed format (supports regular videos and Shorts)
const getYouTubeEmbedUrl = (url: string, isActive: boolean) => {
  // Handle YouTube Shorts
  const shortsRegex = /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)/
  const shortsMatch = url.match(shortsRegex)
  
  if (shortsMatch) {
    const videoId = shortsMatch[1]
    const autoplay = isActive ? 1 : 0
    return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`
  }
  
  // Handle regular YouTube videos
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  if (match && match[2].length === 11) {
    const autoplay = isActive ? 1 : 0
    return `https://www.youtube.com/embed/${match[2]}?autoplay=${autoplay}&mute=1&loop=1&playlist=${match[2]}&controls=0&showinfo=0&rel=0&modestbranding=1`
  }
  return url
}

interface MediaItem {
  id: number
  type: 'yt-video' | 'video' | 'image'
  title: string
  description: string
  url: string
}

interface ReelCardProps {
  media: MediaItem
  isActive: boolean
  onVideoEnd?: () => void
}

const ReelCard = ({ media, isActive }: ReelCardProps) => {
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Force video to play when active
  useEffect(() => {
    const video = videoRef.current
    if (video && media.type === 'video') {
      if (isActive) {
        console.log('Forcing video play for:', media.title)
        
        const forcePlay = async () => {
          try {
            video.currentTime = 0 // Reset to beginning
            await video.play()
            console.log('Video playing:', media.title)
          } catch (error) {
            console.error('Play failed:', error)
            // Retry after a brief delay
            setTimeout(forcePlay, 200)
          }
        }
        
        // Multiple attempts with different timings
        forcePlay()
        setTimeout(forcePlay, 50)
        setTimeout(forcePlay, 150)
        setTimeout(forcePlay, 300)
        
      } else {
        video.pause()
        console.log('Video paused:', media.title)
      }
    }
  }, [isActive, media.type, media.url])

  const handleMediaClick = () => {
    if (media.type === 'video' || media.type === 'yt-video') {
      if (media.type === 'video') {
        const video = videoRef.current
        if (video) {
          if (video.paused) {
            video.play().catch(console.error)
          }
        }
      }
      setShowControls(true)
      setTimeout(() => setShowControls(false), 3000)
    }
  }

  return (
    <div className="relative w-full h-screen snap-start flex items-center justify-center px-2 md:px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md mx-auto h-full max-h-[85vh] md:max-h-[80vh] rounded-3xl overflow-hidden glassmorphism neon-glow"
      >
        {/* Media content */}
        <div 
          className="relative w-full h-full cursor-pointer"
          onClick={handleMediaClick}
        >
          {media.type === 'yt-video' ? (
            <iframe
              src={getYouTubeEmbedUrl(media.url, isActive)}
              className="w-full h-full rounded-3xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={media.title}
            />
          ) : media.type === 'video' ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-3xl"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controls={showControls}
              onCanPlay={() => {
                console.log('Video can play:', media.title)
                if (isActive && videoRef.current) {
                  videoRef.current.play()
                }
              }}
              onLoadedData={() => {
                console.log('Video data loaded:', media.title)
                if (isActive && videoRef.current) {
                  videoRef.current.play()
                }
              }}
              onLoadedMetadata={() => {
                console.log('Video metadata loaded:', media.title)
                if (isActive && videoRef.current) {
                  videoRef.current.play()
                }
              }}
              onError={(e: any) => console.error('Video error:', e, media.url)}
            >
              <source src={media.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <motion.img
              src={media.url}
              alt={media.title}
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />

          {/* Play indicator for videos */}
          {(media.type === 'video' || media.type === 'yt-video') && showControls && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 rounded-full glassmorphism flex items-center justify-center">
                <span className="text-3xl text-primary">▶️</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Content overlay */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
        >
          <h3 className="font-heading font-bold text-xl mb-3 text-primary">
            {media.title}
          </h3>
          <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">
            {media.description}
          </p>

          
        </motion.div>

        {/* Active indicator */}
        {isActive && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"
          />
        )}
      </motion.div>
    </div>
  )
}

export default ReelCard
