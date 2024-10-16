"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignUp() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Join XamBuster Today!</CardTitle>
            <CardDescription>Sign up for free and start your journey to exam success.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="name" placeholder="Full Name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input id="email" placeholder="Email" type="email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input id="password" placeholder="Password" type="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="w-full">Create Account</Button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center">
          <p>Already have an account? <a href="#" className="text-blue-600 hover:underline">Login here</a></p>
        </div>
      </div>
    </section>
  )
}