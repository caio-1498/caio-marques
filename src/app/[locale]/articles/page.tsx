
import { client } from "@/sanity/client";
import { redirect } from 'next/navigation';

export default async function ArticlesIndex({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;

    const query = `*[_type == "article"] | order(publishedAt desc) {
      "slug": slug.current,
      publishedAt
    }`;

    const articles = await client.fetch(query);

    if (articles.length > 0) {
        redirect(`/${locale}/articles/${articles[0].slug}`);
    }

    return (
        <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-6 text-white">Archive</h1>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                No articles published yet. Access the <a href="/studio" className="text-cyber-primary hover:underline">Studio</a> to create one.
            </p>
        </div>
    );
}
