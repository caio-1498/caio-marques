"use client";

import React from 'react';
import AnimatedList from './AnimatedList';
import { useRouter } from 'next/navigation';

interface Article {
    slug: string;
    title?: string;
    publishedAt: string;
}

interface ArticlesViewProps {
    articles: Article[];
    locale: string;
}

export default function ArticlesView({ articles, locale }: ArticlesViewProps) {
    const router = useRouter();

    // Use titles if available, otherwise slugs
    const listItems = articles.map(a => a.title || a.slug);

    const handleItemSelect = (item: string, index: number) => {
        // We need to get the slug from the original articles array using the index
        const article = articles[index];
        if (article) {
            router.push(`/${locale}/articles/${article.slug}`);
        }
    };

    return (
        <div className="w-full h-full">
            <AnimatedList
                items={listItems}
                onItemSelect={handleItemSelect}
                className="w-full"
                itemClassName="border-b border-white/5 hover:bg-white/5 transition-colors duration-300 rounded-none !p-3"
                showGradients={false}
                displayScrollbar={false}
            />
        </div>
    );
}
