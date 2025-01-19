import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const footerLinks = {
  features: [
    { label: 'Design', href: '#' },
    { label: 'Branding', href: '#' },
    { label: 'Mobile', href: '#' },
    { label: 'Marketing', href: '#' },
    { label: 'Development', href: '#' }
  ],
  agency: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '#services' },
    { label: 'Cases', href: '/cases' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '#contact' }
  ]
}

export default function Footer() {
  return (
    <footer className="bg-[#F5F3FF] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-2xl font-medium inline-block mb-6">
              <span className="text-[#FF7F50]">SWIFT</span>
              <span className="text-gray-900">TECH SOLUTION</span>
            </Link>
            <p className="text-gray-600 text-sm">
              We are committed to processing the information in order to contact you and talk
              about your project.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">FEATURES</h3>
            <ul className="space-y-4">
              {footerLinks.features.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">AGENCY</h3>
            <ul className="space-y-4">
              {footerLinks.agency.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">CONTACT</h3>
            <span>Email : </span>
            
            <a 

              href="mailto:agency@company.com" 
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              
            >
              srfahim23@gmail.com
            </a>
            <a 
              href="mailto:agency@company.com" 
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              
           
            </a>
            <div className="flex gap-4 mt-4">
              <a 
                href="#" 
                className="text-gray-600 hover:text-[#FF6B6B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-[#FF6B6B] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-[#FF6B6B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            Copyright © 2024 SWIFT TECH SOLUTION. All Rights Reserved.
          <span>  `FahimDev`</span>
          </p>
          <div className="flex gap-6">
            <Link 
              href="/terms" 
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Terms of Use
            </Link>
            <Link 
              href="/privacy" 
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

