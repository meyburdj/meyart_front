
import ArtworkCard from "./ArtworkCard"
import { ArtworkTruncated } from "@/types"
import FilterDesktop from "./FilterDesktop"

const MEDIA = ['print', 'painting', 'sculpture', 'mixed-media', 'photography', 'drawing']
const GENRES = ['American', 'European', 'Latin American', 'Asian', 'Contemporary']


export function CatalogueSearch({ artworks = [] }) {
  console.log('artworks in catlogue-search', artworks)
  return (
    <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-[300px_1fr] gap-6 pt-5 ">
      <FilterDesktop />
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:overflow-y-auto lg:max-h-[650px] p-2">
          {artworks.map(artwork => (
            <ArtworkCard key={artwork.artworkName} url={artwork.url} artist={artwork.artist_name} artworkName={artwork.title} />
          ))}
        </div>
      </div>
    </div >
  )
}
