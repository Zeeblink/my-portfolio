import { client } from "@/sanity-lib/client";
import { blogQuery } from "@/sanity-lib/queries";
import { BlogList } from "@/components/sections/Blog";
import Section from "@/components/Section";

export default async function BlogPage() {
  const posts = await client.fetch(blogQuery);
  
  return (
    <Section id="blog" className="min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <BlogList posts={posts} />
    </Section>
  );
}