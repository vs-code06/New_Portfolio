import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ number, title, align = 'left' }) {
    return (
        <div className={`flex flex-col ${align === 'center' ? 'items-center' : 'items-start'} mb-16 relative`}>
            {/* Connector Line (Top) */}
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-px bg-gradient-to-b from-transparent via-primary/50 to-primary absolute -top-20 left-0 md:left-auto"
                style={{ left: align === 'center' ? '50%' : '2px' }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
            >
                <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent font-mono text-2xl md:text-3xl opacity-80">
                        {number}.
                    </span>
                    <span className="text-text tracking-tight">
                        {title}
                    </span>
                </h2>

                {align !== 'center' && (
                    <div className="h-px bg-gradient-to-r from-primary/50 to-transparent w-20 md:w-40" />
                )}
            </motion.div>
        </div>
    );
}
