import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import pattern from "@/assets/pattern.jpg"; // import your pattern

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  const texts = {
    heroTagline: "Saralöwe - Exclusive Collection",
    heroTitle: "CUPCAKE EVOLUTION Vol 1",
    heroDescription: `Welcome to a world where cupcakes are no longer just little cakes, but edible works of art. 
    In this book, I invite you to discover 10 unique cupcake creations, each one crafted to surprise, inspire, and delight. 
    Beyond the classics, these recipes blend unexpected flavors, refined techniques, and a touch of creativity that transforms every bite into an experience.`,
    heroHighlight: "Precise recipes tested by our students",
    heroBullets: [
      "Recipes crafted for cupcake perfection",
      "Blending science and creativity",
      "10 exclusive and innovative creations",
    ],
    heroBtnPrimary: "GET THE EBOOK",
    heroBtnSecondary: "LEARN MORE",
  };

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ✨ Animated sparkles and orbs
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.3 + 0.2;
        this.opacity = Math.random() * 0.8 + 0.2;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) this.reset();
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 150, ${this.opacity})`;
        ctx.shadowColor = "#FFD700";
        ctx.shadowBlur = 10;
        ctx.fill();
      }
    }

    class Orb {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      radius: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.targetX = Math.random() * canvas.width;
        this.targetY = Math.random() * canvas.height;
        this.radius = Math.random() * 80 + 40;
        this.color = ["#C5912C", "#F2EFE8", "#ffd580"][Math.floor(Math.random() * 3)];
        this.opacity = 0.08 + Math.random() * 0.1;
      }

      update() {
        this.x += (this.targetX - this.x) * 0.002;
        this.y += (this.targetY - this.y) * 0.002;
      }

      draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, `${this.color}${Math.floor(this.opacity * 255).toString(16)}`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 80 }, () => new Particle());
    const orbs = Array.from({ length: 4 }, () => new Orb());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      orbs.forEach((orb) => {
        orb.update();
        orb.draw();
      });
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current!);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#4A0E1F] via-[#651C32] to-[#2E0D14] text-[#F2EFE8] px-6"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={pattern}
          alt="Pattern"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Canvas Effects */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl w-full">
        <div className="flex-1 text-center lg:text-left space-y-6">
          <p className="text-[#C5912C] tracking-widest uppercase font-medium">
            {texts.heroTagline}
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#F2EFE8] to-[#C5912C] bg-clip-text text-transparent">
            {texts.heroTitle}
          </h1>
          <p className="text-[#F2EFE8]/90 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            {texts.heroDescription}
          </p>
          <p className="text-[#C5912C] font-semibold">{texts.heroHighlight}</p>
          <ul className="list-disc text-[#F2EFE8]/80 pl-6">
            {texts.heroBullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("purchase")}
              className="bg-[#C5912C] hover:bg-[#D8A13A] text-[#2E0D14] font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:scale-105"
            >
              {texts.heroBtnPrimary}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="border border-[#C5912C] text-[#C5912C] hover:bg-[#C5912C]/20 font-bold px-6 py-3 rounded-xl transition-all"
            >
              {texts.heroBtnSecondary}
            </button>
          </div>
        </div>

        {/* Video */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-[#C5912C]/20 rounded-3xl blur-3xl animate-pulse"></div>
          <video
            src="/videos/cup mockup.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="relative z-10 rounded-3xl shadow-2xl border border-[#C5912C]/30 object-cover w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-[9/16] hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 animate-bounce text-[#C5912C]">
        <ArrowDown size={28} />
      </div>
    </section>
  );
};
