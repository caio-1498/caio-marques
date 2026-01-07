"use client";
import { useTranslations } from 'next-intl';
import { Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
    const t = useTranslations('Contact');
    const [copied, setCopied] = useState(false);
    const email = "dev.caio.marques@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-32 relative text-center" id="contact">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="border border-cyber-border bg-cyber-muted/30 p-12 lg:p-16 relative overflow-hidden backdrop-blur-sm"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-primary to-transparent" />
                    <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-secondary to-transparent" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">{t('title')}</h2>
                    <p className="text-gray-400 mb-12 text-lg">{t('description')}</p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
                        <a
                            href={`mailto:${email}`}
                            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-cyber-primary text-black font-bold hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300 cursor-pointer"
                        >
                            <Mail className="w-5 h-5" />
                            {t('email_label')}
                        </a>

                        <button
                            onClick={handleCopy}
                            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-cyber-border text-gray-300 hover:text-white hover:border-cyber-primary hover:bg-cyber-primary/5 transition-colors duration-300 group cursor-pointer"
                        >
                            {copied ? <Check className="w-5 h-5 text-cyber-accent" /> : <Copy className="w-5 h-5 group-hover:text-cyber-primary" />}
                            <span className="font-mono">{email}</span>
                        </button>

                        <a
                            href="https://wa.me/5521974026883"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-cyber-border text-gray-300 hover:text-white hover:border-green-500 hover:bg-green-500/10 transition-colors duration-300 cursor-pointer"
                        >
                            {/* Simple WhatsApp SVG Icon */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span className="font-mono">+55 21 97402-6883</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
