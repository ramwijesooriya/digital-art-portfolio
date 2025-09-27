'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
            Nishu ARTS
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`text-lg font-medium transition-colors hover:text-indigo-600 ${
                pathname === '/' ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-lg font-medium transition-colors hover:text-indigo-600 ${
                pathname === '/portfolio' ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              Portfolio
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <Link 
              href="/" 
              className={`block py-2 text-lg font-medium transition-colors hover:text-indigo-600 ${
                pathname === '/' ? 'text-indigo-600' : 'text-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/portfolio" 
              className={`block py-2 text-lg font-medium transition-colors hover:text-indigo-600 ${
                pathname === '/portfolio' ? 'text-indigo-600' : 'text-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}