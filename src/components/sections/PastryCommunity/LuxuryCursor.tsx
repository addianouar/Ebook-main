import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LuxuryCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);
  const [visible, setVisible] = useState(false);
  const clickIdRef = useRef(0);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setVisible(true);

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.closest("input")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onClick = (e: MouseEvent) => {
      const id = ++clickIdRef.current;
      setClicks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== id));
      }, 800);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("click", onClick);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        .pastry-community-page, .pastry-community-page * {
          cursor: none !important;
        }
      `}</style>

      {/* Main cursor — whisk */}
      <motion.div
        className="fixed pointer-events-none z-[300]"
        style={{ left: position.x - 12, top: position.y - 12 }}
        animate={{ rotate: isHovering ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#651C32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.8 }}
        >
          {/* Whisk handle */}
          <line x1="12" y1="22" x2="12" y2="10" />
          {/* Whisk wires */}
          <path d="M8,10 Q6,5 8,2" />
          <path d="M10,10 Q9,4 10,1" />
          <path d="M12,10 Q12,3 12,0" />
          <path d="M14,10 Q15,4 14,1" />
          <path d="M16,10 Q18,5 16,2" />
        </svg>
      </motion.div>

      {/* Trailing dot */}
      <motion.div
        className="fixed pointer-events-none z-[299] rounded-full"
        style={{
          width: 6,
          height: 6,
          background: "#C5912C",
          left: position.x - 3,
          top: position.y - 3,
          opacity: 0.5,
        }}
        animate={{
          scale: isHovering ? 3 : 1,
          opacity: isHovering ? 0.2 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />

      {/* Click steam puffs */}
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            className="fixed pointer-events-none z-[298]"
            style={{ left: click.x, top: click.y }}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 4,
                  height: 4,
                  background: "#C5912C",
                }}
                initial={{ x: 0, y: 0, scale: 1, opacity: 0.5 }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 5) * 25,
                  y: Math.sin((i * Math.PI * 2) / 5) * 25 - 15,
                  scale: 0,
                  opacity: 0,
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default LuxuryCursor;
