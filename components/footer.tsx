export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TravelEase</h3>
            <p className="text-gray-300 mb-4">
              Explore the universe of travel with our comprehensive platform designed to make your journeys seamless and
              memorable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-400">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-purple-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/destinations" className="text-gray-300 hover:text-purple-400">
                  Destinations
                </a>
              </li>
              <li>
                <a href="/flights" className="text-gray-300 hover:text-purple-400">
                  Flights
                </a>
              </li>
              <li>
                <a href="/hotels" className="text-gray-300 hover:text-purple-400">
                  Hotels
                </a>
              </li>
              <li>
                <a href="/activities" className="text-gray-300 hover:text-purple-400">
                  Activities
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-purple-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="text-gray-300 hover:text-purple-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/safety" className="text-gray-300 hover:text-purple-400">
                  Safety Information
                </a>
              </li>
              <li>
                <a href="/cancellation" className="text-gray-300 hover:text-purple-400">
                  Cancellation Options
                </a>
              </li>
              <li>
                <a href="/covid" className="text-gray-300 hover:text-purple-400">
                  COVID-19 Resources
                </a>
              </li>
              <li>
                <a href="/emergency" className="text-gray-300 hover:text-purple-400">
                  Emergency Assistance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for travel tips and exclusive offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">© 2025 TravelEase. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-300 hover:text-purple-400 text-sm">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-300 hover:text-purple-400 text-sm">
              Terms of Service
            </a>
            <a href="/cookies" className="text-gray-300 hover:text-purple-400 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

