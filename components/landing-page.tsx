import Link from "next/link"
import { Contact } from "./contact"

export function LandingPage() {
  return (
    <>
      <section className="w-full py-12 md:py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <img
              alt="Hero Artwork"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              height="650"
              src="https://i.ibb.co/1dsq3Fg/sm-Bearden20220912-114438.jpg"
              width="650"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover Art From Around The World
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore our curated collection of American, European, Asian, Latin American, and Contemporary art.
                  Find your next masterpiece.
                </p>
              </div>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/catalogue"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">American Art</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <img
                  alt="American Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="American Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="American Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="American Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
              </div>
              <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Discover the rich and diverse world of American art, from the captivating landscapes of the Hudson River
                School to the bold abstractions of the 20th century.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">European Art</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <img
                  alt="European Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="European Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="European Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="European Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
              </div>
              <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Immerse yourself in the timeless beauty of European art, from the Renaissance masterpieces to the
                avant-garde movements of the 20th century.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Asian Art</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <img
                  alt="Asian Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="Asian Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="Asian Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="Asian Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
              </div>
              <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Explore the rich and diverse artistic traditions of Asia, from the intricate calligraphy of China to the
                vibrant colors of Japanese ukiyo-e prints.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latin American Art</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <img
                  alt="Latin American Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="Latin American Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="Latin American Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="Latin American Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
              </div>
              <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Discover the vibrant and expressive world of Latin American art, from the bold murals of Mexico to the
                surreal dreamscapes of Brazilian modernism.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contemporary Art</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <img
                  alt="Contemporary Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="Contemporary Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="Contemporary Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
                <img
                  alt="Contemporary Art"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="https://i.ibb.co/SyvWsdQ/med-Youngerman-galaxy-Apple-Green19-75-20221003-122224.jpg"
                  width="300"
                />
              </div>
              <p className="mt-4 max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Explore the cutting-edge world of contemporary art, where artists push the boundaries of traditional
                media and challenge our perceptions of the world around us.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}
