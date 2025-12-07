import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full bg-surface border border-white/10 p-1 cursor-pointer overflow-hidden group interactive"
            data-cursor="hover"
            aria-label="Toggle Theme"
        >
            {/* Background Glow (Cyber Effect) */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-primary/10" />
            </div>

            {/* Icons Container */}
            <div className="absolute inset-0 flex items-center justify-between px-2 text-xs pointer-events-none">
                <FiMoon className={`z-10 transition-colors duration-300 ${isDark ? 'text-surface' : 'text-muted'}`} />
                <FiSun className={`z-10 transition-colors duration-300 ${isDark ? 'text-muted' : 'text-surface'}`} />
            </div>

            {/* Sliding Knob */}
            <motion.div
                layout
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25
                }}
                animate={{
                    x: isDark ? 0 : 32,
                    backgroundColor: isDark ? 'var(--primary)' : 'var(--text)'
                }}
                className="relative w-6 h-6 rounded-full shadow-lg z-20 flex items-center justify-center"
            >
                {/* Knob Detail (Scanline/Tech look) */}
                <div className="w-0.5 h-3 bg-surface/30 rounded-full" />
            </motion.div>

            {/* Border Glow on Hover */}
            <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
        </button>
    );
}
