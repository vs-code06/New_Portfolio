import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiUnlock } from 'react-icons/fi';

export default function MemoryShard({ job, index, onClick }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative group cursor-pointer ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} mb-12 md:mb-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
            onClick={() => onClick(job)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Connector Line to Center Stream */}
            <div className={`hidden md:block absolute top-6 h-px bg-primary/30 w-12 ${index % 2 === 0 ? 'right-0' : 'left-0'}`} />
            <div className={`hidden md:block absolute top-6 w-2 h-2 rounded-full bg-primary ${index % 2 === 0 ? '-right-1' : '-left-1'} shadow-[0_0_10px_var(--primary)]`} />

            {/* The Shard Container */}
            <div className="relative overflow-hidden rounded-xl bg-surface/50 border border-white/10 backdrop-blur-md p-6 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,255,136,0.1)]">

                {/* Glitch Overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none" />

                {/* Scanline */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 opacity-0 group-hover:opacity-100 animate-scanline pointer-events-none" />

                <div className="relative z-10">
                    <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <span className="font-mono text-xs text-primary/80 px-2 py-1 rounded bg-primary/10 border border-primary/20">
                            {job.period}
                        </span>
                        <div className="text-muted/50 text-xs font-mono flex items-center gap-1">
                            {isHovered ? <FiUnlock className="text-primary" /> : <FiLock />}
                            {isHovered ? 'DECRYPTED' : 'ENCRYPTED'}
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors duration-300">
                        {job.company}
                    </h3>
                    <p className="text-muted font-mono text-sm mt-1 group-hover:text-text transition-colors">
                        {job.role}
                    </p>
                </div>

                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/30 group-hover:border-primary transition-colors" />
            </div>
        </motion.div>
    );
}
