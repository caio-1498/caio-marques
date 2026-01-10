"use client";
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { SpotlightCard } from './ui/SpotlightCard';

export const Projects = () => {
    const t = useTranslations('Projects');

    const projects = [
        {
            id: "this_portfolio",
            tech: ["Gemini", "Next.js", "TypeScript", "Three.js", "Tailwind", "Sanity", "LLM", "Headless CMS", "Prompt Engineering"],
            color: "text-cyber-primary"
        },
        {
            id: "precision_proof",
            tech: ["React", "TypeScript", "React Hooks", "Node.js", "Express", "PostgreSQL", "TypeORM"],
            color: "text-cyber-primary"
        },
        {
            id: "evot",
            tech: ["Angular", ".NET", "C#", "SQL", "NestJS", "TypeORM"],
            color: "text-cyber-accent"
        },
        {
            id: "ai_lab",
            tech: ["Gemini API", "Next.js", "AI", "LLM"],
            color: "text-cyber-secondary"
        }
    ];

    return (
        <section className="py-32 relative" id="projects">
            <div className="container mx-auto px-6">
                <div className="mb-16 border-b border-cyber-muted pb-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        <span className="text-cyber-secondary font-mono text-2xl mr-4">02.</span>{t('title')}
                    </h2>
                    <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">{t('subtitle')}</p>
                </div>

                <div className="flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard className="p-0 group">
                                <div className="flex flex-col items-center text-center p-8 md:p-12">
                                    <div className="flex gap-2 mb-6 flex-wrap justify-center">
                                        {project.tech.map(tech => (
                                            <span key={tech} className="text-xs font-mono border border-cyber-border bg-cyber-dark/50 px-3 py-1 text-cyber-primary/70">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyber-primary transition-colors">
                                        {t(`${project.id}.title`)}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
                                        {t(`${project.id}.description`)}
                                    </p>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
