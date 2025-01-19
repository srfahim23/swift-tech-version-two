'use client'

import { useState } from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useFormStatus } from 'react-dom'
import { submitContactForm } from '@/app/actions'

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <Button 
      type="submit" 
      className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white w-full md:w-auto px-8"
      disabled={pending}
    >
      {pending ? 'Sending...' : 'Submit'}
    </Button>
  )
}

export default function Contact() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'success' | 'error' | null>(null)

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData)
    setMessage(result.message)
    setStatus(result.success ? 'success' : 'error')
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#FF6B6B] text-lg font-medium mb-4">Contact Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Get in touch with us
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              We are committed to processing the information in order to contact you and
              talk about your project.
            </p>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="text-gray-600 hover:text-[#FF6B6B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-[#FF6B6B] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-[#FF6B6B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg">
            <form action={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="bg-white"
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="bg-white"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="bg-white"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="bg-white"
                />
              </div>
              <Textarea
                name="description"
                placeholder="Description"
                required
                className="min-h-[150px] bg-white"
              />
              {message && (
                <p className={`text-sm ${
                  status === 'success' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {message}
                </p>
              )}
              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

