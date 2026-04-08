import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().trim().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().trim().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().trim().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>