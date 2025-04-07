"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold text-black">TravelEase</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-black hover:bg-gray-100">
                  Destinations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500 to-purple-900 p-6 no-underline outline-none focus:shadow-md"
                          href="/destinations"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">Featured Destinations</div>
                          <p className="text-sm leading-tight text-white/90">
                            Explore our handpicked destinations for your next adventure
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link
                        href="/destinations/cities"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                      >
                        <div className="text-sm font-medium leading-none text-black">Popular Cities</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-700">
                          Explore the most visited cities around the world
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/destinations/beaches"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                      >
                        <div className="text-sm font-medium leading-none text-black">Beach Getaways</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-700">
                          Discover paradise beaches for your perfect vacation
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/destinations/adventure"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                      >
                        <div className="text-sm font-medium leading-none text-black">Adventure Travel</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-700">
                          Thrilling experiences for adventure seekers
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-black hover:bg-gray-100">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {[
                      {
                        title: "Flights",
                        description: "Book flights to destinations worldwide",
                        link: "/flights",
                      },
                      {
                        title: "Hotels",
                        description: "Find the perfect accommodation for your stay",
                        link: "/hotels",
                      },
                      {
                        title: "Car Rentals",
                        description: "Rent a car for your journey",
                        link: "/car-rentals",
                      },
                      {
                        title: "Activities",
                        description: "Discover exciting activities at your destination",
                        link: "/activities",
                      },
                      {
                        title: "Travel Insurance",
                        description: "Protect your trip with comprehensive coverage",
                        link: "/insurance",
                      },
                      {
                        title: "Airport Transfers",
                        description: "Seamless transportation to and from airports",
                        link: "/transfers",
                      },
                    ].map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={service.link}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                          >
                            <div className="text-sm font-medium leading-none text-black">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-700">{service.description}</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-black hover:bg-gray-100`}
                  >
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-black hover:bg-gray-100`}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2">
            <Link href="/signin">
              <Button variant="ghost" className="text-black hover:bg-gray-100">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-purple-600 hover:bg-purple-700">Register</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-black">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-gray-200">
              <SheetHeader>
                <SheetTitle className="text-black">TravelEase</SheetTitle>
                <SheetDescription className="text-gray-700">Explore the universe of travel</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-black hover:text-purple-600 py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/destinations"
                  className="text-black hover:text-purple-600 py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Destinations
                </Link>
                <Link
                  href="/services"
                  className="text-black hover:text-purple-600 py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/blog"
                  className="text-black hover:text-purple-600 py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-black hover:text-purple-600 py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="border-t border-gray-200 my-4 pt-4">
                  <Link href="/signin">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 mb-2">Sign In</Button>
                  </Link>
                  <Link href="/register">
                    <Button variant="outline" className="w-full border-gray-300 text-black hover:bg-gray-100">
                      Register
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

