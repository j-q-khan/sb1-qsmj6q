"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          We're Here to Help!
        </h2>
        <p className="text-xl text-center mb-8">Have questions? Reach out to us anytime.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
            <form className="space-y-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="mb-2">Email: support@xambuster.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}