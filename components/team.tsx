import { Facebook, Twitter, Instagram } from 'lucide-react'
import Image from 'next/image'

const teamMembers = [
  {
    id: 1,
    name: 'Olivia John',
    role: 'CEO & Founder',
    image: 'https://plus.unsplash.com/premium_photo-1661740345683-00516219d50d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlJTIwc3VpdCUyMGdpcmx8ZW58MHx8MHx8fDA%3D',
    social: { facebook: '#', twitter: '#', instagram: '#' },
  },
  {
    id: 2,
    name: 'Shakib Shafi',
    role: 'Product Designer',
    image: 'https://plus.unsplash.com/premium_photo-1661781226426-a91ebe1d34dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJkJTIwYm95fGVufDB8fDB8fHww',
    social: { facebook: '#', twitter: '#', instagram: '#' },
  },
  {
    id: 3,
    name: 'Sophia Ben',
    role: 'Developer',
    image: 'https://images.unsplash.com/photo-1697542636692-0d7577a242f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95JTIwb2ZmaWNlfGVufDB8fDB8fHww',
    social: { facebook: '#', twitter: '#', instagram: '#' },
  },
  {
    id: 4,
    name: 'Emily Carter',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1681164316457-b39eee94bda3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXglMjBkZXNpZ25lciUyMG1hbGV8ZW58MHx8MHx8fDA%3D',
    social: { facebook: '#', twitter: '#', instagram: '#' },
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-[#F5F3FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#FF6B6B] text-lg font-medium mb-4">Our Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Our awesome team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to processing the information in order to contact you and
            talk about your project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="mb-6 relative mx-auto">
                <div className="aspect-square w-48 mx-auto relative rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={member.social.facebook}
                  className="text-gray-600 hover:text-[#FF6B6B] transition-colors"
                  aria-label={`${member.name}'s Facebook`}
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="text-gray-600 hover:text-[#FF6B6B] transition-colors"
                  aria-label={`${member.name}'s Twitter`}
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={member.social.instagram}
                  className="text-gray-600 hover:text-[#FF6B6B] transition-colors"
                  aria-label={`${member.name}'s Instagram`}
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
