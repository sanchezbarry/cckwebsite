import React from 'react';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import Link from 'next/link';
import Image from 'next/image';

const reader = createReader(process.cwd(), keystaticConfig);

export const LatestPosts = async () => {
  // Fetch all posts
  const allPosts = await reader.collections.posts.all();
  
  // Sort by date (assuming posts are in descending order by default)
  // Get the first 3 posts
  const latestPosts = allPosts.slice(0, 3);

  return (
    <section className="w-full max-w-300 px-4 py-16 md:py-24 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold font-display">Latest Events</h2>
          <p className="text-slate-500 mt-3 text-lg">Stay up to date with our latest events and updates.</p>
        </div>
        <Link 
          href="/events"
          className="h-12 px-6 border border-slate-300 dark:border-slate-700 rounded-lg font-bold font-display text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200"
        >
          View All Events
        </Link>
      </div>

      {latestPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-500 dark:text-slate-400">No posts available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article key={post.slug} className="flex flex-col group cursor-pointer">
              {/* Featured Image */}
              <div className="overflow-hidden rounded-2xl aspect-4/3 mb-5 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 relative shadow-sm">
                {post.entry.image ? (
                  <Image
                    src={post.entry.image}
                    alt={post.entry.title}
                    width={500}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-5xl text-slate-400 dark:text-slate-600">article</span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {post.entry.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {/* Extract a preview from the content - this is a placeholder */}
                  Click for more event details.
                </p>
                <Link 
                  href={`/posts/${post.slug}`}
                  className="text-primary font-bold text-sm mt-1 flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Read More <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
