import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Brain, Lightbulb } from "lucide-react"

export default function KeyBenefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 section-gradient">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
          Your Ultimate IGCSE Study Partner
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <BookOpen className="mr-2" />
                Organized Practice
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              <p>
                Practice questions organized by subject, module, sub-module, and even specific topics—tailored to help you master every concept.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Lightbulb className="mr-2" />
                Insights to Improve
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              <p>
                Get intel on high-weight exam topics and track your progress.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Brain className="mr-2" />
                AI-Powered Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              <p>
                AI explains your mistakes and guides you toward mastery.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}