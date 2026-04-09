import { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import BakingLoader from "@/components/sections/PastryCommunity/BakingLoader";
import AmbientFlour from "@/components/sections/PastryCommunity/AmbientFlour";
import LuxuryCursor from "@/components/sections/PastryCommunity/LuxuryCursor";


import bgImage from "@/assets/pastry-community-bg.webp";

const PastryCommunity = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [heroVisible, setHeroVisible] = useState(false);
  const [mouseY, setMouseY] = useState(0);
  const [vh, setVh] = useState(window.innerHeight);
  const containerRef = useRef<HTMLDivElement>(null);
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  // Fix mobile viewport height (address bar issue)
  useEffect(() => {
    const updateVh = () => setVh(window.innerHeight);
    window.addEventListener("resize", updateVh);
    // Also handle orientation change on mobile
    window.addEventListener("orientationchange", () => {
      setTimeout(updateVh, 100);
    });
    return () => {
      window.removeEventListener("resize", updateVh);
    };
  }, []);

  // Parallax — desktop only
  useEffect(() => {
    if (loading || isTouchDevice) return;
    const handleMouse = (e: MouseEvent) => {
      setMouseY((e.clientY / window.innerHeight - 0.5) * 20);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [loading, isTouchDevice]);

  return (
    <div ref={containerRef} className="pastry-community-page">
      {/* Loader */}
      <AnimatePresence>
        {loading && <BakingLoader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {/* Main Scene */}
      {!loading && (
        <>
          <LuxuryCursor />
          <AmbientFlour />

          {/* Back Button — larger touch target on mobile */}
          <motion.button
            onClick={() => navigate("/")}
            className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 bg-[#651C32]/10 backdrop-blur-sm text-[#651C32]/60 p-3 sm:p-3 min-w-[44px] min-h-[44px] rounded-full hover:bg-[#651C32]/20 hover:text-[#651C32] active:bg-[#651C32]/25 transition-all duration-300 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <ArrowLeft size={20} />
          </motion.button>

          {/* Full-screen Hero — uses real vh for mobile */}
          <div
            className="fixed inset-0 z-10 overflow-hidden"
            style={{ height: vh }}
          >
            {/* Background image with parallax (desktop) / static (mobile) */}
            <motion.div
              className="absolute inset-0"
              style={isTouchDevice ? {} : { y: mouseY }}
              transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            >
              <div
                className="absolute inset-[-20px] sm:inset-[-40px] bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
              />
            </motion.div>

            {/* Film grain overlay — hidden on mobile for performance */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none z-[12] hidden sm:block"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                backgroundSize: "128px",
              }}
            />

            {/* Vignette — soft rose edges, lighter on mobile */}
            <div
              className="absolute inset-0 pointer-events-none z-[13]"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 40%, rgba(101,28,50,0.25) 100%)",
              }}
            />

            {/* Soft overlay for text legibility — slightly stronger on mobile */}
            <div className="absolute inset-0 bg-[#F5E6E8]/35 sm:bg-[#F5E6E8]/30 z-[14]" />

            {/* Center content */}
            <div className="relative z-[15] flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center safe-area-padding">

              {/* Frosted glass card */}
              <motion.div
                className="relative px-8 sm:px-14 md:px-20 py-10 sm:py-14 md:py-16 rounded-3xl max-w-[92vw] sm:max-w-xl md:max-w-2xl"
                style={{
                  background: "rgba(245, 230, 232, 0.45)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(101, 28, 50, 0.08)",
                  boxShadow:
                    "0 8px 32px rgba(101, 28, 50, 0.08), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(101,28,50,0.04)",
                }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={heroVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Academy name */}
                <motion.div
                  className="overflow-hidden mb-2 sm:mb-4"
                  initial={{ opacity: 0 }}
                  animate={heroVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <motion.p
                    className="font-inter font-bold text-[#651C32]/60 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase"
                    initial={{ y: 40 }}
                    animate={heroVisible ? { y: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    SARALOWE
                  </motion.p>
                </motion.div>

                {/* Title line 1 */}
                <div className="overflow-hidden">
                  <motion.h1
                    className="font-playfair text-[#651C32] text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-none"
                    initial={{ y: 100 }}
                    animate={heroVisible ? { y: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    Pastry
                  </motion.h1>
                </div>

                {/* Title line 2 */}
                <div className="overflow-hidden">
                  <motion.h1
                    className="font-playfair text-[#651C32] text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold italic leading-none mt-1"
                    initial={{ y: 100 }}
                    animate={heroVisible ? { y: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    Academy
                  </motion.h1>
                </div>

                {/* Divider line */}
                <motion.div
                  className="w-12 sm:w-16 h-[1px] bg-[#C5912C] my-5 sm:my-8 mx-auto"
                  initial={{ scaleX: 0 }}
                  animate={heroVisible ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.1 }}
                />

                {/* Coming Soon — large & clear */}
                <motion.p
                  className="font-playfair font-bold text-[#651C32] text-xl sm:text-3xl md:text-4xl tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 1.3 }}
                >
                  Coming Soon
                </motion.p>

                {/* Cake-themed loading bar */}
                <motion.div
                  className="relative w-full max-w-[208px] sm:max-w-[256px] md:max-w-[320px] mx-auto mb-6 sm:mb-10"
                  initial={{ opacity: 0 }}
                  animate={heroVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  {/* Bar track */}
                  <div className="relative h-2.5 sm:h-3 rounded-full bg-[#651C32]/10 border border-[#651C32]/15 overflow-hidden">
                    {/* Animated fill */}
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, #C5912C, #D4A94E, #C5912C)",
                        backgroundSize: "200% 100%",
                      }}
                      initial={{ width: "0%" }}
                      animate={
                        heroVisible
                          ? {
                              width: "95%",
                              backgroundPosition: ["0% 0%", "200% 0%"],
                            }
                          : {}
                      }
                      transition={{
                        width: {
                          duration: 2.5,
                          delay: 1.8,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        backgroundPosition: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      }}
                    />
                  </div>

                  {/* Tiny cake icon riding the bar */}
                  <motion.div
                    className="absolute -top-4 sm:-top-5 flex flex-col items-center"
                    initial={{ left: "0%" }}
                    animate={heroVisible ? { left: "95%" } : {}}
                    transition={{
                      duration: 2.5,
                      delay: 1.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transform: "translateX(-50%)" }}
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 20 22"
                      fill="none"
                      className="sm:w-5 sm:h-[22px]"
                    >
                      <rect x="2" y="14" width="16" height="7" rx="1.5" fill="#651C32" opacity="0.8" />
                      <rect x="5" y="8" width="10" height="6" rx="1.5" fill="#651C32" opacity="0.6" />
                      <circle cx="10" cy="6" r="2.5" fill="#C5912C" />
                      <path d="M2,17 Q10,19 18,17" stroke="#C5912C" strokeWidth="1" fill="none" />
                    </svg>
                  </motion.div>

                  {/* Baking text */}
                  <motion.div
                    className="text-center mt-2.5 sm:mt-3 flex flex-col items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={heroVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 2.2 }}
                  >
                    <motion.p
                      className="font-inter font-bold text-[#651C32] text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] uppercase"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      ✦ We are more than close ✦
                    </motion.p>
                    <motion.p
                      className="font-inter text-[#651C32]/50 text-[8px] sm:text-[9px] tracking-[0.15em] uppercase"
                    >
                      95% ready
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>

            </div>
          </div>

        </>
      )}
    </div>
  );
};

export default PastryCommunity;
