import ArtCard from './ArtCard'

export default function ArtGrid({ artworks }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {artworks.map((artwork, index) => (
        <div 
          key={artwork.id} 
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ArtCard artwork={artwork} />
        </div>
      ))}
    </div>
  )
}