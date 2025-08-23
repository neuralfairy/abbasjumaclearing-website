import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LiveChat } from "@/components/live-chat"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abbas Juma Clearing Solutions - Advanced B2B Lead Generation",
  description:
    "Transform your business with cutting-edge B2B lead generation technology. Abbas Juma Clearing Solutions delivers high-quality, targeted leads using AI-powered prospecting and multi-channel outreach.",
  icons: {
    icon: "/favicon.png",
  },
  keywords:
    "B2B lead generation, targeted prospecting, sales acceleration, lead generation, B2B sales tools, Abbas Juma",
  openGraph: {
    title: "Abbas Juma Clearing Solutions - Advanced B2B Lead Generation",
    description: "Transform your business with cutting-edge B2B lead generation technology.",
    url: "https://abbasjumaclearing.com",
    siteName: "Abbas Juma Clearing Solutions",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Abbas Juma Clearing Solutions",
              url: "https://abbasjumaclearing.com",
              description:
                "Advanced B2B Lead Generation Agency specializing in AI-powered prospecting and sales acceleration",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Savannah",
                addressRegion: "GA",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-912-555-0123",
                contactType: "sales",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <LiveChat />
        <ExitIntentPopup />
      </body>
    </html>
  )
}
