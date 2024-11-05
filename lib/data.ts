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
    id: 1,
    title: "Dish Palette",
    description: "Next.js Full-stack CRUD recipe blog, with authentication and authorization.",
    src: "/images/dish-palette.png",
    link: "https://dish-palette-fullstack.vercel.app"
  },
  {
    id: 2,
    title: "RDAS SOFTECH",
    description: "Landing Website for a software solution company developed with Next.js",
    src: "/images/rdas.png",
    link: "https://rdas.com.ng"
  },
  {
    id: 3,
    title: "Isalesbook",
    description: "SEO optimized landing website for a Inventory software solution company",
    src: "/images/isalesbook.png",
    link: "https://isalesbook.com"
  }
]

export const experience = [
  {
    period: "2023 - Present",
    role: "Freelance Web Developer",
    company: "Self-employed",
    description: "Developing custom web applications for clients using Next.js and modern web technologies."
  },
  {
    period: "2022 - 2023",
    role: "Computer Science Student",
    company: "University",
    description: "Completed coursework in algorithms, data structures, and software engineering principles."
  }
]