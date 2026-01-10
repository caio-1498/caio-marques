"use client";
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import CountUp from './ui/CountUp';
import { getVisitorCount } from '@/actions/getVisitorCount';
import { useState, useEffect } from 'react';

export const Hero = () => {
    const t = useTranslations('Hero');
    const currentLocale = useLocale();
    const [visitorCount, setVisitorCount] = useState<number | null>(null);

    useEffect(() => {
        getVisitorCount().then(props => setVisitorCount(props));
    }, []);

    return (
        <section className="min-h-screen container mx-auto px-6 py-24 lg:py-0 flex flex-col justify-center relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Column: Text & Intro */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start text-left space-y-8"
                >
                    <div>
                        <h1 className="text-5xl lg:text-7xl font-black text-white mb-4 tracking-tighter">
                            {t('name')}
                        </h1>
                        <h2 className="text-xl lg:text-2xl text-cyber-primary font-mono bg-cyber-primary/10 px-4 py-2 rounded inline-block">
                            {t('badge')}
                        </h2>
                    </div>

                    {visitorCount && (
                        <div className="flex items-center gap-2 text-xs md:text-sm text-cyber-primary/80 font-mono bg-black/40 px-3 py-1 rounded border border-cyber-primary/20">
                            <span>(Você foi o</span>
                            <CountUp to={visitorCount} className="font-bold text-cyber-secondary" />
                            <span>ao entrar neste portfólio! Obrigado pela visita :)</span>
                        </div>
                    )}

                    <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                        {t('description')}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-black px-8 py-3 font-bold rounded hover:scale-105 transition-all cursor-pointer hover:bg-gray-200"
                        >
                            {t('cta_projects')}
                        </button>
                        <button
                            onClick={() => document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-black px-8 py-3 font-bold rounded hover:scale-105 transition-all cursor-pointer hover:bg-gray-200"
                        >
                            {t('cta_stacks')}
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-black px-8 py-3 font-bold rounded hover:scale-105 transition-all cursor-pointer hover:bg-gray-200"
                        >
                            {t('cta_contact')}
                        </button>
                        <Link
                            href={`/${currentLocale}/articles`}
                            className="bg-transparent border border-white text-white px-8 py-3 font-bold rounded hover:scale-105 transition-all cursor-pointer hover:bg-white/10 md:hidden"
                        >
                            {t('cta_articles')}
                        </Link>
                        <Link
                            href={`/${currentLocale}/ia-content`}
                            className="bg-transparent border border-white text-white px-8 py-3 font-bold rounded hover:scale-105 transition-all cursor-pointer hover:bg-white/10 md:hidden"
                        >
                            {t('cta_ia_content')}
                        </Link>
                    </div>
                </motion.div>

                {/* Right Column: Profile Card (Tilt) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center lg:justify-end py-12 lg:py-0 relative"
                >
                    <ProfileCard
                        name={t('name')}
                        title={t('role')}
                        handle="dev.psy"
                        status="Available"
                        avatarUrl="/images/profile-caio.png"
                    />
                </motion.div>

            </div>
        </section>
    )
}
