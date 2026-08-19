import { useState, useEffect } from "react";
import {
  Mail,
  MessageCircle,
  FileDown,
  ExternalLink,
  Circle,
  GitBranch,
  Terminal,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Image,
} from "lucide-react";
import profile from "./assets/profile.jpg";
import welcomeImg from './assets/pedidosapp-screenshots/Welcome.PNG';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

type RoleCredentials = {
  role: string;
  email: string;
  password: string;
};

type ProjectType = {
  title: string;
  status: string;
  desc: string;
  github: string;
  demo: string;
  tech: string[];
  roles: RoleCredentials[];
  highlights?: string[];
  images?: { label: string; src: string }[];
};

type SkillCategory = "Backend" | "Frontend" | "Tools";

const skills: Record<SkillCategory, string[]> = {
  Backend: ["PHP", "Laravel", "MySQL"],
  Frontend: ["React", "TypeScript", "Tailwind CSS"],
  Tools: ["Git", "Inertia.js", "Blade"],
};

const projects: ProjectType[] = [
  {
    title: "SaleSystem",
    status: "In progress",
    desc: "Product, sales, and stock management with user authentication and real-time inventory tracking.",
    github: "https://github.com/GomezBrianJoelAgustin/SaleSystem",
    demo: "https://salesystem-816l.onrender.com/",
    tech: ["Laravel", "MySQL", "React", "Inertia.js", "Tailwind"],
    roles: [
      {
        role: "Admin",
        email: "admin@example.com",
        password: "password",
      },
    ],
  },
  {
    title: "PedidosApp",
    status: "In progress",
    desc: "Full-stack web system for gastronomic management in real time. It has stock control, multi-role architecture (Admin, Cashier, Kitchen, Delivery), interactive digital menu with floating cart, optimization of backend queries and adaptive UI/UX disease (Dark/Light Mode).",
    github: "https://github.com/GomezBrianJoelAgustin/pedidosapp",
    demo: "https://pedidosapp-gno1.onrender.com/",
    tech: ["Laravel", "MySQL", "React", "Inertia.js", "Tailwind", "Spatie Permissions"],
    roles: [
      {
        role: "Super Admin",
        email: "admin@empandas.com",
        password: "password123",
      },
      {
        role: "Cajero / Cashier",
        email: "caja@empandas.com",
        password: "password123",
      },
      {
        role: "Chef / Cocina",
        email: "cocina@empandas.com",
        password: "password123",
      },
      {
        role: "Cadete / Delivery",
        email: "cadete@empandas.com",
        password: "password123",
      },
    ],
    highlights: [
      "Access Control (Spatie Permissions): Isolated multi-role structure for cashier, kitchen, delivery and administration.",
      "Performance Optimization: Strict backend pagination (10 items per page) and good practices in React to avoid memory leaks.",
      "UI/UX Design: Handcrafted color palette adapted for both Dark Mode (Oven) and Gastronomic Light Mode.",
    ],
    images: [
      { label: "Welcome", src: welcomeImg },
    ],
  },
];

