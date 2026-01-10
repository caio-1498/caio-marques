"use client";
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';

export const Navigation = () => {
    const t = useTranslations('Navigation');
    const router = useRouter();
    const currentLocale = useLocale();
    const pathname = usePathname();

    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const switchLocale = (newLocale: string) => {
        // Basic locale switching logic for /en /pt
        // If path is /en, replace with /pt
        const segments = pathname.split('/');
        // segments[0] is empty, segments[1] is locale usually
        if (segments[1] === 'en' || segments[1] === 'pt') {
            segments[1] = newLocale;
            router.replace(segments.join('/'));
        } else {
            // if no locale (e.g. root rewritten), assumes default
            router.replace(`/${newLocale}${pathname}`);
        }
    };

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-border/50"
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href={`/${currentLocale}`} className="text-2xl font-bold tracking-tighter text-white group">
                    <span className="text-cyber-primary group-hover:text-cyber-secondary transition-colors">&lt;</span>
                    CM
                    <span className="text-cyber-primary group-hover:text-cyber-secondary transition-colors">/&gt;</span>
                </Link>

                <div className="flex items-center gap-8">
                    <div className="hidden md:flex gap-8">
                        <Link href={`/${currentLocale}`} className="text-sm font-mono text-gray-400 hover:text-cyber-primary transition-colors uppercase tracking-widest cursor-pointer">
                            {t('home')}
                        </Link>
                        {/* Placeholder for Articles - creating route next */}
                        <Link href={`/${currentLocale}/articles`} className="text-sm font-mono text-gray-400 hover:text-cyber-primary transition-colors uppercase tracking-widest cursor-pointer">
                            {t('articles')}
                        </Link>
                        <Link href={`/${currentLocale}/ia-content`} className="text-sm font-mono text-gray-400 hover:text-cyber-primary transition-colors uppercase tracking-widest cursor-pointer">
                            IA CONTENT
                        </Link>
                    </div>

                    <div className="h-4 w-px bg-cyber-border hidden md:block" />

                    <div className="flex gap-1 font-mono text-xs">
                        <button
                            onClick={() => switchLocale('en')}
                            className={clsx("px-2 py-1 transition-colors cursor-pointer", currentLocale === 'en' ? "text-cyber-primary bg-cyber-primary/10" : "text-gray-500 hover:text-white")}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => switchLocale('pt')}
                            className={clsx("px-2 py-1 transition-colors cursor-pointer", currentLocale === 'pt' ? "text-cyber-primary bg-cyber-primary/10" : "text-gray-500 hover:text-white")}
                        >
                            PT
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}
