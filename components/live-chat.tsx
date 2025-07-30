"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would integrate with your chat service
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 text-charcoal-900 shadow-lg chrome-pulse"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        )}

        {isOpen && (
          <Card className="w-80 h-96 flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 chrome-gradient-bg text-white rounded-t-lg">
              <div>
                <h3 className="font-semibold">Live Support</h3>
                <p className="text-xs opacity-90">Abbas Juma Clearing Solutions</p>
              </div>
              <Link
                href="https://salescentri.com/contact/support-request/submit-ticket?utm_source=abbasjumaclearing.com&utm_medium=live_chat&utm_campaign=partner_network"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <X className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
              <div className="chrome-glass-effect rounded-lg p-3 text-sm">
                <p className="font-medium text-primary">Support Agent</p>
                <p>Hi! How can Abbas Juma Clearing Solutions help transform your lead generation today?</p>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-charcoal-900"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </>
  )
}
