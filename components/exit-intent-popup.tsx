"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        timeoutId = setTimeout(() => {
          setIsVisible(true)
        }, 500)
      }
    }

    const handleMouseEnter = () => {
      clearTimeout(timeoutId)
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      clearTimeout(timeoutId)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Redirect to salescentri.com guide download
      window.open(
        `https://salescentri.com/resources/whitepapers-ebooks?utm_source=abbasjumaclearing.com&utm_medium=exit_intent&utm_campaign=partner_network&email=${encodeURIComponent(email)}`,
        "_blank",
      )
      setIsVisible(false)
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-6 relative animate-in zoom-in-95 duration-300">
        <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)} className="absolute top-2 right-2">
          <X className="w-4 h-4" />
        </Button>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 chrome-gradient-bg rounded-full flex items-center justify-center mx-auto chrome-glow-effect">
            <Gift className="w-8 h-8 text-white" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-charcoal-800">Wait! Don't Leave Yet</h3>
            <p className="text-charcoal-600 mt-2">
              Get our exclusive Advanced B2B Lead Generation Guide absolutely free!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="chrome-glass-effect"
            />
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-charcoal-900 font-semibold chrome-hover-glow"
            >
              Get Free Guide
            </Button>
          </form>

          <p className="text-xs text-charcoal-500">No spam. Unsubscribe anytime. We respect your privacy.</p>
        </div>
      </Card>
    </div>
  )
}
