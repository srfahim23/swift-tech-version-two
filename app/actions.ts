'use server'

export async function submitContactForm(formData: FormData) {
  try {
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      description: formData.get('description'),
    }

    // Here you would typically send this data to your backend
    console.log('Form submitted:', data)

    return { success: true, message: 'Message sent successfully!' }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { success: false, message: 'Failed to send message. Please try again.' }
  }
}

