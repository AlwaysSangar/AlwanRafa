"use client";

import { motion } from "framer-motion";

const S = [
  { t: "Flutter", c: "bg-sun", pos: "-left-4 top-8", r: -8 },
  { t: "Dart", c: "bg-mint", pos: "-right-3 top-28", r: 6 },
  { t: "Next.js", c: "bg-pop text-white", pos: "-left-2 bottom-20", r: 5 },
  { t: "UI/UX", c: "bg-white", pos: "-right-4 bottom-6", r: -6 },
];

// Stiker yang bisa diseret / disentuh, lalu memantul balik ke tempatnya.
export default function Stickers() {
  return (
    <>
      {S.map((s, i) => (
        <motion.span
          key={s.t}
          drag
          dragSnapToOrigin
          dragElastic={0.6}
          whileTap={{ scale: 1.15 }}
          whileDrag={{ scale: 1.2, zIndex: 30 }}
          initial={{ opacity: 0, scale: 0, rotate: s.r }}
          animate={{ opacity: 1, scale: 1, rotate: s.r }}
          transition={{ type: "spring", delay: 0.5 + i * 0.12, stiffness: 300, damping: 15 }}
          className={`absolute z-20 cursor-grab select-none rounded-full border-2 border-ink px-4 py-1.5 text-sm font-bold shadow-hard ${s.pos} ${s.c}`}
        >
          {s.t}
        </motion.span>
      ))}
    </>
  );
}
