import { Code2, Search, LayoutDashboard, Database, } from "lucide-react"
import { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "I build modern, responsive interfaces with React and Next.js, focusing on performance and a seamless user experience."
  },
  {
    icon: Search,
    title: "Next.js Optimized SEO Landing Pages",
    description: "I create high-performance, SEO-friendly landing pages that boost visibility and drive engagement."
  },
  {
    icon: LayoutDashboard,
    title: "Implementing Designs (Figma to Code)",
    description: "I transform Figma and other designs into pixel-perfect, responsive web pages that match the original vision."
  },
  {
    icon: Database,
    title: "Fullstack Web Apps",
    description: "I develop full-featured web apps, handling everything from frontend to backend with a secure, scalable setup."
  }
]

export const techStack = [
  {
    name: "Next.js",
    logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    class: "filter brightness-0 invert"
  },
  {
    name: "TypeScript",
    logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    class: ""
  },
  {
    name: "GitHub",
    logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    class: ""
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    class: ""
  },
  {
    name: "Prisma",
    logo: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",
    class: ""
  },
  {
    name: "Supabase",
    logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
    class: ""
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    class: ""
  },
  {
    name: "Clerk",
    logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_c58d5fd4ba449e621bdcd01ac1f00976/clerk-dev.png",
    class: ""
  }
]

export const projects = [
  {
    title: "NFT Marketplace",
    description: "Frontend project of a seamless NFT Marketplace built with Next.js and shadcn UI",  
    src: "/images/nft.png",
    link: "https://nft-marketplace-zeta-weld.vercel.app/"
  },
  {
    
    title: "PullVid App",
    description: "PullVid is a video downloader app that allows users to download videos from various platforms like YouTube, Twitter, Facebook, Instagram, and TikTok.",  
    src: "/images/pullvid.png",
    link: "https://pullvid.vercel.app/"
  },
  {
    title: "RDAS SOFTECH",
    description: "Landing Website for a software solution company developed with Next.js",
    src: "/images/rdas.png",
    link: "https://rdas.com.ng"
  },
  {
    title: "Isalesbook",
    description: "SEO optimized landing website for a Inventory software solution company",
    src: "/images/isalesbook.png",
    link: "https://isalesbook.com"
  },
  {
    title: "Moonex",
    description: "Landing page for a Web3 startup built with React",
    src: "/images/moonex.png",
    link: "https://moonex-gules.vercel.app/"
  },
  {
    title: "Dish Palette",
    description: "Next.js Full-stack CRUD recipe blog, with authentication and authorization.",
    src: "/images/dish-palette.png",
    link: "https://dish-palette-fullstack.vercel.app"
  },
]

export const experience = [
  {
    period: "July 2024 - December 2024",
    role: "Next.js Front-end Developer",
    company: "RDAS SOFTTECH",
    link: "https://rdas.com.ng",
    description: "5-months contracts at rdas.com.ng"
  },
  {
    period: "August 2024 - Present",
    role: "Freelance Next.js Front-end Developer",
    company: "Self-employed",
    link: "#",
    description: "Developing custom web applications for clients using Next.js and modern web technologies."
  },
  // {
  //   period: "2022 - 2023",
  //   role: "Computer Science Student",
  //   company: "University",
  //   link: "#",
  //   description: "Completed coursework in algorithms, data structures, and software engineering principles."
  // }
]