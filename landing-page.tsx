import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"``
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Send } from "lucide-react"

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { email, message })
    // Reset form fields
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
        <header className="container mx-auto px-4 py-16 text-center">
          <img
            src="/placeholder.svg?height=100&width=100"
            alt="Pixl Pirate Logo"
            className="mx-auto mb-8 h-24 w-24"
          />
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">Pixl Pirate</h1>
        </header>
      </div>

      {/* Previous Work Showcase */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Treasure Chest of Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden">
                <img
                  src={`/placeholder.svg?height=300&width=400&text=Project ${item}`}
                  alt={`Project ${item}`}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-white">Project {item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Parley with the Pixl Pirates</h2>
        <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 text-gray-100 border-gray-700 focus:border-indigo-500 rounded-none"
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-gray-800 text-gray-100 border-gray-700 focus:border-indigo-500 rounded-none"
            />
          </div>
          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-none">
            Send Message <Send className="ml-2" />
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center text-gray-400">
        <p>&copy; 2024 Pixl Pirate. All rights arrr-ighted.</p>
      </footer>
    </div>
  )
}