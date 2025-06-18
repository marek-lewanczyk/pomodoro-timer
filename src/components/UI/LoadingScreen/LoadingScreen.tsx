import { motion } from 'framer-motion';
import { squareVariants } from '@/animations/loadingVariants.ts';

export function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex gap-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={squareVariants}
            data-testid="loading-square"
            className="w-6 h-6 bg-primary dark:bg-secondary"
            style={{ imageRendering: 'pixelated' }}
          />
        ))}
      </div>
    </div>
  );
}
