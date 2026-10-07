"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  max?: number; // derajat kemiringan maksimum
  glare?: boolean;
};

// Miring mengikuti kursor / jari + kilau cahaya. Scroll vertikal di HP tetap jalan (touch-pan-y).
export default function Tilt({ children, className = "", max = 12, glare = true }: Props) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const sx = useSpring(x, { stiffness: 220, damping: 20 });
  const sy = useSpring(y, { stiffness: 220, damping: 20 });
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const bg = useTransform(
    [sx, sy],
    ([a, b]: number[]) =>
      `radial-gradient(circle at ${a * 100}% ${b * 100}%, rgba(255,255,255,0.28), transparent 55%)`
  );

  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    x.set(0.5);
    y.set(0.5);
  };

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={`relative touch-pan-y ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={move}
      onPointerDown={move}
      onPointerUp={reset}
      onPointerLeave={reset}
      onPointerCancel={reset}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          style={{ background: bg }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay"
        />
      )}
    </motion.div>
  );
}
