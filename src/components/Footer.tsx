"use client";
import { useTranslations } from 'next-intl';

export const Footer = () => {
    const t = useTranslations('Footer');
    return (
        <footer className="py-8 bg-cyber-dark border-t border-cyber-border text-center">
            <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-2">
                <p className="text-gray-600 font-mono text-xs md:text-sm">
                    © {new Date().getFullYear()} Caio Marques. {t('copyright')}
                </p>
                <div className="flex gap-2 text-xs text-gray-700">
                    <span>Next.js 16</span>
                    <span>•</span>
                    <span>TypeScript</span>
                    <span>•</span>
                    <span>Tailwind</span>
                </div>
            </div>
        </footer>
    )
}
