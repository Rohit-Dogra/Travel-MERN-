"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, Calendar, Users, ArrowLeft, Plane, Clock, Filter } from "lucide-react"
import GalaxyBackground from "@/components/galaxy-background"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const flights = [
  {
    id: 1,
    airline: "Air India",
    flightNumber: "AI 302",
    departure: {
      city: "Delhi",
      airport: "Indira Gandhi International Airport",
      time: "06:30",
      date: "15 May 2025",
    },
    arrival: {
      city: "Mumbai",
      airport: "Chhatrapati Shivaji International Airport",
      time: "08:45",
      date: "15 May 2025",
    },
    duration: "2h 15m",
    price: "₹5,499",
    stops: 0,
    class: "Economy",
  },
  {
    id: 2,
    airline: "IndiGo",
    flightNumber: "6E 195",
    departure: {
      city: "Delhi",
      airport: "Indira Gandhi International Airport",
      time: "08:15",
      date: "15 May 2025",
    },
    arrival: {
      city: "Mumbai",
      airport: "Chhatrapati Shivaji International Airport",
      time: "10:40",
      date: "15 May 2025",
    },
    duration: "2h 25m",
    price: "₹4,899",
    stops: 0,
    class: "Economy",
  },
  {
    id: 3,
    airline: "Vistara",
    flightNumber: "UK 945",
    departure: {
      city: "Delhi",
      airport: "Indira Gandhi International Airport",
      time: "10:45",
      date: "15 May 2025",
    },
    arrival: {
      city: "Mumbai",
      airport: "Chhatrapati Shivaji International Airport",
      time: "13:00",
      date: "15 May 2025",
    },
    duration: "2h 15m",
    price: "₹6,299",
    stops: 0,
    class: "Economy",
  },
  {
    id: 4,
    airline: "SpiceJet",
    flightNumber: "SG 8169",
    departure: {
      city: "Delhi",
      airport: "Indira Gandhi International Airport",
      time: "13:20",
      date: "15 May 2025",
    },
    arrival: {
      city: "Mumbai",
      airport: "Chhatrapati Shivaji International Airport",
      time: "15:40",
      date: "15 May 2025",
    },
    duration: "2h 20m",
    price: "₹4,599",
    stops: 0,
    class: "Economy",
  },
  {
    id: 5,
    airline: "Air India",
    flightNumber: "AI 665",
    departure: {
      city: "Delhi",
      airport: "Indira Gandhi International Airport",
      time: "16:45",
      date: "15 May 2025",
    },
    arrival: {
      city: "Mumbai",
      airport: "Chhatrapati Shivaji International Airport",
      time: "19:05",
      date: "15 May 2025",
    },
    duration: "2h 20m",
    price: "₹5,799",
    stops: 0,
    class: "Economy",
  },
  {
    id: 6,
    airline: "IndiGo",
    flightNumber: "6E 2112",
    departure: {
      city: "Delhi",
      airport: "Indira Gandhi International Airport",
      time: "19:30",
      date: "15 May 2025",
    },
    arrival: {
      city: "Mumbai",
      airport: "Chhatrapati Shivaji International Airport",
      time: "21:50",
      date: "15 May 2025",
    },
    duration: "2h 20m",
    price: "₹4,799",
    stops: 0,
    class: "Economy",
  },
  {
    id: 7,
    airline: "Vistara",
    flightNumber: "UK 981",
    departure: {
      city: "Delhi",
      airport: "Indira Gandhi International Airport",
      time: "21:15",
      date: "15 May 2025",
    },
    arrival: {
      city: "Mumbai",
      airport: "Chhatrapati Shivaji International Airport",
      time: "23:30",
      date: "15 May 2025",
    },
    duration: "2h 15m",
    price: "₹5,999",
    stops: 0,
    class: "Economy",
  },
  {
    id: 8,
    airline: "Air India",
    flightNumber: "AI 805",
    departure: {
      city: "Delhi",
      airport: "Indira Gandhi International Airport",
      time: "07:45",
      date: "15 May 2025",
    },
    arrival: {
      city: "Mumbai",
      airport: "Chhatrapati Shivaji International Airport",
      time: "12:15",
      date: "15 May 2025",
    },
    duration: "4h 30m",
    price: "₹6,899",
    stops: 1,
    stopCity: "Jaipur",
    class: "Economy",
  },
]

