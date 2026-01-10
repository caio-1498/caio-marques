import PillNav from '@/components/PillNav';
import ArticlesView from '@/components/ArticlesView';
import React from 'react';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import { client } from "@/sanity/client";

export default async function ArticlesLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;

    const query = `*[_type == "article"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        publishedAt
    }`;
    const articles = await client.fetch(query);

    // Mock Data for Visualization
    const mockArticles = [
        { title: "The Future of AI in Web Development", slug: "future-ai-web", publishedAt: "2024-01-15" },
        { title: "Understanding React Server Components", slug: "react-server-components", publishedAt: "2024-02-10" },
        { title: "Mastering Framer Motion", slug: "mastering-framer-motion", publishedAt: "2024-03-05" },
        { title: "Cybersecurity Best Practices 2024", slug: "cybersecurity-2024", publishedAt: "2024-03-20" },
        { title: "Next.js 15: What's New?", slug: "nextjs-15-news", publishedAt: "2024-04-01" },
        { title: "Designing for Dark Mode", slug: "dark-mode-design", publishedAt: "2024-04-12" },
        { title: "The Rise of Edge Computing", slug: "edge-computing-rise", publishedAt: "2024-05-08" },
        { title: "Optimizing Web Performance", slug: "web-perf-opt", publishedAt: "2024-05-22" },
        { title: "Introduction to Rust for JS Developers", slug: "rust-for-js", publishedAt: "2024-06-01" },
        { title: "Building Scalable Microservices", slug: "scalable-microservices", publishedAt: "2024-06-15" },
        { title: "The State of CSS 2024", slug: "css-2024", publishedAt: "2024-07-02" },
        { title: "AI Agents: The Next Frontier", slug: "ai-agents", publishedAt: "2024-07-20" },
        { title: "Deploying with Docker & Kubernetes", slug: "docker-k8s", publishedAt: "2024-08-05" },
        { title: "GraphQL vs REST: A 2024 Perspective", slug: "graphql-vs-rest", publishedAt: "2024-08-18" },
        { title: "Accessible Web Design Patterns", slug: "a11y-patterns", publishedAt: "2024-09-01" },
        { title: "Machine Learning on the Edge", slug: "ml-edge", publishedAt: "2024-09-12" },
        { title: "Serverless Architecture Patterns", slug: "serverless-patterns", publishedAt: "2024-09-25" },
        { title: "WebAssembly: Beyond the Browser", slug: "wasm-beyond", publishedAt: "2024-10-05" },
        { title: "Advanced TypeScript Features", slug: "advanced-ts", publishedAt: "2024-10-18" },
        { title: "Green Coding: Sustainable Tech", slug: "green-coding", publishedAt: "2024-11-01" },
        { title: "Quantum Computing: A Primer", slug: "quantum-computing", publishedAt: "2024-11-15" },
        { title: "Blockchain in SCM", slug: "blockchain-scm", publishedAt: "2024-12-01" },
        { title: "AR/VR on the Web", slug: "ar-vr-web", publishedAt: "2024-12-10" },
        { title: "Zero Trust Security", slug: "zero-trust", publishedAt: "2024-12-20" },
        { title: "Ethical AI Development", slug: "ethical-ai", publishedAt: "2024-12-25" },
        { title: "React Native: New Architecture", slug: "react-native-new", publishedAt: "2025-01-05" },
        { title: "Svelte 5 Runes", slug: "svelte-5", publishedAt: "2025-01-12" },
        { title: "Vite: The Build Tool for Modern Web", slug: "vite-modern-web", publishedAt: "2025-01-20" }
    ];

    // Combine real and mock articles (Mock first for demo visibility)
    // Combine real and mock articles (Mock first for demo visibility)
    // REMOVED MOCK DATA - INTEGRATING WITH SANITY
    const displayArticles = articles;

    const navItems = [
        { label: 'Articles', href: `/${locale}/articles` },
        { label: 'IA Content', href: `/${locale}/ia-content` }
    ];

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-4 gap-0">
            {/* Dynamic Background (Global for Articles Route) */}
            <div className="fixed inset-0 z-[-1] bg-black">
                <ParticlesBackground
                    particleColors={['#818cf8', '#2dd4bf']}
                    particleCount={100}
                    alphaParticles={true}
                    speed={0.2}
                    particleBaseSize={120}
                    sizeRandomness={1.5}
                    className="opacity-40"
                />
            </div>

            {/* Sidebar (1 Column) - Navigation */}
            {/* Mobile: Static/Scrollable at top. Desktop: Sticky full height. */}
            <aside className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/20 bg-black/20 backdrop-blur-xl lg:sticky lg:top-0 lg:h-screen z-20 flex flex-col max-h-[50vh] lg:max-h-screen overflow-hidden">
                <div className="flex-1 flex flex-col h-full relative">

                    {/* Top Spacer / Back Button Clearance */}
                    {/* Desktop: ~120px to sit under back button. Mobile: adequate padding. */}
                    <div className="h-24 lg:h-28 shrink-0"></div>


                    {/* Pill Nav - Sticky Header within Sidebar */}
                    <div className="shrink-0 px-6 pb-2 z-30 bg-gradient-to-b from-transparent via-black/20 to-transparent lg:bg-none">
                        <PillNav
                            logo=""
                            logoAlt=""
                            items={navItems}
                            activeHref={`/${locale}/articles`}
                            baseColor="transparent"
                            pillColor="rgba(255, 255, 255, 0.1)"
                            pillTextColor="#ccc"
                            hoveredPillTextColor="#fff"
                            className="!px-0 !justify-start"
                        />
                    </div>

                    {/* Scrollable List Area */}
                    {/* Gap is small (pb-2 above + pt-0 here implies small gap). */}
                    <div className="flex-1 overflow-hidden relative mt-2">
                        <ArticlesView articles={displayArticles} locale={locale} />
                    </div>
                </div>
            </aside>

            {/* Content Area (3 Columns) - Reading */}
            {/* Mobile: Pushed down by sidebar. Desktop: Right side. */}
            <main className="lg:col-span-3 relative min-h-screen flex flex-col">
                {/* Content Wrapper */}
                <div className="relative z-10 flex-1 p-6 md:p-12 lg:p-24 flex justify-center">
                    <div className="w-full max-w-4xl pt-12 lg:pt-0"> {/* Mobile: Add top padding if needed */}
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
