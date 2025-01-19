import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-[#F5F3FF] min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-navy-900 leading-tight mb-6">
              Your ideas,
              <br />
              make it happen
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              The sky was cloudless and of a deep dark blue.
              The spectacle before us was indeed sublime.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-8"
              >
                Hire Us
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-8"
              >
                Arrange Meeting
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://source.unsplash.com/1600x900/?technology,software"
              alt="Software development illustration"
              width={600}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}
