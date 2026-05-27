"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowUpRight,
  Mail,
  Play,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "Gunnr — Switch",
    category: "Music Video",
    description:
      "High-energy cinematic edit with rhythmic cuts and bold transitions.",
    video: "/gunnr-switch.mp4",
  },
  {
    title: "Ginger Garlic",
    category: "Food Video",
    description:
      "Moody food visuals built for craving, texture, and premium storytelling.",
    video: "/gingergarlic.mp4",
  },
  {
    title: "Bollywood Social Toronto",
    category: "Event Film",
    description:
      "Nightlife energy, cinematic movement, crowd emotion, and premium event storytelling.",
    video: "/bst.mp4",
  },
  {
    title: "Djordan Media",
    category: "Car Edit",
    description:
      "Fast-paced automotive visuals with attitude, motion, and sleek cinematic transitions.",
    video: "/djordan.mp4",
  },
];

const services = [
  "Video Editing",
  "Content Strategy",
  "Brand Storytelling",
  "Social Campaigns",
  "Cinematic Graphics",
  "Marketing Direction",
];

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "5M+", label: "Views Generated" },
  { number: "100%", label: "Creative Obsession" },
];

const testimonials = [
  {
    quote:
      "Hrishi transformed our brand visuals into something cinematic and unforgettable.",
    name: "Client Partner",
    role: "Brand Collaboration",
  },
  {
    quote:
      "Fast execution, premium editing, and a strong sense of storytelling.",
    name: "Creative Client",
    role: "Campaign Project",
  },
];

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return null;
}

function CustomCursor() {
  const cursor = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursor.current) return;
      cursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursor}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 mix-blend-difference md:block"
    />
  );
}

function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 1.8, duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black text-white"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.85, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="text-4xl font-black uppercase tracking-[0.4em] md:text-7xl"
        >
          OHDUXK
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-xs uppercase tracking-[0.5em] text-white/40"
        >
          Cinematic Portfolio
        </motion.p>
      </div>
    </motion.div>
  );
}

function MagneticLink({
  children,
  href,
  dark = false,
}: {
  children: React.ReactNode;
  href: string;
  dark?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-bold transition ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {children}
    </motion.a>
  );
}

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 230]);
  const heroOpacity = useTransform(scrollY, [0, 620], [1, 0]);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <main className="relative overflow-hidden bg-black text-white">
      <SmoothScroll />
      <IntroLoader />
      <CustomCursor />

      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.06] mix-blend-overlay">
        <div className="h-full w-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:6px_6px]" />
      </div>

      <nav className="fixed left-4 right-4 top-4 z-50 flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-2xl md:left-8 md:right-8">
  <p className="text-xs font-bold uppercase tracking-[0.45em]">OHDUXK</p>

  <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.25em] text-white/70">
    <a href="#work" className="hover:text-white transition">Work</a>
    <a href="#about" className="hover:text-white transition">About</a>
    <a href="#services" className="hover:text-white transition">Services</a>
    <a href="#contact" className="hover:text-white transition">Contact</a>
  </div>

  <a
  href="#contact"
  className="rounded-full bg-white px-4 py-3 text-xs font-bold text-black md:px-7 md:py-4 md:text-sm"
>
  Start
