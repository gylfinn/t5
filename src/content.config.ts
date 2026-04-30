import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const role = z.enum(['tank', 'raid', 'adds', 'move', 'heal', 'dispel', 'interrupt']);

const figure = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

const bosses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/bosses' }),
  schema: z.object({
    slug: z.string(),
    order: z.number(),
    raid: z.enum(['tk', 'ssc']),
    name: z.string(),
    tocLabel: z.string().optional(),
    tagline: z.string(),
    portrait: z.string().optional(),
    difficulty: z.number().min(1).max(5),
    stats: z.array(z.object({
      k: z.string(),
      v: z.string(),
    })),
    tldr: z.array(z.string()).min(2).max(4).optional(),
    images: z.array(figure).optional(),
    mechanicsHeading: z.string().optional(),
    mechanics: z.array(z.object({
      role,
      label: z.string().optional(),
      name: z.string(),
      text: z.string(),
    })),
    phases: z.array(z.object({
      num: z.string(),
      name: z.string(),
      text: z.string(),
      image: figure.optional(),
    })).optional(),
    strategy: z.string().optional(),
    tactics: z.array(z.string()).optional(),
    roleTips: z.array(z.object({
      role: z.enum(['tank', 'melee', 'ranged', 'heal']),
      tips: z.array(z.string()),
    })).optional(),
    keyPoints: z.array(z.string()),
    loot: z.string().optional(),
  }),
});

const trashGroups = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/trash' }),
  schema: z.object({
    raid: z.enum(['tk', 'ssc']),
    order: z.number(),
    title: z.string(),
    forBoss: z.string().optional(),
    images: z.array(figure).optional(),
    notes: z.array(z.string()),
  }),
});

export const collections = { bosses, trashGroups };
