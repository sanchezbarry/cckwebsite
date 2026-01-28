'use client'

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface CellGroup {
  id: number;
  title: string;
  description: string;
  leader: string;
  day: string;
  time: string;
  image: string;
}

const CELL_GROUPS: CellGroup[] = [
  {
    id: 1,
    title: 'Love @ Bukit Timah',
    description: 'Meeting for prayer and fellowship in the city center',
    leader: 'Magdalene Chia',
    day: 'Wednesdays',
    time: '7:30pm',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Joy @ Simei-Tampines',
    description: 'College and young adult focused group',
    leader: 'Leonard Lam',
    day: 'Fridays',
    time: '8pm (Fortnightly)',
    image: '/filipinoweb.jpg',
  },
  {
    id: 3,
    title: 'Kindness @ CCK',
    description: 'Family oriented cell group with children activities',
    leader: 'William Loke',
    day: 'Sundays',
    time: '1.30pm (fortnightly)',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'Shalom @ Bukit Timah',
    description: 'Bible study and discipleship focused group',
    leader: 'Chris Ong',
    day: 'Saturdays',
    time: '5pm (Fortnightly)',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
  {
    id: 5,
    title: 'Love II @ Bukit Timah',
    description: 'Outreach and mission-minded cell group',
    leader: 'Magdalene Chia',
    day: 'Fridays',
    time: '7.30pm (Fortnightly)',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
  {
    id: 6,
    title: 'YCK @ Yio Chu Kang',
    description: 'Small group focused on spiritual growth',
    leader: 'Sukuna Raj',
    day: 'Saturdays',
    time: '7.30pm (Fortnightly)',
    image: '/cross.jpg',
  },
  {
    id: 7,
    title: 'Faithfulness @ CCK',
    description: 'Community service and outreach activities',
    leader: 'Shen Soh',
    day: 'Sundays',
    time: '1.30pm(fortnightly)',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
  },
  {
    id: 8,
    title: 'Doulous @ Bukit Timah',
    description: 'Focused on prayer and intercession',
    leader: 'James & Sharon Ong',
    day: 'Saturdays',
    time: '12pm (noon)',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
  },
  {
    id: 9,
    title: 'Adelphoi @ Tampines',
    description: 'Youth and teen focused cell group',
    leader: 'Sanchez & Amanda',
    day: 'Fridays',
    time: '7:30pm',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
  {
    id: 10,
    title: 'Youth @ CCK',
    description: 'Multi-generational fellowship and growth',
    leader: 'Sarah Seah',
    day: 'Sundays',
    time: '9.00am/1.30pm',
    image: '/agape.jpg',
  },
];

export default function CellGroups() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
          Cell Groups
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Join one of our vibrant cell groups for community, growth, and fellowship
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CELL_GROUPS.map((group) => (
          <Card key={group.id} className="overflow-hidden flex flex-col">
            <div className="relative w-full h-48">
              <Image
                src={group.image}
                alt={group.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
              <CardDescription>{group.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow">
              <div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Leader
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {group.leader}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Meeting
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {group.day} at {group.time}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
