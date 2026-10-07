import Image from "next/image";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import ActiveHeader from "@/components/ActiveHeader";
import ScrollProgress from "@/components/ScrollProgress";
import Tilt from "@/components/Tilt";
import Stickers from "@/components/Stickers";
import { projects } from "@/data/projects";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

const PROFILE = {
  name: "Alwan Rafa Fadilah",
  major: "Rekayasa Perangkat Lunak",
  headline: "Mobile Developer | Front-End Developer",
  about:
    "Pelajar SMK jurusan Rekayasa Perangkat Lunak dengan spesialisasi pada Web dan Mobile Development. Terampil dalam membangun antarmuka web menggunakan HTML, CSS, dan JavaScript, serta memiliki keahlian dalam mengembangkan aplikasi mobile lintas platform menggunakan Flutter dan Dart. Saya adalah individu yang mampu bekerja secara kolaboratif dalam tim, memiliki kemampuan adaptasi yang cepat terhadap perkembangan teknologi, serta dedikasi tinggi untuk menghasilkan solusi digital yang inovatif dan fungsional.",
  experiences: [
    { title: "Membuat Mobile App - TokoBunga", time: "2025", desc: "Mengembangkan aplikasi e-commerce pemesanan bunga lintas platform menggunakan Flutter dan Dart." },
    { title: "Membuat Mobile App - Jelajah Nusantara", time: "2025", desc: "Membangun aplikasi informasi pariwisata bertema kebudayaan Indonesia dengan Flutter." },
    { title: "Membuat Mobile App - Ruang Sehat", time: "2026", desc: "Aplikasi pemandu gaya hidup yang dirancang untuk membantu pengguna membangun kebiasaan sehat secara konsisten melalui pendekatan yang personal, ringan, dan interaktif." },
    { title: "Web Desain", time: "2026", desc: "Merancang desain antarmuka (UI) dan pengalaman pengguna (UX) untuk platform blog/catatan harian digital." },
  ],
  contacts: { whatsapp: "6285856470956", instagram: "reezzz08", email: "alwanrafa08@gmail.com" },
};

const STACK = ["Flutter", "Dart", "Next.js", "React", "HTML", "CSS", "JavaScript", "UI/UX"];
const TONES = ["bg-sun", "bg-pop", "bg-mint", "bg-grape", "bg-sun"];

function Title({ children, tone }: { children: React.ReactNode; tone: string }) {
  return (
    <h2 className={`inline-block -rotate-1 rounded-2xl border-2 border-ink px-5 py-2 font-display text-4xl font-extrabold shadow-hard sm:text-5xl ${tone}`}>
      {children}
    </h2>
  );
}

const btn =
  "rounded-2xl border-2 border-ink px-6 py-3.5 text-center text-sm font-bold shadow-hard transition active:translate-x-[5px] active:translate-y-[5px] active:shadow-none hover:-translate-y-0.5";

