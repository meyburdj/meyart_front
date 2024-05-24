import Image from "next/image"
import Link from "next/link"

export default function ArtworkCard({ url, artist, artworkName, id }) {
    return (
        <Link href={`/catalogue/${id}`}>
            <div className="cursor-pointer bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105 active:scale-95">
                <div className="flex justify-center">
                    <Image alt={artworkName} src={url} width={150} height={150} />
                </div>
                <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{artworkName}</h3>
                    <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                        {artist}
                    </p>
                </div>
            </div>
        </Link>
    )
}
