"use client";
import { useTranslations } from 'next-intl';
import { SpotlightCard } from './ui/SpotlightCard';
import { Code2, Database, Brain, Globe, Server } from 'lucide-react';

export const Stack = () => {
    const t = useTranslations('Stack');

    return (
        <section className="py-16 relative" id="stack">
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
                            <h3 className="text-xl font-bold mb-2 text-white">{t('react_next_title')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t('react_next_desc')}</p>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard>
                        <div className="flex flex-col h-full">
                            <Brain className="w-10 h-10 text-cyber-secondary mb-6" />
                            <h3 className="text-xl font-bold mb-2 text-white">{t('genai_title')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t('genai_desc')}</p>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard>
                        <div className="flex flex-col h-full">
                            <Server className="w-10 h-10 text-cyber-accent mb-6" />
                            <h3 className="text-xl font-bold mb-2 text-white">{t('dotnet_title')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t('dotnet_desc')}</p>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard>
                        <div className="flex flex-col h-full">
                            <Globe className="w-10 h-10 text-blue-400 mb-6" />
                            <h3 className="text-xl font-bold mb-2 text-white">{t('angular_title')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t('angular_desc')}</p>
                        </div>
                    </SpotlightCard>


                </div>
            </div>
        </section>
    )
}
