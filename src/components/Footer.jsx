import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 bg-surface border-t border-white/5 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-primary">{'>'}</span> Vipul Sharma
                        </h2>
                        <p className="text-muted max-w-sm">
                            Building digital experiences that merge art with code.
                            Focused on performance, accessibility, and cyber-aesthetics.
                        </p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="font-mono text-sm text-primary mb-4 uppercase tracking-wider">
                            {'// Navigation'}
                        </h3>
                        <ul className="space-y-2 text-muted">
                            {['About', 'Services', 'Experience', 'Projects', 'Contact'].map(item => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials Column */}
                    <div>
                        <h3 className="font-mono text-sm text-primary mb-4 uppercase tracking-wider">
                            {'// Connect'}
                        </h3>
                        <div className="flex gap-4">
                            {[
                                { icon: FiGithub, href: "#", label: "GitHub" },
                                { icon: FiLinkedin, href: "#", label: "LinkedIn" },
                                { icon: FiTwitter, href: "#", label: "Twitter" },
                                { icon: FiInstagram, href: "#", label: "Instagram" }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 hover:text-primary transition-all interactive"
                                    data-cursor="hover"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        SYSTEM STATUS: OPERATIONAL
                    </div>

                    <div className="text-muted text-sm">
                        © {new Date().getFullYear()} Vipul Sharma. All rights reserved.
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-3 rounded-full bg-white/5 hover:bg-primary/10 hover:text-primary transition-all interactive group"
                        data-cursor="hover"
                        aria-label="Scroll to top"
                    >
                        <FiArrowUp className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
