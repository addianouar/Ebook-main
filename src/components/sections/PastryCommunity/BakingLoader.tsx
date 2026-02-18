import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BakingLoaderProps {
  onComplete: () => void;
}

const BakingLoader = ({ onComplete }: BakingLoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
        style={{ background: "#F5E6E8" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Cake SVG */}
        <div className="relative w-48 h-56 sm:w-56 sm:h-64">
          <svg viewBox="0 0 200 240" className="w-full h-full">
            {/* Plate */}
            <motion.ellipse
              cx="100"
              cy="220"
              rx="80"
              ry="12"
              fill="none"
              stroke="#651C32"
              strokeWidth="1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.2 }}
            />

            {/* Bottom tier */}
            <motion.rect
              x="30"
              y="160"
              width="140"
              height="55"
              rx="6"
              fill="none"
              stroke="#651C32"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Middle tier */}
            <motion.rect
              x="48"
              y="110"
              width="104"
              height="50"
              rx="5"
              fill="none"
              stroke="#651C32"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />

            {/* Top tier */}
            <motion.rect
              x="65"
              y="65"
              width="70"
              height="45"
              rx="4"
              fill="none"
              stroke="#651C32"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            />

            {/* Ribbon on bottom */}
            <motion.path
              d="M30,185 Q100,195 170,185"
              fill="none"
              stroke="#C5912C"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            />

            {/* Ribbon on middle */}
            <motion.path
              d="M48,133 Q100,141 152,133"
              fill="none"
              stroke="#C5912C"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            />

            {/* Topper — small circle */}
            <motion.circle
              cx="100"
              cy="58"
              r="8"
              fill="none"
              stroke="#C5912C"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.2, type: "spring" }}
            />

            {/* Steam lines */}
            {[80, 100, 120].map((x, i) => (
              <motion.path
                key={i}
                d={`M${x},50 Q${x - 5},35 ${x + 3},20`}
                fill="none"
                stroke="#651C32"
                strokeWidth="1"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.4, 0],
                  y: [0, -8, -16],
                }}
                transition={{
                  duration: 2.5,
                  delay: 2.4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>
        </div>

        {/* Progress bar */}
        <div className="w-40 h-[1px] bg-[#651C32]/10 mt-8 overflow-hidden">
          <motion.div
            className="h-full bg-[#651C32]/40"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Text */}
        <motion.p
          className="font-playfair font-bold text-[#651C32]/60 text-sm tracking-[0.3em] mt-6 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Preparing something exquisite
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default BakingLoader;
