"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { CheckCircle, X, ArrowRight, Star, Zap, Crown, Target } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for small teams getting started",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "500 leads per month",
        "Email outreach campaigns",
        "Basic CRM integration",
        "Lead scoring",
        "Email support",
        "Basic analytics",
        "1 user included",
      ],
      limitations: ["No phone outreach", "No social media integration", "Limited templates"],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      icon: Target,
      description: "Most popular for growing businesses",
      monthlyPrice: 299,
      annualPrice: 239,
      features: [
        "2,500 leads per month",
        "Multi-channel outreach",
        "Advanced CRM integration",
        "AI-powered lead scoring",
        "Phone & email support",
        "Advanced analytics",
        "5 users included",
        "A/B testing",
        "Custom templates",
        "Social media integration",
      ],
      limitations: ["Limited API access"],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      icon: Crown,
      description: "For large teams with advanced needs",
      monthlyPrice: 799,
      annualPrice: 639,
      features: [
        "Unlimited leads",
        "Full multi-channel suite",
        "Custom integrations",
        "Advanced AI features",
        "Dedicated account manager",
        "Custom reporting",
        "Unlimited users",
        "White-label options",
        "API access",
        "Custom workflows",
        "Priority support",
        "Training & onboarding",
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  const addOns = [
    {
      name: "Additional Users",
      price: 49,
      description: "Per user per month",
    },
    {
      name: "Extra Leads",
      price: 0.2,
      description: "Per additional lead",
    },
    {
      name: "Premium Support",
      price: 199,
      description: "Priority phone & chat support",
    },
    {
      name: "Custom Integration",
      price: 499,
      description: "One-time setup fee",
    },
  ]

  const faqs = [
    {
      question: "What counts as a lead?",
      answer:
        "A lead is a verified contact record with email address, company information, and contact details that meets your targeting criteria.",
    },
    {
      question: "Can I change plans anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fees for Starter and Professional plans. Enterprise plans include free onboarding and training.",
    },
    {
      question: "What integrations are included?",
      answer:
        "All plans include integrations with major CRMs like Salesforce, HubSpot, and Pipedrive. Enterprise plans include custom integrations.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all plans. No questions asked.",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-primary-100 text-primary-700 mb-4">Transparent Pricing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              Choose the Perfect Plan for
              <span className="gradient-text block">Your Growth Goals</span>
            </h1>
            <p className="text-xl text-charcoal-600 mb-8">
              Start with our 14-day free trial. No credit card required. Scale as you grow with transparent, predictable
              pricing.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${!isAnnual ? "text-charcoal-900 font-semibold" : "text-charcoal-600"}`}>
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-primary-500"
              />
              <span className={`text-lg ${isAnnual ? "text-charcoal-900 font-semibold" : "text-charcoal-600"}`}>
                Annual
              </span>
              <Badge className="bg-primary-100 text-primary-700">Save 20%</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-8 ${plan.popular ? "ring-2 ring-primary-500 scale-105" : ""} hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary-500 text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-2">{plan.name}</h3>
                  <p className="text-charcoal-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-charcoal-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-charcoal-600">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-primary-600">
                      Billed annually (${(isAnnual ? plan.annualPrice : plan.monthlyPrice) * 12})
                    </p>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span className="text-charcoal-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-center opacity-60">
                      <X className="w-5 h-5 text-charcoal-400 mr-3 flex-shrink-0" />
                      <span className="text-charcoal-600">{limitation}</span>
                    </div>
                  ))}
                </div>

                {plan.name === "Starter" && (
                  <Link
                    href="https://salescentri.com/get-started/free-trial?utm_source=abbasjumaclearing.com&utm_medium=pricing_starter&utm_campaign=partner_network"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-charcoal-900 hover:bg-charcoal-800" size="lg">
                      Start Free Trial
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                )}

                {plan.name === "Professional" && (
                  <Link
                    href="https://salescentri.com/get-started/free-trial?utm_source=abbasjumaclearing.com&utm_medium=pricing_professional&utm_campaign=partner_network"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                      size="lg"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                )}

                {plan.name === "Enterprise" && (
                  <Link
                    href="https://salescentri.com/contact/sales-inquiry/request-quote?utm_source=abbasjumaclearing.com&utm_medium=pricing_enterprise&utm_campaign=partner_network"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-charcoal-900 hover:bg-charcoal-800" size="lg">
                      Contact Sales
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">Add-ons & Extras</h2>
            <p className="text-xl text-charcoal-600">Customize your plan with additional features and services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-charcoal-900 mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-primary-600 mb-2">${addon.price}</div>
                <p className="text-sm text-charcoal-600">{addon.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">Feature Comparison</h2>
            <p className="text-xl text-charcoal-600">See what's included in each plan</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto">
              <thead>
                <tr className="border-b border-charcoal-200">
                  <th className="text-left py-4 px-6 font-semibold text-charcoal-900">Features</th>
                  <th className="text-center py-4 px-6 font-semibold text-charcoal-900">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-charcoal-900">Professional</th>
                  <th className="text-center py-4 px-6 font-semibold text-charcoal-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-100">
                <tr>
                  <td className="py-4 px-6 font-medium text-charcoal-900">Monthly Leads</td>
                  <td className="py-4 px-6 text-center">500</td>
                  <td className="py-4 px-6 text-center">2,500</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-charcoal-900">Users Included</td>
                  <td className="py-4 px-6 text-center">1</td>
                  <td className="py-4 px-6 text-center">5</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-charcoal-900">Email Outreach</td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-charcoal-900">Phone Outreach</td>
                  <td className="py-4 px-6 text-center">
                    <X className="w-5 h-5 text-charcoal-400 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-charcoal-900">Social Media Integration</td>
                  <td className="py-4 px-6 text-center">
                    <X className="w-5 h-5 text-charcoal-400 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-charcoal-900">Advanced Analytics</td>
                  <td className="py-4 px-6 text-center">
                    <X className="w-5 h-5 text-charcoal-400 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-charcoal-900">API Access</td>
                  <td className="py-4 px-6 text-center">
                    <X className="w-5 h-5 text-charcoal-400 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">Limited</td>
                  <td className="py-4 px-6 text-center">Full</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-charcoal-900">Dedicated Support</td>
                  <td className="py-4 px-6 text-center">
                    <X className="w-5 h-5 text-charcoal-400 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <X className="w-5 h-5 text-charcoal-400 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-charcoal-600">Everything you need to know about our pricing</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-charcoal-900 mb-3">{faq.question}</h3>
                <p className="text-charcoal-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Generating More Leads?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of companies already growing with our platform</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://salescentri.com/get-started/free-trial?utm_source=abbasjumaclearing.com&utm_medium=pricing_hero&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link
              href="https://salescentri.com/contact/sales-inquiry/request-quote?utm_source=abbasjumaclearing.com&utm_medium=pricing_hero&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600 bg-transparent"
              >
                Talk to Sales
              </Button>
            </Link>
          </div>

          <p className="text-sm mt-4 opacity-75">No credit card required • Full feature access • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
