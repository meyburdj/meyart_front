export default function RelatedArtworks() {
    return (
        <section className=" bg-gray-100 w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight mb-8">Related Artworks</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
                        <img
                            alt="Related Artwork 1"
                            className="w-full h-48 object-cover"
                            height="300"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width="400"
                        />
                        <div className="p-4 space-y-2">
                            <h3 className="text-lg font-medium">The Starry Night</h3>
                            <p className="text-gray-500 dark:text-gray-400">Vincent van Gogh</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
                        <img
                            alt="Related Artwork 2"
                            className="w-full h-48 object-cover"
                            height="300"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width="400"
                        />
                        <div className="p-4 space-y-2">
                            <h3 className="text-lg font-medium">Sunflowers</h3>
                            <p className="text-gray-500 dark:text-gray-400">Vincent van Gogh</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
                        <img
                            alt="Related Artwork 3"
                            className="w-full h-48 object-cover"
                            height="300"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width="400"
                        />
                        <div className="p-4 space-y-2">
                            <h3 className="text-lg font-medium">The Bedroom</h3>
                            <p className="text-gray-500 dark:text-gray-400">Vincent van Gogh</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}