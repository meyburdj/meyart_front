"use client"
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
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import SearchIconSelf from "./icons/searchIcon"

const ALL_MEDIA = ['print', 'painting', 'sculpture', 'mixed-media', 'photography', 'drawing']
const ALL_GENRES = ['American', 'European', 'Latin American', 'Asian', 'Contemporary']

export default function FilterDesktop({ searchParams }) {
    const router = useRouter()
    const [media, setMedia] = useState(searchParams?.media || ALL_MEDIA)
    const [genres, setGenres] = useState(searchParams?.genres || ALL_GENRES)
    const [artist, setArtist] = useState(searchParams?.artist || "")

    const handleCheckboxChange = (type, value) => {
        const setSelection = type === 'genre' ? setGenres : setMedia;

        setSelection(prevSelection =>
            prevSelection.includes(value)
                ? prevSelection.filter(item => item !== value)
                : [...prevSelection, value]
        );
    };

    const createQueryParams = (): string => {
        const queryParams = new URLSearchParams();

        if (media.length > 0) {
            queryParams.append('media', media.join(','));
        }

        if (genres.length > 0) {
            queryParams.append('genres', genres.join(','));
        }

        if (artist) {
            queryParams.append('artist', artist);
        }

        return queryParams.toString();
    };

    const handleSearch = () => {
        const queryString = createQueryParams();
        router.push(`/catalogue${queryString ? '?' + queryString : ''}`);
    };

    console.log('media', media)
    console.log('genres', genres)

    return (
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 space-y-6 lg:sticky lg:top-6">
            <div className="flex items-center space-x-4">
                <SearchIconSelf className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <Input
                    className="flex-1 bg-transparent border-none focus:ring-0 text-gray-900 dark:text-gray-50 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Search by artist"
                    type="text"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
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
                                    {ALL_GENRES.map((genre) => (
                                        <div key={genre} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={genre}
                                                checked={genres.includes(genre)}
                                                onCheckedChange={() => handleCheckboxChange('genre', genre)}
                                            />
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
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50 mb-2">Search by Media</h3>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-2">
                                    {ALL_MEDIA.map((mediaItem) => (
                                        <div key={mediaItem} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={mediaItem}
                                                checked={media.includes(mediaItem)}
                                                onCheckedChange={() => handleCheckboxChange('media', mediaItem)}
                                            />
                                            <Label className="text-gray-500 dark:text-gray-400 font-medium" htmlFor={mediaItem}>
                                                {mediaItem}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <Button variant="outline" onClick={handleSearch} >Search</Button>
            </div>
        </div>
    )
}