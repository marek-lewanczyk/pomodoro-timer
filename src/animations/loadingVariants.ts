import type { Variants } from 'framer-motion';

export const squareVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.2,
            duration: 0.4,
            ease: 'easeOut',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    })
};
