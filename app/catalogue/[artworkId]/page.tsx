import { Artwork } from "@/components/artwork"
import RelatedArtworks from "@/components/relatedArtworks"
import { Artwork as IArtwork } from "@/types";

const artworkTest = {
    artistName: "Romare Bearden",
    artworkName: "Black Enterprise",
    url: "https://i.ibb.co/1dsq3Fg/sm-Bearden20220912-114438.jpg"
}
export default async function ArtworkPage({ params }: { params: { artworkId: string } }) {

    const artworkURL = new URL(`${process.env.BACKEND_API_URL}/artworks/${params.artworkId}`);
    async function fetchArtwork(url: string): Promise<IArtwork> {
        const response = await fetch(url, { next: { revalidate: 0 } });
        if (!response.ok) {
            throw new Error('Failed to fetch artworks');
        }
        const data = await response.json();
        return data;
    }

    const artwork = await fetchArtwork(artworkURL.toString())
    console.log('artwork', artwork)

    const { artist_name, information, genre, price, size, media, title, url, date } = artwork
    return (
        <>
            <Artwork artistName={artist_name} artworkName={title}
                urlLarge={url} artDescription={information}
                size={size} media={media} date={date} />

            <RelatedArtworks />
        </>
    )
}