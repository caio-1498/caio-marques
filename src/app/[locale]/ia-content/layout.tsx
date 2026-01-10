import PillNav from '@/components/PillNav';
import ArticlesView from '@/components/ArticlesView';
import React from 'react';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import { client } from "@/sanity/client";

export default async function IAIntegrationsLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;

    const query = `*[_type == "iaContent"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        publishedAt
    }`;
    const iaContents = await client.fetch(query);

    const navItems = [
        { label: 'Articles', href: `/${locale}/articles` },
        { label: 'IA Content', href: `/${locale}/ia-content` }
    ];

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-4 gap-0">
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-[-1] bg-black">
                <ParticlesBackground
                    particleColors={['#c084fc', '#f472b6']} // Different colors for integrations
                    particleCount={100}
                    alphaParticles={true}
                    speed={0.2}
                    particleBaseSize={120}
                    sizeRandomness={1.5}
                    className="opacity-40"
                />
            </div>

            {/* Sidebar (1 Column) - Navigation */}
            <aside className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-white/20 bg-black/20 backdrop-blur-xl lg:sticky lg:top-0 lg:h-screen z-20 flex flex-col max-h-[50vh] lg:max-h-screen overflow-hidden">
                <div className="flex-1 flex flex-col h-full relative">

                    {/* Top Spacer / Back Button Clearance */}
                    <div className="h-24 lg:h-28 shrink-0"></div>

                    {/* Pill Nav */}
                    <div className="shrink-0 px-6 pb-2 z-30 bg-gradient-to-b from-transparent via-black/20 to-transparent lg:bg-none">
                        <PillNav
                            logo=""
                            logoAlt=""
                            items={navItems}
                            activeHref={`/${locale}/ia-content`} // Active state
                            baseColor="transparent"
                            pillColor="rgba(255, 255, 255, 0.1)"
                            pillTextColor="#ccc"
                            hoveredPillTextColor="#fff"
                            className="!px-0 !justify-start"
                        />
                    </div>

                    {/* Scrollable List Area */}
                    <div className="flex-1 overflow-hidden relative mt-2">
                        <ArticlesView articles={iaContents} locale={locale} />
                    </div>
                </div>
            </aside>

            {/* Content Area */}
            <main className="lg:col-span-3 relative min-h-screen flex flex-col">
                <div className="relative z-10 flex-1 p-6 md:p-12 lg:p-24 flex justify-center">
                    <div className="w-full max-w-4xl pt-12 lg:pt-0">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
