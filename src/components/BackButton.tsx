"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BackButton = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Hide on home page (considering locale prefix)
        // Paths are like /en, /pt, /en/articles, etc.
        // If pathname is exactly /en or /pt or just /, hide it.
        // Simple check: if pathname ends with /en or /pt or is /, hide.
        // Actually, logic: 'não renderizar se pathname === '/''.
        // But with internationalization, it's usually '/en' or '/pt'.
        // Let's check if it's strictly root or just locale.

        const isHome = pathname === '/' || pathname === '/en' || pathname === '/pt';
        setIsVisible(!isHome);
    }, [pathname]);

    if (!isVisible) return null;

    return (
        <button
            onClick={() => router.back()}
            className="fixed top-6 left-6 z-50 p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
            aria-label="Go Back"
        >
            <ArrowLeft className="w-6 h-6 text-white/80 group-hover:text-white" />
        </button>
    );
};

export default BackButton;
