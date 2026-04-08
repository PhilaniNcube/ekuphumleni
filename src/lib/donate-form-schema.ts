import { z } from "zod"

export const donateFormSchema = z.object({
  donorType: z.enum(["individual", "organization"], {
    message: "Please select a donor type.",
  }),
  name: z.string().trim().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().trim().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().trim().min(10, {
    message: "Please enter a valid phone number.",
  }),
  amount: z.string().trim().min(1, {
    message: "Please enter a donation amount.",
  }),
  donationType: z.enum(["once", "monthly"], {
    message: "Please select a donation type.",
  }),
  purpose: z.string().trim().min(1, {
    message: "Please select a purpose for your donation.",
  }),
  message: z.string().trim().optional(),
})

export type DonateFormValues = z.infer<typeof donateFormSchema>