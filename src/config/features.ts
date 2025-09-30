// Feature flags configuration for ROBONEXUS 2K25
export interface FeatureConfig {
  // Main sections
  reelsEnabled: boolean
  eventsEnabled: boolean
  aboutEnabled: boolean
  
  // Registration controls
  registrationEnabled: boolean
  globalRegistrationMessage: string
  showRegistrationCountdown: boolean
  
  // Event-specific controls
  disabledEventIds: number[] // Array of event IDs to disable
  eventRegistrationOverride: { [eventId: number]: boolean } // Override registration for specific events
  
  // UI Controls
  showCountdownTimer: boolean
  showCoordinatorContacts: boolean
  showEventPrizes: boolean // In case you want to re-enable prizes
  showEventStats: boolean
  showBackgroundVideo: boolean // Control background video on homepage
  
  // Navigation controls
  showNavigation: boolean
  enabledNavItems: string[] // ['home', 'explore', 'reels', 'about']
  
  // Contact and social
  showSocialLinks: boolean
  showContactInfo: boolean
  
  // Maintenance and announcements
  maintenanceMode: boolean
  maintenanceMessage: string
  showAnnouncements: boolean
  announcementMessage: string
  announcementType: 'info' | 'warning' | 'success' | 'error'
}

// Main feature configuration
// Modify these settings to control different aspects of the website
export const featureConfig: FeatureConfig = {
  // Main sections
  reelsEnabled: false, // Set to true to enable reels functionality
  eventsEnabled: true, // Set to false to disable entire events section
  aboutEnabled: true, // Set to false to disable about page
  
  // Registration controls
  registrationEnabled: true, // Global registration toggle
  globalRegistrationMessage: "Registration is currently closed", // Message when registration is disabled
  showRegistrationCountdown: true, // Show countdown timer on registration buttons
  
  // Event-specific controls
  disabledEventIds: [], // Add event IDs to disable specific events: [1, 3, 5]
  eventRegistrationOverride: {}, // Override registration for specific events: { 1: false, 2: true }
  
  // UI Controls
  showCountdownTimer: true, // Show main countdown on homepage
  showCoordinatorContacts: true, // Show coordinator contact information
  showEventPrizes: false, // Show prize information (currently disabled)
  showEventStats: true, // Show event statistics in about page
  showBackgroundVideo: false, // Show background video on homepage
  
  // Navigation controls
  showNavigation: true, // Show navigation bar
  enabledNavItems: ['home', 'explore', 'downloads', 'reels', 'about'], // Control which nav items are shown
  
  // Contact and social
  showSocialLinks: true, // Show social media links
  showContactInfo: true, // Show contact information
  
  // Maintenance and announcements
  maintenanceMode: false, // Enable to show maintenance page for entire site
  maintenanceMessage: "We're upgrading our systems. Please check back soon!", // Maintenance message
  showAnnouncements: false, // Show announcement banner
  announcementMessage: "Early bird registration ends soon! Register now for ROBONEXUS 2K25!", // Announcement text
  announcementType: 'info' // Announcement style: info, warning, success, error
}

// Helper functions for easier configuration management
export const isFeatureEnabled = (feature: keyof FeatureConfig): boolean => {
  return featureConfig[feature] as boolean
}

export const isEventEnabled = (eventId: number): boolean => {
  if (!featureConfig.eventsEnabled) return false
  return !featureConfig.disabledEventIds.includes(eventId)
}

export const isEventRegistrationEnabled = (eventId: number): boolean => {
  // Check global registration setting
  if (!featureConfig.registrationEnabled) return false
  
  // Check event-specific override
  if (featureConfig.eventRegistrationOverride.hasOwnProperty(eventId)) {
    return featureConfig.eventRegistrationOverride[eventId]
  }
  
  // Check if event is enabled
  return isEventEnabled(eventId)
}

export const isNavItemEnabled = (navItem: string): boolean => {
  if (!featureConfig.showNavigation) return false
  return featureConfig.enabledNavItems.includes(navItem)
}

export const getRegistrationMessage = (): string => {
  return featureConfig.globalRegistrationMessage
}

export const getAnnouncementConfig = () => {
  return {
    show: featureConfig.showAnnouncements,
    message: featureConfig.announcementMessage,
    type: featureConfig.announcementType
  }
}

// Preset configurations for different scenarios
export const presetConfigs = {
  // Before event launch
  prelaunch: {
    ...featureConfig,
    reelsEnabled: false,
    registrationEnabled: true,
    showAnnouncements: true,
    announcementMessage: "Registration for ROBONEXUS 2K25 is now open!",
    announcementType: 'success' as const
  },
  
  // During event
  liveEvent: {
    ...featureConfig,
    reelsEnabled: true,
    registrationEnabled: false,
    globalRegistrationMessage: "Registration is now closed. Event is live!",
    showAnnouncements: true,
    announcementMessage: "ROBONEXUS 2K25 is happening now! Follow our social media for live updates.",
    announcementType: 'info' as const
  },
  
  // Registration closed
  registrationClosed: {
    ...featureConfig,
    registrationEnabled: false,
    globalRegistrationMessage: "Registration deadline has passed",
    showAnnouncements: true,
    announcementMessage: "Registration is now closed. See you at the event on October 13!",
    announcementType: 'warning' as const
  },
  
  // Maintenance mode
  maintenance: {
    ...featureConfig,
    maintenanceMode: true,
    maintenanceMessage: "We're making some exciting updates! Please check back in a few hours."
  }
}

// Function to apply a preset configuration
export const applyPreset = (presetName: keyof typeof presetConfigs) => {
  Object.assign(featureConfig, presetConfigs[presetName])
}