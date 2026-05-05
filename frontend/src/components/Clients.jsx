// TrustedBy.jsx
import { useRef, useState } from "react";
import { useEffect } from "react";
import dr_morepen from '../assets/logos/Dr. Morepen.png'
import glenmark from '../assets/logos/glenmark.png'
import lark from '../assets/logos/lark.png'
import mankind from '../assets/logos/mankind.png'
import primal from '../assets/logos/primal.png'
import ranbaxy from '../assets/logos/ranbaxy.png'
import synokem from '../assets/logos/synokem.png'
import yaxon from '../assets/logos/yaxon.png'
import zydus from '../assets/logos/zydus.png'


// ─────────────────────────────────────────────
//  ADD YOUR LOGOS HERE
//  Replace `logo: null` with your imported image
//  Example:
//    import drmorepenLogo from '../assets/logos/dr-morepen.png';
//    { name: "Dr. Morepen", logo: drmorepenLogo }
// ─────────────────────────────────────────────
const companies = [
  { name: "Dr. Morepen", logo: dr_morepen, initials: "DM", color: "#3B82F6" },
  { name: "Mankind", logo: mankind, initials: "MK", color: "#10B981" },
  { name: "Ranbaxy", logo: ranbaxy, initials: "RX", color: "#F59E0B" },
  { name: "Zydus", logo: zydus, initials: "ZY", color: "#8B5CF6" },
  { name: "Yaxon Healthcare", logo: yaxon, initials: "YH", color: "#EC4899" },
  { name: "Lark Industries", logo: lark, initials: "LI", color: "#14B8A6" },
  { name: "Synochem Pharma", logo: synokem, initials: "SP", color: "#F97316" },
  { name: "Glenmark", logo: glenmark, initials: "GL", color: "#06B6D4" },
  { name: "Primal Group", logo: primal, initials: "PG", color: "#EF4444" },
];

const marqueeItems = [...companies, ...companies, ...companies];

const stats = [
  {
    value: "50+",
    label: "Clients Served",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6 5.87a4 4 0 10-8 0m12-10a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    value: "10+",
    label: "Industries Covered",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    value: "20+",
    label: "Years Experience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

// ── Stat Counter ──
function StatItem({ value, label, icon }) {
  const [count, setCount] = useState(0);
  const numeric = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");
  const ref = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          let start = 0;
          const inc = numeric / (1400 / 16);
          const t = setInterval(() => {
            start += inc;
            if (start >= numeric) { setCount(numeric); clearInterval(t); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [numeric]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="text-[#E8820C] mb-1">{icon}</div>
      <span className="text-white font-black leading-none text-[clamp(28px,4vw,44px)]">
        {count}{suffix}
      </span>
      <span className="text-white/45 text-[13px] font-medium tracking-wide text-center">
        {label}
      </span>
    </div>
  );
}

// ── Logo Card ──
// Swap logic:
//   - If `logo` is provided → show <img> logo
//   - If not → show styled initials badge (placeholder)
function LogoCard({ name, logo, initials, color }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 cursor-default group transition-all duration-300 hover:border-white/25 hover:bg-white/10"
      style={{
        // ── CARD SIZE ──
        // Mobile: 148×104px  |  Desktop: handled via style below
        width: "var(--card-w, 148px)",
        height: "var(--card-h, 104px)",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      {/* ── LOGO AREA ── */}
      {logo ? (

        <img
          src={logo}
          alt={name}
          className="object-contain group-hover:opacity-100 transition-opacity duration-300"
          style={{
            width: "var(--logo-w, 80px)",
            height: "var(--logo-h, 36px)",
            opacity: 0.8,
            // Use filter to make logo white/light on dark bg
            filter: "brightness(0) invert(1)",
          }}
        />
      ) : (

        <div
          className="rounded-xl flex items-center justify-center font-black tracking-wide flex-shrink-0"
          style={{
            width: "var(--badge-size, 44px)",
            height: "var(--badge-size, 44px)",
            background: `${color}22`,
            border: `1.5px solid ${color}44`,
            fontSize: "var(--badge-font, 13px)",
            color,
          }}
        >
          {initials}
        </div>
      )}

      {/* Company Name */}
      <span
        className="text-white/70 font-semibold text-center leading-tight px-3 group-hover:text-white transition-colors duration-300"
        style={{ fontSize: "var(--name-font, 11.5px)" }}
      >
        {name}
      </span>
    </div>
  );
}

// ── Marquee Row ──
function MarqueeRow({ items, direction = "left", speed = "28s", paused }) {
  const animation =
    direction === "left"
      ? "marquee-left"
      : "marquee-right";

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        // style={{ background: "linear-gradient(to right, #060D1F 10%, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        // style={{ background: "linear-gradient(to left, #060D1F 10%, transparent)" }}
        />

        <div
          className={`flex gap-5 w-max ${animation} ${paused ? "marquee-paused" : ""}`}
          style={{ animationDuration: speed, paddingLeft: "20px" }}
        >
          {items.map((c, i) => (
            <LogoCard key={i} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main ──
export default function TrustedBy() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-28"
      style={{
        background: "linear-gradient(160deg, #05122B 0%, #0A1A3A 50%, #060D1F 100%)",
        // ── CSS VARIABLES FOR CARD SIZE ──
        // Change these two values to resize all cards globally
        "--card-w": "220px",          // Desktop card width
        "--card-h": "130px",          // Desktop card height
        "--logo-w": "110px",          // Logo image width inside card
        "--logo-h": "44px",           // Logo image height inside card
        "--badge-size": "52px",       // Initials badge size (placeholder)
        "--badge-font": "15px",       // Initials badge font size
        "--name-font": "13px",        // Company name font size
      }}
    >
      {/* CSS keyframes */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        .marquee-left  { animation: marquee-left  linear infinite; }
        .marquee-right { animation: marquee-right linear infinite; }
        .marquee-paused { animation-play-state: paused !important; }

        /* Smaller cards on mobile */
        @media (max-width: 640px) {
          section {
            --card-w: 148px !important;
            --card-h: 104px !important;
            --logo-w: 80px  !important;
            --logo-h: 34px  !important;
            --badge-size: 42px !important;
            --badge-font: 12px !important;
            --name-font: 11px  !important;
          }
        }
      `}</style>

      {/* Bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 55%, rgba(230,140,40,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Header ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mb-14">
        <span
          className="inline-block text-[10px] font-bold uppercase tracking-[3px] text-white/55 border border-white/12 px-4 py-1.5 rounded-full mb-6"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          Trusted By
        </span>
        <h2 className="text-white font-black leading-[1.1] tracking-tight mb-4 text-[clamp(26px,5vw,54px)]">
          Trusted by Industry Leaders
        </h2>
        <p className="text-white/45 text-[clamp(14px,1.6vw,17px)] max-w-[500px] leading-relaxed">
          Powering packaging for top pharmaceutical, FMCG, and global brands
        </p>
      </div>

      {/* ── Marquee Rows ── */}
      <div
        className="flex flex-col gap-5 mb-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <MarqueeRow items={marqueeItems} direction="left" speed="26s" paused={paused} />
        <MarqueeRow items={[...marqueeItems].reverse()} direction="right" speed="26s" paused={paused} />
      </div>

      {/* ── Divider ── */}
      <div
        className="w-full max-w-[900px] h-px mx-auto mb-14"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />

      {/* ── Stats ── */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-3 gap-10 md:gap-6">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}