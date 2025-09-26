# ROBONEXUS 2K25 - Robotics & Automation Symposium Website

A futuristic, hi-tech Instagram-inspired React website for ROBONEXUS 2K25 - The ultimate Robotics & Automation Symposium. Built with cutting-edge web technologies to showcase events, media, and information about the symposium.

## 🚀 Features

### Core Features
- **Multi-page React application** with smooth routing
- **Responsive design** - Bottom navbar on mobile, top navbar on desktop
- **Instagram-inspired UI** with glassmorphism effects and neon glows
- **Dynamic content loading** from JSON files
- **Futuristic animations** using Framer Motion

### Pages
1. **Home** - Hero section with countdown, timeline, and quick links
2. **Explore** - Event cards in Instagram Explore style with modal details
3. **Reels** - Vertical full-screen scroll media viewer
4. **About** - College info, department details, team, and contact

### Components
- `Navbar` - Responsive navigation with glassmorphism effects
- `Countdown` - Digital LED-style countdown to symposium
- `Timeline` - Vertical neon glowing roadmap
- `EventCard` - Instagram-style event preview cards
- `EventModal` - Detailed event information popup
- `ReelCard` - Full-screen media viewer for videos/images

## 🎨 Design System

### Colors
- **Background**: `#0A0F1C` - Deep space blue
- **Primary**: `#00FFF7` - Cyan neon
- **Secondary**: `#9D4EDD` - Purple accent
- **Highlight**: `#1E90FF` - Blue highlight
- **Text Primary**: `#FFFFFF` - Pure white
- **Text Secondary**: `#A0A0A0` - Light gray

### Typography
- **Headings**: Orbitron, Rajdhani - Futuristic sans-serif fonts
- **Body Text**: Inter, Poppins - Clean, readable fonts
- **Countdown**: Share Tech Mono - Monospace for digital feel

### Effects
- **Glassmorphism**: Semi-transparent panels with backdrop blur
- **Neon Glow**: CSS box-shadow effects with brand colors
- **Animations**: Smooth transitions and micro-interactions

## 🛠️ Technologies

- **React 18** with TypeScript
- **Vite** for lightning-fast development
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **React Router** for client-side routing

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── Countdown.tsx   # Countdown timer
│   ├── Timeline.tsx    # Event timeline
│   ├── EventCard.tsx   # Event preview card
│   ├── EventModal.tsx  # Event details modal
│   └── ReelCard.tsx    # Media viewer card
├── pages/              # Main application pages
│   ├── Home.tsx        # Landing page
│   ├── Explore.tsx     # Events exploration
│   ├── Reels.tsx       # Media viewer
│   └── About.tsx       # Information page
├── hooks/              # Custom React hooks
├── assets/             # Static assets
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles

public/
└── data/               # Dynamic content JSON files
    ├── events.json     # Event information
    ├── timeline.json   # Timeline milestones
    └── media.json      # Media content
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser
- Code editor (VS Code recommended)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📊 Data Structure

### Events (`public/data/events.json`)
```json
{
  "id": 1,
  "title": "Event Name",
  "date": "2025-10-15",
  "time": "10:00 AM",
  "description": "Event description",
  "rules": ["Rule 1", "Rule 2"],
  "image": "https://image-url.com",
  "category": "Competition",
  "prize": "$1000"
}
```

### Timeline (`public/data/timeline.json`)
```json
{
  "id": 1,
  "date": "2025-09-01",
  "title": "Milestone",
  "description": "Description",
  "status": "completed",
  "icon": "🚀"
}
```

### Media (`public/data/media.json`)
```json
{
  "id": 1,
  "type": "video",
  "title": "Media Title",
  "description": "Description",
  "url": "https://video-url.com",
  "thumbnail": "https://thumbnail-url.com",
  "duration": "2:30"
}
```

## 🎯 Key Features Implementation

### Responsive Navigation
- **Mobile**: Bottom navigation with icons
- **Desktop**: Top navigation with labels
- **Effects**: Glassmorphism with neon glow

### Animation System
- **Page transitions**: Smooth fade and slide effects
- **Component animations**: Staggered reveal animations
- **Interactive feedback**: Hover and tap animations
- **Loading states**: Skeleton screens and spinners

### Content Management
- **Dynamic loading**: All content from JSON files
- **Image optimization**: Lazy loading and responsive images
- **SEO friendly**: Proper meta tags and semantic HTML

## 🔧 Customization

### Adding New Events
1. Edit `public/data/events.json`
2. Add event object with required fields
3. Include high-quality images (recommended: 1000x600px)

### Modifying Colors
1. Update `tailwind.config.js` color palette
2. Modify CSS custom properties in `src/index.css`
3. Update component color classes

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts for deployment

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
- The dev server will automatically try the next available port
- Or manually specify: `npm run dev -- --port 3000`

**Tailwind styles not working**
- Ensure PostCSS config is correct
- Check Tailwind config includes all source files
- Restart dev server after config changes

**Images not loading**
- Verify image URLs in JSON files
- Check network connectivity
- Use HTTPS URLs for external images

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📄 License

This project is created for educational purposes. Feel free to use as a template for your own events.

---

**Built with ❤️ for the Robotics & Automation Symposium 2025**
