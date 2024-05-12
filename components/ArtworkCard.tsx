import Image from "next/image"

export default function ArtworkCard({ url, artist, artworkName }) {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden ">
            <div className="flex justify-center">
                <Image alt="Meyart Gallery Logo" src={url} width={150} height={150} />
            </div>
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{artworkName}</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                    {artist}
                </p>
            </div>
        </div>

    )
}

