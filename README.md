# 🤖 ROBONEXUS 2K25 - Robotics & Automation Symposium Website

A modern, responsive website for the ROBONEXUS 2K25 Robotics & Automation Symposium, built with React, TypeScript, and cutting-edge web technologies.

[![Built with React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

## 🌟 Features

- **Modern UI/UX**: Glassmorphism design with smooth animations
- **Responsive Design**: Mobile-first approach with seamless device compatibility
- **Event Management**: Comprehensive event listing with detailed information
- **Interactive Elements**: Smooth page transitions and micro-interactions
- **Contact Integration**: Direct coordinator contact with click-to-call functionality
- **Analytics**: Integrated Vercel Analytics for visitor tracking
- **Feature Flags**: Configurable sections for easy content management
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🚀 Tech Stack

### Frontend

- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.1.2** - Lightning-fast build tool
- **React Router DOM 7.8.2** - Client-side routing

### Styling & UI

- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Production-ready motion library
- **React Icons 5.5.0** - Popular icon library
- **CSS Glassmorphism** - Modern glass-effect design

### Development Tools

- **ESLint 9.33.0** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes

### Analytics & Monitoring

- **Vercel Analytics** - Real-time visitor tracking and insights

## 📁 Project Structure

```tree
robofista/
├── public/
│   ├── data/                    # JSON data files
│   │   ├── events.json         # Event information with coordinator contacts
│   │   ├── coordinators.json   # Coordinator details
│   │   ├── downloads.json      # Downloadable resources
│   │   ├── media.json          # Media content
│   │   ├── timeline.json       # Event timeline
│   │   └── previous_events.json # Past event data
│   ├── images/                 # Static images
│   │   ├── events/            # Event-specific images
│   │   ├── logo/              # Logo variations
│   │   └── thumbnails/        # Video thumbnails
│   ├── videos/                # Media files
│   └── downloads/             # Downloadable files (brochures, etc.)
├── src/
│   ├── components/            # Reusable React components
│   │   ├── AnimatedBackground.tsx
│   │   ├── Countdown.tsx
│   │   ├── EventCard.tsx
│   │   ├── EventModal.tsx
│   │   ├── Navbar.tsx
│   │   └── Timeline.tsx
│   ├── pages/                 # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Explore.tsx
│   │   ├── Downloads.tsx
│   │   └── Reels.tsx
│   ├── config/                # Configuration files
│   │   └── features.ts        # Feature flag management
│   ├── assets/                # Static assets
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # App entry point
│   └── index.css             # Global styles
├── dist/                     # Build output
├── package.json
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # TailwindCSS configuration
├── tsconfig.json            # TypeScript configuration
└── vercel.json              # Vercel deployment config
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/hitesh7424/robofista.git
   cd robofista
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎛️ Feature Configuration

This project includes a powerful feature flag system to enable/disable sections dynamically.

### Configuring Features

Edit `src/config/features.ts` to toggle features:

```typescript
export const featureConfig: FeatureConfig = {
  // Main sections
  reelsEnabled: false,              // Enable/disable reels functionality
  eventsEnabled: true,              // Enable/disable events section
  aboutEnabled: true,               // Enable/disable about page
  
  // Registration controls
  registrationEnabled: true,        // Global registration toggle
  showRegistrationCountdown: true,  // Show countdown timer
  
  // UI Controls
  showCountdownTimer: true,         // Display event countdown
  showCoordinatorContacts: true,    // Show coordinator contact info
  showBackgroundVideo: false,       // Homepage background video
  
  // Event-specific controls
  disabledEventIds: [],            // Array of event IDs to disable
  eventRegistrationOverride: {}     // Override registration for specific events
}
```

### Available Features

- **reelsEnabled**: Controls Reels section (shows "Under Construction" when disabled)
- **registrationEnabled**: Global registration toggle for all events
- **showCountdownTimer**: Display countdown to symposium date
- **showCoordinatorContacts**: Show/hide coordinator contact information
- **showBackgroundVideo**: Toggle homepage background video
- **disabledEventIds**: Disable specific events by ID

### How to Toggle Features

1. Open `src/config/features.ts`
2. Change the boolean value for any feature (e.g., `reelsEnabled: false` to `reelsEnabled: true`)
3. Save the file
4. Changes take effect immediately in development or after redeployment

This system allows you to easily manage which features are visible to users without removing code.

## 📊 Analytics Integration

The website includes Vercel Analytics for comprehensive visitor tracking:

- **Page Views**: Track navigation patterns
- **Real-time Visitors**: Monitor live user activity
- **Geographic Data**: Understand visitor demographics
- **Performance Metrics**: Monitor site speed and user experience

Analytics are automatically enabled when deployed to Vercel.

## 🎨 Design System

### Color Palette

- **Primary**: Modern blue gradient
- **Secondary**: Complementary purple tones
- **Background**: Dark theme with glassmorphism effects
- **Text**: High contrast for accessibility

### Typography

- **Headings**: Clean, modern sans-serif
- **Body**: Readable font with optimal line spacing
- **Code**: Monospace for technical content

### Components

- **Glassmorphism Cards**: Translucent cards with backdrop blur
- **Smooth Animations**: Framer Motion powered transitions
- **Interactive Elements**: Hover states and micro-interactions

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

## 🔧 Development Guidelines

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Functional components with hooks
- Component composition over inheritance

### File Naming

- Components: PascalCase (e.g., `EventCard.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Pages: PascalCase (e.g., `About.tsx`)

### Data Management

- JSON files in `public/data/` for static content
- TypeScript interfaces for data structure
- Feature flags for conditional rendering

## 🚀 Deployment

### Vercel (Recommended)

1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Manual Build

```bash
npm run build
```

Deploy the `dist/` folder to your hosting provider.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

### ROBONEXUS 2K25 Development Team

- Lead Developer: Comprehensive full-stack development
- UI/UX Design: Modern glassmorphism interface
- Content Management: Event and coordinator data

## 📞 Support

For technical issues or questions:

- Create an issue in the GitHub repository
- Contact the development team through the symposium coordinators

## 🎯 Future Enhancements

- [ ] Real-time event updates
- [ ] Online registration system integration
- [ ] Live streaming capabilities
- [ ] Mobile app companion
- [ ] Advanced analytics dashboard
- [ ] Multi-language support

---

## Built with ❤️ for ROBONEXUS 2K25 - Robotics & Automation Symposium
