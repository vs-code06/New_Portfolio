import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

export default function ExperienceNode({ job, index, isSelected, onClick, onKeyDown }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className={classNames(
                "relative flex flex-col items-center md:items-start w-full md:w-1/2 px-6 md:px-16 py-4",
                isEven ? "md:self-start md:text-right md:items-end" : "md:self-end md:text-left md:items-start"
            )}
        >
            {/* Timeline Node (Dot) */}
            <button
                onClick={() => onClick(job)}
                onKeyDown={(e) => onKeyDown(e, job)}
                className={classNames(
                    "absolute top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 z-20 interactive focus:outline-none focus:ring-4 focus:ring-primary/30",
                    "md:top-1/2 md:-translate-y-1/2",
                    isEven ? "md:-right-2" : "md:-left-2",
                    // Mobile positioning
                    "left-0 md:left-auto",
                    isSelected
                        ? "bg-primary border-primary shadow-[0_0_15px_rgba(0,255,136,0.6)] scale-125"
                        : "bg-bg border-muted hover:border-primary hover:bg-primary/20"
                )}
                aria-label={`View details for ${job.role} at ${job.company}`}
                data-cursor="hover"
                data-cursor-label="Details"
            />

            {/* Content Card */}
            <div
                className={classNames(
                    "group relative p-6 rounded-xl border border-white/5 bg-surface/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,255,136,0.05)] w-full interactive cursor-none",
                    "ml-8 md:ml-0" // Offset for mobile line
                )}
                onClick={() => onClick(job)}
                data-cursor="hover"
                data-cursor-label="Details"
            >
                <span className="text-primary font-mono text-xs mb-2 block">
                    {job.start} — {job.end}
                </span>
                <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                    {job.company}
                </h3>
                <h4 className="text-muted text-sm font-medium mb-3">
                    {job.role}
                </h4>
                <p className="text-muted/80 text-sm line-clamp-2">
                    {job.summary}
                </p>
            </div>
        </motion.div>
    );
}
