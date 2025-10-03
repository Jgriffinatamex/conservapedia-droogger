import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleSlugs, getArticleBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map(slug => ({ slug }));
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const { frontmatter, mdxSource } = await getArticleBySlug(slug);

  return (
    <article className="prose prose-invert prose-lg mx-auto py-12 px-4">
      <h1>{frontmatter.title}</h1>
      <p className="text-sm text-gray-400">{frontmatter.date}</p>
      <p>{frontmatter.tags}</p>
      <h3>{frontmatter.title}</h3>
      <MDXRemote source={mdxSource}/>
      <p>HI</p>
    </article>
  );
}
