'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Add Unsplash random image URLs dynamically for placeholders
const testimonials = [
  {
    id: 1,
    name: 'Emily Noraan',
    role: 'Designer',
    image: 'https://plus.unsplash.com/premium_photo-1661505218403-c684557a824d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwb2ZmaWNlfGVufDB8fDB8fHww',
    quote:
      'We were looking for a platform that was essentially a CRM for influencer management that also allowed us to aggregate our campaign analytics and access the insights we need to properly evaluate influencers.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    image: 'https://plus.unsplash.com/premium_photo-1664475546048-b1e3768d2b14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwb2ZmaWNlcnxlbnwwfHwwfHx8MA%3D%3D',
    quote:
      'The team delivered exactly what we needed. Their attention to detail and commitment to quality really sets them apart from other agencies we\'ve worked with.',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VvJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    quote:
      'Outstanding service and exceptional results. They transformed our vision into reality with remarkable precision and creativity.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#FF6B6B] text-lg font-medium mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Words from satisfied clients
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Though the gravity still dragged at him, his muscles were making great efforts to adjust; after the daily classes he
            no longer collapsed immediately into bed. Only the nightmares got worse.
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="p-6">
                  <div className="relative grid md:grid-cols-[300px,1fr] gap-8 items-center bg-white rounded-2xl p-8 shadow-lg">
                    <div className="relative aspect-[4/5] md:aspect-square rounded-xl overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-4 -left-6 w-12 h-12 text-[#FF6B6B] opacity-20" />
                      <blockquote className="text-gray-700 text-lg mb-6 relative">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <cite className="not-italic font-semibold text-gray-900">
                          {testimonial.name}
                        </cite>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-8">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
