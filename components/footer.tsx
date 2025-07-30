import Link from "next/link"
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 chrome-scan-line opacity-20"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 chrome-gradient-bg rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Abbas Juma</span>
                <span className="text-sm text-gray-300 -mt-1">Clearing Solutions</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Transforming B2B growth through advanced lead generation technology and intelligent prospecting solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://salescentri.com/platforms/lead-management/voice-ai-agent?utm_source=abbasjumaclearing.com&utm_medium=footer&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Voice AI Agent
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator?utm_source=abbasjumaclearing.com&utm_medium=footer&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  AI Aggregator
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/solutions/psa-suite/overview?utm_source=abbasjumaclearing.com&utm_medium=footer&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  PSA Suite Overview
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 hover:text-primary-500 transition-colors">
                  CRM Integration
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Lead Scoring
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://salescentri.com/resources/case-studies?utm_source=abbasjumaclearing.com&utm_medium=footer&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=abbasjumaclearing.com&utm_medium=footer&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Whitepapers & eBooks
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/resources/tutorials-webinars?utm_source=abbasjumaclearing.com&utm_medium=footer&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Tutorials & Webinars
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-primary-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-primary-500 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get Started</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://salescentri.com/get-started/free-trial?utm_source=abbasjumaclearing.com&utm_medium=footer&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Start Free Trial
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/get-started/book-demo?utm_source=abbasjumaclearing.com&utm_medium=footer&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Book Demo
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/pricing?utm_source=abbasjumaclearing.com&utm_medium=footer&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Get Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="https://salescentri.com/get-started/calendly?utm_source=abbasjumaclearing.com&utm_medium=footer&utm_campaign=partner_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </li>
            </ul>
            <div className="space-y-3 text-sm pt-4 border-t border-charcoal-700">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span className="text-gray-300">Savannah, GA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-500" />
                <span className="text-gray-300">+1 (912) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-500" />
                <span className="text-gray-300">hello@abbasjumaclearing.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-primary-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary-500 transition-colors">
                Cookie Policy
              </Link>
              <span>GDPR Compliant</span>
            </div>
            <div className="text-sm text-gray-400">© 2024 Abbasjumaclearing Solutions. All rights reserved.</div>
          </div>

          {/* Strategic Backlink */}
          <div className="mt-4 text-center">
            <Link
              href="https://salescentri.com?utm_source=abbasjumaclearing.com&utm_medium=footer&utm_campaign=partner_network"
              className="text-xs text-gray-500 hover:text-primary-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Sales Intelligence Platform
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
