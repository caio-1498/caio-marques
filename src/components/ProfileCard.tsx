"use client";

import React, { useRef, useState, useCallback } from "react";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProfileCardProps {
    name: string;
    title: string;
    handle: string;
    status: string;
    avatarUrl: string;
}

export default function ProfileCard({
    name,
    title,
    handle,
    status,
    avatarUrl,
}: ProfileCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate percentage (0 to 100)
        const px = (x / rect.width) * 100;
        const py = (y / rect.height) * 100;

        // Calculate rotation (-15 to 15 degrees)
        // rotateY scales with X position
        // rotateX scales with Y position (inverted)
        const rotateY = ((x / rect.width) - 0.5) * 30; // -15 to 15
        const rotateX = ((y / rect.height) - 0.5) * -30; // 15 to -15

        setRotation({ x: rotateX, y: rotateY });
        setGlare({ x: px, y: py, opacity: 1 });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setRotation({ x: 0, y: 0 });
        setGlare((prev) => ({ ...prev, opacity: 0 }));
    }, []);

    return (
        <div className="perspective-[1000px] group">
            <Link href="/articles/about" className="block w-full h-full cursor-pointer">
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    }}
                    className="relative w-[320px] aspect-[3/4] bg-neutral-900 rounded-[20px] overflow-hidden transition-transform duration-100 ease-linear shadow-2xl border border-white/10 [transform-style:preserve-3d]"
                >
                    {/* Background / Image Layer */}
                    <div className="absolute inset-0 bg-black">
                        {/* Simple noise or pattern could go here */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black" />

                        {/* Main Avatar Image - Making it full cover for impact */}
                        {avatarUrl && (
                            <div className="absolute inset-0 z-0">
                                {/* Using optimized Next.js Image or standard img if external */}
                                <img
                                    src={avatarUrl}
                                    alt={name}
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        )}
                    </div>

                    {/* Glare/Shine Effect */}
                    <div
                        className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay transition-opacity duration-300"
                        style={{
                            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.4) 0%, transparent 100%)`,
                            opacity: glare.opacity,
                        }}
                    />

                    {/* Content Layer (Floating) */}
                    <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end translate-z-[20px]">

                        {/* Status Badge */}
                        <div className="absolute top-6 right-6">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono text-green-400">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                {status}
                            </span>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-2 translate-z-[40px]">
                            <h2 className="text-3xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
                                {name}
                            </h2>
                            <p className="text-sm font-medium text-cyber-primary uppercase tracking-wider">
                                {title}
                            </p>

                            <div className="pt-4 flex items-center justify-between border-t border-white/20 mt-4">
                                <span className="text-sm text-gray-400 font-mono">@{handle}</span>
                                <MoveUpRight className="w-5 h-5 text-white/70" />
                            </div>
                        </div>
                    </div>

                    {/* Decorative Grid/Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] z-1 pointer-events-none" />

                </div>
            </Link>
        </div>
    );
}
