import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Hear from Students Who Aced Their Exams!
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <TestimonialCard
            name="James"
            grade="10th Grade"
            quote="I never thought exam prep could be this easy! XamBuster is a game-changer."
            avatarSrc="https://i.pravatar.cc/150?u=james"
          />
          <TestimonialCard
            name="Meera"
            grade="10th Grade"
            quote="I improved my scores in just weeks thanks to targeted practice."
            avatarSrc="https://i.pravatar.cc/150?u=meera"
          />
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Video Testimonials</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, grade, quote, avatarSrc }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={avatarSrc} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{name}</CardTitle>
            <p className="text-sm text-gray-500">{grade}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>"{quote}"</p>
      </CardContent>
    </Card>
  )
}