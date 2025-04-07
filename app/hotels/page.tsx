"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  Wifi,
  Coffee,
  Utensils,
  FishIcon as Swimming,
  ArrowLeft,
  Filter,
} from "lucide-react"
import GalaxyBackground from "@/components/galaxy-background"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const hotels = [
  {
    id: 1,
    name: "Luxury Palace Hotel",
    location: "Mumbai, India",
    image: "/placeholder.svg?height=300&width=400&text=Luxury+Palace",
    description: "Experience luxury at its finest with stunning views of the city skyline.",
    rating: 4.8,
    price: "₹12,500",
    perNight: true,
    amenities: ["Free WiFi", "Swimming Pool", "Restaurant", "Spa", "Gym"],
  },
  {
    id: 2,
    name: "Seaside Resort & Spa",
    location: "Goa, India",
    image: "/placeholder.svg?height=300&width=400&text=Seaside+Resort",
    description: "Beachfront resort with private access to the pristine beaches of Goa.",
    rating: 4.7,
    price: "₹9,800",
    perNight: true,
    amenities: ["Beach Access", "Spa", "Free Breakfast", "Pool", "Bar"],
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    location: "Shimla, India",
    image: "/placeholder.svg?height=300&width=400&text=Mountain+Lodge",
    description: "Cozy lodge nestled in the mountains with breathtaking Himalayan views.",
    rating: 4.6,
    price: "₹7,500",
    perNight: true,
    amenities: ["Mountain View", "Fireplace", "Restaurant", "Hiking Trails", "Room Service"],
  },
  {
    id: 4,
    name: "Heritage Haveli",
    location: "Jaipur, India",
    image: "/placeholder.svg?height=300&width=400&text=Heritage+Haveli",
    description: "Historic haveli converted into a luxury hotel with authentic Rajasthani decor.",
    rating: 4.9,
    price: "₹15,200",
    perNight: true,
    amenities: ["Heritage Tours", "Rooftop Restaurant", "Cultural Shows", "Pool", "Spa"],
  },
  {
    id: 5,
    name: "Riverside Retreat",
    location: "Rishikesh, India",
    image: "/placeholder.svg?height=300&width=400&text=Riverside+Retreat",
    description: "Peaceful retreat by the Ganges river with yoga and meditation facilities.",
    rating: 4.5,
    price: "₹6,800",
    perNight: true,
    amenities: ["Yoga Classes", "River View", "Vegetarian Restaurant", "Meditation Hall", "Nature Walks"],
  },
  {
    id: 6,
    name: "Urban Boutique Hotel",
    location: "Bangalore, India",
    image: "/placeholder.svg?height=300&width=400&text=Urban+Boutique",
    description: "Stylish boutique hotel in the heart of the tech city with modern amenities.",
    rating: 4.7,
    price: "₹8,900",
    perNight: true,
    amenities: ["Free WiFi", "Rooftop Bar", "Business Center", "Fitness Center", "Restaurant"],
  },
  {
    id: 7,
    name: "Backwater Resort",
    location: "Kerala, India",
    image: "/placeholder.svg?height=300&width=400&text=Backwater+Resort",
    description: "Traditional houseboat experience on the serene backwaters of Kerala.",
    rating: 4.8,
    price: "₹11,200",
    perNight: true,
    amenities: ["Houseboat Tours", "Ayurvedic Spa", "Local Cuisine", "Cultural Programs", "Nature Walks"],
  },
  {
    id: 8,
    name: "Desert Camp Luxury",
    location: "Jaisalmer, India",
    image: "/placeholder.svg?height=300&width=400&text=Desert+Camp",
    description: "Luxury desert camping experience with traditional Rajasthani hospitality.",
    rating: 4.6,
    price: "₹9,500",
    perNight: true,
    amenities: ["Desert Safari", "Cultural Shows", "Camel Rides", "Traditional Food", "Stargazing"],
  },
]

const amenityIcons = {
  "Free WiFi": <Wifi className="h-4 w-4 mr-1" />,
  "Swimming Pool": <Swimming className="h-4 w-4 mr-1" />,
  Restaurant: <Utensils className="h-4 w-4 mr-1" />,
  "Free Breakfast": <Coffee className="h-4 w-4 mr-1" />,
}

