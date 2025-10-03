import fs from "fs";
import path from "path";
//import matter from "gray-matter";
//import { serialize } from "next-mdx-remote/serialize";
import { compileMDX } from "next-mdx-remote/rsc";

const CONTENT_DIR = path.join(process.cwd(), "articles");

// Get all article slugs
export function getArticleSlugs() {
  return fs
  .readdirSync(CONTENT_DIR)
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => file.replace(/\.mdx$/, ""));
}

// Get single article by slug
export async function getArticleBySlug(slug) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");

  const { frontmatter, content } = await compileMDX({
    source,
    options:{ parseFrontmatter: true },
  });

  return { frontmatter, mdxSource: content };
}

