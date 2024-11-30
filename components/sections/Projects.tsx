"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import Section from "../Section";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data"
import FloatingTriangle from "../animated/FloatingTriangle";

const ProjectsSection = () => (
    <Section id="projects">
    <div className="relative">
      <FloatingTriangle className="text-yellow-400 right-0 bottom-0" />
      <h3 className="text-3xl font-bold mb-8">Some Projects I&apos;ve worked on</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            className="relative group aspect-video"
          >
            <Image
              src={project.src}
              alt={`Project ${project.title}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center p-4">
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-300 mb-4 text-center">{project.description}</p>
              <Link target='_blank' href={project.link}>
                <Button size="icon" className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full">
                  <ArrowUpRight className="h-5 w-5" />
                </Button>
              </Link>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default ProjectsSection;
