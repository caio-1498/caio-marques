import { getTranslations } from 'next-intl/server';

export default async function ArticlesIndex() {
    const t = await getTranslations('Navigation');

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
            <div className="w-16 h-16 border-2 border-dashed border-cyber-primary/50 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <div className="w-8 h-8 bg-cyber-primary/20 rounded-full" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4 tracking-tighter">
                {t('under_development_title')}
            </h1>
            <p className="text-gray-400 max-w-md font-mono text-sm leading-relaxed">
                {t('under_development_desc')}
            </p>
        </div>
    );
}
