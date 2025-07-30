"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    subject: "general",
  })

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our sales team",
      contact: "+1 (912) 555-0123",
      availability: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      contact: "hello@abbasjumaclearing.com",
      availability: "Response within 2 hours",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available on website",
      availability: "24/7 Support",
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized demo",
      contact: "calendly.com/abbasjuma",
      availability: "Available slots daily",
    },
  ]

  const offices = [
    {
      city: "Savannah (HQ)",
      address: "123 Bull Street, Savannah, GA 31401",
      phone: "+1 (912) 555-0123",
      email: "savannah@abbasjumaclearing.com",
    },
    {
      city: "Atlanta",
      address: "456 Peachtree St, Atlanta, GA 30309",
      phone: "+1 (404) 555-0123",
      email: "atlanta@abbasjumaclearing.com",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-primary-100 text-primary-700 mb-4">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              Ready to Transform Your
              <span className="gradient-text block">Lead Generation?</span>
            </h1>
            <p className="text-xl text-charcoal-600 mb-8">
              Let's discuss how our AI-powered platform can help you generate more qualified leads and accelerate your
              sales growth. Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal-900 mb-2">{method.title}</h3>
                <p className="text-charcoal-600 text-sm mb-3">{method.description}</p>
                <div className="text-primary-600 font-medium mb-1">{method.contact}</div>
                <div className="text-xs text-charcoal-500">{method.availability}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Company Name</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="demo">Request Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your lead generation challenges and goals..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-charcoal-900 mb-4">Why Choose Abbasjumaclearing?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-1" />
                    <div>
                      <div className="font-medium text-charcoal-900">Proven Results</div>
                      <div className="text-sm text-charcoal-600">Average 300% increase in qualified leads</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-1" />
                    <div>
                      <div className="font-medium text-charcoal-900">Expert Team</div>
                      <div className="text-sm text-charcoal-600">15+ years of B2B sales experience</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-1" />
                    <div>
                      <div className="font-medium text-charcoal-900">AI-Powered Technology</div>
                      <div className="text-sm text-charcoal-600">Advanced algorithms for precise targeting</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-1" />
                    <div>
                      <div className="font-medium text-charcoal-900">24/7 Support</div>
                      <div className="text-sm text-charcoal-600">Dedicated account management</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-charcoal-900 mb-4">Office Locations</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-medium text-charcoal-900 mb-2">{office.city}</h4>
                      <div className="space-y-2 text-sm text-charcoal-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                          {office.address}
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-primary-500" />
                          {office.phone}
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-primary-500" />
                          {office.email}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
                <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                <p className="mb-4 opacity-90">Schedule a free consultation to discuss your lead generation goals.</p>
                <Link
                  href="https://salescentri.com/get-started/calendly?utm_source=abbasjumaclearing.com&utm_medium=contact_sidebar&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 w-full">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book Free Consultation
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-charcoal-600">Quick answers to common questions about our services</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3">How quickly can we see results?</h3>
              <p className="text-charcoal-600">
                Most clients see initial results within 2-3 weeks, with significant improvements in lead quality and
                quantity within 30 days.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3">Do you work with specific industries?</h3>
              <p className="text-charcoal-600">
                We work with B2B companies across all industries, with particular expertise in SaaS, technology, and
                professional services.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3">What's included in the free trial?</h3>
              <p className="text-charcoal-600">
                Our 14-day free trial includes full platform access, up to 100 leads, and dedicated onboarding support.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3">Can you integrate with our CRM?</h3>
              <p className="text-charcoal-600">
                Yes, we integrate with 50+ CRM and marketing automation platforms, including Salesforce, HubSpot, and
                Pipedrive.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Start Growing Your Business Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 1000+ companies already generating more qualified leads with our platform
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://salescentri.com/get-started/free-trial?utm_source=abbasjumaclearing.com&utm_medium=contact_bottom&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
            </Link>
            <Link
              href="https://salescentri.com/get-started/contact?utm_source=abbasjumaclearing.com&utm_medium=contact_bottom&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600 bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: (912) 555-0123
              </Button>
            </Link>
          </div>

          <p className="text-sm mt-4 opacity-75">No credit card required • Setup in under 5 minutes</p>
        </div>
      </section>
    </div>
  )
}
