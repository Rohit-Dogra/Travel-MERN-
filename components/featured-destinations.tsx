"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Calendar, Users } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "/placeholder.svg?height=300&width=400&text=Bali",
    description: "Experience the perfect blend of beaches, culture, and spirituality.",
    rating: 4.8,
    price: "₹74,999",
    duration: "7 days",
  },
  {
    id: 2,
    name: "Santorini, Greece",
    image: "/placeholder.svg?height=300&width=400&text=Santorini",
    description: "Discover the iconic white buildings and breathtaking sunsets.",
    rating: 4.9,
    price: "₹1,08,999",
    duration: "5 days",
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    image: "/placeholder.svg?height=300&width=400&text=Kyoto",
    description: "Immerse yourself in ancient temples and traditional Japanese culture.",
    rating: 4.7,
    price: "₹1,24,999",
    duration: "8 days",
  },
  {
    id: 4,
    name: "Machu Picchu, Peru",
    image: "/placeholder.svg?height=300&width=400&text=Machu+Picchu",
    description: "Explore the ancient Incan citadel set high in the Andes Mountains.",
    rating: 4.9,
    price: "₹1,58,999",
    duration: "10 days",
  },
]

export default function FeaturedDestinations() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-2">Featured Destinations</h2>
        <p className="text-gray-800">Explore our handpicked destinations for your next adventure</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <Card
            key={destination.id}
            className="bg-white shadow-md border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setHoveredCard(destination.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoveredCard === destination.id ? "scale-110" : "scale-100"
                }`}
              />
              <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-black px-2 py-1 rounded-full flex items-center">
                <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                <span className="text-xs font-medium">{destination.rating}</span>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-black">{destination.name}</h3>
                <div className="text-lg font-bold text-purple-600">{destination.price}</div>
              </div>
              <div className="flex items-center text-gray-700 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{destination.name.split(",")[1]?.trim() || "Destination"}</span>
              </div>
              <p className="text-gray-700 mb-4 line-clamp-2">{destination.description}</p>
              <div className="flex items-center justify-between text-gray-700 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{destination.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-sm">2+ People</span>
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" className="bg-white border-gray-300 text-black hover:bg-gray-100">
          View All Destinations
        </Button>
      </div>
    </section>
  )
}