function App() {
  const [tick, setTick] = useState<boolean>(true);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => !t), 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#EDEFF2] font-[Inter,ui-sans-serif] p-4 md:p-8 flex items-center justify-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        .mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .glow:hover { box-shadow: 0 0 0 1px rgba(94,234,212,0.35), 0 8px 30px -8px rgba(94,234,212,0.25); }
      `}</style>

      <div className="w-full max-w-6xl rounded-2xl border border-[#232830] bg-[#12151B] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#232830] bg-[#0D0F14] mono text-xs text-[#7C8494]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A59]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#5EEAD4]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#A78BFA]/60" />
            </div>
            <span className="ml-2 hidden sm:inline">portfolio — agustin-gomez</span>
          </div>
          <div className="flex items-center gap-1.5">
            <GitBranch size={13} />
            <span>main</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8">
          <aside className="bg-[#0D0F14] border border-[#232830] rounded-xl p-6 flex flex-col items-center text-center h-fit">
            <div className="relative">
              <img
                src={profile}
                alt="Profile photo of Agustin Gomez"
                className="w-32 h-32 object-cover rounded-xl border border-[#232830]"
              />
              <span className="absolute -bottom-2 -right-2 bg-[#0D0F14] border border-[#232830] rounded-full p-1.5">
                <Circle size={10} className="fill-[#5EEAD4] text-[#5EEAD4]" />
              </span>
            </div>

            <h1 className="text-lg font-semibold mt-4">Agustin Gomez</h1>
            <p className="mono text-xs text-[#5EEAD4] mt-1">
              Fullstack Developer{tick ? "_" : " "}
            </p>

            <div className="flex gap-2 mt-4 flex-wrap justify-center">
              {["Laravel", "React", "MySQL"].map((t) => (
                <span
                  key={t}
                  className="mono text-[11px] px-2 py-1 rounded-md bg-[#171B23] border border-[#232830] text-[#7C8494]"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-[#7C8494] text-sm mt-4 leading-relaxed">
              Argentina 🇦🇷
              <br />
              Looking for my first opportunity as a
              fullstack developer.
            </p>

            <div className="flex flex-col gap-2 w-full mt-5">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=agustingomez02000@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glow flex items-center justify-center gap-2 bg-[#5EEAD4] text-[#0A0C10] px-4 py-2.5 rounded-lg font-semibold text-sm transition-all"
              >
                <Mail size={16} />
                Get in touch
              </a>
              <a
                href="/CV_Agustin_Gomez.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-transparent border border-[#232830] hover:border-[#5EEAD4]/50 text-[#EDEFF2] px-4 py-2.5 rounded-lg font-medium text-sm transition-colors"
              >
                <FileDown size={16} />
                View resume
              </a>
            </div>

            <div className="flex gap-4 mt-5 pt-5 border-t border-[#232830] w-full justify-center">
              <a
                href="https://github.com/GomezBrianJoelAgustin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#7C8494] hover:text-[#EDEFF2] transition-colors"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/brian-gomez-74310b3a2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#7C8494] hover:text-[#EDEFF2] transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="https://wa.me/541178310316"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-[#7C8494] hover:text-[#EDEFF2] transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </aside>

          <main className="md:col-span-2 space-y-6">
            <div>
              <p className="mono text-xs text-[#7C8494] flex items-center gap-2 mb-3">
                <Terminal size={13} className="text-[#5EEAD4]" />
                whoami
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                I build apps
                <br />
                <span className="text-[#7C8494]">end to end.</span>
              </h2>
              <p className="text-[#7C8494] mt-4 max-w-lg leading-relaxed">
                Fullstack developer specialized in Laravel and React.
                I design, build, and ship complete, scalable web
                applications — from backend to frontend.
              </p>

              <div className="flex gap-6 md:gap-10 mt-6">
                <Stat number="+3" label="years learning" />
                <Stat number="2" label="active projects" />
                <Stat number="100%" label="commitment" />
              </div>
            </div>

            <section className="bg-[#0D0F14] border border-[#232830] rounded-xl p-6">
              <p className="mono text-xs text-[#A78BFA] mb-3">about.md</p>
              <p className="text-[#B4BAC4] text-sm leading-relaxed">
                I specialize in building complete web applications: from
                data modeling and the API in Laravel to dynamic interfaces
                with React and Inertia.js. I care about clean code,
                solving real problems, and learning something new every
                day. Currently looking for my first opportunity as a
                fullstack developer.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mt-5 pt-5 border-t border-[#232830]">
                {(Object.entries(skills) as [SkillCategory, string[]][]).map(
                  ([category, items]) => (
                    <div key={category}>
                      <p className="mono text-[11px] text-[#7C8494] uppercase tracking-wide mb-2">
                        {category}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((s) => (
                          <span
                            key={s}
                            className="text-xs px-2 py-1 rounded bg-[#171B23] text-[#B4BAC4] border border-[#232830]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>

            <section>
              <p className="mono text-xs text-[#7C8494] mb-3">projects/</p>
              <div className="space-y-4">
                {projects.map((project) => (
                  <Project key={project.title} {...project} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <h3 className="text-2xl font-bold">{number}</h3>
      <p className="text-[#7C8494] text-xs mt-0.5">{label}</p>
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded bg-[#232830] hover:bg-[#2E333D] text-[#7C8494] transition-colors"
      aria-label={`Copy ${text}`}
    >
      {copied ? (
        <>
          <Check size={10} className="text-[#5EEAD4]" />
          <span className="text-[#5EEAD4]">Copied</span>
        </>
      ) : (
        <>
          <Copy size={10} />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

function ProjectCarousel({ images }: { images: { label: string; src: string }[] }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  if (!images || images.length === 0) return null;

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-2">
        <Image size={13} className="text-[#A78BFA]" />
        <span className="mono text-[11px] text-[#A78BFA] uppercase tracking-wide">
          Preview
        </span>
      </div>
      <div className="relative rounded-lg overflow-hidden border border-[#232830] bg-[#171B23]">
        <div className="aspect-video flex items-center justify-center">
          <img
            src={images[index].src}
            alt={images[index].label}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-2 pointer-events-none">
          <button
            onClick={prev}
            className="pointer-events-auto p-1.5 rounded-md bg-[#0D0F14]/80 border border-[#232830] text-[#7C8494] hover:text-[#EDEFF2] transition-colors"
            aria-label="Previous screenshot"
          >
            <ChevronDown size={14} className="rotate-90" />
          </button>
          <button
            onClick={next}
            className="pointer-events-auto p-1.5 rounded-md bg-[#0D0F14]/80 border border-[#232830] text-[#7C8494] hover:text-[#EDEFF2] transition-colors"
            aria-label="Next screenshot"
          >
            <ChevronDown size={14} className="-rotate-90" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-4 bg-[#5EEAD4]" : "w-1.5 bg-[#232830] hover:bg-[#7C8494]"
            }`}
            aria-label={`Go to screenshot ${i + 1}: ${img.label}`}
          />
        ))}
      </div>
    </div>
  );
}

