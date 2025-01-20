"use server"

import { z } from "zod"

const ContactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters long"),
})


type SubmissionResult = {
  success: boolean
  message: string
}

export async function submitContactForm(formData: FormData): Promise<SubmissionResult> {
  try {
    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const rawData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      description: formData.get("description"),
    }

    // Validate the form data
    const validatedData = ContactFormSchema.parse(rawData)

    // Here you would typically send this data to your backend
    // For example:
    // await sendToBackend(validatedData)

    // Log only in development
    if (process.env.NODE_ENV === "development") {
      console.log("Form submitted:", validatedData)
    }

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    // Log the error (in a real application, use a proper error logging service)
    console.error("Error submitting form:", error)

    if (error instanceof z.ZodError) {
      // If it's a validation error, return the first error message
      return { success: false, message: error.errors[0].message }
    }

    return { success: false, message: "Failed to send message. Please try again." }
  }
}

