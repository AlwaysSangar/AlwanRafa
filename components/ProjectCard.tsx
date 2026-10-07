"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import Tilt from "@/components/Tilt";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p, tone = "bg-sun" }: { p: Project; tone?: string }) {
  const [open, setOpen] = useState(false);
  const [everOpened, setEverOpened] = useState(false); // portal baru dibuat setelah pertama kali dibuka

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const openViewer = () => {
    setEverOpened(true);
    setOpen(true);
  };

  return (
    <>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-hard transition-shadow duration-300 hover:shadow-[9px_9px_0_#16113A]"
      >
        {p.image && (
          <div className={`bg-dots flex justify-center border-b-2 border-ink pb-5 pt-6 ${tone}`}>
            <Tilt max={10} className="rounded-[2.1rem]">
              <button
                type="button"
                onClick={openViewer}
                aria-label={`Perbesar gambar ${p.title}`}
                className="relative block w-[230px] cursor-zoom-in overflow-hidden rounded-[2.1rem] border-[6px] border-black/80 bg-black shadow-[0_20px_40px_rgba(0,0,0,0.7)] outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 md:w-[260px]"
              >
                <div className="absolute inset-x-16 top-0 z-10 h-4 rounded-b-2xl bg-black/85" />
                <div className="relative mt-3 h-[420px] overflow-hidden rounded-[1.6rem] bg-black md:h-[460px]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="260px"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </button>
            </Tilt>
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-2 font-display text-2xl font-extrabold text-ink">{p.title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-ink/70">{p.desc}</p>

          <div className="mb-5 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border-2 border-ink bg-paper px-3 py-1 text-xs font-bold text-ink"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex gap-2">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-ink bg-white py-2.5 text-sm font-bold text-ink shadow-[3px_3px_0_#16113A] transition active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                <FaGithub /> GitHub
              </a>
            )}
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-ink bg-ink py-2.5 text-sm font-bold text-paper shadow-[3px_3px_0_#FF4F9A] transition active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.article>

      {everOpened &&
        p.image &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={p.title}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.85, opacity: 0, y: 24 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="relative h-[82vh] w-[min(92vw,440px)]"
                >
                  <Image src={p.image!} alt={p.title} fill sizes="440px" className="object-contain" />
                </motion.div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Tutup"
                  className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 active:scale-90"
                >
                  <FaTimes />
                </button>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
