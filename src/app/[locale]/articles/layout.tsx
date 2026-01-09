import React from 'react';
import Link from 'next/link';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import { client } from "@/sanity/client";

export default async function ArticlesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const query = `*[_type == "article"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        publishedAt
    }`;
    const articles = await client.fetch(query);


    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-4 gap-0">
            {/* Sidebar (1 Column) - Navigation */}
            <aside className="lg:col-span-1 border-r border-white/10 bg-neutral-950/80 backdrop-blur-sm sticky top-0 h-screen overflow-y-auto z-20">
                <div className="p-6 md:pt-24 space-y-8">
                    <div>
                        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400/70 mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                            Knowledge Base
                        </h2>

                        <nav className="space-y-1">
                            {articles.map((article: any) => (
                                <Link
                                    key={article.slug}
                                    href={`/articles/${article.slug}`}
                                    className="group block px-4 py-3 rounded-lg hover:bg-white/5 transition-all relative overflow-hidden"
                                >
                                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                                    <span className="block text-sm text-gray-400 group-hover:text-white font-medium transition-colors">
                                        {article.title}
                                    </span>
                                    {article.publishedAt && (
                                        <span className="text-[10px] text-gray-600 font-mono mt-1 block group-hover:text-cyan-400/50">
                                            {new Date(article.publishedAt).toLocaleDateString()}
                                        </span>
                                    )}
                                </Link>
                            ))}

                            {articles.length === 0 && (
                                <div className="px-4 py-3 text-sm text-gray-600 italic border border-dashed border-white/10 rounded-lg">
                                    System Offline. No data stream detected.
                                </div>
                            )}
                        </nav>
                    </div>

                    {/* Fictional Categories (Visual Only) to fill space if empty */}
                    {articles.length < 5 && (
                        <div className="opacity-40 pointer-events-none select-none grayscale">
                            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-4 px-4">Offline Modules</h3>
                            <div className="space-y-3 px-4">
                                <div className="h-4 bg-white/5 rounded w-3/4" />
                                <div className="h-4 bg-white/5 rounded w-1/2" />
                                <div className="h-4 bg-white/5 rounded w-5/6" />
                            </div>
                        </div>
                    )}
                </div>
            </aside>

            {/* Content Area (3 Columns) - Reading */}
            <main className="lg:col-span-3 relative min-h-screen">
                {/* Dynamic Background Specific to this Area */}
                <div className="absolute inset-0 z-0 bg-black">
                    <ParticlesBackground
                        particleColors={['#818cf8', '#2dd4bf']} // Indigo & Teal/Cyan (Cyber-Esoteric)
                        particleCount={120}
                        alphaParticles={true}
                        speed={0.3}
                        particleBaseSize={150}
                        sizeRandomness={1.5}
                        className="opacity-60"
                    />
                </div>

                {/* Content Wrapper */}
                <div className="relative z-10 min-h-screen p-6 md:p-12 lg:p-24 flex justify-center">
                    <div className="w-full max-w-3xl">
                        {/* Glassmorphism Card for Text Legibility */}
                        <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            {/* Decorative top line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />

                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
