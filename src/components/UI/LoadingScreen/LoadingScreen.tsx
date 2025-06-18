import { motion } from 'framer-motion';
import { squareVariants } from '@/animations/loadingVariants.ts';

export function LoadingScreen() {
    return (
        <div className="flex h-full items-center justify-center">
            <div className="flex gap-4">
                {[0, 1, 2].map(i => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={squareVariants}
                        data-testid="loading-square"
                        className="bg-primary dark:bg-secondary h-6 w-6"
                        style={{ imageRendering: 'pixelated' }}
                    />
                ))}
            </div>
        </div>
    );
}
