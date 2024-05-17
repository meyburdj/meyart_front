
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ArtworkCard from "./ArtworkCard"
import SearchIconSelf from "./icons/searchIcon"


const MEDIA = ['print', 'painting', 'sculpture', 'mixed-media', 'photography', 'drawing']
const GENRES = ['American', 'European', 'Latin American', 'Asian', 'Contemporary']


export function CatalogueSearch({ artworks = [] }) {
  return (
    <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-[300px_1fr] gap-6 ">
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 space-y-6 lg:sticky lg:top-6">
        <div className="flex items-center space-x-4">
          <SearchIconSelf className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <Input
            className="flex-1 bg-transparent border-none focus:ring-0 text-gray-900 dark:text-gray-50 placeholder-gray-500 dark:placeholder-gray-400"
            placeholder="Search by artist"
            type="text"
          />
        </div>
        <div className="space-y-4">
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50 mb-2">Search by Genre</h3>
                </AccordionTrigger>
                <AccordionContent>

                  <div className="space-y-2">
                    {GENRES.map((genre) => (
                      <div key={genre} className="flex items-center space-x-2">
                        <Checkbox id={genre} />
                        <Label className="text-gray-500 dark:text-gray-400 font-medium" htmlFor={genre}>
                          {genre}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50 mb-2">Search by Media</h3>
                </AccordionTrigger>
                <AccordionContent>

                  <div className="space-y-2">
                    {MEDIA.map((media) => (
                      <div key={media} className="flex items-center space-x-2">
                        <Checkbox id={media} />
                        <Label className="text-gray-500 dark:text-gray-400 font-medium" htmlFor={media}>
                          {media}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Button variant="outline">Search</Button>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:overflow-y-auto lg:max-h-[650px]">
          {artworks.map(artwork => (
            <ArtworkCard url={artwork.url} artist={artwork.artistName} artworkName={artwork.artworkName} />
          ))}
        </div>
      </div>
    </div >
  )
}
