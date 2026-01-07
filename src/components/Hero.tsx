"use client";
import { useTranslations } from 'next-intl';
import { DecryptedText } from './ui/DecryptedText';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
    const t = useTranslations('Hero');
    const tNav = useTranslations('Navigation');

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-start container mx-auto px-6 py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyber-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyber-secondary/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
            >
                <span className="text-cyber-primary font-mono text-xs md:text-sm tracking-[0.2em] uppercase border border-cyber-primary/30 px-4 py-2 rounded-none bg-cyber-primary/5 backdrop-blur-sm">
                    {t('greeting')}
                </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter text-white">
                <DecryptedText text={t('name')} speed={50} className="block" />
            </h1>

            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl md:text-3xl text-cyber-secondary font-mono mb-8"
            >
                {t('role')} <span className="text-cyber-accent mx-2">//</span> <span className="text-gray-300">{t('sub_role')}</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="max-w-2xl text-base md:text-lg text-gray-400 mb-12 leading-relaxed border-l-2 border-cyber-primary/30 pl-6"
            >
                {t('description')}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="flex flex-wrap gap-4"
            >
                <button
                    className="group relative px-8 py-4 bg-transparent border border-cyber-primary text-cyber-primary font-bold text-lg rounded-none hover:bg-cyber-primary hover:text-black transition-all duration-300 cursor-pointer"
                    onClick={() => scrollTo('projects')}
                >
                    <span className="flex items-center gap-2">
                        {t('cta')} <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </span>
                </button>

                <button onClick={() => scrollTo('stack')} className="px-6 py-4 border border-cyber-border text-gray-400 hover:text-white hover:border-cyber-primary/50 transition-all duration-300 cursor-pointer font-mono uppercase text-sm tracking-wider">
                    {tNav('stack')}
                </button>
                <button onClick={() => scrollTo('projects')} className="px-6 py-4 border border-cyber-border text-gray-400 hover:text-white hover:border-cyber-primary/50 transition-all duration-300 cursor-pointer font-mono uppercase text-sm tracking-wider">
                    {tNav('projects')}
                </button>
                <button onClick={() => scrollTo('contact')} className="px-6 py-4 border border-cyber-border text-gray-400 hover:text-white hover:border-cyber-primary/50 transition-all duration-300 cursor-pointer font-mono uppercase text-sm tracking-wider">
                    {tNav('contact')}
                </button>
            </motion.div>
        </section>
    )
}
