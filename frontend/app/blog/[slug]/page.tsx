import { client } from "@/sanity-lib/client";
import { postQuery, blogQuery } from "@/sanity-lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { components } from "@/lib/portableText";
import { urlFor } from "@/sanity-lib/client";
import { notFound } from "next/navigation";

interface Params {
    params: Promise<{
        slug: string;
    }>;
}

// This is a dynamic route for blog posts.
export default async function BlogPost({ params }: Params) {

    const { slug } = await params;
    // Fetch the post data using our Sanity client
    const post = await client.fetch(postQuery, { slug });

    // Use Next.js's new notFound() helper to gracefully handle missing data
    if (!post) return notFound();

    return (
        <article className="max-w-3xl mx-auto py-16 px-4">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex gap-4 text-gray-400">
                    <span>{new Date(post._createdAt).toLocaleDateString()}</span>
                    <span>by {post.authorName}</span>
                </div>
            </div>

            {post.mainImage ? (
                <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="rounded-lg mb-8"
                />
            ) : null}

            <div className="prose prose-invert max-w-none">
                <PortableText value={post.body} components={components} />
            </div>
        </article>
    );
}

// Next.js 15’s new static param generation for dynamic routes.
export async function generateStaticParams() {
    const posts = await client.fetch(blogQuery);
    return posts.map((post: { slug: { current: string } }) => ({
        slug: post.slug.current,
    }));
}
