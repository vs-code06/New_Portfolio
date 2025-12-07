import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMapPin, FiCalendar } from 'react-icons/fi';

export default function ExperienceDetail({ job, isOpen, onClose }) {
    const modalRef = useRef(null);

    // Focus trap and ESC key
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'Tab') {
                // Simple focus trap
                const focusable = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (!focusable || focusable.length === 0) return;

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        // Focus first element
        setTimeout(() => modalRef.current?.focus(), 50);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && job && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        aria-hidden="true"
                    />

                    {/* Modal */}
                    <motion.div
                        ref={modalRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        tabIndex="-1"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-surface border border-primary/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,255,136,0.1)] outline-none"
                    >
                        {/* Header */}
                        <div className="relative h-32 bg-gradient-to-r from-surface to-bg border-b border-white/5 p-8 flex items-end">
                            <div className="absolute top-0 right-0 p-4">
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full bg-black/20 text-muted hover:text-primary hover:bg-primary/10 transition-colors interactive"
                                    aria-label="Close details"
                                    data-cursor="hover"
                                    data-cursor-label="Close"
                                >
                                    <FiX size={24} />
                                </button>
                            </div>

                            <div className="flex items-center gap-6">
                                <img
                                    src={job.logo}
                                    alt={`${job.company} logo`}
                                    className="w-16 h-16 rounded-xl bg-black border border-white/10 object-contain p-2"
                                />
                                <div>
                                    <h2 id="modal-title" className="text-2xl font-bold text-white">{job.company}</h2>
                                    <p className="text-primary font-mono">{job.role}</p>
                                </div>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-8">
                            <div className="flex flex-wrap gap-6 text-sm text-muted mb-8 font-mono">
                                <div className="flex items-center gap-2">
                                    <FiCalendar className="text-primary" />
                                    <span>{job.start} — {job.end}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FiMapPin className="text-primary" />
                                    <span>{job.location}</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <p className="text-lg text-text leading-relaxed">
                                    {job.summary}
                                </p>

                                <div>
                                    <h3 className="text-sm font-bold text-muted uppercase tracking-wider mb-4">Key Achievements</h3>
                                    <ul className="space-y-3">
                                        {job.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-start gap-3 text-muted/80">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6 flex flex-wrap gap-2">
                                    {job.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-primary/5 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
