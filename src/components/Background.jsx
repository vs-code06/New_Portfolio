import React from 'react';
import { motion } from 'framer-motion';

export default function Background() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Cyber Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />

            {/* Ambient Glow Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"
            />

            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]"
            />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
}
