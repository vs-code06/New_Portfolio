import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingEffect = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Typing logic
    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return (
        <span>
            {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </span>
    );
};

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary font-mono text-sm md:text-base mb-4 tracking-widest uppercase h-6">
                        <TypingEffect words={["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"]} />
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 group relative inline-block">
                        <span className="text-text relative z-10 group-hover:animate-glitch-1">Building the</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative z-10 group-hover:animate-glitch-2">
                            Future
                        </span>
                        <span className="absolute top-0 left-0 -z-10 w-full h-full text-primary opacity-0 group-hover:opacity-50 group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-100">Building the Future</span>
                        <span className="absolute top-0 left-0 -z-10 w-full h-full text-accent opacity-0 group-hover:opacity-50 group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-100">Building the Future</span>
                    </h1>
                    <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        I craft high-performance web experiences with a focus on modern design,
                        clean code, and intuitive user interactions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary text-bg font-bold hover:bg-accent transition-colors interactive hover:scale-105 active:scale-95 duration-200"
                            data-cursor="hover"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-border hover:border-primary/50 text-text transition-colors interactive hover:bg-surface/50 duration-200"
                            data-cursor="hover"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2 shadow-[0_0_10px_rgba(0,255,136,0.2)]">
                    <motion.div
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                        animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
