import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import SectionHeader from '../SectionHeader';
import { FiMapPin, FiTarget, FiCpu, FiCalendar } from 'react-icons/fi';

const SingleExperience = ({ job }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto mt-20"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Block 1: Header (Company & Role) */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-8 p-8 rounded-3xl bg-surface border border-border relative overflow-hidden group"
                    whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono border border-primary/20">
                                {job.start} — {job.end}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-white/5 text-muted text-xs font-mono border border-border flex items-center gap-2">
                                <FiMapPin size={12} /> {job.location}
                            </span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-bold text-text mb-2 tracking-tight">
                            {job.company}
                        </h3>
                        <div className="text-xl md:text-2xl text-primary font-mono">{job.role}</div>
                    </div>
                </motion.div>

                {/* Block 2: Tech Stack */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-4 p-8 rounded-3xl bg-surface border border-border relative overflow-hidden flex flex-col justify-between group"
                    whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(var(--primary),0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]" />

                    <div className="flex items-center gap-2 text-muted uppercase tracking-wider text-xs font-bold mb-6">
                        <FiCpu /> Tech Arsenal
                    </div>
                    <div className="flex flex-wrap gap-2 relative z-10">
                        {job.tags && job.tags.map((tech) => (
                            <span key={tech} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-surface/50 text-text border border-border group-hover:border-primary/30 group-hover:text-primary transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Block 3: Mission */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-5 p-8 rounded-3xl bg-surface border border-border relative overflow-hidden"
                    whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="flex items-center gap-2 text-primary uppercase tracking-wider text-xs font-bold mb-4">
                        <FiTarget /> Mission Brief
                    </div>
                    <p className="text-lg text-text/90 leading-relaxed font-light">
                        {job.summary}
                    </p>
                </motion.div>

                {/* Block 4: Achievements */}
                <motion.div
                    variants={itemVariants}
                    className="md:col-span-7 p-8 rounded-3xl bg-surface border border-border relative overflow-hidden"
                    whileHover={{ scale: 1.02, rotateX: -2, rotateY: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="flex items-center gap-2 text-accent uppercase tracking-wider text-xs font-bold mb-6">
                        <FiCpu /> Key Achievements
                    </div>
                    <div className="grid gap-4">
                        {job.bullets && job.bullets.map((item, i) => (
                            <div key={i} className="flex gap-4 items-start group/item">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,213,0.5)] flex-shrink-0" />
                                <span className="text-muted group-hover/item:text-text transition-colors leading-relaxed">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const HolographicCard = ({ job, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={`relative flex items-center justify-between w-full mb-16 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}
        >
            {/* Timeline Node (Center) */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(0,255,136,0.8)] z-20 border-2 border-bg" />

            {/* Connecting Line to Card */}
            <div className={`absolute top-2 h-[2px] bg-primary/30 w-1/2 ${isEven ? 'left-1/2' : 'right-1/2'}`} />

            {/* Empty Space for alignment */}
            <div className="w-5/12" />

            {/* Card */}
            <motion.div
                whileHover={{
                    scale: 1.02,
                    rotateY: isEven ? -2 : 2,
                    rotateX: 2,
                    boxShadow: "0 0 30px rgba(0, 255, 136, 0.15)"
                }}
                className="w-5/12 relative group perspective-1000"
            >
                <div className="relative overflow-hidden rounded-2xl bg-surface/40 backdrop-blur-md border border-border p-6 hover:border-primary/50 transition-colors duration-300">
                    {/* Holographic Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Header */}
                    <div className="mb-4 border-b border-border pb-4">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors">{job.company}</h3>
                            <span className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded border border-primary/20">
                                {job.start} — {job.end}
                            </span>
                        </div>
                        <div className="text-lg text-muted font-mono">{job.role}</div>
                        <div className="flex items-center gap-2 text-xs text-muted/60 mt-1">
                            <FiMapPin /> {job.location}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-2">
                                <FiTarget /> Mission
                            </div>
                            <p className="text-sm text-text/80 leading-relaxed">
                                {job.summary}
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-2">
                                <FiCpu /> Achievements
                            </div>
                            <ul className="space-y-2">
                                {job.bullets && job.bullets.slice(0, 3).map((item, i) => (
                                    <li key={i} className="flex gap-2 text-xs text-muted group/item">
                                        <span className="text-primary mt-0.5">►</span>
                                        <span className="group-hover/item:text-text transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="pt-4 mt-2 border-t border-border">
                            <div className="flex flex-wrap gap-2">
                                {job.tags && job.tags.map((tech) => (
                                    <span key={tech} className="px-2 py-1 text-[10px] font-mono rounded bg-surface/50 text-muted border border-border group-hover:border-primary/20 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default function Experience() {
    const isSingleExperience = experience.length === 1;

    return (
        <section id="experience" className="relative py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader number="03" title="Experience" />

                {isSingleExperience ? (
                    <SingleExperience job={experience[0]} />
                ) : (
                    <div className="relative mt-20">
                        {/* Central Laser Beam */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/50 to-transparent shadow-[0_0_15px_rgba(0,255,136,0.4)]" />

                        <div className="relative z-10">
                            {experience.map((job, i) => (
                                <HolographicCard key={i} job={job} index={i} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