export default function HotelsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")

  // Get unique locations for filter
  const locations = [...new Set(hotels.map((hotel) => hotel.location.split(",")[0].trim()))]

  // Filter hotels based on location
  const filteredHotels = selectedLocation ? hotels.filter((hotel) => hotel.location.includes(selectedLocation)) : hotels

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Keep the galaxy background but make it more subtle */}
      <div className="opacity-10">
        <GalaxyBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/">
              <Button variant="ghost" className="text-black hover:bg-gray-100">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
              </Button>
            </Link>
          </div>

          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center text-center py-12 bg-gray-100 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Find Your Perfect Stay</h1>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl">
              Discover the best hotels, resorts, and homestays for your next adventure
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input placeholder="Destination" className="pl-10 bg-gray-50 border-gray-300 text-black" />
                </div>
                <div className="flex-1 relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input placeholder="Check-in - Check-out" className="pl-10 bg-gray-50 border-gray-300 text-black" />
                </div>
                <div className="flex-1 relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input placeholder="Guests & Rooms" className="pl-10 bg-gray-50 border-gray-300 text-black" />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Search className="h-4 w-4 mr-2" /> Search
                </Button>
              </div>
            </div>
          </section>

          {/* Filters and Results */}
          <section className="py-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Filters Sidebar */}
              <div className="w-full md:w-1/4">
                <Card className="bg-white shadow-md border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-4">Filters</h3>

                    <div className="mb-6">
                      <h4 className="text-black font-medium mb-2">Location</h4>
                      <div className="space-y-2">
                        <Button
                          variant="ghost"
                          className={`w-full justify-start text-black hover:bg-gray-100 ${!selectedLocation ? "bg-gray-100" : ""}`}
                          onClick={() => setSelectedLocation("")}
                        >
                          All Locations
                        </Button>
                        {locations.map((location) => (
                          <Button
                            key={location}
                            variant="ghost"
                            className={`w-full justify-start text-black hover:bg-gray-100 ${selectedLocation === location ? "bg-gray-100" : ""}`}
                            onClick={() => setSelectedLocation(location)}
                          >
                            {location}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-black font-medium mb-2">Price Range</h4>
                      <div className="flex items-center gap-2">
                        <Input type="number" placeholder="Min" className="bg-gray-50 border-gray-300 text-black" />
                        <span className="text-black">to</span>
                        <Input type="number" placeholder="Max" className="bg-gray-50 border-gray-300 text-black" />
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-black font-medium mb-2">Star Rating</h4>
                      <div className="flex gap-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <Button
                            key={rating}
                            variant="outline"
                            size="sm"
                            className="bg-white border-gray-300 text-black hover:bg-gray-100"
                          >
                            {rating} <Star className="h-3 w-3 ml-1 fill-yellow-500 text-yellow-500" />
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-black font-medium mb-2">Amenities</h4>
                      <div className="space-y-2">
                        {["Free WiFi", "Swimming Pool", "Restaurant", "Spa", "Gym", "Free Breakfast"].map((amenity) => (
                          <div key={amenity} className="flex items-center">
                            <input
                              type="checkbox"
                              id={amenity}
                              className="mr-2 h-4 w-4 rounded border-gray-300 bg-gray-50 text-purple-600"
                            />
                            <label htmlFor={amenity} className="text-black">
                              {amenity}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                      <Filter className="h-4 w-4 mr-2" /> Apply Filters
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Hotel Listings */}
              <div className="w-full md:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-black">
                    {filteredHotels.length} Hotels {selectedLocation ? `in ${selectedLocation}` : ""}
                  </h2>
                  <div className="flex items-center">
                    <span className="text-black mr-2">Sort by:</span>
                    <select className="bg-gray-50 border-gray-300 text-black rounded-md p-2">
                      <option>Recommended</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Rating</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  {filteredHotels.map((hotel) => (
                    <Card key={hotel.id} className="bg-white shadow-md border-gray-200 overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 h-48 md:h-auto">
                          <img
                            src={hotel.image || "/placeholder.svg"}
                            alt={hotel.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-full md:w-2/3 p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold text-black mb-1">{hotel.name}</h3>
                              <div className="flex items-center text-gray-700 mb-2">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{hotel.location}</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="bg-purple-600 text-white px-2 py-1 rounded-md flex items-center mb-2">
                                <Star className="h-4 w-4 mr-1 fill-current" />
                                <span>{hotel.rating}</span>
                              </div>
                              <div className="text-xl font-bold text-purple-600">{hotel.price}</div>
                              <div className="text-gray-700 text-sm">{hotel.perNight ? "per night" : ""}</div>
                            </div>
                          </div>

                          <p className="text-gray-700 mb-4">{hotel.description}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {hotel.amenities.slice(0, 4).map((amenity) => (
                              <span
                                key={amenity}
                                className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm flex items-center"
                              >
                                {amenityIcons[amenity] || null}
                                {amenity}
                              </span>
                            ))}
                            {hotel.amenities.length > 4 && (
                              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-sm">
                                +{hotel.amenities.length - 4} more
                              </span>
                            )}
                          </div>

                          <div className="flex justify-between items-center">
                            <Button variant="outline" className="border-gray-300 text-black hover:bg-gray-100">
                              View Details
                            </Button>
                            <Button className="bg-purple-600 hover:bg-purple-700">Book Now</Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((page) => (
                      <Button
                        key={page}
                        variant={page === 1 ? "default" : "outline"}
                        className={
                          page === 1
                            ? "bg-purple-600 hover:bg-purple-700"
                            : "border-gray-300 text-black hover:bg-gray-100"
                        }
                        size="sm"
                      >
                        {page}
                      </Button>
                    ))}
                    <Button variant="outline" className="border-gray-300 text-black hover:bg-gray-100" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Destinations */}
          <section className="py-12 bg-gray-100 rounded-lg mt-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-2">Popular Destinations</h2>
              <p className="text-gray-800 text-lg">Explore hotels in these trending locations</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Mumbai", "Delhi", "Goa", "Jaipur", "Kerala", "Shimla", "Bangalore", "Udaipur"].map((city) => (
                <Card key={city} className="bg-white shadow-md border-gray-200 overflow-hidden">
                  <div className="relative h-40">
                    <img
                      src={`/placeholder.svg?height=200&width=300&text=${city}`}
                      alt={city}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <h3 className="text-xl font-bold text-white">{city}</h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

