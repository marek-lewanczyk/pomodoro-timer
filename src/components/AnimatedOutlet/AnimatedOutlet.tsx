import { Outlet, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';

export default function AnimatedOutlet() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{
                    x: '-100vw',
                    opacity: 0,
                    filter: 'blur(8px)',
                    scale: 1.05
                }}
                animate={{
                    x: 0,
                    opacity: [0, 1, 0.6, 1],
                    filter: 'blur(0px)',
                    scale: 1
                }}
                exit={{
                    x: '100vw',
                    opacity: [1, 0.5, 0],
                    filter: 'blur(20px)',
                    scale: 0.98
                }}
                transition={{
                    duration: 0.6,
                    ease: 'easeInOut',
                    opacity: {
                        times: [0, 0.3, 0.5, 1]
                    }
                }}
            >
                <Outlet />
            </motion.div>
        </AnimatePresence>
    );
}
