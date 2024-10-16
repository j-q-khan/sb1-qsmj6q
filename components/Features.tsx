import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Brain, Calendar, ChartBar, CheckCircle, Clock, Compass, Search } from "lucide-react"

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">
          Everything You Need to Excel in the IGCSEs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<BookOpen className="h-6 w-6 text-white" />}
            title="Topic-Based Practice"
            description="No more rummaging through entire papers! XamBuster tags every question by topic, so you can easily focus on what matters most."
          />
          <FeatureCard
            icon={<Compass className="h-6 w-6 text-white" />}
            title="Adaptive Learning Paths"
            description="XamBuster tailors your study journey based on your strengths and weaknesses, ensuring that you spend time where it matters most."
          />
          <FeatureCard
            icon={<ChartBar className="h-6 w-6 text-white" />}
            title="Progress Tracking Dashboard"
            description="Monitor your learning progress with detailed analytics that show your performance across different topics and modules."
          />
          <FeatureCard
            icon={<Brain className="h-6 w-6 text-white" />}
            title="AI Feedback & Guidance"
            description="Our AI provides detailed explanations for every mistake, so you can learn quickly and get back on track. Mark questions for later review and revisit them anytime."
          />
          <FeatureCard
            icon={<CheckCircle className="h-6 w-6 text-white" />}
            title="Exam Analytics"
            description="Valuable insights on which topics appear the most, so you know exactly where to focus."
          />
          <FeatureCard
            icon={<Calendar className="h-6 w-6 text-white" />}
            title="Daily Practice Goals"
            description="Just 10 questions a day keeps the stress away. Consistency is key to exam success."
          />
          <FeatureCard
            icon={<Compass className="h-6 w-6 text-white" />}
            title="Personalized Study Recommendations"
            description="Based on your performance, XamBuster recommends which topics you should focus on next, saving you time and boosting your confidence."
          />
          <FeatureCard
            icon={<Search className="h-6 w-6 text-white" />}
            title="Instant Question Access"
            description="Find specific questions instantly using our smart search feature—no more wasting time looking through entire papers."
          />
          <FeatureCard
            icon={<Clock className="h-6 w-6 text-white" />}
            title="Review & Retry Mode"
            description="Easily revisit questions you struggled with. Our review mode helps you turn weaknesses into strengths by allowing repeated practice."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-gradient-to-r from-purple-600 to-blue-600 border-0 shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white">{description}</p>
      </CardContent>
    </Card>
  )
}