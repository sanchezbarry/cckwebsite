"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { useState } from "react"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  password }),
      })

      if (!response.ok) {
        setError("Invalid password")
        return
      }

      const data = await response.json()
      if (data.success) {
        setPassword("")
        // Redirect or show success - adjust as needed
        window.location.href = "/members"
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className={cn("flex flex-col gap-6 py-12", className)} {...props}>
      <Card className="overflow-hidden p-0 max-w-2xl mx-auto w-full">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">
                  Login to Member's Page
                </p>
              </div>
              {/* <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Field> */}
              <Field>
                <div className="flex justify-between items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                    <HoverCard openDelay={10} closeDelay={100}>
                    <HoverCardTrigger asChild>
                        <Button className="text-muted-foreground" variant="link">Forgot Password?</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="flex w-64 flex-col gap-0.5">
                        <div className="text-muted-foreground mt-1 text-xs">
                        Contact CCK's Admin for the password.
                        </div>
                    </HoverCardContent>
                    </HoverCard>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Field>
              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}
              <Field>
                <Button type="submit" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
              </FieldSeparator>
              <FieldDescription className="text-center">
                Want to be a member of our church? <br/> <a href="#">Visit us</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/membersonly.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
