// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    // kind: process.env.NODE_ENV === 'production' ? 'github' : 'local',
    kind: 'github',
    repo: {
      owner: 'sanchezbarry',
      name: 'cckwebsite',
    },
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
        image: fields.image({ 
          label: 'Featured Image',
          directory: 'public/posts-images',
          publicPath: '/posts-images/',
        }),
      },
    }),
  },
});