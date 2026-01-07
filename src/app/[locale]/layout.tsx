import { Inter, JetBrains_Mono } from "next/font/google"; // Correct import for App Router
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import "../globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('title'),
        description: t('description')
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale} className="dark">
            <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-cyber-dark text-cyber-text selection:bg-cyber-primary selection:text-black`}>
                <NextIntlClientProvider messages={messages}>
                    <div className="relative min-h-screen overflow-x-hidden">
                        {/* Background Grid Pattern could go here */}
                        {children}
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'pt' }];
}
