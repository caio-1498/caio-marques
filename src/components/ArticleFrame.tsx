import React, { ReactNode } from 'react';

interface ArticleFrameProps {
    children: ReactNode;
    className?: string;
}

const ArticleFrame = ({ children, className = '' }: ArticleFrameProps) => {
    return (
        <div className={`relative z-10 w-full max-w-4xl mx-auto bg-black/80 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl ${className}`}>
            {children}
        </div>
    );
};

export default ArticleFrame;
