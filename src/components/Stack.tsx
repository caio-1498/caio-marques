"use client";
import { useTranslations } from 'next-intl';
import { SpotlightCard } from './ui/SpotlightCard';
import { Code2, Database, Brain, Globe, Server } from 'lucide-react';

export const Stack = () => {
    const t = useTranslations('Stack');

    return (
        <section className="py-32 relative" id="stack">
            <div className="container mx-auto px-6">
                <div className="mb-16 border-b border-cyber-muted pb-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        <span className="text-cyber-primary font-mono text-2xl mr-4">01.</span>{t('title')}
                    </h2>
                    <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">{t('subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SpotlightCard className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex flex-col h-full">
                            <Code2 className="w-10 h-10 text-cyber-primary mb-6" />
                            <h3 className="text-xl font-bold mb-2 text-white">React & Next.js</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Expertise in App Router, Server Components (RSC), and creating accessible, high-performance user interfaces.</p>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard>
                        <div className="flex flex-col h-full">
                            <Brain className="w-10 h-10 text-cyber-secondary mb-6" />
                            <h3 className="text-xl font-bold mb-2 text-white">GenAI & LLMs</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Specialized in Google Gemini Pro integration, function calling, and building context-aware AI agents.</p>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard>
                        <div className="flex flex-col h-full">
                            <Server className="w-10 h-10 text-cyber-accent mb-6" />
                            <h3 className="text-xl font-bold mb-2 text-white">.NET & Node.js</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Architecting scalable REST APIs with NestJS or .NET. Deep understanding of Microservices and Design Patterns.</p>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard>
                        <div className="flex flex-col h-full">
                            <Globe className="w-10 h-10 text-blue-400 mb-6" />
                            <h3 className="text-xl font-bold mb-2 text-white">Angular</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Deep knowledge of Dependency Injection, RxJS streams, and enterprise-scale modular architecture.</p>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard className="md:col-span-2">
                        <div className="flex flex-col h-full">
                            <Database className="w-10 h-10 text-orange-400 mb-6" />
                            <h3 className="text-xl font-bold mb-2 text-white">Sanity Headless CMS</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Building structured content platforms with Sanity.io. GROQ queries, real-time preview, and customizable content studios.</p>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    )
}
