"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">
          Choose Your Plan and Start Excelling in Your Exams
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <PricingCard
            title="XamBuster Basic"
            price="$9"
            description="Access study materials and past paper questions without AI assistance"
            features={[
              "Access to all study materials",
              "Thousands of past paper questions",
              "Topic-based practice",
              "Progress tracking"
            ]}
          />
          <PricingCard
            title="XamBuster Advanced"
            price="$19"
            description="Access all study materials, past paper questions, plus AI-powered personalized guidance and insights"
            features={[
              "All Basic features",
              "AI-powered personalized guidance",
              "Detailed performance analytics",
              "Adaptive learning paths",
              "Exam analytics and insights"
            ]}
          />
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Subject Add-Ons</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <AddOnCard
              title="International Mathematics (0607)"
              price="$4"
              description="Add full access to International Mathematics resources"
            />
            <AddOnCard
              title="Coordinated Science (0654)"
              price="$4"
              description="Add full access to Coordinated Science resources"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingCard({ title, price, description, features }) {
  return (
    <Card className="bg-gradient-to-r from-purple-600 to-blue-600 border-0 shadow-md">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-gray-200">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold text-white">{price}<span className="text-sm font-normal text-gray-200">/month</span></p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-white">
              <Check className="h-4 w-4 mr-2 text-green-300" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">Go Premium</Button>
      </CardFooter>
    </Card>
  )
}

function AddOnCard({ title, price, description }) {
  return (
    <Card className="bg-gradient-to-r from-purple-600 to-blue-600 border-0 shadow-md">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-gray-200">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-white">{price}<span className="text-sm font-normal text-gray-200">/month</span></p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full bg-white text-purple-600 border-white hover:bg-gray-100">Add to Plan</Button>
      </CardFooter>
    </Card>
  )
}