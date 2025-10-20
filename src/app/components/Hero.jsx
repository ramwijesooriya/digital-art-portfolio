'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const featuredArtworks = [
  {
    id: 1,
    title: "",
    image: "/images/art1.jpg"
  },
  {
    id: 2,
    title: "",
    image: "/images/art2.jpg"
  },
  {
    id: 3,
    title: "",
    image: "/images/art3.jpg"
  },
  {
    id: 4,
    title: "",
    image: "/images/art4.jpg"
  },
  {
    id: 5,
    title: "",
    image: "/images/art5.jpg"
  }
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredArtworks.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              Creative 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                {" "}Digital Art
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
              Unique Artworks Made With Passion
            </p>
            
            <p className="text-lg text-gray-500 mb-10 max-w-lg mx-auto lg:mx-0 animate-slide-up">
              Explore a world of digital creativity where imagination meets technology. 
              Each piece is crafted with dedication and artistic vision.
            </p>
            
            <Link href="/portfolio" className="btn-primary inline-block animate-slide-up">
              View My Portfolio
            </Link>
          </div>

          {/* Right Column - Featured Artworks Carousel */}
          <div className="relative">
            <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {featuredArtworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-xl font-semibold">{artwork.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredArtworks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}