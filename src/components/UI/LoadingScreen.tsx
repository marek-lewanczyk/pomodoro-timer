import {motion} from "framer-motion";

export function LoadingScreen() {
    const squareVariants = {
        hidden: {opacity: 0, scale: 0.5},
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.4,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }),
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex gap-4">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={squareVariants}
                        className="w-6 h-6 bg-black"
                        style={{
                            imageRendering: "pixelated", // retro styl
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
