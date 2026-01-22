import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Gemini } from "@/components/ui/svgs/gemini";
import { ClaudeAI } from "@/components/ui/svgs/claude";
import { Cursor } from "@/components/ui/svgs/cursor";
import { JavaScript } from "@/components/ui/svgs/javascript";
import { TailwindCSS } from "@/components/ui/svgs/tailwindcss";
import { ShadcnUI } from "@/components/ui/svgs/shadcnui";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { MySQL } from "@/components/ui/svgs/mysql";
import { Express } from "@/components/ui/svgs/express";
import { Redux } from "@/components/ui/svgs/redux";
import { GraphQL } from "@/components/ui/svgs/graphql";
import { Prisma } from "@/components/ui/svgs/prisma";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Vercel } from "@/components/ui/svgs/vercel";

export const DATA = {
  name: "Bhoomika Kusuri",
  initials: "BK",
  url: "https://bhoomika-kusuri.dev",
  location: "Hyderabad, Telangana, India",
  locationLink: "https://www.google.com/maps/place/hyderabad",
  description:
    "Frontend Developer specializing in React, Next.js, and TypeScript. I build scalable, high-performance web applications that ship fast and perform better. Passionate about creating exceptional user experiences that drive real business impact.",
  summary:
    "Frontend Developer with 9+ months of professional experience shipping production-ready web applications in fast-paced environments. Expert in React, Next.js, and TypeScript with a proven track record of delivering high-performance solutions achieving 95+ Lighthouse scores. I thrive in dynamic environments where I can own features end-to-end from architecture decisions to deployment. Skilled in modern frontend patterns, state management with Redux and Zustand, responsive design with TailwindCSS, and integrating RESTful APIs. Experienced with Docker containerization, CI/CD pipelines, and collaborating directly with product and cross-functional teams. Proficient in backend technologies including Node.js, Express, and MongoDB, enabling me to move fast and contribute across the stack when needed. I prioritize shipping quality code, iterate based on user feedback, and write clean, maintainable code that scales. Open to remote opportunities where I can make immediate impact, grow rapidly, and contribute to building meaningful products.", 
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: JavaScript },
    { name: "TailwindCSS", icon: TailwindCSS },
    { name: "Shadcn UI", icon: ShadcnUI },
    { name: "Redux", icon: Redux },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Express },
    { name: "MongoDB", icon: MongoDB },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL", icon: MySQL },
    { name: "Docker", icon: Docker },
    { name: "Git", icon: Icons.github },
    { name: "GraphQL", icon: GraphQL },
    { name: "Prisma", icon: Prisma },
    { name: "Supabase", icon: Supabase },
    { name: "Vercel", icon: Vercel },
    { name: "Gemini AI", icon: Gemini },
    { name: "Claude AI", icon: ClaudeAI },
    { name: "Cursor", icon: Cursor },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kbhoomika8871@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mymapss",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/k-bhoomika-a8a695252",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kbhoomika8871@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
