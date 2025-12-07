import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectModal({ project, isOpen, onClose }) {
    // Close on ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-3xl bg-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-primary hover:text-black transition-colors z-10 interactive"
                            data-cursor="hover"
                        >
                            <FiX size={24} />
                        </button>

                        <div className="h-64 md:h-80 bg-black/50 relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                        </div>

                        <div className="p-8">
                            <h2 className="text-3xl font-bold mb-4 text-white">{project.title}</h2>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-muted text-lg leading-relaxed mb-8">
                                {project.description}
                                <br /><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors interactive"
                                    data-cursor="hover"
                                >
                                    <FiGithub /> Source Code
                                </a>
                                <a
                                    href={project.link}
                                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-black hover:bg-accent transition-colors interactive"
                                    data-cursor="hover"
                                >
                                    <FiExternalLink /> Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
