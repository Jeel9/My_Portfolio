// project-list.js
import { Calendar, ExternalLink, Github, Zap, TrendingUp, Users, Target, CheckCircle, Download, Star, Timer, TimerIcon, Apple, PlayCircle } from "lucide-react";
import enp1 from "../assets/Enpak Cover.png";
import enp_client from "../assets/enpakImg.jpeg";
import enp_web from "../assets/enpak_web.png";
import enp_2 from "../assets/enp-1.png";
import enp_3 from "../assets/enp-2.png";
import enp_4 from "../assets/enp-3.png";
import enp_vid from "../assets/enp-vid.mp4";

export const projectsList = {
  "enpak": {
  "title": "Enpak Social",
  "subtitle": "Local News App",
  "description": "Mobile and web platform aggregating accurate local news from accredited journalists, featuring tools for community interaction and an Impact Meter to highlight story relevance.",
  "completionDate": "July 2023",
  "category": "Mobile & Web Development",

  "duration": "2 month (Design) & 3.5 month (Dev)",
  "teamSize": "Designer - 1 (Me), Developers - 2 (Me & Yash)",
  "role": "UI/UX Designer & Developer",
  "industry": "News / Civic Tech",

  "techStack": [
    "Figma", "Flutter", "React.js", "Firebase", "Express", "MongoDB", "Socket.IO"
  ],

  "metrics": [
    { "label": "App Store Rating", "value": "4+", "icon": "Star" },
    { "label": "Downloads (Play Store)", "value": "50+", "icon": "Download" },
    { "label": "Active Users", "value": "1000+", "icon": "Users" },
  ],

  "challenges": [
    {
      "title": "Cross-platform consistency",
      "description": "Ensuring a cohesive UI/UX across mobile (Flutter) and web.",
      "solution": "Designed ~85 screens in Figma, then implemented them faithfully in Flutter for mobile and React.js for web." 
    },
    {
      "title": "Reliable news delivery",
      "description": "Aggregating trusted local journalism while maintaining app performance.",
      "solution": "Integrated accredited local publishers, used Firebase backend and Express APIs to fetch and sync articles."
    },
    {
      "title": "User trust & engagement",
      "description": "Highlighting credible content to reduce misinformation.",
      "solution": "Built and integrated an Impact Meter to show story relevance and community engagement."
    }
  ],

  "achievements": [
    "Designed and developed a fully functional Flutter app, achieving a 4+ rating on both iOS and Android platforms.",
    "Developed ~85 screens from wireframes to high-fidelity UI, ensuring visual consistency across platforms.",
    "Built backend integration with Firebase and Express, enabling real-time news fetching and synchronization.",
    "Implemented Impact Meter feature, boosting user interaction and trust through content visibility."
  ],

  "overview": [
    "Enpak is a community-first news platform delivering accurate local journalism via a mobile app and web portal. It emphasizes trusted reporting and civic engagement.",
    "I led the design and development across both platforms: from ideation and wireframes in Figma, to coding UI in Flutter and React.js, wiring backend services in Firebase and Express, and delivering real-time features via Socket.IO."
  ],

  "links": {
    "live": {
      "link":"https://enpaksocial.com",
      "label": "Visit Enpak Social",
    },
    "github": {
      "link": "https://github.com/Jeel9/Enpak-backup",
      "label": "View on GitHub"
    },
    "appStore": {
      link: "https://apps.apple.com/us/app/enpak/id6456176449",
      label: "Download on App Store",
    },
    "playStore": {
      link:"https://play.google.com/store/apps/details?id=com.enpak.social&pcampaignid=web_share",
      label: "Download on Play Store",
    },
  },

  "clientFeedback": {
    image: enp_client,
    clientName: "Carolie",
    position: 'Founder, Enpak Social',
    rating: 5,
    testimonial: 'Working with Jeel was such a seamless experience. He understood the project I presented to him and gave his most creative designs. He does his research and has an open line of communication. We conducted meetings throughout the project to get the results we were looking for. Jeel also had some great recommendation based on his experience. He was definitely the right choice for the project. I hope to keep working with him in the future for other projects.',
  },

  "images": {
    "hero": enp_web,
    "hero_vid": enp_vid,
    "gallery": [
      enp1,
      enp_2,
      enp_3,
      enp_4,
    ]
  }
},

"sampleSelect": {
  // Basic Info
  title: "Sample Select",
  subtitle: "Fabric Sample Wishlist App",
  description:
    "A custom-built B2B mobile app for Paramount Textiles, allowing users to scan product barcodes and create curated wishlists of fabric samples. The app streamlined the physical sample selection process and boosted operational efficiency for sales and customers alike.",
  completionDate: "July 2024",
  category: "Mobile App Development",

  // Project Details
  duration: "2 months",
  teamSize: "1 designer (Me), 2 developers (Me & Yash)",
  role: "UI/UX Designer & Flutter Developer",
  industry: "Textiles / B2B",

  // Tech Stack
  techStack: [
    "Flutter",
    "Figma",
    "Firebase Auth",
    "Google Sheets Database",
    "TestFlight"
  ],

  // Metrics
  metrics: [
    { label: "Client Usage", value: "50+ Sales Executives", icon: "Users" },
    { label: "App Rating", value: "5", icon: "Star" },
    { label: "Time Saved per Order", value: "~30 mins", icon: "Timer" },
    { label: "Sample Selection Accuracy", value: "+95%", icon: "Check" }
  ],

  // Challenges & Solutions
  challenges: [
    {
      title: "Barcode Scanning Speed & Accuracy",
      description:
        "Scanning various product barcodes in low-light environments caused inconsistent recognition.",
      solution:
        "Integrated a custom camera overlay with flashlight toggle and real-time feedback to guide accurate scanning."
    },
    {
      title: "Offline Access for Sales Reps",
      description:
        "Reps often worked in textile expos or warehouses with poor connectivity.",
      solution:
        "Cached scanned items locally and synced data with Firestore when connection resumed."
    },
    {
      title: "User Onboarding & Simplicity",
      description:
        "App was intended for use by sales teams unfamiliar with tech.",
      solution:
        "Designed a 3-screen onboarding flow and minimal-tap interaction model with large CTAs and contextual feedback."
    }
  ],

  // Achievements
  achievements: [
    "Successfully reduced sample selection time by 60% with barcode workflow",
    "Boosted operational transparency with synced wishlists and order logs",
    "Designed and developed entire app in under 90 days from wireframe to store launch",
    "Improved user satisfaction with intuitive UI, reflected in consistent 4.8+ ratings"
  ],

  // Overview paragraphs
  overview: [
    "Sample Select was developed for Paramount Textiles as a B2B productivity tool to modernize their manual sample selection workflow. Previously, sample selection was paper-based and error-prone. Our goal was to digitize this process through a sleek, intuitive mobile app.",
    "I led both design and development, creating a seamless user flow that involved scanning textile product barcodes, wishlisting them, and syncing selections with a backend dashboard. The design focused on clarity, speed, and offline usability to ensure real-world practicality for the sales team."
  ],

  "clientFeedback": {
    // image: ,
    clientName: "Patrick",
    position: 'Manager, Paramount Textile Ltd',
    rating: 5,
    testimonial: 'Responsible & reliable, meet my requirement & always helpful. My pleasure to work with Jeel, Jeel will be my first choice for my next job. Good person to work with.',
  },

  // Links
  "links": {
    // "live": {
    //   "link":"https://enpaksocial.com",
    //   "label": "Visit Enpak Social",
    // },
    "github": {
      "link": "https://github.com/yashjoshi007/paramount",
      "label": "View on GitHub"
    },
    "appStore": {
      link: "https://apps.apple.com/in/app/sample-select/id6503061906",
      label: "Download on App Store",
    },
    "playStore": {
      link:"https://play.google.com/store/apps/details?id=com.paramount.app",
      label: "Download on Play Store",
    },
  },

  // Images (to be added manually once available)
  images: {
    hero: "",
    gallery: []
  }
},


};

// Helper function to get project by ID
export const getProjectById = (projectId) => {
  return projectsList[projectId] || null;
};

// Helper function to get all project IDs
export const getAllProjectIds = () => {
  return Object.keys(projectsList);
};

// Helper function to get icon component by name
export const getIconByName = (iconName) => {
  const icons = {
    Calendar,
    ExternalLink,
    Github,
    Zap,
    TrendingUp,
    Users,
    Target,
    CheckCircle,
    Download,
    Star,
    Timer,
    Check: CheckCircle,
  };
  return icons[iconName] || null;
};