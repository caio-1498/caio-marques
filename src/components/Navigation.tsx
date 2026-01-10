"use client";
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';

export const Navigation = () => {
    const t = useTranslations('Navigation');
    const router = useRouter();
    const currentLocale = useLocale();
    const pathname = usePathname();

    const [hidden, setHidden] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        setMounted(true);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const switchLocale = (newLocale: string) => {
        if (!mounted) return;

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
            <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
                {/* Logo - Mobile Only */}
                <div className="md:hidden">
                    <Link href={`/${currentLocale}`} className="text-2xl font-bold tracking-tighter text-white group">
                        <span className="text-cyber-primary group-hover:text-cyber-secondary transition-colors">&lt;</span>
                        CM
                        <span className="text-cyber-primary group-hover:text-cyber-secondary transition-colors">/&gt;</span>
                    </Link>
                </div>

                {/* Desktop Navigation - Absolute Centered */}
                <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
                    <Link href={`/${currentLocale}`} className="text-sm font-mono text-gray-400 hover:text-cyber-primary transition-colors uppercase tracking-widest cursor-pointer">
                        {t('home')}
                    </Link>

                    {/* Disabled Links with Tooltip */}
                    <div className="group relative flex items-center">
                        <span className="text-sm font-mono text-gray-600 cursor-not-allowed uppercase tracking-widest relative z-10 transition-colors">
                            {t('articles')}
                        </span>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-cyber-primary/20 border border-cyber-primary/50 text-cyber-primary text-[10px] font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none backdrop-blur-md">
                            {t('coming_soon')}
                        </span>
                    </div>

                    <div className="group relative flex items-center">
                        <span className="text-sm font-mono text-gray-600 cursor-not-allowed uppercase tracking-widest relative z-10 transition-colors">
                            {t('ia_content')}
                        </span>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-cyber-primary/20 border border-cyber-primary/50 text-cyber-primary text-[10px] font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none backdrop-blur-md">
                            {t('coming_soon')}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-8 w-full md:w-auto justify-end">


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
