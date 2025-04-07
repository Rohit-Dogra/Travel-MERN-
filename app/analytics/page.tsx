"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  BarChart2,
  PieChart,
  LineChart,
  Calendar,
  DollarSign,
  MapPin,
  Plane,
  Hotel,
  CreditCard,
} from "lucide-react"
import AnalyticsBackground from "@/components/analytics-background"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Analytics Background */}
      <AnalyticsBackground />

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Travel Analytics</h1>
            <p className="text-xl text-white mb-8 max-w-2xl">
              Track your travel patterns and expenses with detailed reports and insights
            </p>

            {/* Period Selector */}
            <div className="w-full max-w-md">
              <Tabs defaultValue="month" className="w-full" onValueChange={setSelectedPeriod}>
                <TabsList className="grid grid-cols-3 mb-6 bg-white/20">
                  <TabsTrigger value="week" className="text-white data-[state=active]:bg-purple-600">
                    Week
                  </TabsTrigger>
                  <TabsTrigger value="month" className="text-white data-[state=active]:bg-purple-600">
                    Month
                  </TabsTrigger>
                  <TabsTrigger value="year" className="text-white data-[state=active]:bg-purple-600">
                    Year
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </section>

          {/* Summary Cards */}
          <section className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-white/20 backdrop-blur-md border-white/30">
                <CardContent className="p-6 flex items-center">
                  <div className="bg-purple-600/30 p-3 rounded-full mr-4">
                    <Plane className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Total Trips</p>
                    <p className="text-white text-2xl font-bold">12</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/20 backdrop-blur-md border-white/30">
                <CardContent className="p-6 flex items-center">
                  <div className="bg-purple-600/30 p-3 rounded-full mr-4">
                    <DollarSign className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Total Spent</p>
                    <p className="text-white text-2xl font-bold">₹2,45,800</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/20 backdrop-blur-md border-white/30">
                <CardContent className="p-6 flex items-center">
                  <div className="bg-purple-600/30 p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Travel Days</p>
                    <p className="text-white text-2xl font-bold">42</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/20 backdrop-blur-md border-white/30">
                <CardContent className="p-6 flex items-center">
                  <div className="bg-purple-600/30 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Destinations</p>
                    <p className="text-white text-2xl font-bold">8</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Expense Breakdown */}
          <section className="py-8">
            <h2 className="text-2xl font-bold text-white mb-6">Expense Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/20 backdrop-blur-md border-white/30">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">By Category</h3>
                    <PieChart className="h-5 w-5 text-purple-300" />
                  </div>

                  <div className="space-y-4">
                    {[
                      { category: "Flights", amount: "₹98,500", percentage: 40, color: "bg-purple-500" },
                      { category: "Accommodations", amount: "₹73,740", percentage: 30, color: "bg-blue-500" },
                      { category: "Food & Dining", amount: "₹36,870", percentage: 15, color: "bg-green-500" },
                      { category: "Activities", amount: "₹24,580", percentage: 10, color: "bg-yellow-500" },
                      { category: "Transportation", amount: "₹12,290", percentage: 5, color: "bg-red-500" },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white">{item.category}</span>
                          <span className="text-white">{item.amount}</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div
                            className={`${item.color} h-2 rounded-full`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/20 backdrop-blur-md border-white/30">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">By Destination</h3>
                    <BarChart2 className="h-5 w-5 text-purple-300" />
                  </div>

                  <div className="space-y-4">
                    {[
                      { destination: "Bali, Indonesia", amount: "₹85,000", percentage: 35, color: "bg-purple-500" },
                      { destination: "Goa, India", amount: "₹45,000", percentage: 18, color: "bg-blue-500" },
                      { destination: "Bangkok, Thailand", amount: "₹38,000", percentage: 15, color: "bg-green-500" },
                      { destination: "Jaipur, India", amount: "₹32,000", percentage: 13, color: "bg-yellow-500" },
                      { destination: "Mumbai, India", amount: "₹28,000", percentage: 11, color: "bg-red-500" },
                      { destination: "Others", amount: "₹17,800", percentage: 8, color: "bg-gray-500" },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white">{item.destination}</span>
                          <span className="text-white">{item.amount}</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div
                            className={`${item.color} h-2 rounded-full`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Monthly Spending Trend */}
          <section className="py-8">
            <h2 className="text-2xl font-bold text-white mb-6">Monthly Spending Trend</h2>
            <Card className="bg-white/20 backdrop-blur-md border-white/30">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">Spending Over Time</h3>
                  <LineChart className="h-5 w-5 text-purple-300" />
                </div>

                <div className="h-64 flex items-end justify-between space-x-2">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                    (month, index) => {
                      // Generate random heights for the chart bars
                      const heights = [70, 45, 60, 30, 80, 50, 65, 90, 55, 40, 75, 60]
                      return (
                        <div key={index} className="flex flex-col items-center flex-1">
                          <div
                            className="w-full bg-purple-600 hover:bg-purple-500 transition-colors rounded-t-sm"
                            style={{ height: `${heights[index]}%` }}
                          ></div>
                          <span className="text-white text-xs mt-2">{month}</span>
                        </div>
                      )
                    },
                  )}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Top Expenses */}
          <section className="py-8">
            <h2 className="text-2xl font-bold text-white mb-6">Top Expenses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Flight to Bali",
                  date: "15 Jun 2025",
                  amount: "₹45,000",
                  icon: <Plane className="h-6 w-6 text-purple-300" />,
                  category: "Flights",
                },
                {
                  title: "Grand Hyatt Bali",
                  date: "16-23 Jun 2025",
                  amount: "₹38,000",
                  icon: <Hotel className="h-6 w-6 text-purple-300" />,
                  category: "Accommodations",
                },
                {
                  title: "Bali Adventure Package",
                  date: "18 Jun 2025",
                  amount: "₹15,000",
                  icon: <CreditCard className="h-6 w-6 text-purple-300" />,
                  category: "Activities",
                },
              ].map((expense, index) => (
                <Card key={index} className="bg-white/20 backdrop-blur-md border-white/30">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-purple-600/30 p-3 rounded-full mr-4">{expense.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{expense.title}</h3>
                        <p className="text-white/80 text-sm">{expense.date}</p>
                        <p className="text-white/80 text-sm">{expense.category}</p>
                        <p className="text-white text-xl font-bold mt-2">{expense.amount}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Travel Insights */}
          <section className="py-8 bg-black/30 backdrop-blur-sm rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Travel Insights</h2>
              <p className="text-white/80">Personalized recommendations based on your travel patterns</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/20 backdrop-blur-md border-white/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Budget Optimization</h3>
                  <ul className="text-white space-y-3">
                    <li className="flex items-start">
                      <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                        1
                      </span>
                      <span>Book flights 2-3 months in advance to save up to 20%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                        2
                      </span>
                      <span>Consider alternative accommodations to save ₹15,000 on your next trip</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                        3
                      </span>
                      <span>Travel during shoulder season to reduce costs by up to 30%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/20 backdrop-blur-md border-white/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Recommended Destinations</h3>
                  <p className="text-white mb-4">Based on your travel history, you might enjoy:</p>
                  <ul className="text-white space-y-3">
                    <li className="flex items-start">
                      <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                        1
                      </span>
                      <span>Phuket, Thailand - Similar to your Bali trip but with 15% lower costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                        2
                      </span>
                      <span>Udaipur, India - Based on your interest in Jaipur</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                        3
                      </span>
                      <span>Vietnam - Offers similar experiences to Thailand at better value</span>
                    </li>
                  </ul>
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

