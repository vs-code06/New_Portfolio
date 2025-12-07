import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { FiUser, FiCode, FiCoffee, FiAward } from 'react-icons/fi';

const stats = [
    { label: "Status", value: "Student", icon: <FiUser /> },
    { label: "Projects", value: "6+", icon: <FiCode /> },
    { label: "Coffee", value: "∞", icon: <FiCoffee /> },
    { label: "DSA", value: "Active", icon: <FiAward /> }
];

const skills = [
    { name: "HTML", level: 90, category: "LANG" },
    { name: "JavaScript", level: 85, category: "LANG" },
    { name: "MongoDB", level: 80, category: "DB" },
    { name: "MySQL", level: 80, category: "DB" },
    { name: "Python", level: 75, category: "LANG" },
    { name: "React", level: 85, category: "LIB" },
    { name: "SQL", level: 80, category: "DB" },
    { name: "Express JS", level: 80, category: "LIB" },
    { name: "Prisma ORM", level: 70, category: "LIB" },
    { name: "DSA", level: 85, category: "CONCEPT" },
];

const TypewriterText = ({ text, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            let i = 0;
            const timer = setInterval(() => {
                setDisplayedText(text.substring(0, i + 1));
                i++;
                if (i === text.length) clearInterval(timer);
            }, 30); // Typing speed
            return () => clearInterval(timer);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    return <span>{displayedText}</span>;
};

export default function About() {
    return (
        <section id="about" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader number="01" title="About Me" />

                <div className="mt-16 grid lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT COLUMN: Character Profile Card */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl bg-surface border border-border overflow-hidden group"
                        >
                            {/* Scanning Line Effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 shadow-[0_0_20px_rgba(0,255,136,0.5)] z-20 animate-scan pointer-events-none opacity-0 group-hover:opacity-100" />

                            {/* Image / Avatar Placeholder */}
                            <div className="aspect-square bg-surface-2 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface z-10" />
                                {/* Placeholder for user image */}
                                <div className="w-full h-full bg-surface/50 flex items-center justify-center text-muted/20 text-9xl font-bold select-none">
                                    VS
                                </div>
                                <div className="absolute bottom-6 left-6 z-20">
                                    <h3 className="text-3xl font-bold text-text">Vipul Sharma</h3>
                                    <p className="text-primary font-mono text-sm">Full Stack Developer</p>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-px bg-surface/50 border-t border-border">
                                {stats.map((stat, i) => (
                                    <div key={i} className="p-6 bg-surface hover:bg-surface/50 transition-colors group/stat">
                                        <div className="text-primary mb-2 opacity-50 group-hover/stat:opacity-100 transition-opacity">{stat.icon}</div>
                                        <div className="text-2xl font-bold text-text">{stat.value}</div>
                                        <div className="text-xs font-mono text-muted uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Terminal Bio */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-xl bg-surface border border-border p-6 font-mono text-sm md:text-base shadow-2xl relative overflow-hidden"
                        >
                            {/* Terminal Header */}
                            <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="ml-4 text-xs text-muted">user@vipul-portfolio:~/bio</div>
                            </div>

                            {/* Terminal Content */}
                            <div className="space-y-4 text-muted/80">
                                <div className="flex gap-2">
                                    <span className="text-primary">➜</span>
                                    <span className="text-accent">~</span>
                                    <span>cat bio.txt</span>
                                </div>
                                <div className="pl-4 border-l-2 border-border space-y-4">
                                    <p>
                                        <TypewriterText text="Hello! I'm a second-year student who started my coding journey in 2024." delay={500} />
                                    </p>
                                    <p>
                                        <TypewriterText text="I have a deep interest in Data Structures & Algorithms and love solving complex algorithmic challenges." delay={2500} />
                                    </p>
                                    <p>
                                        <TypewriterText text="I also build full-stack web applications using the MERN stack, Axios and SQL, always eager to learn new technologies." delay={4500} />
                                    </p>
                                </div>
                                <div className="flex gap-2 animate-pulse">
                                    <span className="text-primary">➜</span>
                                    <span className="text-accent">~</span>
                                    <span className="w-2 h-5 bg-primary block" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Skills Modules */}
                        <div>
                            <h4 className="text-sm font-mono text-primary/60 mb-4 flex items-center gap-2">
                                <FiCode /> INSTALLED_MODULES
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-center justify-between p-3 rounded bg-surface border border-border hover:border-primary/30 transition-colors group"
                                    >
                                        <span className="font-bold text-text/80 group-hover:text-primary transition-colors">{skill.name}</span>
                                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface/50 text-muted group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                                            {skill.category}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
