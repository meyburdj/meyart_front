"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Image from "next/image"
import { useState } from "react"

export function NavBar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800">
      <Link className="flex items-center gap-2" href="/">
        {/* <Image alt="Meyart Gallery Logo" src={'/image2vector.svg'} width={5} height={5} className="h-6 w-6" /> */}
        <span className="md:text-4xl sm:text-3xl font-bold">MEYART GALLERY</span>
      </Link>
      <div className="hidden md:flex gap-4">
        <Link className="md:text-3xl sm:text-2xl font-medium hover:underline underline-offset-4" href="/catalogue">
          Catalogue
        </Link>
        <Link className="md:text-3xl sm:text-2xl font-medium hover:underline underline-offset-4" href="#">
          Exhibitions
        </Link>
        <Link className="md:text-3xl sm:text-2xl font-medium hover:underline underline-offset-4" href="#">
          Contact
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid w-[200px] p-4">
            <Link className="mb-5 text-2xl font-medium hover:underline underline-offset-4" href="/">
              Home
            </Link>
            <Link className="mb-1 text-2xl font-medium hover:underline underline-offset-4" href="/catalogue">
              Catalogue
            </Link>
            <Link className="mb-1 text-2xl font-medium hover:underline underline-offset-4" href="#">
              Exhibitions
            </Link>
            <Link className="text-2xl font-medium hover:underline underline-offset-4" href="#">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
