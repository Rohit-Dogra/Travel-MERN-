import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Plane,
  Hotel,
  CreditCard,
  Sun,
  Wind,
  BarChart2,
  BookOpen,
  Briefcase,
  Calendar,
  Map,
  Shield,
  DollarSign,
} from "lucide-react"

const features = [
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
]

export default function TravelFeatures() {
  return (
    <section className="py-12 bg-gray-100 rounded-lg my-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-2">Our Features</h2>
        <p className="text-gray-800 text-lg">Everything you need for a seamless travel experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Link href={feature.link} key={index}>
            <Card className="bg-white shadow-md border-gray-200 hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-base">{feature.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

