"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Target,
  BarChart3,
  Mail,
  Phone,
  Globe,
  Database,
  Brain,
  Shield,
  Workflow,
  MergeIcon as Integration,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const [activeDemo, setActiveDemo] = useState("targeting")

  const coreFeatures = [
    {
      icon: Target,
      title: "AI-Powered Targeting",
      description: "Advanced algorithms identify your ideal customer profile with 95% accuracy",
      benefits: ["Behavioral analysis", "Intent data integration", "Lookalike modeling", "Real-time scoring"],
    },
    {
      icon: Brain,
      title: "Intelligent Lead Scoring",
      description: "Machine learning models rank prospects by conversion probability",
      benefits: ["Predictive analytics", "Multi-factor scoring", "Dynamic updates", "Custom weighting"],
    },
    {
      icon: Database,
      title: "Comprehensive Database",
      description: "Access to 250M+ verified B2B contacts across all industries",
      benefits: ["Real-time verification", "GDPR compliant", "95% accuracy rate", "Global coverage"],
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Set up multi-channel campaigns that run on autopilot",
      benefits: ["Email sequences", "Social outreach", "Follow-up automation", "A/B testing"],
    },
    {
      icon: Integration,
      title: "CRM Integration",
      description: "Seamlessly sync with your existing sales and marketing tools",
      benefits: ["Salesforce", "HubSpot", "Pipedrive", "50+ integrations"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into campaign performance and ROI tracking",
      benefits: ["Real-time dashboards", "Custom reports", "Attribution modeling", "Conversion tracking"],
    },
  ]

  const channels = [
    {
      icon: Mail,
      title: "Email Outreach",
      description: "Personalized email campaigns with high deliverability",
      features: ["Template library", "A/B testing", "Deliverability optimization", "Response tracking"],
    },
    {
      icon: Phone,
      title: "Cold Calling",
      description: "Intelligent call routing and conversation insights",
      features: ["Call scheduling", "Script optimization", "Call recording", "Performance analytics"],
    },
    {
      icon: Globe,
      title: "Social Selling",
      description: "LinkedIn and social media prospecting automation",
      features: ["Profile visits", "Connection requests", "Message sequences", "Engagement tracking"],
    },
  ]

  const integrations = [
    { name: "Salesforce", logo: "/placeholder.svg?height=40&width=120" },
    { name: "HubSpot", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Pipedrive", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Marketo", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Pardot", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Mailchimp", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-primary-100 text-primary-700 mb-4">Platform Features</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              Everything You Need to
              <span className="gradient-text block">Generate Quality Leads</span>
            </h1>
            <p className="text-xl text-charcoal-600 mb-8">
              Our comprehensive platform combines AI-powered targeting, multi-channel outreach, and advanced analytics
              to maximize your lead generation ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://salescentri.com/get-started/free-trial?utm_source=abbasjumaclearing.com&utm_medium=features_hero&utm_campaign=partner_network"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link
                href="https://salescentri.com/get-started/book-demo?utm_source=abbasjumaclearing.com&utm_medium=features_hero&utm_campaign=partner_network"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">See Our Platform in Action</h2>
            <p className="text-xl text-charcoal-600">Interactive demos of our key features</p>
          </div>

          <Tabs value={activeDemo} onValueChange={setActiveDemo} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="targeting">AI Targeting</TabsTrigger>
              <TabsTrigger value="outreach">Multi-Channel Outreach</TabsTrigger>
              <TabsTrigger value="analytics">Analytics Dashboard</TabsTrigger>
            </TabsList>

            <TabsContent value="targeting" className="mt-8">
              <Card className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal-900 mb-4">AI-Powered Prospect Targeting</h3>
                    <p className="text-charcoal-600 mb-6">
                      Our advanced AI analyzes over 200 data points to identify prospects most likely to convert, saving
                      you time and increasing success rates.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                        <span>Behavioral pattern analysis</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                        <span>Intent signal detection</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                        <span>Lookalike audience modeling</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                        <span>Real-time lead scoring</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative chrome-glass-effect rounded-lg p-6 chrome-neon-border">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 chrome-dark-surface rounded">
                        <span className="text-white text-sm">Target Accuracy</span>
                        <div className="w-24 h-2 bg-charcoal-700 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-r from-primary to-accent chrome-pulse"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 chrome-dark-surface rounded">
                        <span className="text-white text-sm">Intent Signals</span>
                        <div className="w-24 h-2 bg-charcoal-700 rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-gradient-to-r from-primary to-accent chrome-pulse"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 chrome-dark-surface rounded">
                        <span className="text-white text-sm">Lead Quality</span>
                        <div className="w-24 h-2 bg-charcoal-700 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-r from-primary to-accent chrome-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="outreach" className="mt-8">
              <Card className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Multi-Channel Outreach Demo"
                      className="rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-primary-500/10 to-transparent rounded-lg"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal-900 mb-4">Multi-Channel Campaign Management</h3>
                    <p className="text-charcoal-600 mb-6">
                      Orchestrate personalized outreach across email, phone, and social media with automated follow-ups
                      and intelligent sequencing.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                        <span>Email automation sequences</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                        <span>Social media outreach</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                        <span>Call scheduling & tracking</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                        <span>Personalization at scale</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="mt-8">
              <Card className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal-900 mb-4">Advanced Analytics & Reporting</h3>
                    <p className="text-charcoal-600 mb-6">
                      Get deep insights into campaign performance with real-time dashboards, custom reports, and ROI
                      tracking across all channels.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                        <span>Real-time performance metrics</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                        <span>Custom report builder</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                        <span>Attribution modeling</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                        <span>ROI calculation & forecasting</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Analytics Dashboard Demo"
                      className="rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 bg-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">Comprehensive Feature Set</h2>
            <p className="text-xl text-charcoal-600">Everything you need to scale your lead generation efforts</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 futuristic-border">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-3">{feature.title}</h3>
                <p className="text-charcoal-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-charcoal-600">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Channel Outreach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">Multi-Channel Outreach</h2>
            <p className="text-xl text-charcoal-600">Reach prospects where they are with coordinated campaigns</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-900 mb-3">{channel.title}</h3>
                <p className="text-charcoal-600 mb-4">{channel.description}</p>
                <ul className="space-y-2 text-sm">
                  {channel.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center text-charcoal-600">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-charcoal-600">Connect with your existing sales and marketing stack</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center">
                <img
                  src={integration.logo || "/placeholder.svg"}
                  alt={integration.name}
                  className="mx-auto mb-2 opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-charcoal-600 mb-4">Don't see your tool? We support 50+ integrations and custom APIs.</p>
            <Link
              href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator?utm_source=abbasjumaclearing.com&utm_medium=integrations&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">View All Integrations</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">Enterprise-Grade Security</h2>
            <p className="text-xl text-charcoal-600 mb-8">
              Your data is protected with bank-level security and compliance standards
            </p>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-2">SOC 2</div>
                <div className="text-sm text-charcoal-600">Type II Certified</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-2">GDPR</div>
                <div className="text-sm text-charcoal-600">Fully Compliant</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-sm text-charcoal-600">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600 mb-2">256-bit</div>
                <div className="text-sm text-charcoal-600">SSL Encryption</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience These Features?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your free trial and see how our platform can transform your lead generation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://salescentri.com/get-started/free-trial?utm_source=abbasjumaclearing.com&utm_medium=features_bottom&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link
              href="https://salescentri.com/get-started/book-demo?utm_source=abbasjumaclearing.com&utm_medium=features_bottom&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600 bg-transparent"
              >
                Schedule Demo
              </Button>
            </Link>
          </div>

          <p className="text-sm mt-4 opacity-75">14-day free trial • No credit card required • Full feature access</p>
        </div>
      </section>
    </div>
  )
}
