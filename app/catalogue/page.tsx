import { CatalogueSearch } from "@/components/catalogue-search"
import { ArtworkTruncated } from "@/types"

const artwork = {
    artistName: "Bearden, Romare",
    artworkName: "Black Enterprise",
    url: "https://i.ibb.co/1dsq3Fg/sm-Bearden20220912-114438.jpg"
}
const artwork2 = {
    artistName: "Bearden, Romare",
    artworkName: "Dancer",
    url: "https://i.ibb.co/9sKWq10/med-Bearden-Dancer20220927-122720-1.jpg"
}
const artwork3 = {
    artistName: "Toby, Mark",
    artworkName: "Grand Parade",
    url: "https://i.ibb.co/48PSfqt/med-Tobey-Grand-Parade.jpg"
}
const artwork4 = {
    artistName: "Steckel, Anita",
    artworkName: "Giant Horse",
    url: "https://i.ibb.co/sPn0tVm/med-Steckel20220919-142503-1.jpg"
}
const artwork5 = {
    artistName: "Youngerman, Jack",
    artworkName: "Galaxy: Apple Green ",
    url: "https://i.ibb.co/vqzgwQs/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
}
const artworksTest = [artwork, artwork2, artwork3, artwork4, artwork5, artwork2, artwork]

export default async function Catalogue() {

    const artworkURL = new URL(`${process.env.BACKEND_API_URL}/artworks`);
    async function fetchArtworks(url: string): Promise<ArtworkTruncated[]> {
        const response = await fetch(url, { next: { revalidate: 0 } });
        if (!response.ok) {
            throw new Error('Failed to fetch artworks');
        }
        const data = await response.json();
        console.log('data', data)
        return data;
    }

    const artworks = await fetchArtworks(artworkURL.toString())
    return (
        <CatalogueSearch artworks={artworks} />
    )
}