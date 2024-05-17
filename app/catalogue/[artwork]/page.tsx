import { Artwork } from "@/components/artwork"
import RelatedArtworks from "@/components/relatedArtworks"
import { addAbortListener } from "events"
const artwork = {
    artistName: "Romare Bearden",
    artworkName: "Black Enterprise",
    url: "https://i.ibb.co/1dsq3Fg/sm-Bearden20220912-114438.jpg"
}
export default function ArtworkPage({ params }: { params: { id: string } }) {

    console.log('params', params)
    return (
        <>
            <Artwork artistName={artwork.artistName} artworkName={artwork.artworkName}
                urlLarge={artwork.url} />
            <RelatedArtworks />
        </>
    )
}