"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, ArrowLeft, Sun, Cloud, CloudRain, Wind, Thermometer, Droplets, Clock } from "lucide-react"
import WeatherBackground from "@/components/weather-background"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const weatherData = [
  {
    city: "Mumbai",
    country: "India",
    current: {
      temp: 32,
      condition: "Sunny",
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      humidity: 65,
      wind: 12,
      feelsLike: 34,
      visibility: 10,
      pressure: 1012,
    },
    forecast: [
      { day: "Today", temp: 32, condition: "Sunny", icon: <Sun className="h-6 w-6 text-yellow-500" /> },
      { day: "Tomorrow", temp: 31, condition: "Partly Cloudy", icon: <Cloud className="h-6 w-6 text-gray-400" /> },
      { day: "Wed", temp: 30, condition: "Cloudy", icon: <Cloud className="h-6 w-6 text-gray-400" /> },
      { day: "Thu", temp: 29, condition: "Rain", icon: <CloudRain className="h-6 w-6 text-blue-400" /> },
      { day: "Fri", temp: 30, condition: "Partly Cloudy", icon: <Cloud className="h-6 w-6 text-gray-400" /> },
      { day: "Sat", temp: 31, condition: "Sunny", icon: <Sun className="h-6 w-6 text-yellow-500" /> },
      { day: "Sun", temp: 32, condition: "Sunny", icon: <Sun className="h-6 w-6 text-yellow-500" /> },
    ],
  },
  {
    city: "Delhi",
    country: "India",
    current: {
      temp: 35,
      condition: "Clear",
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      humidity: 45,
      wind: 8,
      feelsLike: 37,
      visibility: 8,
      pressure: 1010,
    },
    forecast: [
      { day: "Today", temp: 35, condition: "Clear", icon: <Sun className="h-6 w-6 text-yellow-500" /> },
      { day: "Tomorrow", temp: 36, condition: "Clear", icon: <Sun className="h-6 w-6 text-yellow-500" /> },
      { day: "Wed", temp: 37, condition: "Clear", icon: <Sun className="h-6 w-6 text-yellow-500" /> },
      { day: "Thu", temp: 36, condition: "Partly Cloudy", icon: <Cloud className="h-6 w-6 text-gray-400" /> },
      { day: "Fri", temp: 35, condition: "Partly Cloudy", icon: <Cloud className="h-6 w-6 text-gray-400" /> },
      { day: "Sat", temp: 34, condition: "Partly Cloudy", icon: <Cloud className="h-6 w-6 text-gray-400" /> },
      { day: "Sun", temp: 35, condition: "Clear", icon: <Sun className="h-6 w-6 text-yellow-500" /> },
    ],
  },
  {
    city: "Bangalore",
    country: "India",
    current: {
      temp: 27,
      condition: "Cloudy",
      icon: <Cloud className="h-8 w-8 text-gray-400" />,
      humidity: 70,
      wind: 10,
      feelsLike: 28,
      visibility: 9,
      pressure: 1014,
    },
    forecast: [
      { day: "Today", temp: 27, condition: "Cloudy", icon: <Cloud className="h-6 w-6 text-gray-400" /> },
      { day: "Tomorrow", temp: 26, condition: "Light Rain", icon: <CloudRain className="h-6 w-6 text-blue-400" /> },
      { day: "Wed", temp: 25, condition: "Rain", icon: <CloudRain className="h-6 w-6 text-blue-400" /> },
      { day: "Thu", temp: 26, condition: "Light Rain", icon: <CloudRain className="h-6 w-6 text-blue-400" /> },
      { day: "Fri", temp: 27, condition: "Cloudy", icon: <Cloud className="h-6 w-6 text-gray-400" /> },
      { day: "Sat", temp: 28, condition: "Partly Cloudy", icon: <Cloud className="h-6 w-6 text-gray-400" /> },
      { day: "Sun", temp: 28, condition: "Partly Cloudy", icon: <Cloud className="h-6 w-6 text-gray-400" /> },
    ],
  },
]

