import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Hourglass, Zap } from "lucide-react"

export default function OldWayVsXamBuster() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 section-gradient-alt">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
          Say Goodbye to the Stressful Study Routine
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Hourglass className="mr-2" />
                The Old Way
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              <p>
                Find a past paper. Start solving. Run into topics your teacher has not covered yet. Waste time figuring that out. Move to the next question. Wonder whether you are supposed to know it, get it wrong, and find out you were supposed to know it. Search the web, find the PDF with answers to the question paper. Look for the answer, discover you were in the wrong file. Dig up the right file. Find the answer was incorrect, struggle to figure out why. Finally understand, only to forget what you practiced and when. Were you even spending time on the most frequently tested topics?
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Zap className="mr-2" />
                With XamBuster
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-200">
              <p>
                All of that confusion and wasted effort is gone. We've tagged every question by topic, providing you with instant access to the exact questions you need. No more guessing, no more searching, no more wasting time. Let XamBuster take the guesswork out of your IGCSE prep.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}