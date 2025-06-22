import { Search, Users, Calendar, Star, MapPin, CheckCircle, Smartphone, MessageCircle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TutorLinkLanding() {
  const features = [
    {
      icon: Search,
      title: "Smart Tutor Discovery",
      description: "Filter by subject, location, rate, and teaching method to find your perfect match",
    },
    {
      icon: Users,
      title: "AI-Powered Matching",
      description: "Our algorithm recommends the best tutors based on your needs and preferences",
    },
    {
      icon: Calendar,
      title: "Instant Booking",
      description: "See real-time availability and book sessions instantly with verified tutors",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Booking",
      description: "Book tutors easily through our WhatsApp bot - perfect for parents",
    },
    {
      icon: Shield,
      title: "Verified Tutors",
      description: "All tutors are verified with BVN, certificates, and background checks",
    },
    {
      icon: Smartphone,
      title: "Voice Search",
      description: "Simply say 'Find Physics tutor in Lagos for ₦3000/hour' and we'll find them",
    },
  ]

  const tutors = [
    {
      name: "Adebayo Ogundimu",
      subject: "Mathematics & Physics",
      rating: 4.9,
      reviews: 127,
      rate: 4500,
      location: "Lagos, VI",
      image: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    {
      name: "Fatima Abdullahi",
      subject: "English & Literature",
      rating: 4.8,
      reviews: 89,
      rate: 3500,
      location: "Abuja, Wuse",
      image: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    {
      name: "Chinedu Okoro",
      subject: "Chemistry & Biology",
      rating: 4.9,
      reviews: 156,
      rate: 4000,
      location: "Lagos, Ikeja",
      image: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
  ]

  const steps = [
    {
      step: "1",
      title: "Search & Filter",
      description: "Find tutors by subject, location, and budget",
    },
    {
      step: "2",
      title: "View Profiles",
      description: "Check ratings, reviews, and teaching methods",
    },
    {
      step: "3",
      title: "Book Instantly",
      description: "Select time slot and confirm your session",
    },
    {
      step: "4",
      title: "Learn & Grow",
      description: "Attend your session and track progress",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TL</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TutorLink</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-orange-500">
              Features
            </a>
            <a href="#tutors" className="text-gray-600 hover:text-orange-500">
              Find Tutors
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-orange-500">
              How it Works
            </a>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              Become a Tutor
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find a Tutor.
            <br />
            <span className="text-orange-500">Anytime. Anywhere.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with verified academic tutors for personalized learning—online or in-person. Nigeria's leading
            on-demand tutor marketplace.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input placeholder="What subject do you need help with?" className="h-12 text-lg" />
              </div>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lagos">Lagos</SelectItem>
                  <SelectItem value="abuja">Abuja</SelectItem>
                  <SelectItem value="ibadan">Ibadan</SelectItem>
                  <SelectItem value="kano">Kano</SelectItem>
                </SelectContent>
              </Select>
              <Button className="h-12 bg-orange-500 hover:bg-orange-600 text-lg">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8">
              Find a Tutor Now
            </Button>
            <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 text-lg px-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Verified Tutors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">10,000+</div>
              <div className="text-gray-600">Sessions Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">3</div>
              <div className="text-gray-600">Cities & Growing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose TutorLink?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make finding and booking quality tutors simple, safe, and affordable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section id="tutors" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Top Tutors</h2>
            <p className="text-xl text-gray-600">Verified professionals ready to help you succeed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tutors.map((tutor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative">
                      <img
                        src={tutor.image || "/placeholder.svg"}
                        alt={tutor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      {tutor.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{tutor.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{tutor.subject}</p>
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 font-medium">{tutor.rating}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{tutor.reviews} reviews</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {tutor.location}
                    </div>
                    <div className="text-lg font-bold text-orange-500">₦{tutor.rate.toLocaleString()}/hr</div>
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Book Session</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              View All Tutors
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How TutorLink Works</h2>
            <p className="text-xl text-gray-600">Get started in just 4 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students already improving their grades with TutorLink
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 text-lg px-8">
              Find Your Tutor
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 text-lg px-8"
            >
              Become a Tutor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TL</span>
                </div>
                <span className="text-xl font-bold">TutorLink</span>
              </div>
              <p className="text-gray-400">
                Nigeria's leading on-demand tutor marketplace. Find a tutor. Anytime. Anywhere.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Students</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Find Tutors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Book Sessions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Track Progress
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    WhatsApp Booking
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Tutors</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Become a Tutor
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Tutor Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Earnings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TutorLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