export default function WeatherPage() {
  const [selectedCity, setSelectedCity] = useState(weatherData[0])
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Weather Background */}
      <WeatherBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/">
              <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
              </Button>
            </Link>
          </div>

          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center text-center py-12 bg-black/30 backdrop-blur-sm rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Real-Time Weather Updates</h1>
            <p className="text-xl text-white mb-8 max-w-2xl">
              Get accurate weather forecasts for your travel destinations to plan your activities accordingly
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                  <Input
                    placeholder="Search for a city"
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Search className="h-4 w-4 mr-2" /> Search
                </Button>
              </div>
            </div>

            {/* City Tabs */}
            <div className="w-full max-w-4xl">
              <Tabs
                defaultValue={weatherData[0].city}
                className="w-full"
                onValueChange={(value) => {
                  const city = weatherData.find((c) => c.city === value)
                  if (city) setSelectedCity(city)
                }}
              >
                <TabsList className="grid grid-cols-3 mb-6 bg-white/20">
                  {weatherData.map((city) => (
                    <TabsTrigger
                      key={city.city}
                      value={city.city}
                      className="text-white data-[state=active]:bg-purple-600"
                    >
                      {city.city}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </section>

          {/* Current Weather */}
          <section className="py-8">
            <Card className="bg-white/20 backdrop-blur-md border-white/30 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedCity.city}, {selectedCity.country}
                    </h2>
                    <p className="text-white/80 flex items-center justify-center md:justify-start">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>
                        Updated: {new Date().toLocaleTimeString()} - {new Date().toLocaleDateString()}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div className="text-center mr-6">
                      {selectedCity.current.icon}
                      <p className="text-white mt-1">{selectedCity.current.condition}</p>
                    </div>
                    <div className="text-6xl font-bold text-white">{selectedCity.current.temp}°C</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center">
                    <Thermometer className="h-6 w-6 text-orange-400 mb-2" />
                    <p className="text-white/80 text-sm">Feels Like</p>
                    <p className="text-white font-bold">{selectedCity.current.feelsLike}°C</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center">
                    <Droplets className="h-6 w-6 text-blue-400 mb-2" />
                    <p className="text-white/80 text-sm">Humidity</p>
                    <p className="text-white font-bold">{selectedCity.current.humidity}%</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center">
                    <Wind className="h-6 w-6 text-gray-400 mb-2" />
                    <p className="text-white/80 text-sm">Wind Speed</p>
                    <p className="text-white font-bold">{selectedCity.current.wind} km/h</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center">
                    <MapPin className="h-6 w-6 text-purple-400 mb-2" />
                    <p className="text-white/80 text-sm">Visibility</p>
                    <p className="text-white font-bold">{selectedCity.current.visibility} km</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 7-Day Forecast */}
          <section className="py-8">
            <h2 className="text-2xl font-bold text-white mb-6">7-Day Forecast</h2>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
              {selectedCity.forecast.map((day, index) => (
                <Card key={index} className="bg-white/20 backdrop-blur-md border-white/30">
                  <CardContent className="p-4 flex flex-col items-center">
                    <p className="text-white font-medium mb-2">{day.day}</p>
                    {day.icon}
                    <p className="text-white mt-2">{day.condition}</p>
                    <p className="text-white font-bold mt-2">{day.temp}°C</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Travel Weather Tips */}
          <section className="py-8 bg-black/30 backdrop-blur-sm rounded-lg mt-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Weather Travel Tips</h2>
              <p className="text-white/80">Make the most of your trip with these weather-based recommendations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/20 backdrop-blur-md border-white/30">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Sun className="h-12 w-12 text-yellow-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Sunny Weather</h3>
                    <ul className="text-white space-y-2">
                      <li>• Don't forget sunscreen and sunglasses</li>
                      <li>• Stay hydrated throughout the day</li>
                      <li>• Plan outdoor activities in the morning or evening</li>
                      <li>• Wear light, breathable clothing</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/20 backdrop-blur-md border-white/30">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <CloudRain className="h-12 w-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Rainy Weather</h3>
                    <ul className="text-white space-y-2">
                      <li>• Pack a waterproof jacket or umbrella</li>
                      <li>• Have indoor backup plans ready</li>
                      <li>• Wear waterproof footwear</li>
                      <li>• Check for weather alerts before heading out</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/20 backdrop-blur-md border-white/30">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Wind className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Windy Weather</h3>
                    <ul className="text-white space-y-2">
                      <li>• Secure loose items when outdoors</li>
                      <li>• Wear layered clothing that won't catch wind</li>
                      <li>• Be cautious when driving in high winds</li>
                      <li>• Check for travel disruptions in advance</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

