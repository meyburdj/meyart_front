import ArtworkCard from "./ArtworkCard"

export function Artwork({ artistName, artworkName, urlLarge, artDescription, artistDescription,
  date, media, information, size, price, year }) {
  return (
    <>
      <section className="w-full bg-white dark:bg-gray-800 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <img
                alt="Featured Artwork"
                className="w-full rounded-lg object-cover"
                height="600"
                src={urlLarge}
                style={{
                  aspectRatio: "800/600",
                  objectFit: "cover",
                }}
                width="800"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{artworkName || 'untitled'}</h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">by {artistName || 'unknown'}</p>
              <div className="grid gap-2">
                <div>
                  <span className="font-medium">Medium:</span>
                  {media}{"\n                          "}
                </div>
                <div>
                  <span className="font-medium">Size:</span>
                  {size}{"\n                          "}
                </div>
                <div>
                  <span className="font-medium">Year:</span>
                  {year}{"\n                          "}
                </div>
                <div>
                  <span className="font-medium">Description:</span>
                  {artDescription}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
