"use client";
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

interface DecryptedTextProps {
    text: string;
    className?: string;
    animateOnView?: boolean;
    speed?: number;
}

export const DecryptedText = ({ text, className = "", animateOnView = true, speed = 30 }: DecryptedTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    // Initial state is text so SSR renders correct text for SEO, then client hydrates and scrambles?
    // Or start with scrambled? For SEO, text is better.

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (animateOnView && !isInView) return;
        if (hasStarted) return;

        setHasStarted(true);
        let iteration = 0;

        // Start with scrambled immediately if we want

        const interval = setInterval(() => {
            setDisplayText(() =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 2; // Speed of reveal
        }, speed);

        return () => clearInterval(interval);
    }, [text, isInView, animateOnView, speed, hasStarted]);

    return <span ref={ref} className={className}>{displayText}</span>;
}
