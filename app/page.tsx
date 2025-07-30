"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Target,
  Zap,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  Play,
  BarChart3,
  Shield,
  Clock,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [email, setEmail] = useState("")

  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-powered algorithms identify your ideal prospects with 95% accuracy",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate qualified leads 10x faster than traditional methods",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Average 300% increase in qualified leads within 30 days",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 dedicated account management and strategy optimization",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "VP of Sales",
      content:
        "Abbasjumaclearing transformed our lead generation. We saw a 400% increase in qualified leads within the first month.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      company: "Growth Dynamics",
      role: "CEO",
      content: "The ROI has been incredible. Their targeted approach helped us close $2M in new business this quarter.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Rodriguez",
      company: "Scale Ventures",
      role: "Head of Marketing",
      content: "Finally, a lead generation service that delivers quality over quantity. Game-changing results.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Leads Generated" },
    { number: "500+", label: "Happy Clients" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 chrome-gradient-bg opacity-5"></div>
        <div className="absolute inset-0 chrome-scan-line opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border border-primary/20 chrome-neon-border">
                  🚀 #1 Advanced Lead Generation Platform
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-charcoal-900 leading-tight">
                  Generate Premium
                  <span className="chrome-gradient-text block">B2B Leads</span>
                  That Convert
                </h1>
                <p className="text-xl text-charcoal-600 leading-relaxed">
                  Accelerate your sales pipeline with AI-powered lead generation. Get targeted prospects that are ready
                  to buy, not just browse. Experience the future of B2B prospecting.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://salescentri.com/get-started/free-trial?utm_source=abbasjumaclearing.com&utm_medium=hero_cta&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-charcoal-900 font-semibold text-lg px-8 py-6 chrome-hover-glow"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link
                  href="https://salescentri.com/get-started/book-demo?utm_source=abbasjumaclearing.com&utm_medium=hero_cta&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 border-2 border-primary/30 hover:bg-primary/5 bg-transparent chrome-glass-effect"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm text-charcoal-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 chrome-glass-effect rounded-2xl p-8 chrome-neon-border">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="h-4 bg-gradient-to-r from-primary to-accent rounded chrome-pulse"></div>
                  <div
                    className="h-4 bg-gradient-to-r from-accent to-primary rounded chrome-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="h-4 bg-gradient-to-r from-primary to-accent rounded chrome-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 chrome-dark-surface rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Target className="w-6 h-6 text-primary" />
                      <span className="text-white font-medium">AI Targeting Active</span>
                    </div>
                    <div className="text-primary font-bold">95%</div>
                  </div>
                  <div className="flex items-center justify-between p-4 chrome-dark-surface rounded-lg">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-6 h-6 text-primary" />
                      <span className="text-white font-medium">Lead Quality Score</span>
                    </div>
                    <div className="text-primary font-bold">A+</div>
                  </div>
                  <div className="flex items-center justify-between p-4 chrome-dark-surface rounded-lg">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-6 h-6 text-primary" />
                      <span className="text-white font-medium">Conversion Rate</span>
                    </div>
                    <div className="text-primary font-bold">300%</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent/20 rounded-2xl blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 chrome-dark-surface text-white relative overflow-hidden">
        <div className="absolute inset-0 chrome-scan-line opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold chrome-gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-primary-700 mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
              Advanced Lead Generation That Works
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with proven strategies to deliver the highest
              quality B2B leads in your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 chrome-glass-effect chrome-hover-glow"
              >
                <div className="w-16 h-16 chrome-gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4 chrome-glow-effect">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-2">{feature.title}</h3>
                <p className="text-charcoal-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/5 to-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">Calculate Your ROI</h2>
              <p className="text-xl text-charcoal-600">
                See how much revenue you could generate with our advanced lead generation technology
              </p>
            </div>

            <Card className="p-8 chrome-glass-effect chrome-neon-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Monthly Marketing Budget</label>
                    <Input placeholder="$5,000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Average Deal Size</label>
                    <Input placeholder="$10,000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Current Conversion Rate</label>
                    <Input placeholder="2%" />
                  </div>
                  <Link
                    href="https://salescentri.com/get-started/contact?utm_source=abbasjumaclearing.com&utm_medium=roi_calculator&utm_campaign=partner_network"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-charcoal-900 font-semibold chrome-hover-glow">
                      Calculate ROI
                    </Button>
                  </Link>
                </div>

                <div className="chrome-gradient-bg rounded-lg p-6 text-white relative overflow-hidden">
                  <div className="absolute inset-0 chrome-scan-line opacity-30"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4">Projected Results</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Monthly Leads:</span>
                        <span className="font-bold">150</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Qualified Leads:</span>
                        <span className="font-bold">45</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Expected Deals:</span>
                        <span className="font-bold">9</span>
                      </div>
                      <div className="border-t border-white/20 pt-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Monthly Revenue:</span>
                          <span>$90,000</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold">
                          <span>ROI:</span>
                          <span>1,800%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-primary-700 mb-4">Client Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-charcoal-600">See what our clients say about their lead generation success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 chrome-glass-effect">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 chrome-gradient-bg rounded-full mr-4 flex items-center justify-center chrome-glow-effect">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal-900">{testimonial.name}</div>
                    <div className="text-sm text-charcoal-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-charcoal-900 mb-4">Trusted & Certified</h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-primary-500" />
              <span className="font-semibold">SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-8 h-8 text-primary-500" />
              <span className="font-semibold">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-8 h-8 text-primary-500" />
              <span className="font-semibold">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-8 h-8 text-primary-500" />
              <span className="font-semibold">ISO 27001</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to 10x Your Lead Generation?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of companies already generating more qualified leads</p>

          <div className="max-w-md mx-auto flex gap-4">
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-charcoal-900"
            />
            <Link
              href="https://salescentri.com/get-started/free-trial?utm_source=abbasjumaclearing.com&utm_medium=bottom_cta&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-charcoal-900 hover:bg-charcoal-800 whitespace-nowrap">
                Get Started
              </Button>
            </Link>
          </div>

          <p className="text-sm mt-4 opacity-75">Start your 14-day free trial. No credit card required.</p>
        </div>
      </section>
    </div>
  )
}
