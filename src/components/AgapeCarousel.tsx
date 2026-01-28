'use client'

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

interface AgapeItem {
  id: number;
  title: string;
  image: string;
}

const AGAPE_ITEMS: AgapeItem[] = [
  {
    id: 1,
    title: 'Community Fellowship',
    image: '/agapepage1.jpg',
  },
  {
    id: 2,
    title: 'Worship Service',
    image: '/agapepage2.jpg',
  },
  {
    id: 3,
    title: 'Bible Study',
    image: '/agapepage3.jpg',
  },
  {
    id: 4,
    title: 'Community Outreach',
    image: '/agapepage4.jpg',
  },
  {
    id: 5,
    title: 'Youth Programs',
    image: '/agapepage5.jpg',
  },
  {
    id: 6,
    title: 'Prayer Meeting',
    image: '/agapepage6.jpg',
  },
    {
    id: 7,
    title: 'Prayer Meeting',
    image: '/agapepage7.jpg',
  },
    {
    id: 8,
    title: 'Prayer Meeting',
    image: '/agapepage8.jpg',
  },
    {
    id: 9,
    title: 'Prayer Meeting',
    image: '/agapepage9.jpg',
  },
];

export default function AgapeCarousel() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
          Agape Moments
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Celebrating our community and fellowship together
        </p>
      </div>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {AGAPE_ITEMS.map((item) => (
            <CarouselItem key={item.id} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {/* <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
                  <h3 className="text-white font-bold font-display text-lg">
                    {item.title}
                  </h3>
                </div> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}
