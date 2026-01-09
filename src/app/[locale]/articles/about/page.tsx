
import React from 'react';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('About');

    return (
        <article className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {t('title')}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-400 mb-12 border-b border-white/10 pb-8">
                <span>Caio Marques</span>
                <span>•</span>
                <span className="px-2 py-1 bg-white/10 rounded text-xs text-white">Profile</span>
            </div>

            <div className="space-y-6 text-gray-300">
                <p className="text-xl leading-relaxed text-white font-medium">
                    {t('intro')}
                </p>
                <p>
                    {t('bio_p1')}
                </p>
                <p>
                    {t('bio_p2')}
                </p>
            </div>
        </article>
    );
}
