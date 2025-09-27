import ArtGrid from '../components/ArtGrid'

const artworks = [
  {
    id: 1,
    title: "Ethereal Dreams",
    image: "/images/art1.jpg",
    description: "A surreal journey through digital landscapes"
  },
  {
    id: 2,
    title: "Neon Cityscape",
    image: "/images/art2.jpg",
    description: "Futuristic urban environment with vibrant colors"
  },
  {
    id: 3,
    title: "Abstract Harmony",
    image: "/images/art3.jpg",
    description: "Geometric patterns in perfect balance"
  },
  {
    id: 4,
    title: "Digital Portrait",
    image: "/images/art4.jpg",
    description: "Modern take on classical portraiture"
  },
  {
    id: 5,
    title: "Cosmic Wonder",
    image: "/images/art5.jpg",
    description: "Exploration of space and time"
  },
  {
    id: 6,
    title: "Nature's Code",
    image: "/images/art6.jpg",
    description: "Where technology meets organic forms"
  },
  {
    id: 7,
    title: "Minimalist Zen",
    image: "/images/art7.jpg",
    description: "Simplicity in digital form"
  },
  {
    id: 8,
    title: "Color Symphony",
    image: "/images/art8.jpg",
    description: "A vibrant celebration of hues"
  }
]

export const metadata = {
  title: 'Portfolio - Digital Art Gallery',
  description: 'Browse through our collection of professional digital artworks',
}

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
          My Portfolio
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up">
          Discover a collection of unique digital artworks, each crafted with passion and creativity
        </p>
      </div>
      <ArtGrid artworks={artworks} />
    </div>
  )
}