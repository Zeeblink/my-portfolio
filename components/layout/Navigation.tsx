'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useActiveSection } from "@/hooks/useActiveSection"
import { X, Menu } from 'lucide-react'

const navItems = ['home', 'about', 'services', 'skills', 'experience', 'projects', 'contact']

export const Navigation = () => {
  const activeSection = useActiveSection()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5
      }
    })
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-40 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <h1 className="text-2xl font-bold">Emmanuel Oye</h1>
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`capitalize ${
                  activeSection === item ? 'text-yellow-400' : 'text-white'
                } hover:text-yellow-400 transition-colors`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <Button 
          className="md:hidden" 
          variant="ghost" 
          size="icon"
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={toggleMenu}
            />
            
            {/* Mobile menu */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 bottom-0 w-full md:w-80 bg-[#0a0a0a]/95 backdrop-blur-lg border-l border-gray-800 z-50 flex flex-col p-8"
            >
              <div className="flex justify-end">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={toggleMenu}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <ul className="flex flex-col space-y-6 mt-16">
                {navItems.map((item, i) => (
                  <motion.li 
                    key={item}
                    variants={linkVariants}
                    custom={i}
                  >
                    <a
                      href={`#${item}`}
                      className={`capitalize text-2xl ${
                        activeSection === item ? 'text-yellow-400' : 'text-white'
                      } hover:text-yellow-400 transition-colors`}
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div 
                className="mt-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-gray-400 text-sm">
                  &copy; 2023 Emmanuel Oye. All rights reserved.
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation