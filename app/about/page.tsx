"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Users,
  Target,
  Award,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  CheckCircle,
  Linkedin,
  Twitter,
  TrendingUp,
  MapPin,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in B2B sales and marketing. Former VP at Salesforce.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "AI/ML expert with background at Google and Microsoft. PhD in Computer Science.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Sales",
      bio: "B2B sales leader with proven track record of scaling revenue 10x.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Product strategist focused on user experience and growth optimization.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      twitter: "#",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure success by our clients' ROI and growth metrics, not vanity numbers.",
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Every decision we make starts with how it benefits our customers and their success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We continuously push the boundaries of what's possible in lead generation technology.",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We build lasting relationships through honest communication and reliable service.",
    },
  ]

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to revolutionize B2B lead generation",
    },
    {
      year: "2020",
      title: "First 100 Clients",
      description: "Reached our first major milestone with proven results",
    },
    {
      year: "2021",
      title: "AI Platform Launch",
      description: "Launched our proprietary AI-powered targeting system",
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $10M to accelerate product development and growth",
    },
    {
      year: "2023",
      title: "1000+ Clients",
      description: "Scaled to serve over 1000 companies worldwide",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Opened offices in Europe and Asia-Pacific regions",
    },
  ]

  const stats = [
    { number: "1000+", label: "Happy Clients" },
    { number: "50M+", label: "Leads Generated" },
    { number: "95%", label: "Client Retention" },
    { number: "300%", label: "Average ROI Increase" },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-primary-100 text-primary-700 mb-4">Our Story</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              Transforming B2B Sales Through
              <span className="gradient-text block">Intelligent Lead Generation</span>
            </h1>
            <p className="text-xl text-charcoal-600 mb-8">
              Founded in 2019, Abbasjumaclearing Solutions has helped over 1000 companies generate more qualified leads
              and accelerate their sales growth through AI-powered prospecting and multi-channel outreach.
            </p>
            <Link
              href="https://salescentri.com/get-started/free-trial?utm_source=abbasjumaclearing.com&utm_medium=about_hero&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600">
                Join Our Mission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-charcoal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">Our Mission</h2>
              <p className="text-lg text-charcoal-600 mb-6">
                To empower B2B companies with intelligent lead generation technology that transforms how they identify,
                engage, and convert prospects into customers.
              </p>
              <p className="text-lg text-charcoal-600 mb-8">
                We believe that every business deserves access to high-quality leads and the tools to scale their sales
                efforts efficiently. Our AI-powered platform democratizes advanced prospecting capabilities that were
                once only available to enterprise companies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary-500 mr-3" />
                  <span className="text-charcoal-700">Democratize advanced lead generation technology</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary-500 mr-3" />
                  <span className="text-charcoal-700">Deliver measurable ROI for our clients</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary-500 mr-3" />
                  <span className="text-charcoal-700">Build lasting partnerships based on success</span>
                </div>
              </div>
            </div>
            <div className="relative chrome-glass-effect rounded-2xl p-8 chrome-neon-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 chrome-dark-surface rounded-lg">
                    <Target className="w-8 h-8 text-primary" />
                    <div>
                      <div className="text-white font-semibold">Precision</div>
                      <div className="text-gray-300 text-sm">95% Accuracy</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 chrome-dark-surface rounded-lg">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <div>
                      <div className="text-white font-semibold">Growth</div>
                      <div className="text-gray-300 text-sm">300% ROI</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 chrome-dark-surface rounded-lg">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <div className="text-white font-semibold">Support</div>
                      <div className="text-gray-300 text-sm">24/7 Available</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 chrome-dark-surface rounded-lg">
                    <Shield className="w-8 h-8 text-primary" />
                    <div>
                      <div className="text-white font-semibold">Security</div>
                      <div className="text-gray-300 text-sm">Enterprise Grade</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-charcoal-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-3">{value.title}</h3>
                <p className="text-charcoal-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">Our Journey</h2>
            <p className="text-xl text-charcoal-600">Key milestones in our growth story</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <Card className="p-6">
                        <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-charcoal-900 mb-2">{milestone.title}</h3>
                        <p className="text-charcoal-600">{milestone.description}</p>
                      </Card>
                    </div>
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-charcoal-600">Experienced leaders driving innovation in B2B lead generation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-24 h-24 chrome-gradient-bg rounded-full mx-auto mb-4 flex items-center justify-center chrome-glow-effect">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-1">{member.name}</h3>
                <div className="text-primary font-medium mb-3">{member.role}</div>
                <p className="text-sm text-charcoal-600 mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-charcoal-400 hover:text-primary-500 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.twitter} className="text-charcoal-400 hover:text-primary-500 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
                Based in Savannah, Serving the World
              </h2>
              <p className="text-lg text-charcoal-600 mb-6">
                Our headquarters are located in the historic and vibrant city of Savannah, Georgia. From here, we serve
                clients across North America, Europe, and Asia-Pacific regions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-primary-500 mr-3" />
                  <span className="text-charcoal-700">Global client base across 50+ countries</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-primary-500 mr-3" />
                  <span className="text-charcoal-700">Remote-first team with diverse backgrounds</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-primary-500 mr-3" />
                  <span className="text-charcoal-700">Recognized as a top workplace in Georgia</span>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="https://salescentri.com/get-started/contact?utm_source=abbasjumaclearing.com&utm_medium=about_location&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    Visit Our Office
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative chrome-glass-effect rounded-2xl p-8 chrome-neon-border">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 chrome-gradient-bg rounded-full mx-auto flex items-center justify-center chrome-glow-effect">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-2">Savannah Headquarters</h3>
                  <p className="text-charcoal-600">Historic charm meets cutting-edge technology</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center justify-center space-x-3 p-4 chrome-dark-surface rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span className="text-white">Downtown Savannah, GA</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 p-4 chrome-dark-surface rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                    <span className="text-white">EST Business Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's work together to transform your lead generation and accelerate your growth
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://salescentri.com/get-started/free-trial?utm_source=abbasjumaclearing.com&utm_medium=about_bottom&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link
              href="https://salescentri.com/get-started/calendly?utm_source=abbasjumaclearing.com&utm_medium=about_bottom&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600 bg-transparent"
              >
                Schedule a Call
              </Button>
            </Link>
          </div>

          <p className="text-sm mt-4 opacity-75">Join 1000+ companies already growing with our platform</p>
        </div>
      </section>
    </div>
  )
}
