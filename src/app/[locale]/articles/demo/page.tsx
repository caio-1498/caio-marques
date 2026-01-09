
import Link from 'next/link';

export default function ArticleDemo() {
    return (
        <article className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                The Future of Interface Design
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-12 border-b border-white/10 pb-8">
                <span>By Caio Marques</span>
                <span>•</span>
                <span>Jan 07, 2026</span>
                <span>•</span>
                <span className="px-2 py-1 bg-white/10 rounded text-xs text-white">Design</span>
            </div>

            <p className="lead text-xl text-gray-300 mb-8">
                This is a demonstration of the new reading experience.
                The layout now features a dedicated sidebar and a focused reading area.
            </p>

            <p>
                The <strong>Glassmorphism</strong> container you see is applied automatically by the layout,
                ensuring consistency across all articles. The background particles are contextual,
                rendered in Cyan and Purple to distinguish this section from the Home page.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Why use a Split-View?</h2>
            <p>
                Split views allow users to navigate content without losing context.
                Common in documentation sites (like Next.js docs) and dashboard applications,
                this pattern improves "Wayfinding" — knowing where you are and where you can go.
            </p>

            <blockquote className="border-l-4 border-cyber-primary pl-6 py-2 my-8 italic text-gray-400 bg-white/5 pr-4 rounded-r">
                "Good design is obvious. Great design is transparent." — Joe Sparano
            </blockquote>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Technical Details</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong>Sidebar:</strong> Fixed 20% width, Sticky positioning.</li>
                <li><strong>Content:</strong> 80% width with context-aware Particles.</li>
                <li><strong>Typography:</strong> Optimized for long-form reading.</li>
            </ul>
        </article>
    );
}
