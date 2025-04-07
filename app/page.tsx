"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Sun,
  Wind,
  CreditCard,
  BarChart2,
  Briefcase,
  Clock,
  Map,
  Shield,
  DollarSign,
  LogIn,
  UserPlus,
  Plane,
  Hotel,
  BookOpen,
  Star,
} from "lucide-react"
import GalaxyBackground from "@/components/galaxy-background"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Galaxy Background */}
      <GalaxyBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section - with text overlay for better visibility */}
          <section className="flex flex-col items-center justify-center text-center py-20">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Explore the Universe of Travel</h1>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Discover new destinations, plan your journey, and create unforgettable memories with our comprehensive
                travel platform.
              </p>

              {/* Search Bar */}
              <div className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-4 mb-8">
                <Tabs defaultValue="flights" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-4 bg-white/20">
                    <TabsTrigger value="flights" className="text-white data-[state=active]:bg-purple-600">
                      Flights
                    </TabsTrigger>
                    <TabsTrigger value="hotels" className="text-white data-[state=active]:bg-purple-600">
                      Hotels
                    </TabsTrigger>
                    <TabsTrigger value="packages" className="text-white data-[state=active]:bg-purple-600">
                      Packages
                    </TabsTrigger>
                    <TabsTrigger value="activities" className="text-white data-[state=active]:bg-purple-600">
                      Activities
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="flights" className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-2">
                      <div className="flex-1 relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                        <Input
                          placeholder="From where?"
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div className="flex-1 relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                        <Input
                          placeholder="To where?"
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div className="flex-1 relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-white" />
                        <Input
                          placeholder="Departure - Return"
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div className="flex-1 relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-white" />
                        <Input
                          placeholder="Travelers"
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <Search className="h-4 w-4 mr-2" /> Search
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="hotels" className="space-y-4">
                    {/* Similar structure for hotels tab */}
                    <div className="flex flex-col md:flex-row gap-2">
                      <div className="flex-1 relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                        <Input
                          placeholder="Destination"
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div className="flex-1 relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-white" />
                        <Input
                          placeholder="Check-in - Check-out"
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div className="flex-1 relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-white" />
                        <Input
                          placeholder="Guests & Rooms"
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <Search className="h-4 w-4 mr-2" /> Search
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="packages" className="space-y-4">
                    {/* Packages tab content */}
                    <div className="flex flex-col md:flex-row gap-2">
                      <div className="flex-1 relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                        <Input
                          placeholder="Destination"
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div className="flex-1 relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-white" />
                        <Input
                          placeholder="Travel dates"
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div className="flex-1 relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-white" />
                        <Input
                          placeholder="Travelers"
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <Search className="h-4 w-4 mr-2" /> Search
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="activities" className="space-y-4">
                    {/* Activities tab content */}
                    <div className="flex flex-col md:flex-row gap-2">
                      <div className="flex-1 relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                        <Input
                          placeholder="Location"
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div className="flex-1 relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-white" />
                        <Input
                          placeholder="Date"
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <div className="flex-1 relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-white" />
                        <Input
                          placeholder="Number of people"
                          className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        />
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <Search className="h-4 w-4 mr-2" /> Search
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Quick Access Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
                <Link href="/cost-estimator">
                  <Button variant="outline" className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30">
                    <CreditCard className="h-4 w-4 mr-2" /> Cost Estimator
                  </Button>
                </Link>
                <Link href="/weather">
                  <Button variant="outline" className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30">
                    <Sun className="h-4 w-4 mr-2" /> Weather Updates
                  </Button>
                </Link>
                <Link href="/safety">
                  <Button variant="outline" className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30">
                    <Shield className="h-4 w-4 mr-2" /> Safety Info
                  </Button>
                </Link>
                <Link href="/currency">
                  <Button variant="outline" className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30">
                    <DollarSign className="h-4 w-4 mr-2" /> Currency
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Features Section - with background for better visibility */}
          <section className="py-12 bg-black/50 backdrop-blur-sm rounded-lg my-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">Our Features</h2>
              <p className="text-white/80 text-lg">Everything you need for a seamless travel experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Plane className="h-10 w-10" />,
                  title: "Flight Bookings",
                  description: "Search and book flights to destinations worldwide with our easy-to-use platform.",
                  link: "/flights",
                },
                {
                  icon: <Hotel className="h-10 w-10" />,
                  title: "Hotel Reservations",
                  description: "Find the perfect accommodation for your stay, from luxury hotels to cozy homestays.",
                  link: "/hotels",
                },
                {
                  icon: <CreditCard className="h-10 w-10" />,
                  title: "Cost Estimation",
                  description: "Get accurate cost estimates for your trips to help you budget effectively.",
                  link: "/cost-estimator",
                },
                {
                  icon: <Sun className="h-10 w-10" />,
                  title: "Weather Updates",
                  description: "Real-time weather forecasts to help you plan your activities accordingly.",
                  link: "/weather",
                },
                {
                  icon: <Wind className="h-10 w-10" />,
                  title: "Traffic Conditions",
                  description: "Stay informed about traffic conditions to avoid delays during your journey.",
                  link: "/traffic",
                },
                {
                  icon: <BarChart2 className="h-10 w-10" />,
                  title: "Travel Analytics",
                  description: "Detailed reports and analytics to track your travel patterns and expenses.",
                  link: "/analytics",
                },
                {
                  icon: <BookOpen className="h-10 w-10" />,
                  title: "Travel Blog",
                  description: "Explore our blog for travel tips, destination guides, and inspiring stories.",
                  link: "/blog",
                },
                {
                  icon: <Briefcase className="h-10 w-10" />,
                  title: "Packing Assistant",
                  description: "Get customized packing lists based on your destination and trip duration.",
                  link: "/packing",
                },
                {
                  icon: <Calendar className="h-10 w-10" />,
                  title: "Calendar Syncing",
                  description: "Sync your travel plans with your personal calendar for better organization.",
                  link: "/calendar",
                },
                {
                  icon: <Map className="h-10 w-10" />,
                  title: "Local Experiences",
                  description: "Discover authentic local experiences recommended by locals and fellow travelers.",
                  link: "/experiences",
                },
                {
                  icon: <Shield className="h-10 w-10" />,
                  title: "Emergency Assistance",
                  description: "24/7 support and safety information for your peace of mind while traveling.",
                  link: "/emergency",
                },
                {
                  icon: <DollarSign className="h-10 w-10" />,
                  title: "Multi-Currency Support",
                  description: "Support for multiple currencies with real-time exchange rates for your convenience.",
                  link: "/currency",
                },
              ].map((feature, index) => (
                <Link href={feature.link} key={index}>
                  <Card className="bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 transition-colors h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="text-purple-300 mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white text-base">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Featured Destinations - with background for better visibility */}
          <section className="py-12 bg-black/50 backdrop-blur-sm rounded-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">Featured Destinations</h2>
              <p className="text-white/80">Explore our handpicked destinations for your next adventure</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
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
              ].map((destination) => (
                <Card
                  key={destination.id}
                  className="bg-white/20 backdrop-blur-md border-white/30 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 mr-1" fill="currentColor" />
                      <span className="text-xs font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                      <div className="text-lg font-bold text-purple-300">{destination.price}</div>
                    </div>
                    <div className="flex items-center text-white mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{destination.name.split(",")[1]?.trim() || "Destination"}</span>
                    </div>
                    <p className="text-white mb-4 line-clamp-2">{destination.description}</p>
                    <div className="flex items-center justify-between text-white mb-4">
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
              <Link href="/destinations">
                <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  View All Destinations
                </Button>
              </Link>
            </div>
          </section>

          {/* User Account Section */}
          <section className="py-12 bg-black/50 backdrop-blur-sm rounded-lg mt-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Join Our Cosmic Travel Community</h2>
              <p className="text-white/80">
                Create an account to unlock all features and personalize your travel experience
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Card className="w-full md:w-96 bg-white/20 backdrop-blur-md border-white/30">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <UserPlus className="h-12 w-12 text-purple-300 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Sign Up</h3>
                    <p className="text-white mb-4">
                      Create your account to save trips, get personalized recommendations, and more.
                    </p>
                    <Link href="/register">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Register Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full md:w-96 bg-white/20 backdrop-blur-md border-white/30">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <LogIn className="h-12 w-12 text-purple-300 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Sign In</h3>
                    <p className="text-white mb-4">
                      Already have an account? Sign in to access your saved trips and preferences.
                    </p>
                    <Link href="/signin">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Login</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Blog Section Preview */}
          <section className="py-12 bg-black/50 backdrop-blur-sm rounded-lg mt-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Travel Insights & Stories</h2>
              <p className="text-white/80">Get inspired with our latest travel blogs and guides</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="bg-white/20 backdrop-blur-md border-white/30 overflow-hidden">
                  <div className="h-48 bg-purple-900/50">
                    <img
                      src={`/placeholder.svg?height=200&width=400&text=Blog+Image+${item}`}
                      alt={`Blog post ${item}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item === 1
                        ? "10 Hidden Gems in Southeast Asia"
                        : item === 2
                          ? "Budget Travel: Europe on ₹4,000/day"
                          : "Ultimate Packing Guide for Any Trip"}
                    </h3>
                    <p className="text-white mb-4 line-clamp-2">
                      {item === 1
                        ? "Discover lesser-known destinations that offer authentic experiences away from tourist crowds."
                        : item === 2
                          ? "Learn how to explore Europe's most beautiful cities without breaking the bank."
                          : "Expert tips on how to pack efficiently for any type of trip, from weekend getaways to month-long adventures."}
                    </p>
                    <Button variant="link" className="text-purple-300 p-0 h-auto">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/blog">
                <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                  View All Blog Posts
                </Button>
              </Link>
            </div>
          </section>

          {/* Additional Features Section */}
          <section className="py-12 bg-black/50 backdrop-blur-sm rounded-lg mt-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">Travel Smarter With Our Tools</h2>
              <p className="text-white/80">Everything you need for a seamless travel experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Briefcase className="h-8 w-8" />,
                  title: "Packing Assistant",
                  desc: "Get customized packing lists based on your destination and trip duration",
                  link: "/packing",
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Calendar Syncing",
                  desc: "Sync your travel plans with your personal calendar",
                  link: "/calendar",
                },
                {
                  icon: <Map className="h-8 w-8" />,
                  title: "Local Experiences",
                  desc: "Discover authentic local experiences recommended by locals",
                  link: "/experiences",
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Emergency Assistance",
                  desc: "24/7 support and safety information for your destination",
                  link: "/emergency",
                },
                {
                  icon: <BarChart2 className="h-8 w-8" />,
                  title: "Travel Analytics",
                  desc: "Track your travel patterns and spending with detailed reports",
                  link: "/analytics",
                },
                {
                  icon: <Wind className="h-8 w-8" />,
                  title: "Real-time Updates",
                  desc: "Get alerts about weather changes and traffic conditions",
                  link: "/weather",
                },
                {
                  icon: <CreditCard className="h-8 w-8" />,
                  title: "Secure Payments",
                  desc: "Multiple payment options with advanced security",
                  link: "/payments",
                },
                {
                  icon: <DollarSign className="h-8 w-8" />,
                  title: "Multi-Currency",
                  desc: "Support for 50+ currencies with real-time exchange rates",
                  link: "/currency",
                },
              ].map((feature, index) => (
                <Link href={feature.link} key={index}>
                  <Card className="bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 transition-colors h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="text-purple-300 mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

