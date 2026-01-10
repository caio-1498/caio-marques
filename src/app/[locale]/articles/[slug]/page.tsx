// import { client } from '@/sanity/client';
import { notFound } from 'next/navigation';
// import { PortableText } from 'next-sanity';

export default async function DynamicArticlePage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;

    // Simple about me check
    if (slug === 'about') {
        // Reuse the existing about page logic or simply let it render if it was a file.
        // But the user deleted specific files? No, the user asked to erase "admin page ideas".
        // The "about" page was a file at /articles/about/page.tsx. 
        // If that file exists, this dynamic route [slug] won't catch it. 
        // So we focus on Sanity articles here.
    }

    // TODO: Payload Migration
    // const query = `*[_type == "article" && slug.current == $slug][0]`;
    // const article = await client.fetch(query, { slug });
    const article = { title: "Migrating...", publishedAt: new Date().toISOString(), body: [] };

    if (!article) {
        notFound();
    }

    return (
        <article className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {article.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-400 mb-12 border-b border-white/10 pb-8">
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>

            <div className="text-gray-300">
                <p>Content is migrating to Payload CMS...</p>
                {/* <PortableText value={article.body} /> */}
            </div>
        </article>
    );
}

export async function generateStaticParams() {
    // TODO: Payload Migration
    // const query = `*[_type == "article"] { "slug": slug.current }`;
    // const articles = await client.fetch(query);
    // return articles.map((article: any) => ({
    //    slug: article.slug
    // }));
    return [];
}
