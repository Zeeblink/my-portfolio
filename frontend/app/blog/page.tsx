import { client } from "@/sanity-lib/client";
import { blogQuery } from "@/sanity-lib/queries";
import { BlogList } from "@/components/sections/BlogList";
import Section from "@/components/Section";

export default async function BlogPage() {
  const posts = await client.fetch(blogQuery);
  
  return (
    <Section id="blog" className="min-h-screen">
      <h1 className="text-4xl text-center font-bold mb-16">Welcome to my Blog</h1>
      <BlogList posts={posts} />
    </Section>
  );
}