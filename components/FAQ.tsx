"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">
          Got Questions? We Have Answers!
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-gray-900">How does XamBuster change studying?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              XamBuster transforms exam prep by making it efficient and focused. No more struggling to find the right questions, no more guesswork about what to study next. With organized questions, AI explanations, and progress tracking, XamBuster makes studying smarter, not harder.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-gray-900">How does XamBuster save me time?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              XamBuster removes the confusion of searching for specific questions. It allows you to instantly access questions based on your weaknesses, saving you hours that would otherwise be spent sifting through entire papers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-gray-900">Can I track my progress?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes! The Progress tab lists all the topics, shows how many questions you've attempted, your success rate, and highlights areas for improvement. You can easily see which topics you need to work on and how well you're improving over time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-gray-900">What's the difference between XamBuster Basic and XamBuster Advanced?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              XamBuster Basic provides access to study materials and past paper questions. XamBuster Advanced includes AI-powered personalized guidance, deeper insights, and explanations to help you master every concept.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-gray-900">What happens if I get a question wrong?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              If you get a question wrong, our AI will explain where you went wrong and why, helping you understand the correct answer. You can also mark questions for later review, so you never forget to revisit difficult concepts.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-gray-900">How does XamBuster help with frequently tested topics?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              XamBuster provides valuable exam insights, showing you which topics have been tested most frequently in the past. This helps you focus on areas that are more likely to appear in your exams, giving you a strategic advantage.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}