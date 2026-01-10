"use client";

import React, { useRef, useState, useEffect, useCallback, ReactNode, MouseEventHandler, UIEvent } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedItemProps {
    children: ReactNode;
    delay?: number;
    index: number;
    onMouseEnter?: MouseEventHandler<HTMLDivElement>;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { amount: 0.5, once: false });
    return (
        <motion.div
            ref={ref}
            data-index={index}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2, delay }}
            className="mb-4 cursor-pointer"
        >
            {children}
        </motion.div>
    );
};

interface AnimatedListProps {
    items?: string[];
    onItemSelect?: (item: string, index: number) => void;
    showGradients?: boolean;
    enableArrowNavigation?: boolean;
    className?: string;
    itemClassName?: string;
    displayScrollbar?: boolean;
    initialSelectedIndex?: number;
}

const AnimatedList: React.FC<AnimatedListProps> = ({
    items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        'Item 10',
        'Item 11',
        'Item 12',
        'Item 13',
        'Item 14',
        'Item 15'
    ],
    onItemSelect,
    showGradients = true,
    enableArrowNavigation = true,
    className = '',
    itemClassName = '',
    displayScrollbar = true,
    initialSelectedIndex = -1
}) => {
    const listRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectedIndex);
    const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
    const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
    const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);

    const handleItemMouseEnter = useCallback((index: number) => {
        setSelectedIndex(index);
    }, []);

    const handleItemClick = useCallback(
        (item: string, index: number) => {
            setSelectedIndex(index);
            if (onItemSelect) {
                onItemSelect(item, index);
            }
        },
        [onItemSelect]
    );

    const handleScroll = (e: UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target as HTMLDivElement;
        setTopGradientOpacity(Math.min(scrollTop / 50, 1));
        const bottomDistance = scrollHeight - (scrollTop + clientHeight);
        setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
    };

    useEffect(() => {
        if (!enableArrowNavigation) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
            } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex(prev => Math.max(prev - 1, 0));
            } else if (e.key === 'Enter') {
                if (selectedIndex >= 0 && selectedIndex < items.length) {
                    e.preventDefault();
                    if (onItemSelect) {
                        onItemSelect(items[selectedIndex], selectedIndex);
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

    useEffect(() => {
        if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
        const container = listRef.current;
        const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement | null;
        if (selectedItem) {
            const extraMargin = 50;
            const containerScrollTop = container.scrollTop;
            const containerHeight = container.clientHeight;
            const itemTop = selectedItem.offsetTop;
            const itemBottom = itemTop + selectedItem.offsetHeight;
            if (itemTop < containerScrollTop + extraMargin) {
                container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
            } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
                container.scrollTo({
                    top: itemBottom - containerHeight + extraMargin,
                    behavior: 'smooth'
                });
            }
        }
        setKeyboardNav(false);
    }, [selectedIndex, keyboardNav]);

    return (
        <div className={`relative h-full flex flex-col ${className}`}>
            <div
                ref={listRef}
                className={`flex-1 overflow-y-auto pl-4 direction-rtl ${displayScrollbar // Increased height and added direction-rtl
                    ? '[&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-[4px] hover:[&::-webkit-scrollbar-thumb]:bg-white/40' // Styled scrollbar
                    : 'scrollbar-hide'
                    }`}
                onScroll={handleScroll}
                style={{
                    scrollbarWidth: displayScrollbar ? 'thin' : 'none',
                    scrollbarColor: 'rgba(255,255,255,0.2) transparent',
                    direction: 'rtl',
                    height: '100%' // Ensure it takes full height of parent
                }}
            >
                <div style={{ direction: 'ltr' }}> {/* Reset content direction */}
                    {items.map((item, index) => (
                        <AnimatedItem
                            key={index}
                            delay={0.1}
                            index={index}
                            onMouseEnter={() => handleItemMouseEnter(index)}
                            onClick={() => handleItemClick(item, index)}
                        >
                            <div className={`p-4 rounded-lg bg-[#000]/20 transition-all duration-300 border border-white/5 mx-2 ${selectedIndex === index ? 'bg-[#000]/60 border-white/20 scale-[1.02]' : 'hover:bg-[#000]/40 hover:border-white/10'} ${itemClassName}`}>
                                <p className="text-white/80 m-0 font-light tracking-wide text-left">{item}</p>
                            </div>
                        </AnimatedItem>
                    ))}
                </div>
            </div>
            {showGradients && (
                <>
                    <div
                        className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-black/80 to-transparent pointer-events-none transition-opacity duration-300 ease"
                        style={{ opacity: topGradientOpacity }}
                    ></div>
                    <div
                        className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black/80 to-transparent pointer-events-none transition-opacity duration-300 ease"
                        style={{ opacity: bottomGradientOpacity }}
                    ></div>
                </>
            )}
        </div>
    );
};

export default AnimatedList;