</a>
</nav>

      <section id="work" className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/showreel.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_75%)]" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-12"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 backdrop-blur-xl"
            >
              <Sparkles size={16} />
              Marketing Strategy × Cinematic Editing × Visual Direction
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 70, filter: "blur(18px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 2.4, duration: 1 }}
              className="max-w-6xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.08em] md:text-8xl lg:text-[10rem]"
            >
              Stories That Move Brands.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-white/70"
            >
              Cinematic storytelling, premium editing, and strategy-led content
              built to stop scrolls and turn attention into action.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <MagneticLink href="#work">
                <Play fill="black" />
                Enter Portfolio
              </MagneticLink>

              <a
                href="#services"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                View Services
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="work" className="px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-sm uppercase tracking-[0.35em] text-white/40"
          >
            Selected Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-5xl text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl"
          >
            Built for brands that need attention.
          </motion.h2>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
              onClick={() => setSelectedProject(project)}
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -14, rotateX: 5, rotateY: -5 }}
                className="group relative min-h-[360px] cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:opacity-35"
                >
                  <source src={project.video} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/55" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/55">
                      {project.category}
                    </span>
                    <ArrowUpRight className="text-white/40 transition group-hover:rotate-45 group-hover:text-white" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold tracking-[-0.04em] md:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-white/55">{project.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#050505] px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/40">
            Services
          </p>

          <h2 className="mb-12 max-w-5xl text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
            Strategy in the brain. Cinema in the execution.
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-2xl font-semibold tracking-[-0.03em] hover:bg-white/[0.08]"
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-32 md:px-12">
  <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

    {/* Headshot */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <motion.div
  animate={{ opacity: [0.25, 0.6, 0.25], scale: [1, 1.08, 1] }}
  transition={{ duration: 4, repeat: Infinity }}
  className="absolute inset-0 rounded-[2rem] bg-white/10 blur-3xl"
/>

      <motion.img
  src="/headshot.jpg"
  alt="Hrishi"
  initial={{ scale: 1.08, filter: "blur(14px)" }}
  whileInView={{ scale: 1, filter: "blur(0px)" }}
  whileHover={{ scale: 1.04, rotate: -1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative h-[360px] w-full rounded-[2rem] object-cover border border-white/10 shadow-2xl md:h-[520px]"
/>
    </motion.div>

    {/* About text */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/40">
        About Hrishi
      </p>

      <h2 className="mb-8 text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
        I turn raw ideas into premium digital presence.
      </h2>

      <p className="text-lg leading-8 text-white/60">
        I’m Hrishi aka Ohduxk Media — a cinematic video editor, strategist,
        and visual storyteller helping brands stand out through bold visuals,
        emotional storytelling, and premium content experiences.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="https://www.linkedin.com/in/hrishikesh-poojary-86750b214"
          target="_blank"
          className="rounded-full border border-white/10 px-6 py-3 hover:bg-white hover:text-black transition"
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/ohduxk/"
          target="_blank"
          className="rounded-full border border-white/10 px-6 py-3 hover:bg-white hover:text-black transition"
        >
          Instagram
        </a>
      </div>
    </motion.div>

  </div>
</section>

      <section className="bg-white px-6 py-32 text-center text-black md:px-12">
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-black/45">
          Let’s Build
        </p>

        <h2 className="mx-auto mb-10 max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-8xl">
          Let’s Create Something Cinematic.
        </h2>

        <MagneticLink href="mailto:poojaryhrishikesh@gmail.com" dark>
          <Mail size={20} />
          Contact Hrishi
        </MagneticLink>
        <div className="mt-8 flex justify-center gap-4">
  <a
    href="https://www.linkedin.com/in/hrishikesh-poojary-86750b214"
    target="_blank"
    className="rounded-full border border-black/10 bg-black/5 p-4 transition hover:bg-black hover:text-white"
  >
    <span className="text-sm font-bold">IN</span>
  </a>

  <a
    href="https://www.instagram.com/ohduxk/"
    target="_blank"
    className="rounded-full border border-black/10 bg-black/5 p-4 transition hover:bg-black hover:text-white"
  >
    <span className="text-sm font-bold">IG</span>
  </a>

  <a
    href="mailto:poojaryhrishikesh@gmail.com"
    className="rounded-full border border-black/10 bg-black/5 p-4 transition hover:bg-black hover:text-white"
  >
    <Mail size={20} />
  </a>
</div>
      </section>
      {selectedProject && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 px-6 backdrop-blur-xl"
  >
    <motion.div
      initial={{ scale: 0.9, y: 40 }}
      animate={{ scale: 1, y: 0 }}
      className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#050505] p-4 md:p-6"
    >
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute right-6 top-6 z-10 rounded-full bg-white px-4 py-2 text-sm font-bold text-black"
      >
        Close
      </button>

      <video
        controls
        autoPlay
        className="aspect-video w-full rounded-[1.5rem] object-cover"
      >
        <source src={selectedProject.video} type="video/mp4" />
      </video>

      <div className="mt-8">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/40">
          {selectedProject.category}
        </p>

        <h2 className="text-5xl font-black uppercase tracking-[-0.05em]">
          {selectedProject.title}
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
          {selectedProject.description}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Role
            </p>
            <p className="mt-3 font-bold">Editing / Direction</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Style
            </p>
            <p className="mt-3 font-bold">Cinematic / Social-first</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Output
            </p>
            <p className="mt-3 font-bold">Video Campaign Asset</p>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
)}
    </main>
  );
}