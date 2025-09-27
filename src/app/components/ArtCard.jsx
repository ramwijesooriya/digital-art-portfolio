'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function ArtCard({ artwork }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        
        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300">
            <div className="text-center text-white p-4">
              <p className="text-sm mb-4 opacity-90">{artwork.description}</p>
              <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Commission
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {artwork.title}
        </h3>
        <p className="text-gray-600 text-sm">
          {artwork.description}
        </p>
      </div>
    </div>
  )
}