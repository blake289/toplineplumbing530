import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  author: string;
  moneyPage: string;
};

type Faq = { q: string; a: string };

function parseFile(slug: string) {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);

  const meta: BlogPostMeta = {
    slug,
    title: String(data.title ?? ''),
    description: String(data.description ?? ''),
    excerpt: String(data.excerpt ?? ''),
    date: String(data.date ?? ''),
    author: String(data.author ?? ''),
    moneyPage: String(data.moneyPage ?? ''),
  };

  const faqs: Faq[] = Array.isArray(data.faqs)
    ? data.faqs.map((f: { q?: string; a?: string }) => ({
        q: String(f.q ?? ''),
        a: String(f.a ?? ''),
      }))
    : [];

  return { meta, content, faqs };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => parseFile(file.replace(/\.md$/, '')).meta)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPostBySlug(
  slug: string
): { meta: BlogPostMeta; html: string; faqs: Faq[] } | null {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const { meta, content, faqs } = parseFile(slug);
  const html = marked.parse(content, { async: false }) as string;

  return { meta, html, faqs };
}
