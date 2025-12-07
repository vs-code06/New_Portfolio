import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold font-mono text-primary tracking-tighter interactive" data-cursor="hover">
                    &lt;VIPUL /&gt;
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium text-muted hover:text-primary transition-colors interactive"
                            data-cursor="hover"
                        >
                            {link.name}
                        </a>
                    ))}

                    <ThemeToggle />
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-text interactive"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface border-b border-white/5 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-muted hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                                <span className="text-sm text-muted">Switch Theme</span>
                                <ThemeToggle />
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