export default function Page() {
  const links = [
    { icon: <FaWhatsapp />, label: "WhatsApp", val: `+${PROFILE.contacts.whatsapp}`, href: `https://wa.me/${PROFILE.contacts.whatsapp}`, bg: "bg-mint" },
    { icon: <FaInstagram />, label: "Instagram", val: `@${PROFILE.contacts.instagram}`, href: `https://instagram.com/${PROFILE.contacts.instagram}`, bg: "bg-pop" },
    { icon: <FaEnvelope />, label: "Email", val: PROFILE.contacts.email, href: `mailto:${PROFILE.contacts.email}`, bg: "bg-sun" },
  ];

  return (
    <main className="relative min-h-screen">
      <ActiveHeader />
      <ScrollProgress />

      {/* HOME */}
      <section id="home" className="scroll-mt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:pt-16 md:grid-cols-[1.25fr_1fr]">
          <div className="order-2 text-center md:order-1 md:text-left">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-bold shadow-hard">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
                </span>
                Terbuka untuk kolaborasi
              </p>
            </Reveal>
            <h1 className="mt-6 font-display text-[clamp(3.6rem,12vw,7.5rem)] font-extrabold leading-[0.88] tracking-tight">
              {["Alwan", "Rafa", "Fadilah"].map((w, i) => (
                <Reveal key={w} delay={0.08 * (i + 1)}>
                  <span className="block">{w}</span>
                </Reveal>
              ))}
            </h1>
            <Reveal delay={0.4}>
              <p className="mt-6 inline-block rotate-1 rounded-xl border-2 border-ink bg-grape px-4 py-2 text-sm font-bold text-white shadow-hard">
                {PROFILE.headline}
              </p>
              <p className="mt-4 text-sm font-semibold text-ink/70">{PROFILE.major}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <a href="#projects" className={`${btn} bg-pop text-white`}>Lihat project</a>
                <a href="#contact" className={`${btn} bg-white`}>Hubungi saya</a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" className="order-1 md:order-2">
            <div className="relative mx-auto w-full max-w-[20rem]">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-[2rem] border-2 border-ink bg-pop" />
              <Tilt max={8} className="rounded-[2rem]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-2 border-ink bg-sun">
                  <Image src="/alwan.jpeg" alt="Foto Alwan Rafa Fadilah" fill priority sizes="320px" className="object-cover" />
                </div>
              </Tilt>
              <Stickers />
            </div>
          </Reveal>
        </div>

        {/* strip teknologi */}
        <div className="marquee -rotate-1 overflow-hidden border-y-2 border-ink bg-ink py-4" aria-hidden>
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl font-extrabold text-paper">
            {[...STACK, ...STACK, ...STACK, ...STACK].map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                {t} <span className="text-sun">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section id="profile" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <Reveal><Title tone="bg-mint">Profile</Title></Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Reveal direction="right" className="h-full">
              <div className="h-full rounded-3xl border-2 border-ink bg-white p-6 shadow-hard sm:p-8">
                <h3 className="font-display text-2xl font-extrabold">Tentang saya</h3>
                <p className="mt-4 text-sm leading-7 text-ink/80">{PROFILE.about}</p>
              </div>
            </Reveal>
            <Reveal direction="left">
              <h3 className="mb-5 font-display text-2xl font-extrabold">Pengalaman</h3>
              <div className="relative space-y-5 border-l-2 border-ink pl-7">
                {PROFILE.experiences.map((ex) => (
                  <div key={ex.title} className="relative rounded-2xl border-2 border-ink bg-white p-4 shadow-[4px_4px_0_#16113A] transition hover:-translate-y-1">
                    <span aria-hidden className="absolute -left-[39px] top-5 h-4 w-4 rounded-full border-2 border-ink bg-pop" />
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-bold">{ex.title}</p>
                      <span className="rounded-full border-2 border-ink bg-sun px-2.5 py-0.5 text-xs font-bold">{ex.time}</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-ink/70">{ex.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 border-y-2 border-ink bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <Reveal><Title tone="bg-pop text-white">Project</Title></Reveal>
          <p className="mt-5 max-w-md text-sm text-ink/70">Sentuh atau arahkan kursor ke HP untuk memiringkannya. Ketuk untuk melihat layar penuh.</p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 5).map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.08} className="h-full">
                <ProjectCard p={p} tone={TONES[i % TONES.length]} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <Reveal>
            <div className="rounded-[2rem] border-2 border-ink bg-grape p-6 text-white shadow-hard sm:p-12">
              <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">Ayo ngobrol dan bikin sesuatu bareng.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/85">
                Terima kasih telah meluangkan waktu untuk meninjau portofolio saya. Sebagai pelajar yang antusias di bidang Web &amp; Mobile Development, saya sangat terbuka untuk kolaborasi proyek.
              </p>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex items-center gap-4 rounded-2xl border-2 border-ink p-4 text-ink shadow-[4px_4px_0_#16113A] transition hover:-translate-y-1 active:translate-x-1 active:translate-y-1 active:shadow-none ${l.bg}`}
                  >
                    <span className="text-3xl transition-transform group-hover:rotate-12 group-hover:scale-110">{l.icon}</span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold">{l.label}</span>
                      <span className="block truncate text-sm font-extrabold">{l.val}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          <p className="mt-10 text-center text-xs font-semibold text-ink/60">© {new Date().getFullYear()} {PROFILE.name}</p>
        </div>
      </section>
    </main>
  );
}
