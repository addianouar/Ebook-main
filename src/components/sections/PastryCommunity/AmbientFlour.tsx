import { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacityDir: number;
}

const AmbientFlour = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 640;
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for performance

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size with devicePixelRatio for crisp rendering
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Fewer particles on mobile for battery life
    const maxParticles = isMobile ? 25 : 80;
    const count = Math.min(
      Math.floor((width * height) / (isMobile ? 25000 : 12000)),
      maxParticles
    );
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (isMobile ? 2 : 2.5) + 0.5,
        speedX: (Math.random() - 0.5) * (isMobile ? 0.1 : 0.15),
        speedY: (Math.random() - 0.5) * (isMobile ? 0.07 : 0.1) - 0.05,
        opacity: Math.random() * 0.15 + 0.03,
        opacityDir: Math.random() > 0.5 ? 0.0003 : -0.0003,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;

        p.opacity += p.opacityDir;
        if (p.opacity > 0.18 || p.opacity < 0.02) {
          p.opacityDir *= -1;
        }

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(101, 28, 50, ${p.opacity})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const newDpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * newDpr;
      canvas.height = height * newDpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(newDpr, newDpr);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[11]"
      style={{ mixBlendMode: "multiply" }}
    />
  );
};

export default AmbientFlour;
