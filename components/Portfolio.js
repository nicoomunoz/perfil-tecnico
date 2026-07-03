"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Database,
  Layers,
  Radio,
  MapPin,
} from "lucide-react";

/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO — ficha técnica
 *  Reemplazá los bloques marcados con // EDITAR: por tus datos.
 * ─────────────────────────────────────────────────────────────
 */

// EDITAR: tus datos personales
const PROFILE = {
  name: "Nicolás",
  role: "Desarrollador Full-Stack",
  location: "Buenos Aires, AR",
  email: "nicolas@tudominio.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-usuario",
};

// EDITAR: tus proyectos reales
const PROJECTS = [
  {
    id: "01",
    name: "CRM Estudio Grimalt",
    category: "Sistema de gestión interno",
    year: "2025 — en curso",
    stack: ["Next.js 14", "Supabase", "TypeScript", "Realtime"],
    description:
      "Sistema de gestión para un estudio contable de 8 usuarios: trámites multi-cliente, búsqueda global, notificaciones y sincronización en tiempo real.",
    accent: "#3D7FFF",
  },
  {
    id: "02",
    name: "Panel de Turnos",
    category: "Automatización de agenda",
    year: "Placeholder",
    stack: ["Next.js", "PostgreSQL", "Cron"],
    description:
      "Reemplazá este bloque con tu próximo proyecto: reservas, confirmaciones automáticas y panel de administración.",
    accent: "#6E8CFF",
  },
  {
    id: "03",
    name: "Portal de Clientes",
    category: "Sitio + acceso privado",
    year: "Placeholder",
    stack: ["React", "Auth", "Storage"],
    description:
      "Otro espacio para tu próximo caso: portal de acceso, documentos y seguimiento para clientes finales.",
    accent: "#9AB2FF",
  },
];

const PRINCIPLES = [
  {
    icon: Radio,
    title: "Tiempo real, con red de contención",
    text: "Sincronización en vivo con un fallback de sondeo, para que nada se quede colgado si el canal falla.",
  },
  {
    icon: Database,
    title: "Consultas pensadas para producción",
    text: "Cada acceso a datos se diseña para escalar sin romperse en el entorno donde va a vivir de verdad.",
  },
  {
    icon: Layers,
    title: "Servidor y cliente, separados a propósito",
    text: "Cada pieza corre donde tiene que correr. Menos sorpresas, más control.",
  },
];

const PROJECT_TYPES = ["Sistema interno", "Sitio web", "Automatización", "Otro"];
const SCOPES = ["Piloto", "Estándar", "Enterprise", "A definir"];

