"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-primary/10" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 chrome-gradient-bg rounded-xl flex items-center justify-center chrome-glow-effect">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold chrome-gradient-text">Abbas Juma</span>
              <span className="text-xs text-charcoal-600 -mt-1">Clearing Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal-600 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://salescentri.com/contact/support-request/submit-ticket?utm_source=abbasjumaclearing.com&utm_medium=header&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link
              href="https://salescentri.com/get-started/free-trial?utm_source=abbasjumaclearing.com&utm_medium=header&utm_campaign=partner_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-charcoal-900 font-semibold chrome-hover-glow"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-primary/10">
            <nav className="flex flex-col space-y-4 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-charcoal-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="outline" size="sm">
                  Login
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-primary-500 to-primary-600">
                  Start Free Trial
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Sticky CTA */}
      <div
        className={cn(
          "fixed top-20 right-4 z-40 transition-all duration-300",
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
      >
        <Link
          href="https://salescentri.com/get-started/book-demo?utm_source=abbasjumaclearing.com&utm_medium=sticky_cta&utm_campaign=partner_network"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-charcoal-900 font-semibold shadow-lg chrome-pulse"
          >
            Book Demo
          </Button>
        </Link>
      </div>
    </header>
  )
}
