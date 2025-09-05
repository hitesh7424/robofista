import { useEffect, useRef } from 'react'

interface Line {
  x: number
  y: number
  addedX: number
  addedY: number
  rad: number
  lightInputMultiplier: number
  color: string
  cumulativeTime: number
  time: number
  targetTime: number
  reset: () => void
  beginPhase: () => void
  step: () => void
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const linesRef = useRef<Line[]>([])
  const tickRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const opts = {
      len: 25,
      count: 100,
      baseTime: 10,
      addedTime: 10,
      dieChance: 0.03,
      spawnChance: 1,
      sparkChance: 0.25,
      sparkDist: 20,
      sparkSize: 3,
      color: 'hsl(hue,80%,light%)',
      baseLight: 35,
      addedLight: 15,
      shadowToTimePropMult: 6,
      baseLightInputMultiplier: 0.01,
      addedLightInputMultiplier: 0.02,
      cx: w / 2,
      cy: h / 2,
      repaintAlpha: 0.03,
      hueChange: 0.1
    }

    let lines: Line[] = []
    let dieX = w / 2 / opts.len
    let dieY = h / 2 / opts.len
    const baseRad = Math.PI * 2 / 6

    // Initial black background
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, w, h)

    class LineClass implements Line {
      x = 0
      y = 0
      addedX = 0
      addedY = 0
      rad = 0
      lightInputMultiplier = 0
      color = ''
      cumulativeTime = 0
      time = 0
      targetTime = 0

      constructor() {
        this.reset()
      }

      reset = () => {
        this.x = 0
        this.y = 0
        this.addedX = 0
        this.addedY = 0
        this.rad = 0
        this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random()
        // Calculate hue transition from red (0) to blue (240) over time
        const hueProgress = (tickRef.current * opts.hueChange) % 360
        const transitionHue = hueProgress <= 180 ? hueProgress * (240/180) : 240 - ((hueProgress - 180) * (240/180))
        this.color = opts.color.replace('hue', Math.floor(transitionHue).toString())
        this.cumulativeTime = 0
        this.beginPhase()
      }

      beginPhase = () => {
        this.x += this.addedX
        this.y += this.addedY
        this.time = 0
        this.targetTime = Math.floor(opts.baseTime + opts.addedTime * Math.random())
        this.rad += baseRad * (Math.random() < 0.5 ? 1 : -1)
        this.addedX = Math.cos(this.rad)
        this.addedY = Math.sin(this.rad)

        if (Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY) {
          this.reset()
        }
      }

      step = () => {
        if (!ctx) return
        
        this.time++
        this.cumulativeTime++

        if (this.time >= this.targetTime) {
          this.beginPhase()
        }

        const prop = this.time / this.targetTime
        const wave = Math.sin(prop * Math.PI / 2)
        const x = this.addedX * wave
        const y = this.addedY * wave

        ctx.shadowBlur = prop * opts.shadowToTimePropMult
        const lightValue = opts.baseLight + opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier)
        const color = this.color.replace('light', lightValue.toString())
        ctx.fillStyle = ctx.shadowColor = color

        ctx.fillRect(
          opts.cx + (this.x + x) * opts.len,
          opts.cy + (this.y + y) * opts.len,
          2,
          2
        )

        if (Math.random() < opts.sparkChance) {
          ctx.fillRect(
            opts.cx + (this.x + x) * opts.len + Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) - opts.sparkSize / 2,
            opts.cy + (this.y + y) * opts.len + Math.random() * opts.sparkDist * (Math.random() < 0.5 ? 1 : -1) - opts.sparkSize / 2,
            opts.sparkSize,
            opts.sparkSize
          )
        }
      }
    }

    const loop = () => {
      if (!ctx) return
      
      animationRef.current = requestAnimationFrame(loop)
      tickRef.current++

      ctx.globalCompositeOperation = 'source-over'
      ctx.shadowBlur = 0
      ctx.fillStyle = `rgba(0,0,0,${opts.repaintAlpha})`
      ctx.fillRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'

      if (lines.length < opts.count && Math.random() < opts.spawnChance) {
        lines.push(new LineClass())
      }

      lines.forEach(line => line.step())
    }

    const handleResize = () => {
      if (!ctx) return
      
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, w, h)

      opts.cx = w / 2
      opts.cy = h / 2
      dieX = w / 2 / opts.len
      dieY = h / 2 / opts.len
    }

    window.addEventListener('resize', handleResize)
    linesRef.current = lines
    loop()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  )
}

export default AnimatedBackground
