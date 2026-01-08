import ArticleFrame from "@/components/ArticleFrame";
import { Link } from "@/i18n/routing";

export default function ArticleDemo() {
    return (
        <main className="min-h-screen pt-24 pb-12 px-6">
            <ArticleFrame>
                <Link href="/" className="text-cyber-primary hover:underline mb-8 block">&larr; Back to Home</Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    The Future of Interface Design
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
                    <span>By Caio Marques</span>
                    <span>•</span>
                    <span>Jan 07, 2026</span>
                </div>

                <div className="prose prose-invert max-w-none">
                    <p className="text-lg leading-relaxed text-gray-300 mb-6">
                        This is a demonstration of the <strong>ArticleFrame</strong> component.
                        As you can see, the text occupies a dedicated space with a semi-transparent
                        background, allowing readability regardless of the complex animations that
                        may exist in the layer behind.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-300 mb-6">
                        The glassmorphism effect (backdrop-blur) adds a modern, premium touch
                        that fits perfectly with the aesthetic.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why functionality matters</h2>
                    <p className="text-lg leading-relaxed text-gray-300 mb-6">
                        By separating the content text from the background with an explicit z-index architecture,
                        we guarantee accessibility and interactivity. The background can now be evolved
                        into a 3D WebGL experience without affecting the user's reading experience.
                    </p>
                </div>
            </ArticleFrame>
        </main>
    );
}
