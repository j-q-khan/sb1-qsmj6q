"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="mb-8">
            <Image
              src="https://ucarecdn.com/1e648c72-ab0f-40fa-9791-05d5e574ef23/"
              alt="XamBuster Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Master Your IGCSE Exams with XamBuster!
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Access thousands of past exam questions, smart insights, and AI-driven feedback to make studying simple and effective.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Started for Free
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}