export default function FlightsPage() {
  const [selectedTab, setSelectedTab] = useState("oneWay")

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Galaxy Background */}
      <GalaxyBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
              </Button>
            </Link>
          </div>

          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center text-center py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Flight</h1>
            <p className="text-xl text-white mb-8 max-w-2xl">
              Search and book flights to destinations worldwide with our easy-to-use platform
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-4xl bg-black/30 backdrop-blur-md rounded-lg p-6 mb-8">
              <Tabs defaultValue="oneWay" className="w-full" onValueChange={setSelectedTab}>
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="oneWay">One Way</TabsTrigger>
                  <TabsTrigger value="roundTrip">Round Trip</TabsTrigger>
                  <TabsTrigger value="multiCity">Multi-City</TabsTrigger>
                </TabsList>

                <TabsContent value="oneWay" className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-1 relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input
                        placeholder="From"
                        className="pl-10 bg-white/10 border-white/30 text-white"
                        defaultValue="Delhi"
                      />
                    </div>
                    <div className="flex-1 relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input
                        placeholder="To"
                        className="pl-10 bg-white/10 border-white/30 text-white"
                        defaultValue="Mumbai"
                      />
                    </div>
                    <div className="flex-1 relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input
                        placeholder="Departure Date"
                        className="pl-10 bg-white/10 border-white/30 text-white"
                        defaultValue="15 May 2025"
                      />
                    </div>
                    <div className="flex-1 relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input
                        placeholder="Passengers"
                        className="pl-10 bg-white/10 border-white/30 text-white"
                        defaultValue="1 Adult"
                      />
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Search className="h-4 w-4 mr-2" /> Search
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="roundTrip" className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-1 relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input placeholder="From" className="pl-10 bg-white/10 border-white/30 text-white" />
                    </div>
                    <div className="flex-1 relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input placeholder="To" className="pl-10 bg-white/10 border-white/30 text-white" />
                    </div>
                    <div className="flex-1 relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input placeholder="Departure Date" className="pl-10 bg-white/10 border-white/30 text-white" />
                    </div>
                    <div className="flex-1 relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input placeholder="Return Date" className="pl-10 bg-white/10 border-white/30 text-white" />
                    </div>
                    <div className="flex-1 relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input placeholder="Passengers" className="pl-10 bg-white/10 border-white/30 text-white" />
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Search className="h-4 w-4 mr-2" /> Search
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="multiCity" className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <div className="flex-1 relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input placeholder="From" className="pl-10 bg-white/10 border-white/30 text-white" />
                    </div>
                    <div className="flex-1 relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input placeholder="To" className="pl-10 bg-white/10 border-white/30 text-white" />
                    </div>
                    <div className="flex-1 relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input placeholder="Date" className="pl-10 bg-white/10 border-white/30 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <div className="flex-1 relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input placeholder="From" className="pl-10 bg-white/10 border-white/30 text-white" />
                    </div>
                    <div className="flex-1 relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input placeholder="To" className="pl-10 bg-white/10 border-white/30 text-white" />
                    </div>
                    <div className="flex-1 relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-white" />
                      <Input placeholder="Date" className="pl-10 bg-white/10 border-white/30 text-white" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/20">
                      + Add Another Flight
                    </Button>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-white" />
                        <Input placeholder="Passengers" className="pl-10 bg-white/10 border-white/30 text-white" />
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <Search className="h-4 w-4 mr-2" /> Search
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Filters and Results */}
          <section className="py-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Filters Sidebar */}
              <div className="w-full md:w-1/4">
                <Card className="bg-white/20 backdrop-blur-md border-white/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Filters</h3>

                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-2">Price Range</h4>
                      <div className="flex items-center gap-2">
                        <Input type="number" placeholder="Min" className="bg-white/10 border-white/30 text-white" />
                        <span className="text-white">to</span>
                        <Input type="number" placeholder="Max" className="bg-white/10 border-white/30 text-white" />
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-2">Airlines</h4>
                      <div className="space-y-2">
                        {["Air India", "IndiGo", "Vistara", "SpiceJet", "GoAir"].map((airline) => (
                          <div key={airline} className="flex items-center">
                            <input
                              type="checkbox"
                              id={airline}
                              className="mr-2 h-4 w-4 rounded border-white/30 bg-white/10 text-purple-600"
                            />
                            <label htmlFor={airline} className="text-white">
                              {airline}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-2">Stops</h4>
                      <div className="space-y-2">
                        {["Non-stop", "1 Stop", "2+ Stops"].map((stop) => (
                          <div key={stop} className="flex items-center">
                            <input
                              type="checkbox"
                              id={stop}
                              className="mr-2 h-4 w-4 rounded border-white/30 bg-white/10 text-purple-600"
                            />
                            <label htmlFor={stop} className="text-white">
                              {stop}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-2">Departure Time</h4>
                      <div className="space-y-2">
                        {[
                          "Morning (6AM - 12PM)",
                          "Afternoon (12PM - 6PM)",
                          "Evening (6PM - 12AM)",
                          "Night (12AM - 6AM)",
                        ].map((time) => (
                          <div key={time} className="flex items-center">
                            <input
                              type="checkbox"
                              id={time}
                              className="mr-2 h-4 w-4 rounded border-white/30 bg-white/10 text-purple-600"
                            />
                            <label htmlFor={time} className="text-white">
                              {time}
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

              {/* Flight Listings */}
              <div className="w-full md:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">{flights.length} Flights Available</h2>
                  <div className="flex items-center">
                    <span className="text-white mr-2">Sort by:</span>
                    <select className="bg-white/10 border-white/30 text-white rounded-md p-2">
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Duration: Shortest</option>
                      <option>Departure: Earliest</option>
                      <option>Departure: Latest</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-6">
                  {flights.map((flight) => (
                    <Card key={flight.id} className="bg-white/20 backdrop-blur-md border-white/30 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                          <div className="flex items-center mb-4 md:mb-0">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                              <Plane className="h-6 w-6 text-purple-400" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-white">{flight.airline}</h3>
                              <p className="text-white text-sm">{flight.flightNumber}</p>
                            </div>
                          </div>

                          <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 mb-4 md:mb-0">
                            <div className="text-center md:text-left mb-4 md:mb-0">
                              <p className="text-2xl font-bold text-white">{flight.departure.time}</p>
                              <p className="text-white">{flight.departure.city}</p>
                            </div>

                            <div className="flex flex-col items-center">
                              <p className="text-white text-sm mb-1">{flight.duration}</p>
                              <div className="relative w-32 md:w-48">
                                <div className="border-t border-dashed border-white/50 w-full absolute top-1/2"></div>
                                <div className="absolute left-0 top-1/2 w-2 h-2 bg-white rounded-full transform -translate-y-1/2"></div>
                                <div className="absolute right-0 top-1/2 w-2 h-2 bg-white rounded-full transform -translate-y-1/2"></div>
                                {flight.stops > 0 && (
                                  <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                                )}
                              </div>
                              {flight.stops > 0 ? (
                                <p className="text-purple-300 text-xs mt-1">
                                  {flight.stops} stop ({flight.stopCity})
                                </p>
                              ) : (
                                <p className="text-green-400 text-xs mt-1">Non-stop</p>
                              )}
                            </div>

                            <div className="text-center md:text-right">
                              <p className="text-2xl font-bold text-white">{flight.arrival.time}</p>
                              <p className="text-white">{flight.arrival.city}</p>
                            </div>
                          </div>

                          <div className="text-center">
                            <p className="text-2xl font-bold text-white mb-2">{flight.price}</p>
                            <Button className="bg-purple-600 hover:bg-purple-700">Book Now</Button>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/20 flex justify-between items-center">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-white/70 mr-1" />
                            <span className="text-white text-sm">
                              {flight.departure.date}, {flight.departure.time} - {flight.arrival.time}
                            </span>
                          </div>
                          <Button variant="ghost" className="text-white hover:bg-white/10 text-sm">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
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
                            : "border-white/30 text-white hover:bg-white/20"
                        }
                        size="sm"
                      >
                        {page}
                      </Button>
                    ))}
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/20" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

