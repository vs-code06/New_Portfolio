import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';

export default function CustomCursor() {
    const [isTouch, setIsTouch] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorLabel, setCursorLabel] = useState('');

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 28, stiffness: 500 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Detect touch device
        const checkTouch = () => {
            setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouch();
        window.addEventListener('resize', checkTouch);

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Check for interactive elements
            const target = e.target;
            const interactiveElement = target.closest('button, a, .interactive') || target;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.closest('[data-cursor="hover"]') ||
                target.classList.contains('interactive') ||
                target.getAttribute('data-cursor') === 'hover';

            // Check for label
            const label = interactiveElement?.getAttribute('data-cursor-label');
            setCursorLabel(label || '');

            setIsHovering(!!isInteractive);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('resize', checkTouch);
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    if (isTouch) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Outer Ring */}
            <motion.div
                className={classNames(
                    "absolute rounded-full border border-cursor-ring transition-all duration-300 ease-out flex items-center justify-center",
                    isHovering ? "h-20 w-20 border-2 opacity-80 bg-cursor-ring/5" : "h-8 w-8 opacity-30"
                )}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    left: isHovering ? -40 : -16,
                    top: isHovering ? -40 : -16,
                }}
            >
                {/* Label */}
                <AnimatePresence>
                    {cursorLabel && isHovering && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="text-[10px] font-mono font-bold text-cursor-ring uppercase tracking-widest"
                        >
                            {cursorLabel}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Inner Dot */}
            <motion.div
                className={classNames(
                    "absolute rounded-full bg-cursor-dot transition-all duration-200 ease-out",
                    isHovering ? "h-0 w-0 opacity-0" : "h-2 w-2"
                )}
                style={{
                    translateX: cursorX, // No spring for immediate response
                    translateY: cursorY,
                    left: -4,
                    top: -4,
                }}
            />
        </div>
    );
}
