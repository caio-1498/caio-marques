import PillNav from '@/components/PillNav';
import ArticlesView from '@/components/ArticlesView';
import React from 'react';
import ParticlesBackground from '@/components/ui/ParticlesBackground';

export default async function IAIntegrationsLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;

    // Mock Data for IA Integrations
    const integrations = [
        { title: "OpenAI GPT-4 Turbo", slug: "gpt-4-turbo", publishedAt: "2024-04-01" },
        { title: "Claude 3 Opus", slug: "claude-3-opus", publishedAt: "2024-03-09" },
        { title: "Google Gemini 1.5 Pro", slug: "gemini-1-5-pro", publishedAt: "2024-02-15" },
        { title: "Stable Diffusion XL", slug: "sdxl", publishedAt: "2023-07-26" },
        { title: "Midjourney V6", slug: "midjourney-v6", publishedAt: "2023-12-21" },
        { title: "Meta Llama 3", slug: "llama-3", publishedAt: "2024-04-18" },
        { title: "Mistral Large", slug: "mistral-large", publishedAt: "2024-02-26" },
        { title: "Vercel AI SDK", slug: "vercel-ai-sdk", publishedAt: "2023-06-14" },
        { title: "LangChain", slug: "langchain", publishedAt: "2022-10-17" },
        { title: "Hugging Face Transformers", slug: "hf-transformers", publishedAt: "2019-11-01" }
    ];

    const navItems = [
        { label: 'Articles', href: `/${locale}/articles` },
        { label: 'IA Integrations', href: `/${locale}/ia-integrations` }
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
                            activeHref={`/${locale}/ia-integrations`} // Active state
                            baseColor="transparent"
                            pillColor="rgba(255, 255, 255, 0.1)"
                            pillTextColor="#ccc"
                            hoveredPillTextColor="#fff"
                            className="!px-0 !justify-start"
                        />
                    </div>

                    {/* Scrollable List Area */}
                    <div className="flex-1 overflow-hidden relative mt-2">
                        <ArticlesView articles={integrations} locale={locale} />
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
