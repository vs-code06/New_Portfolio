import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';
import SectionHeader from '../components/SectionHeader';

const Card = ({ project, index, range, targetScale, progress }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
                className="relative flex flex-col w-full max-w-5xl h-[500px] bg-surface border border-border rounded-3xl overflow-hidden shadow-2xl origin-top"
            >
                <div className="flex h-full flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="w-full md:w-[60%] h-[40%] md:h-full relative overflow-hidden">
                        <motion.div style={{ scale: imageScale }} className="w-full h-full">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-between bg-surface">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-sm font-mono text-primary/80 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                                    0{index + 1}
                                </span>
                                <div className="flex gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono text-muted/60">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-text mb-4 leading-tight">
                                {project.title}
                            </h3>

                            <p className="text-muted leading-relaxed text-sm md:text-base">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-border text-text font-medium hover:bg-text hover:text-surface transition-all duration-300"
                            >
                                <FiGithub /> Code
                            </a>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-black font-bold hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,136,0.2)] hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
                            >
                                <FiExternalLink /> Demo
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function Projects() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section id="projects" className="relative mt-32">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <SectionHeader number="04" title="Featured Projects" />
            </div>

            <div ref={container} className="relative">
                {projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.05);
                    return (
                        <Card
                            key={project.id}
                            index={i}
                            project={project}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>

            {/* Spacer to ensure last card can be scrolled past comfortably */}
            <div className="h-[20vh]" />
        </section>
    );
}
