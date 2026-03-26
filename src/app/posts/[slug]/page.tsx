import { createReader } from "@keystatic/core/reader";
import React from "react";
import Markdoc from "@markdoc/markdoc";
import Image from "next/image";
import Link from "next/link";
import keystaticConfig from "../../../../keystatic.config";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";

const reader = createReader(process.cwd(), keystaticConfig);

export async function generateStaticParams() {
  const posts = await reader.collections.posts.all();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const post = await reader.collections.posts.read(slug);
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col w-full">
        <Navbar alwaysShowBackground />
        <main className="grow w-full flex items-center justify-center">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Post Not Found</h1>
            <Link href="/posts" className="text-primary font-bold">
              Back to Posts
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { node } = await post.content();
  const errors = Markdoc.validate(node);
  if (errors.length) {
    console.error(errors);
    throw new Error('Invalid content');
  }
  const renderable = Markdoc.transform(node);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar alwaysShowBackground />
      <main className="grow w-full">
        <article className="w-full max-w-300 px-4 py-16 md:py-24 mx-auto">
          {/* Featured Image */}
          {post.image && (
            <div className="mb-8 -mx-4 md:mx-0 md:rounded-2xl overflow-hidden aspect-video bg-slate-200 dark:bg-slate-800">
              <Image
                src={post.image}
                alt={post.title}
                width={1200} 
                height={675}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
            {post.title}
          </h1>

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none">
            {Markdoc.renderers.react(renderable, React)}
          </div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <Link 
              href="/posts" 
              className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              <span className="material-symbols-outlined text-sm">arrow_left_alt</span>
              Back to Posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
