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
    description: 'Agape Cell is a group of retirees who meet to understand and apply God’s word to our daily lives. especially practising agape love. During our weekly meetings, we have fellowship in sharing God’s blessings in food. After which, we study God’s word besides sharing our blessings and struggles. Before closing,we pray for one another. We welcome any seniors to join us to journey with us in the foot steps of Jesus.',
    leader: 'Magdalene Chia',
    day: 'Wednesdays (Weekly)',
    time: '7pm',
    image: '/agapelove.jpeg',
  },
  {
    id: 2,
    title: 'Joy @ Simei-Tampines',
    description: 'Our Cell Group secret name is PTL, for People That Love! Vibrant, caring, full of JOY!',
    leader: 'Leonard Lam',
    day: '2nd & 4th Fridays (Fortnightly)',
    time: '8pm',
    image: '/filipinoweb.jpg',
  },
  {
    id: 3,
    title: 'Kindness @ CCK',
    description: 'Bible study and discipleship focused group',
    leader: 'William Loke',
    day: 'Sundays (Fortnightly)',
    time: '1.30pm',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'Shalom @ Bukit Timah',
    description: 'We are a fun bunch of friends from all walks of life. Come join us for dinner and a time of fellowship as we explore God’s word and journey through life’s seasons together.',
    leader: 'Chris Ong',
    day: 'Saturdays (Fortnightly)',
    time: '6.30pm',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
  {
    id: 5,
    title: 'Love II @ Central',
    description: 'Zoom together for fellowship, share our experiences and understanding of God’s Word in relation to our lives. 🙏 Pray for one another to overcome life’s challenges.',
    leader: 'Michael & Regina',
    day: 'Fridays (Last of the month)',
    time: '8pm',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
  {
    id: 6,
    title: 'YCK @ Bishan',
    description: 'Small group focused on spiritual growth',
    leader: 'Sukuna Raj & David Ow',
    day: 'Saturdays',
    time: '1.30pm (Monthly)',
    image: '/cross.jpg',
  },
  {
    id: 7,
    title: 'Faithfulness @ CCK',
    description: 'Bible study and discipleship focused group',
    leader: 'Shen Soh',
    day: 'Sundays',
    time: '1.30pm (Fortnightly)',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
  },
  {
    id: 8,
    title: 'Doulous @ Bukit Timah',
    description: 'Doulos cell is a cell group that meets twice a month to grow in our understanding of God and to share life together. We welcome families with children and create a safe space to share our joys and struggles, supporting one another and showing God’s love in practical ways.',
    leader: 'James & Sharon Ong',
    day: 'Saturdays',
    time: '12.30pm (Fortnightly)',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
  },
  {
    id: 9,
    title: 'Adelphoi @ Tampines',
    description: 'Adelphoi is a cell group who come together to learn, grow and support one another in our faith journey. We meet every 2nd Friday of the month to share a meal, fellowship and study God’s word together. We welcome all who are seeking to deepen their relationship with God and build meaningful connections with others.',
    leader: 'Sanchez & Amanda',
    day: 'Fridays (2nd Friday of the month)',
    time: '7:30pm',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  },
  {
    id: 10,
    title: 'Youth @ CCK',
    description: 'The aim of the youth cell group is to grow closer to God and each other through breaking into small groups, digging into God’s word, and sharing life together. Each cell is broken into different age groups so that journey with one another in the same season of life.  We believe that is something spiritual and meaningful in journeying with each other in a small group setting. If you are a youth looking for a community in a similar phase of life, come join us. ',
    leader: 'Amos Chen',
    day: 'Saturdays & Sundays (2nd & 4th of the month)',
    time: 'Sec School: Sundays at 11am to 12.30 pm | JC & Poly: Saturday at 5pm to 7pm | Uni: Sunday at 12.30pm | Youth service on Sunday (1st Sunday) at 12.30pm',
    image: '/youthcell.jpg',
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
            <CardContent className="space-y-3 grow">
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
