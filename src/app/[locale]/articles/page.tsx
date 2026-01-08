import ArticleFrame from "@/components/ArticleFrame";
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ArticlesIndex() {
    const t = useTranslations('Navigation'); // Reusing navigation translations for title if available, or just hardcode for now

    return (
        <main className="min-h-screen pt-24 pb-12 px-6">
            <ArticleFrame>
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white">
                    Articles
                </h1>

                <div className="grid gap-6">
                    <Link href="/articles/demo" className="group block p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                        <h2 className="text-2xl font-bold text-cyber-primary group-hover:text-cyber-secondary transition-colors mb-2">
                            The Future of Interface Design
                        </h2>
                        <p className="text-gray-400 mb-4">
                            Exploring how glassmorphism and 3D backgrounds create immersive user experiences.
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500 font-mono uppercase tracking-wider">
                            <span>Jan 07, 2026</span>
                            <span>•</span>
                            <span>Demo</span>
                        </div>
                    </Link>

                    {/* Placeholder for more articles */}
                    <div className="p-6 border border-white/5 rounded-lg opacity-50">
                        <p className="text-gray-500 text-center italic">More articles coming soon...</p>
                    </div>
                </div>
            </ArticleFrame>
        </main>
    );
}
