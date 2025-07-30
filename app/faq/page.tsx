"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  CreditCard,
  Users,
  Settings,
  BarChart3,
  Phone,
} from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    { name: "General", icon: HelpCircle, count: 8 },
    { name: "Pricing", icon: CreditCard, count: 6 },
    { name: "Features", icon: Settings, count: 10 },
    { name: "Integration", icon: Users, count: 5 },
    { name: "Analytics", icon: BarChart3, count: 4 },
    { name: "Security", icon: Shield, count: 3 },
  ]

  const faqs = [
    {
      category: "General",
      question: "What is Abbasjumaclearing Solutions and how does it work?",
      answer:
        "Abbasjumaclearing Solutions is an AI-powered B2B lead generation platform that helps companies identify, target, and engage with high-quality prospects. Our platform uses advanced algorithms to analyze over 200 data points, ensuring you connect with prospects most likely to convert. We combine intelligent targeting with multi-channel outreach (email, phone, social media) to maximize your lead generation ROI.",
    },
    {
      category: "General",
      question: "How quickly can I expect to see results?",
      answer:
        "Most clients see initial results within 2-3 weeks of campaign launch. Significant improvements in lead quality and quantity typically occur within 30 days. However, results can vary based on your industry, target market, and campaign complexity. Our team works closely with you to optimize performance and accelerate results.",
    },
    {
      category: "General",
      question: "What industries do you work with?",
      answer:
        "We work with B2B companies across all industries, with particular expertise in SaaS, technology, professional services, manufacturing, healthcare, and financial services. Our AI algorithms adapt to different industry dynamics and buyer behaviors to ensure optimal targeting and messaging.",
    },
    {
      category: "Pricing",
      question: "What's included in the free trial?",
      answer:
        "Our 14-day free trial includes full platform access with up to 500 leads, email outreach capabilities, basic CRM integration, lead scoring, and dedicated onboarding support. No credit card is required to start, and you can cancel anytime during the trial period.",
    },
    {
      category: "Pricing",
      question: "Can I change my plan anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated. If you upgrade mid-cycle, you'll only pay the difference for the remaining period. Downgrades will be reflected in your next billing cycle.",
    },
    {
      category: "Pricing",
      question: "Do you offer custom pricing for enterprise clients?",
      answer:
        "Yes, we offer custom enterprise pricing for companies with specific requirements, high volume needs, or complex integration requirements. Our enterprise plans include dedicated account management, custom integrations, white-label options, and priority support. Contact our sales team for a personalized quote.",
    },
    {
      category: "Features",
      question: "How accurate is your lead data?",
      answer:
        "Our lead database maintains a 95% accuracy rate through real-time verification and continuous data cleansing. We use multiple data sources and AI-powered validation to ensure contact information is current and accurate. All leads are verified before delivery, and we provide a data accuracy guarantee.",
    },
    {
      category: "Features",
      question: "Can I customize my outreach campaigns?",
      answer:
        "Our platform offers extensive customization options including personalized email templates, custom messaging sequences, A/B testing capabilities, and dynamic content insertion. You can create different campaigns for various buyer personas and industries, with full control over timing, frequency, and messaging.",
    },
    {
      category: "Features",
      question: "What is AI-powered lead scoring and how does it work?",
      answer:
        "Our AI lead scoring system analyzes over 200 data points including behavioral signals, company information, engagement history, and intent data to rank prospects by conversion probability. The system continuously learns from your feedback and conversion data to improve accuracy over time, helping you prioritize the most promising leads.",
    },
    {
      category: "Integration",
      question: "Which CRM systems do you integrate with?",
      answer:
        "We integrate with 50+ CRM and marketing automation platforms including Salesforce, HubSpot, Pipedrive, Marketo, Pardot, Mailchimp, and many others. Our integrations are bi-directional, allowing seamless data sync and workflow automation. We also offer custom API integrations for enterprise clients.",
    },
    {
      category: "Integration",
      question: "How long does setup and integration take?",
      answer:
        "Basic setup typically takes 15-30 minutes, including CRM integration and initial campaign configuration. Our onboarding team provides guided setup assistance, and most clients are running their first campaigns within 24 hours. Complex enterprise integrations may take 1-2 weeks depending on requirements.",
    },
    {
      category: "Analytics",
      question: "What kind of reporting and analytics do you provide?",
      answer:
        "Our platform provides comprehensive analytics including campaign performance metrics, lead quality scores, conversion tracking, ROI analysis, and custom reporting. You can track email open rates, response rates, meeting bookings, and revenue attribution. All reports can be customized and scheduled for automatic delivery.",
    },
    {
      category: "Analytics",
      question: "Can I track ROI and attribution?",
      answer:
        "Yes, our platform includes advanced ROI tracking and multi-touch attribution modeling. You can track leads from initial contact through closed deals, measure campaign effectiveness, and calculate precise ROI metrics. Integration with your CRM enables full funnel visibility and revenue attribution.",
    },
    {
      category: "Security",
      question: "How do you ensure data security and privacy?",
      answer:
        "We maintain enterprise-grade security with SOC 2 Type II certification, 256-bit SSL encryption, and GDPR compliance. All data is stored in secure, redundant data centers with regular security audits. We follow strict data handling protocols and provide detailed privacy controls for all users.",
    },
    {
      category: "Security",
      question: "Are you GDPR compliant?",
      answer:
        "Yes, we are fully GDPR compliant and provide tools to help you maintain compliance in your lead generation activities. This includes consent management, data subject rights handling, privacy controls, and audit trails. We also provide guidance on best practices for GDPR-compliant outreach.",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-primary-100 text-primary-700 mb-4">Help Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              Frequently Asked
              <span className="gradient-text block">Questions</span>
            </h1>
            <p className="text-xl text-charcoal-600 mb-8">
              Find answers to common questions about our B2B lead generation platform, features, pricing, and more.
              Can't find what you're looking for? Contact our support team.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-400 w-5 h-5" />
              <Input
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {faqCategories.map((category, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-primary-50 transition-colors text-left"
                      >
                        <div className="flex items-center">
                          <category.icon className="w-4 h-4 text-primary-500 mr-3" />
                          <span className="text-charcoal-700">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white">
                    <h4 className="font-semibold mb-2">Still Need Help?</h4>
                    <p className="text-sm mb-3 opacity-90">Our support team is here to help you succeed.</p>
                    <Link
                      href="https://salescentri.com/contact/support-request/submit-ticket?utm_source=abbasjumaclearing.com&utm_medium=faq_sidebar&utm_campaign=partner_network"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="bg-white text-primary-600 hover:bg-gray-100 w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>

              {/* FAQ Items */}
              <div className="lg:col-span-3">
                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <Card key={index} className="overflow-hidden">
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <Badge variant="secondary" className="text-xs mr-3">
                                {faq.category}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-semibold text-charcoal-900 pr-4">{faq.question}</h3>
                          </div>
                          {openItems.includes(index) ? (
                            <ChevronUp className="w-5 h-5 text-charcoal-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-charcoal-400 flex-shrink-0" />
                          )}
                        </div>
                      </button>

                      {openItems.includes(index) && (
                        <div className="px-6 pb-6">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-charcoal-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>

                {filteredFaqs.length === 0 && (
                  <Card className="p-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal-900 mb-2">No results found</h3>
                    <p className="text-charcoal-600 mb-6">
                      We couldn't find any FAQs matching your search. Try different keywords or contact our support
                      team.
                    </p>
                    <Button variant="outline">Contact Support</Button>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-20 bg-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">Quick Help Resources</h2>
            <p className="text-xl text-charcoal-600">Get started quickly with these helpful resources</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-3">Getting Started Guide</h3>
              <p className="text-charcoal-600 mb-4">
                Step-by-step guide to set up your first lead generation campaign in under 30 minutes.
              </p>
              <Link
                href="https://salescentri.com/resources/tutorials-webinars?utm_source=abbasjumaclearing.com&utm_medium=faq_resources&utm_campaign=partner_network"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full bg-transparent">
                  View Guide
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-3">Video Tutorials</h3>
              <p className="text-charcoal-600 mb-4">
                Watch our comprehensive video library covering all platform features and best practices.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Watch Videos
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-3">Best Practices</h3>
              <p className="text-charcoal-600 mb-4">
                Learn proven strategies and tactics from our most successful clients and campaigns.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our expert support team is here to help you succeed with lead generation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://salescentri.com/contact/support-request/submit-ticket?utm_source=abbasjumaclearing.com&utm_medium=faq_bottom&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                <Phone className="mr-2 w-5 h-5" />
                Call Support: (912) 555-0123
              </Button>
            </Link>
            <Link
              href="https://salescentri.com/get-started/contact?utm_source=abbasjumaclearing.com&utm_medium=faq_bottom&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600 bg-transparent"
              >
                Start Live Chat
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <p className="text-sm mt-4 opacity-75">Available 24/7 • Average response time: 2 minutes</p>
        </div>
      </section>
    </div>
  )
}
