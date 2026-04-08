"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Container from "@/components/container"
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-form-schema"

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: ContactFormValues) {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    const result = (await response.json().catch(() => null)) as
      | { error?: string }
      | null

    if (!response.ok) {
      toast.error(result?.error ?? "Your message could not be sent.")
      return
    }

    form.reset()
    toast.success("Your message has been sent.")
  }

  return (
    <section className="py-16 bg-brand-cream">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-brand-dark-green">Send us a Message</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="border-b-2 border-brand-dark-green/20 pb-2">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="border-b-2 border-brand-dark-green/20 pb-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="border-b-2 border-brand-dark-green/20 pb-2">
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="What is this regarding?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="border-b-2 border-brand-dark-green/20 pb-2">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Type your message here." 
                        className="min-h-37.5"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </Container>
    </section>
  )
}
