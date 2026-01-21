"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Container from "@/components/container"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const formSchema = z.object({
  donorType: z.enum(["individual", "organization"], {
    message: "Please select a donor type.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  amount: z.string().min(1, {
    message: "Please enter a donation amount.",
  }),
  donationType: z.enum(["once", "monthly"], {
    message: "Please select a donation type.",
  }),
  purpose: z.string().min(1, {
    message: "Please select a purpose for your donation.",
  }),
  message: z.string().optional(),
})

export function DonateForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      donorType: "individual",
      name: "",
      email: "",
      phone: "",
      amount: "",
      donationType: "once",
      purpose: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This is where you would handle form submission
    // For now, we'll just log it
    console.log(values)
    // You would typically send this to a payment processor or backend API
    alert("Thank you for your donation! We will contact you shortly to complete the transaction.")
  }

  return (
    <section className="py-16 bg-brand-light-green/10">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="bg-brand-white rounded-lg shadow-lg p-8 border-2 border-brand-olive-green">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-dark-green">
              Complete Your Donation
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="donorType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>I am donating as</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="individual" id="individual" />
                            <label htmlFor="individual" className="cursor-pointer">
                              Individual
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="organization" id="organization" />
                            <label htmlFor="organization" className="cursor-pointer">
                              Organization
                            </label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name / Organization Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+27 XX XXX XXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Donation Amount (ZAR)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="1000" 
                            min="1"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Enter amount in South African Rand
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="donationType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Donation Frequency</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="once">One-time</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="purpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Donation Purpose</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select where to direct your donation" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Support</SelectItem>
                          <SelectItem value="creche">Creche & Early Learning</SelectItem>
                          <SelectItem value="garden">Community Garden</SelectItem>
                          <SelectItem value="programs">Community Programs</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Add a message or special instructions..." 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-brand-dark-green text-brand-white hover:bg-brand-dark-green/90"
                  size="lg"
                >
                  Complete Donation
                </Button>

                <p className="text-sm text-brand-grey text-center">
                  By submitting this form, you agree to be contacted by Ekuphumleni regarding your donation.
                  We will send you banking details or payment options to complete your contribution.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  )
}