function Project({
  title,
  status,
  desc,
  github,
  demo,
  tech,
  roles,
  highlights,
  images,
}: ProjectType) {
  const [selectedRole, setSelectedRole] = useState(0);
  const [showHighlights, setShowHighlights] = useState(false);

  const current = roles[selectedRole] || roles[0];

  return (
    <div className="glow group p-5 rounded-xl border border-[#232830] bg-[#0D0F14] transition-all duration-200">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-base">{title}</h3>
          <span className="mono text-[10px] px-2 py-0.5 rounded-full bg-[#FF7A59]/10 text-[#FF7A59] border border-[#FF7A59]/25">
            {status}
          </span>
        </div>
        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-[#7C8494] hover:text-[#EDEFF2] transition-colors"
          >
            <GithubIcon size={14} />
            Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-[#5EEAD4] hover:underline"
          >
            Demo
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      <p className="text-[#B4BAC4] text-sm mt-2 leading-relaxed">{desc}</p>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {tech.map((t) => (
          <span
            key={t}
            className="mono text-[10px] px-2 py-0.5 rounded bg-[#171B23] text-[#7C8494] border border-[#232830]"
          >
            {t}
          </span>
        ))}
      </div>

      {roles && roles.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <p className="mono text-[11px] text-[#A78BFA] uppercase tracking-wide">
              Test Credentials
            </p>
            {roles.length > 1 && (
              <span className="text-[10px] text-[#7C8494]">{roles.length} roles</span>
            )}
          </div>

          {roles.length > 1 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {roles.map((r, i) => (
                <button
                  key={r.role}
                  onClick={() => setSelectedRole(i)}
                  className={`mono text-[10px] px-2 py-1 rounded-md border transition-colors ${
                    i === selectedRole
                      ? "bg-[#A78BFA]/15 border-[#A78BFA]/40 text-[#A78BFA]"
                      : "bg-[#171B23] border-[#232830] text-[#7C8494] hover:border-[#7C8494]/40"
                  }`}
                >
                  {r.role}
                </button>
              ))}
            </div>
          )}

          <div className="mono text-xs bg-[#171B23] border border-[#232830] rounded-lg px-3 py-2.5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[#A78BFA] text-[11px] uppercase tracking-wide">
                {current.role}
              </span>
            </div>
            <div className="flex flex-col gap-1 text-[#7C8494]">
              <div className="flex items-center justify-between gap-2">
                <span>
                  <span className="text-[#A78BFA]">email:</span> {current.email}
                </span>
                <CopyButton text={current.email} />
              </div>
              <div className="flex items-center justify-between gap-2">
                <span>
                  <span className="text-[#A78BFA]">pass:</span> {current.password}
                </span>
                <CopyButton text={current.password} />
              </div>
            </div>
          </div>
        </div>
      )}

      {highlights && highlights.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setShowHighlights(!showHighlights)}
            className="flex items-center gap-1.5 text-[11px] text-[#A78BFA] uppercase tracking-wide hover:text-[#EDEFF2] transition-colors"
          >
            {showHighlights ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            Technical details
          </button>
          {showHighlights && (
            <ul className="mt-2 space-y-1.5 text-[#B4BAC4] text-xs leading-relaxed list-disc list-inside">
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {images && images.length > 0 && <ProjectCarousel images={images} />}
    </div>
  );
}

export default App;
