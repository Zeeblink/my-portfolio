import HomeSection from '@/components/sections/Hero'
import AboutSection from '@/components/sections/About'
import dynamic from 'next/dynamic'
const ServicesSection = dynamic(() => import('@/components/sections/Services'))
const SkillsSection = dynamic(() => import('@/components/sections/Skills'))
const ExperienceSection = dynamic(() => import('@/components/sections/Experience'))
const ProjectsSection = dynamic(() => import('@/components/sections/Projects'))
const ContactSection = dynamic(() => import('@/components/sections/Contact'))
const ScrollProgressBar = dynamic(() => import('@/components/animated/ScrollProgessBar'))
import { client } from '@/sanity-lib/client'
import { latestPostsQuery } from '@/sanity-lib/queries'
import { BlogSection } from '@/components/sections/BlogSection'
import Head from 'next/head'

export default async function Portfolio() {
  const latestPosts = await client.fetch(latestPostsQuery)

  return (
    <>
      <Head>
        <link rel="canonical" href="https://emmanueloye.xyz/" />
      </Head>
      <ScrollProgressBar />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <BlogSection posts={latestPosts} />
      <ContactSection />
    </>
  )
}