work: [
    {
      company: "XDP Networking Limited",
      badges: [],
      href: "https://xdp.co.in/",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/xdp.png",
      start: "March 2025",
      end: "December 2025",
      description:
        "Architected and deployed scalable React components with TypeScript to power customer-facing dashboards serving 50,000+ monthly active users, achieving 98+ Lighthouse performance scores through code splitting and lazy loading optimizations. Integrated RESTful APIs and WebSocket connections for real-time data visualization, implementing Redux Toolkit for state management across 20+ feature modules while reducing bundle size by 40% through strategic tree-shaking and dynamic imports.",
    },
  ],
  education: [
    {
      school: "Bachelor's of Technology",
      href: "https://jntuh.ac.in",
      degree: "Information Technology (IT)",
      logoUrl: "/jntu.png",
      start: "2021",
      end: "2025",
    },
  ],

  projects: [
    {
      title: "Signalist - Stock Market Analytics",
      href: "https://signalist-stock-tracker-app-ivory-xi.vercel.app/",
      dates: "September 2024 - December 2024",
      active: true,
      description:
        "Built a comprehensive AI-powered stock market platform with real-time price tracking, personalized watchlists, and automated alerts. Integrated Inngest for event-driven workflows enabling AI-generated daily market digests, earnings notifications, and sentiment analysis using GPT models. Features Better Auth for secure authentication, Finnhub API for live market data, MongoDB for data persistence, and Nodemailer for intelligent email notifications. Implemented AI-powered insights to help users make data-driven trading decisions.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Better Auth",
        "Inngest",
        "MongoDB",
        "Finnhub API",
        "TailwindCSS",
        "Shadcn UI",
        "Nodemailer",
        "AI/GPT Integration",
      ],
      links: [
        {
          type: "Website",
          href: "https://signalist-stock-tracker-app-ivory-xi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mymapss/signalist_stock-tracker-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/signalist.webp",
      video: "/signalist.mp4",
    },
    {
      title: "CoinPulse - Crypto Analytics Dashboard",
      href: "https://coin-pulse-rose.vercel.app/",
      dates: "July 2024 - November 2024",
      active: true,
      description:
        "Developed a high-performance cryptocurrency analytics platform with real-time market intelligence via CoinGecko API and WebSockets. Features live orderbook streams, TradingView candlestick charts for OHLCV visualization, dynamic trending tokens display, and multi-fiat currency converter. Built with Next.js 16 and TailwindCSS v4, optimized for low-latency updates with surgical precision in data visualization. Implemented advanced caching strategies and server-side rendering for optimal performance.",
      technologies: [
        "Next.js 16",
        "TypeScript",
        "TailwindCSS v4",
        "Shadcn UI",
        "CoinGecko API",
        "TradingView Charts",
        "WebSockets",
        "React Query",
      ],
      links: [
        {
          type: "Website",
          href: "https://coin-pulse-rose.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mymapss/CoinPulse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/coinpulse.webp",
      video: "/coinpulse.mp4",
    },
    {
      title: "Collaborative LiveDocs",
      href: "https://collaborative-editor-phi.vercel.app/",
      dates: "May 2024 - September 2024",
      active: true,
      description:
        "Created a Google Docs clone with real-time collaborative editing powered by Liveblocks. Features include GitHub authentication via NextAuth, simultaneous multi-user editing with live cursors and presence indicators, document sharing with granular permissions, inline commenting with threading, and comprehensive document management with search, sort, and notification systems. Implemented Lexical Editor for rich text editing and real-time synchronization across multiple clients.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Liveblocks",
        "Lexical Editor",
        "NextAuth",
        "TailwindCSS",
        "Shadcn UI",
        "WebSockets",
      ],
      links: [
        {
          type: "Website",
          href: "https://collaborative-editor-phi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mymapss/collaborative-editor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/collaborative-livedocs.mp4",
    },
    {
      title: "Store IT - File Sharing Platform",
      href: "https://store-it-flax.vercel.app/",
      dates: "June 2024 - October 2024",
      active: true,
      description:
        "Engineered a full-stack storage management and file sharing platform using Next.js 15 and Appwrite Node SDK. Implemented secure authentication, multi-format file uploads (documents, images, videos, audio), advanced file management with rename and delete functionality, global search across all content, and intelligent sorting by date, name, or size. Features a dynamic dashboard with storage analytics, recent upload tracking, and file sharing capabilities with permission controls.",
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Appwrite",
        "TailwindCSS",
        "Shadcn UI",
        "Server Actions",
      ],
      links: [
        {
          type: "Website",
          href: "https://store-it-flax.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mymapss/Store_IT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/storeit.mp4",
    },
    {
      title: "AI Resume Analyzer",
      href: "https://ai-resume-analyzer-azure-beta.vercel.app/",
      dates: "August 2024 - December 2024",
      active: true,
      description:
        "Developed an AI-powered resume analysis tool integrating GPT-4 and Claude AI models for intelligent job matching. Features browser-based authentication via Puter.js, secure resume storage, and AI-driven ATS scoring with custom feedback tailored to specific job listings. Implemented serverless architecture eliminating backend requirements while maintaining full functionality. Uses Zustand for efficient state management and React Router v7 for seamless navigation across the application.",
      technologies: [
        "React",
        "TypeScript",
        "Puter.js",
        "React Router v7",
        "Zustand",
        "TailwindCSS",
        "Vite",
        "GPT-4 API",
        "Claude AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-resume-analyzer-azure-beta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mymapss/ai_resume_analyzer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/ai-resume-analyzer.webp",
      video: "/ai-resume-analyzer.mp4",
    },
    {
      title: "GSAP Cocktail Experience",
      href: "https://gsap-cocktail-sigma.vercel.app/",
      dates: "June 2024 - October 2024",
      active: true,
      description:
        "Crafted an immersive scroll-driven website showcasing advanced GSAP animation techniques. Implemented SplitText animations for dynamic text reveals, ScrollTrigger for timeline control, smooth parallax scrolling, pinned sections with synchronized animations, scroll-synced video playback, image masking effects, and a custom animated carousel. Demonstrates mastery of modern web animations with fully responsive design across all devices and optimized performance for 60fps animations.",
      technologies: [
        "React",
        "GSAP",
        "ScrollTrigger",
        "TailwindCSS",
        "Vite",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://gsap-cocktail-sigma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mymapss/gsap_cocktail",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/gsap-cocktail.png",
      video: "/gsap_cocktail.mp4",
    },
  ],
  hackathons: [
    {
      title: "AI Form Builder",
      dates: "May 2025 - August 2025",
      location: "Personal Project",
      description:
        "Developed an intelligent form creation platform powered by AI with smart field suggestions and drag-and-drop builder. Integrated Gemini AI for generating context-aware form templates and field recommendations. Features Kinde authentication, real-time preview with live updates, form analytics dashboard, and team collaboration capabilities with role-based permissions.",
      image: "/hackathons/formbuilder.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/mymapss/AI_Form_Builder",
        },
      ],
    },
    {
      title: "ThreadCraft AI",
      dates: "March 2025 - June 2025",
      location: "Personal Project",
      description:
        "Built a social media content generator powered by Google's Gemini AI for creating engaging Twitter threads, Instagram captions, and LinkedIn posts. Implemented AI-driven content optimization, points-based generation system, content history management with favorites, and multi-platform preview functionality. Features Clerk authentication and Stripe integration for subscription management.",
      image: "/hackathons/threadcraft.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/mymapss/threadcraft_ai",
        },
      ],
    },
    {
      title: "HealthCare Management System",
      dates: "January 2025 - April 2025",
      location: "Personal Project",
      description:
        "Created a comprehensive patient management system with appointment booking, SMS notifications via Twilio, and admin dashboard for scheduling. Integrated Appwrite for backend services, Sentry for performance monitoring and error tracking, and implemented secure file upload for medical records with HIPAA-compliant storage practices.",
      image: "/hackathons/healthcare-management.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/mymapss/carepulse_plus",
        },
      ],
    },
    {
      title: "Finan Smart - AI Finance Advisor",
      dates: "November 2024 - February 2025",
      location: "Personal Project",
      description:
        "Developed a personalized financial advice platform integrating OpenAI's GPT-4 for intelligent financial analysis. Analyzes user income, expenses, and budgets to provide AI-driven insights, investment recommendations, and budget optimization strategies. Features interactive charts, spending pattern analysis, and personalized savings goals.",
      image: "/hackathons/finan-smart.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/mymapss/ai-finance-tracking-app",
        },
      ],
    },
    {
      title: "BeatCancer - AI Cancer Care Assistant",
      dates: "September 2024 - December 2024",
      location: "Personal Project",
      description:
        "Built an AI-powered cancer care assistant leveraging Gemini AI to analyze patient data and medical records, identifying screening gaps and creating personalized treatment plans. Features secure data encryption for patient information protection, medical record parsing, and treatment timeline visualization with progress tracking.",
      image: "/hackathons/beat-cancer.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/mymapss/beat-cancer",
        },
      ],
    },
    {
      title: "LinguaSpeak - Voice Translator",
      dates: "July 2024 - October 2024",
      location: "Personal Project",
      description:
        "Experimented with Web Speech API and OpenAI GPT integration for real-time voice translation across 50+ languages. Features speech recognition, AI-powered text translation with context awareness, audio playback with natural voices, file upload for document translation, and URL content fetching for web page translation.",
      image: "/hackathons/linguaspeak.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="size-3" />,
          href: "https://language-translator-app-kappa.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="size-3" />,
          href: "https://github.com/mymapss/language_translator_app",
        },
      ],
    },
  ],
} as const;