export default function Portfolio() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [projectType, setProjectType] = useState(null);
  const [scope, setScope] = useState(null);
  const rootRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    const handleMove = (e) => {
      const rect = rootRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener("mousemove", handleMove);
    return () => {
      clearTimeout(t);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  const activeProj = PROJECTS[activeProject];
  const showInvite = projectType && scope;

  return (
    <div ref={rootRef} className="tp-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .tp-root {
          --bg: #0A0B0D;
          --panel: #131519;
          --panel-2: #17191F;
          --line: #24262C;
          --platinum: #E8E9EB;
          --steel: #8B8F97;
          --accent: #3D7FFF;
          position: relative;
          background: var(--bg);
          color: var(--platinum);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
          cursor: crosshair;
        }
        .tp-mono { font-family: 'JetBrains Mono', monospace; }
        .tp-display { font-family: 'Space Grotesk', sans-serif; }

        .tp-bg-panel { background: var(--panel); }
        .tp-border { border-color: var(--line); }
        .tp-text-steel { color: var(--steel); }
        .tp-text-accent { color: var(--accent); }
        .tp-bg-accent { background: var(--accent); }

        .tp-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.04;
          background-image: radial-gradient(circle, #fff 1px, transparent 1px);
          background-size: 3px 3px;
        }

        .tp-fade {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .tp-fade.tp-in { opacity: 1; transform: translateY(0); }

        .tp-corner {
          position: absolute;
          width: 10px;
          height: 10px;
          opacity: 0;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .tp-corner-tl { top: -1px; left: -1px; border-top: 1.5px solid var(--accent); border-left: 1.5px solid var(--accent); }
        .tp-corner-tr { top: -1px; right: -1px; border-top: 1.5px solid var(--accent); border-right: 1.5px solid var(--accent); }
        .tp-corner-bl { bottom: -1px; left: -1px; border-bottom: 1.5px solid var(--accent); border-left: 1.5px solid var(--accent); }
        .tp-corner-br { bottom: -1px; right: -1px; border-bottom: 1.5px solid var(--accent); border-right: 1.5px solid var(--accent); }
        .tp-frame:hover .tp-corner { opacity: 1; }
        .tp-frame:hover .tp-corner-tl { transform: translate(-3px,-3px); }
        .tp-frame:hover .tp-corner-tr { transform: translate(3px,-3px); }
        .tp-frame:hover .tp-corner-bl { transform: translate(-3px,3px); }
        .tp-frame:hover .tp-corner-br { transform: translate(3px,3px); }

        .tp-reticle {
          position: absolute;
          pointer-events: none;
          width: 26px;
          height: 26px;
          transform: translate(-50%, -50%);
          z-index: 40;
          transition: opacity 0.2s ease;
        }

        .tp-chip {
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
        }
        .tp-chip:hover { border-color: var(--accent); color: var(--platinum); }
        .tp-chip.tp-active { background: var(--accent); border-color: var(--accent); color: #05070A; }

        .tp-underline {
          background-image: linear-gradient(var(--accent), var(--accent));
          background-position: 0 100%;
          background-repeat: no-repeat;
          background-size: 0% 1.5px;
          transition: background-size 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .tp-underline:hover { background-size: 100% 1.5px; }

        .tp-pulse {
          animation: tp-pulse 2.2s infinite;
        }
        @keyframes tp-pulse {
          0% { box-shadow: 0 0 0 0 rgba(61,127,255,0.45); }
          70% { box-shadow: 0 0 0 8px rgba(61,127,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(61,127,255,0); }
        }

        .tp-project-row {
          transition: padding-left 0.3s cubic-bezier(0.16,1,0.3,1), color 0.3s ease;
        }
        .tp-project-row.tp-active-row { padding-left: 18px; color: var(--platinum); }

        @media (prefers-reduced-motion: reduce) {
          .tp-fade { transition: none; opacity: 1; transform: none; }
          .tp-pulse { animation: none; }
        }
        @media (max-width: 767px) {
          .tp-root { cursor: auto; }
          .tp-reticle { display: none; }
        }
      `}</style>

      <div className="tp-grain" />

      <div className="tp-reticle hidden md:block" style={{ left: mouse.x, top: mouse.y }}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M13 0V8" stroke="#3D7FFF" strokeWidth="1" opacity="0.8" />
          <path d="M13 18V26" stroke="#3D7FFF" strokeWidth="1" opacity="0.8" />
          <path d="M0 13H8" stroke="#3D7FFF" strokeWidth="1" opacity="0.8" />
          <path d="M18 13H26" stroke="#3D7FFF" strokeWidth="1" opacity="0.8" />
          <circle cx="13" cy="13" r="2" fill="#3D7FFF" />
        </svg>
      </div>
      <div
        className="tp-mono hidden md:block"
        style={{
          position: "absolute",
          left: mouse.x + 16,
          top: mouse.y + 12,
          fontSize: "10px",
          color: "#8B8F97",
          pointerEvents: "none",
          zIndex: 40,
          whiteSpace: "nowrap",
        }}
      >
        X:{String(Math.round(mouse.x)).padStart(4, "0")} Y:
        {String(Math.round(mouse.y)).padStart(4, "0")}
      </div>

      <nav className="relative z-30 flex items-center justify-between px-6 md:px-12 py-6 border-b tp-border">
        <span className="tp-display font-semibold text-lg tracking-tight">
          N<span className="tp-text-accent">.</span>
        </span>
        <div className="tp-mono hidden md:flex gap-8 text-xs tp-text-steel">
          <a href="#trabajo" className="tp-underline hover:text-[var(--platinum)]">TRABAJO</a>
          <a href="#sistema" className="tp-underline hover:text-[var(--platinum)]">ENFOQUE</a>
          <a href="#contacto" className="tp-underline hover:text-[var(--platinum)]">CONTACTO</a>
        </div>
        <div className="tp-mono flex items-center gap-2 text-xs tp-text-steel">
          <span className="w-1.5 h-1.5 rounded-full tp-bg-accent tp-pulse" />
          DISPONIBLE
        </div>
      </nav>

      <section className="relative z-10 px-6 md:px-12 pt-20 pb-24 md:pt-28 md:pb-32 max-w-6xl">
        <div className={`tp-fade ${loaded ? "tp-in" : ""} tp-mono flex items-center gap-2 text-xs tp-text-steel mb-8`}>
          <MapPin size={12} />
          {PROFILE.role.toUpperCase()} — {PROFILE.location.toUpperCase()}
        </div>

        <h1
          className={`tp-fade ${loaded ? "tp-in" : ""} tp-display font-semibold leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-7xl`}
          style={{ transitionDelay: "80ms" }}
        >
          Construyo sistemas
          <br />
          para negocios que <span className="tp-text-accent">no pueden fallar.</span>
        </h1>

        <p
          className={`tp-fade ${loaded ? "tp-in" : ""} tp-text-steel text-base md:text-lg max-w-xl mt-8 leading-relaxed`}
          style={{ transitionDelay: "160ms" }}
        >
          Diseño y desarrollo paneles internos, CRMs y herramientas a medida
          para empresas que necesitan orden, no otra plantilla genérica.
        </p>

        <div
          className={`tp-fade ${loaded ? "tp-in" : ""} mt-12 flex items-center gap-6 flex-wrap`}
          style={{ transitionDelay: "240ms" }}
        >
          <MagneticButton href="#trabajo">
            VER TRABAJO <ArrowUpRight size={16} />
          </MagneticButton>
          <a href="#contacto" className="tp-mono tp-underline text-xs tp-text-steel hover:text-[var(--platinum)]">
            Iniciar un proyecto
          </a>
        </div>
      </section>

      <section id="sistema" className="relative z-10 px-6 md:px-12 pb-24 max-w-6xl">
        <SectionLabel index="01" title="Enfoque" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <FrameCard className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between">
            <div>
              <Terminal size={20} className="tp-text-accent mb-6" />
              <p className="tp-display text-xl md:text-2xl leading-snug">
                No entrego una web más. Entrego el sistema que sostiene la
                operación del día a día de tu equipo.
              </p>
            </div>
            <p className="tp-text-steel text-sm mt-8 max-w-md">
              Cada proyecto arranca entendiendo quién lo usa, no qué tecnología
              queda mejor en el portfolio.
            </p>
          </FrameCard>

          {PRINCIPLES.map((p, i) => (
            <FrameCard key={i} className="p-6">
              <p.icon size={18} className="tp-text-accent mb-4" />
              <h3 className="tp-display text-sm font-semibold mb-2">{p.title}</h3>
              <p className="tp-text-steel text-xs leading-relaxed">{p.text}</p>
            </FrameCard>
          ))}
        </div>
      </section>

      <section id="trabajo" className="relative z-10 px-6 md:px-12 pb-24 max-w-6xl">
        <SectionLabel index="02" title="Trabajo" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-start">
          <div className="tp-mono">
            {PROJECTS.map((proj, i) => (
              <div
                key={proj.id}
                onMouseEnter={() => setActiveProject(i)}
                className={`tp-project-row flex items-baseline gap-4 py-5 border-b tp-border cursor-pointer tp-text-steel ${
                  activeProject === i ? "tp-active-row" : ""
                }`}
              >
                <span className="text-xs tp-text-accent">{proj.id}</span>
                <span className="tp-display text-xl md:text-2xl font-medium tracking-tight">
                  {proj.name}
                </span>
              </div>
            ))}
          </div>

          <ProjectPreview project={activeProj} />
        </div>
      </section>

      <section id="contacto" className="relative z-10 px-6 md:px-12 pb-28 max-w-6xl">
        <SectionLabel index="03" title="Acceso" />

        <div className="tp-frame relative border tp-border mt-8 p-8 md:p-14">
          <span className="tp-corner tp-corner-tl" />
          <span className="tp-corner tp-corner-tr" />
          <span className="tp-corner tp-corner-bl" />
          <span className="tp-corner tp-corner-br" />

          <h2 className="tp-display text-2xl md:text-4xl font-semibold leading-tight max-w-2xl">
            Contame qué necesitás y armamos el punto de partida.
          </h2>

          <div className="mt-10">
            <p className="tp-mono text-xs tp-text-steel mb-3">TIPO DE PROYECTO</p>
            <div className="flex flex-wrap gap-2">
              {PROJECT_TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => setProjectType(t)}
                  className={`tp-chip tp-mono text-xs px-4 py-2 border tp-border rounded-full tp-text-steel ${
                    projectType === t ? "tp-active" : ""
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="tp-mono text-xs tp-text-steel mb-3">ALCANCE</p>
            <div className="flex flex-wrap gap-2">
              {SCOPES.map((s) => (
                <button
                  key={s}
                  onClick={() => setScope(s)}
                  className={`tp-chip tp-mono text-xs px-4 py-2 border tp-border rounded-full tp-text-steel ${
                    scope === s ? "tp-active" : ""
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div
            className="mt-10 overflow-hidden transition-all duration-500 ease-out"
            style={{ maxHeight: showInvite ? 160 : 0, opacity: showInvite ? 1 : 0 }}
          >
            <div className="tp-bg-panel border tp-border p-6">
              <p className="tp-mono text-xs tp-text-accent mb-2">SOLICITUD ARMADA</p>
              <p className="text-sm leading-relaxed">
                Proyecto tipo <span className="tp-text-accent">{projectType}</span>,
                alcance <span className="tp-text-accent">{scope}</span>. Escribime
                y arrancamos por ahí.
              </p>
              <a
                href={`mailto:${PROFILE.email}?subject=Proyecto: ${projectType}&body=Alcance: ${scope}`}
                className="tp-mono inline-flex items-center gap-2 text-xs mt-5 tp-text-accent tp-underline"
              >
                ESCRIBIR AHORA <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-6 md:px-12 py-8 border-t tp-border flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="tp-mono text-xs tp-text-steel">
          © {new Date().getFullYear()} {PROFILE.name} — TODOS LOS DERECHOS RESERVADOS
        </span>
        <div className="flex items-center gap-5">
          <a href={PROFILE.github} className="tp-text-steel hover:text-[var(--platinum)] transition-colors">
            <Github size={16} />
          </a>
          <a href={PROFILE.linkedin} className="tp-text-steel hover:text-[var(--platinum)] transition-colors">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="tp-text-steel hover:text-[var(--platinum)] transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ index, title }) {
  return (
    <div className="flex items-center gap-3 tp-mono text-xs tp-text-steel">
      <span className="tp-text-accent">{index}</span>
      <span className="w-8 h-px" style={{ background: "var(--line)" }} />
      <span>{title.toUpperCase()}</span>
    </div>
  );
}

function FrameCard({ children, className = "" }) {
  return (
    <div className={`tp-frame relative border tp-border ${className}`}>
      <span className="tp-corner tp-corner-tl" />
      <span className="tp-corner tp-corner-tr" />
      <span className="tp-corner tp-corner-bl" />
      <span className="tp-corner tp-corner-br" />
      {children}
    </div>
  );
}

function ProjectPreview({ project }) {
  return (
    <div className="tp-frame relative border tp-border p-6 md:p-8" style={{ background: "var(--panel)" }}>
      <span className="tp-corner tp-corner-tl" />
      <span className="tp-corner tp-corner-tr" />
      <span className="tp-corner tp-corner-bl" />
      <span className="tp-corner tp-corner-br" />

      <div className="w-full h-40 border tp-border mb-6 relative overflow-hidden" style={{ background: "var(--panel-2)" }}>
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border tp-border" style={{ borderWidth: "0.5px", opacity: 0.4 }} />
          ))}
        </div>
        <div className="absolute top-4 left-4 right-4 h-3 rounded-sm" style={{ background: project.accent, opacity: 0.85 }} />
        <div className="absolute top-10 left-4 w-1/3 bottom-4 rounded-sm" style={{ background: project.accent, opacity: 0.25 }} />
        <div className="absolute top-10 left-[38%] right-4 bottom-4 rounded-sm" style={{ background: project.accent, opacity: 0.12 }} />
      </div>

      <p className="tp-mono text-xs tp-text-accent mb-2">{project.category.toUpperCase()}</p>
      <h3 className="tp-display text-xl font-semibold mb-3">{project.name}</h3>
      <p className="tp-text-steel text-sm leading-relaxed mb-5">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="tp-mono text-[10px] px-2 py-1 border tp-border tp-text-steel">
            {s}
          </span>
        ))}
      </div>

      <p className="tp-mono text-[10px] tp-text-steel mt-6">{project.year}</p>
    </div>
  );
}

function MagneticButton({ children, href }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: relX * 0.35, y: relY * 0.35 });
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className="tp-mono inline-flex items-center gap-2 text-xs font-medium px-6 py-3.5 rounded-full"
      style={{
        background: "var(--accent)",
        color: "#05070A",
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.15s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </a>
  );
}
