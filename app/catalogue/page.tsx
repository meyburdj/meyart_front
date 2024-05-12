import { CatalogueSearch } from "@/components/catalogue-search"

const artwork = {
    artistName: "Pablo Picasso",
    artworkName: "Artwork1",
    url: "https://i.ibb.co/1dsq3Fg/sm-Bearden20220912-114438.jpg"
}
const artworks = [artwork, artwork, artwork, artwork, artwork, artwork, artwork]

export default function Catalogue() {
    return (
        <CatalogueSearch artworks={artworks} />
    )
}