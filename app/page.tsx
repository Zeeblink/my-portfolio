'use client'

import HomeSection from '@/components/sections/Hero'
import AboutSection from '@/components/sections/About'
import dynamic from 'next/dynamic'
const ServicesSection = dynamic(() => import('@/components/sections/Services'))
const SkillsSection = dynamic(() => import('@/components/sections/Skills'))
const ExperienceSection = dynamic(() => import('@/components/sections/Experience'))
const ProjectsSection = dynamic(() => import('@/components/sections/Projects'))
const ContactSection = dynamic(() => import('@/components/sections/Contact'))
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-50"
        style={{ scaleX }}
      />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}