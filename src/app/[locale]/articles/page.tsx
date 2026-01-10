import { client } from "@/sanity/client";

export default async function ArticlesIndex({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    // The layout now handles the sidebar (navigation) and the list of articles.
    // The page.tsx is basically the "initial state" or "index" view.
    // Since the sidebar is always present in layout, this main area can be a welcome screen or just empty until an article is selected.

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Welcome to the Archive</h1>
            <p className="text-gray-400 max-w-md">
                Select an article from the navigation module on the left to begin reading.
            </p>
        </div>
    );
}
