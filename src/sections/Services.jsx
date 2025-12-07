import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLayout, FiServer, FiTerminal, FiArrowRight, FiCpu } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';

const services = [
    {
        id: 'frontend',
        icon: <FiLayout size={32} />,
        title: "Frontend Dev",
        subtitle: "Pixel-Perfect Interfaces",
        description: "I build responsive, accessible, and performant web applications. My focus is on creating smooth animations and intuitive user experiences using modern frameworks.",
        tech: ["React", "Next.js", "Tailwind"],
        color: "from-primary/20 to-primary/5"
    },
    {
        id: 'backend',
        icon: <FiServer size={32} />,
        title: "Backend Eng",
        subtitle: "Scalable Architecture",
        description: "I design robust server-side systems. From RESTful APIs to real-time services, I ensure your data is secure, consistent, and always available.",
        tech: ["Node.js", "MYSQL", "Axios", "MongoDB", "Express"],
        color: "from-accent/20 to-accent/5"
    },
    {
        id: 'dsa',
        icon: <FiTerminal size={32} />,
        title: "Algorithms",
        subtitle: "Complex Problem Solving",
        description: "I solve complex algorithmic challenges and build efficient automation scripts. My strong foundation in DSA allows me to write optimized code.",
        tech: ["Python", "Graphs", "System Design", "Optimization", "Data Structures"],
        color: "from-primary/20 to-primary/5"
    }
];

export default function Services() {
    const [activeId, setActiveId] = useState(services[0].id);

    return (
        <section id="services" className="py-32 relative min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col">
                <SectionHeader number="02" title="What I Do" />

                <div className="mt-16 flex flex-col lg:flex-row gap-4 h-[600px] w-full">
                    {services.map((service) => {
                        const isActive = activeId === service.id;
                        return (
                            <motion.div
                                key={service.id}
                                layout
                                onClick={() => setActiveId(service.id)}
                                onMouseEnter={() => setActiveId(service.id)}
                                className={`relative rounded-3xl overflow-hidden cursor-pointer border transition-colors duration-500 ease-out bg-surface ${isActive
                                    ? 'border-primary/50 shadow-[0_0_30px_rgba(0,255,136,0.1)]'
                                    : 'border-border hover:border-border'
                                    }`}
                                initial={false}
                                animate={{
                                    flex: isActive ? 3 : 1,
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'group-hover:opacity-30'}`} />

                                {/* Content Container */}
                                <div className="relative h-full p-8 flex flex-col justify-between z-10">

                                    {/* Top: Icon & Title */}
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl bg-surface/50 backdrop-blur-sm border border-border transition-colors duration-300 ${isActive ? 'text-primary border-primary/30' : 'text-muted'}`}>
                                            {service.icon}
                                        </div>
                                        <motion.div
                                            layout
                                            className="overflow-hidden whitespace-nowrap"
                                        >
                                            <h3 className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-text' : 'text-muted'}`}>
                                                {service.title}
                                            </h3>
                                            {isActive && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-primary text-sm font-mono"
                                                >
                                                    {service.subtitle}
                                                </motion.p>
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Middle: Expanded Content */}
                                    <AnimatePresence mode="wait">
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                                className="space-y-6 max-w-lg"
                                            >
                                                <p className="text-lg text-text/80 leading-relaxed">
                                                    {service.description}
                                                </p>

                                                <div>
                                                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                                                        <FiCpu /> Technologies
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {service.tech.map((t, i) => (
                                                            <span key={t} className="px-3 py-1 rounded-lg bg-surface/50 border border-border text-xs font-mono text-muted hover:text-primary hover:border-primary/30 transition-colors">
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Bottom: Action / Number */}
                                    <div className="flex justify-between items-end">
                                        <div className={`text-4xl font-bold font-mono transition-colors duration-300 ${isActive ? 'text-muted/20' : 'text-muted/10'}`}>
                                            0{services.indexOf(service) + 1}
                                        </div>

                                        <motion.div
                                            animate={{ rotate: isActive ? 0 : -45 }}
                                            className={`p-2 rounded-full border transition-colors duration-300 ${isActive ? 'bg-primary text-bg border-primary' : 'border-border text-muted'}`}
                                        >
                                            <FiArrowRight size={20} />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
