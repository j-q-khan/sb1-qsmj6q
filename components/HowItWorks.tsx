import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, PlayCircle, UserPlus } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <StepCard
            icon={<UserPlus className="h-6 w-6" />}
            title="Step 1: Sign Up and Set Your Goals"
            description="Tell us which subjects you need help with and start your personalized study journey."
          />
          <StepCard
            icon={<ClipboardList className="h-6 w-6" />}
            title="Step 2: Pick a Topic and Start Practicing"
            description="Select from thousands of past paper questions and focus on specific areas."
          />
          <StepCard
            icon={<PlayCircle className="h-6 w-6" />}
            title="Step 3: Learn from AI Insights"
            description="Get instant feedback on your answers and learn where you need more practice."
          />
        </div>
      </div>
    </section>
  )
}

function StepCard({ icon, title, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}