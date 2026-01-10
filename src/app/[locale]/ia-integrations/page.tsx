
export default async function IAIntegrationsIndex({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    // Similar placeholder for IA Integrations as in Articles
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <h1 className="text-3xl font-bold text-white mb-4">IA Integrations Hub</h1>
            <p className="text-gray-400 max-w-md">
                Select an integration module from the navigation on the left to view details and status.
            </p>
        </div>
    );
}
