"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Search,
  TrendingUp,
  Target,
  Zap,
  BarChart3,
  Users,
  Mail,
} from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    title: "The Complete Guide to B2B Lead Generation in 2024",
    excerpt:
      "Discover the latest strategies, tools, and techniques that top-performing companies use to generate high-quality B2B leads in today's competitive market.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Strategy",
    readTime: "12 min read",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    slug: "complete-guide-b2b-lead-generation-2024",
  }

  const blogPosts = [
    {
      title: "AI-Powered Lead Scoring: How Machine Learning Transforms Qualification",
      excerpt:
        "Learn how artificial intelligence is revolutionizing lead scoring and helping sales teams focus on the most promising prospects.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Technology",
      readTime: "8 min read",
      date: "March 12, 2024",
      author: "Michael Chen",
      slug: "ai-powered-lead-scoring-machine-learning",
    },
    {
      title: "Multi-Channel Outreach: Orchestrating Email, Phone, and Social",
      excerpt:
        "Master the art of coordinated outreach across multiple channels to maximize response rates and conversion.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Outreach",
      readTime: "10 min read",
      date: "March 10, 2024",
      author: "Emily Rodriguez",
      slug: "multi-channel-outreach-strategy",
    },
    {
      title: "ROI Metrics That Matter: Measuring Lead Generation Success",
      excerpt:
        "Identify the key performance indicators that truly measure the success of your lead generation efforts.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Analytics",
      readTime: "7 min read",
      date: "March 8, 2024",
      author: "David Kim",
      slug: "roi-metrics-lead-generation-success",
    },
    {
      title: "Personalization at Scale: Advanced Techniques for B2B Outreach",
      excerpt:
        "Discover how to create personalized experiences for thousands of prospects without sacrificing quality.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Personalization",
      readTime: "9 min read",
      date: "March 5, 2024",
      author: "Sarah Johnson",
      slug: "personalization-scale-b2b-outreach",
    },
    {
      title: "GDPR and Lead Generation: Compliance Best Practices",
      excerpt: "Navigate data privacy regulations while maintaining effective lead generation campaigns.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Compliance",
      readTime: "6 min read",
      date: "March 3, 2024",
      author: "Legal Team",
      slug: "gdpr-lead-generation-compliance",
    },
    {
      title: "Sales and Marketing Alignment: Breaking Down Silos",
      excerpt: "Learn how to align your sales and marketing teams for maximum lead generation effectiveness.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Strategy",
      readTime: "11 min read",
      date: "March 1, 2024",
      author: "Emily Rodriguez",
      slug: "sales-marketing-alignment-strategy",
    },
  ]

  const categories = [
    { name: "All Posts", count: 24, icon: BarChart3 },
    { name: "Strategy", count: 8, icon: Target },
    { name: "Technology", count: 6, icon: Zap },
    { name: "Outreach", count: 5, icon: Mail },
    { name: "Analytics", count: 3, icon: TrendingUp },
    { name: "Compliance", count: 2, icon: Users },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-primary-100 text-primary-700 mb-4">Thought Leadership</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              B2B Lead Generation
              <span className="gradient-text block">Insights & Strategies</span>
            </h1>
            <p className="text-xl text-charcoal-600 mb-8">
              Stay ahead of the curve with expert insights, proven strategies, and the latest trends in B2B lead
              generation and sales acceleration.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-400 w-5 h-5" />
              <Input placeholder="Search articles..." className="pl-10 pr-4 py-3 text-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-charcoal-900 mb-2">Featured Article</h2>
              <p className="text-charcoal-600">Our most comprehensive guide to modern lead generation</p>
            </div>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative chrome-glass-effect rounded-lg p-8 chrome-neon-border">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 chrome-gradient-bg rounded-full mx-auto flex items-center justify-center chrome-glow-effect">
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <Badge className="bg-primary text-charcoal-900">{featuredPost.category}</Badge>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-6 text-sm text-charcoal-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-charcoal-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-charcoal-500 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    href={`https://salescentri.com/blog/${featuredPost.slug}?utm_source=abbasjumaclearing.com&utm_medium=blog&utm_campaign=content_marketing`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600">
                      Read Full Article
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-charcoal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
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
                    <h4 className="font-semibold mb-2">Get Weekly Insights</h4>
                    <p className="text-sm mb-3 opacity-90">
                      Subscribe to our newsletter for the latest lead generation tips.
                    </p>
                    <Button size="sm" className="bg-white text-primary-600 hover:bg-gray-100 w-full">
                      Subscribe Now
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Blog Posts */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative p-6 chrome-glass-effect">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-primary text-charcoal-900">{post.category}</Badge>
                          <div className="w-12 h-12 chrome-gradient-bg rounded-lg flex items-center justify-center">
                            <Mail className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-charcoal-900 mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-charcoal-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-charcoal-500 mb-4">
                          <User className="w-4 h-4 mr-1" />
                          <span className="mr-3">{post.author}</span>
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <Link
                          href={`https://salescentri.com/blog/${post.slug}?utm_source=abbasjumaclearing.com&utm_medium=blog&utm_campaign=content_marketing`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" className="w-full bg-transparent chrome-hover-glow">
                            Read More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Articles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Lead Generation Insights</h2>
          <p className="text-xl mb-8 opacity-90">
            Get weekly tips, strategies, and industry insights delivered to your inbox
          </p>

          <div className="max-w-md mx-auto flex gap-4">
            <Input placeholder="Enter your email" className="bg-white text-charcoal-900" />
            <Button size="lg" className="bg-charcoal-900 hover:bg-charcoal-800 whitespace-nowrap">
              Subscribe
            </Button>
          </div>

          <p className="text-sm mt-4 opacity-75">Join 5,000+ sales professionals. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
