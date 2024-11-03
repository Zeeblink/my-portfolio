import { Code2, Database, Lock, Layout } from "lucide-react"
import { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building responsive and performant web applications using Next.js and TypeScript."
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing and implementing efficient database solutions with PostgreSQL and Prisma ORM."
  },
  {
    icon: Lock,
    title: "Authentication",
    description: "Implementing secure authentication systems using Clerk and other modern auth solutions."
  },
  {
    icon: Layout,
    title: "UI/UX Development",
    description: "Creating beautiful and intuitive user interfaces with Tailwind CSS and modern design principles."
  }
]

export const techStack = [
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
  { name: "Prisma", logo: "/logos/prisma.svg" },
  { name: "Supabase", logo: "/logos/supabase.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "Clerk", logo: "/logos/clerk.svg" }
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
    description: "",
    src: "/",
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