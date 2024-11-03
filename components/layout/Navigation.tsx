'use client'

import { Button } from "@/components/ui/button"
import { useActiveSection } from "@/hooks/useActiveSection"

const navItems = ['home', 'about', 'services', 'skills', 'experience', 'projects', 'contact']

export const Navigation = () => {
  const activeSection = useActiveSection()

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-40 bg-[#0a0a0a]/80 backdrop-blur-sm">
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
      <Button className="md:hidden" variant="ghost" size="icon">
        <svg 
          className="h-6 w-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 6h16M4 12h16M4 18h16" 
          />
        </svg>
      </Button>
    </nav>
  )
}

// Optional: If you need to use Navigation in other files, add a default export
export default Navigation