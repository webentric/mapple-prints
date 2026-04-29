/**
 * TrustedBrandsSection — Mapple Prints
 *
 * Two-row infinite marquee:
 *  Row 1 → scrolls LEFT  (standard direction)
 *  Row 2 → scrolls RIGHT (reverse direction)
 *
 * - No border-radius anywhere
 * - Seamless loop via list duplication
 * - Pauses on hover / keyboard focus
 * - prefers-reduced-motion: wraps into centered grid
 * - Fully responsive
 */

const CLIENTS_ROW1 = [
    "Dr. Morepen",
    "Mankind",
    "Ranbaxy",
    "Zydus",
    "Yaxon Healthcare",
];

const CLIENTS_ROW2 = [
    "Lark Industries",
    "Synochem Pharma",
    "Glenmark",
    "Primal Group",
    "Dr. Morepen",      // repeat so row 2 fills the width equally
];

export default function Clients({
    heading = "Trusted by Leading Brands",
    cta = { label: "View All Clients", href: "#clients" },
    row1 = CLIENTS_ROW1,
    row2 = CLIENTS_ROW2,
    speedS = 28,
}) {
    return (
        <>
            <style>{MARQUEE_CSS(speedS)}</style>

            <section
                aria-labelledby="brands-heading"
                className="w-full bg-white px-4 py-16 md:px-6 md:py-20 lg:py-24"
                id="clients"
            >
                {/* ── Heading ── */}
                <div className="mx-auto mb-10 max-w-[800px] text-center">
                    <h2
                        id="brands-heading"
                        className="font-black uppercase tracking-tight text-[#1b3a8f]"
                        style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
                    >
                        {heading}
                    </h2>
                </div>

                {/* ── Two-row marquee ── */}
                <div className="mx-auto mb-10 flex max-w-[1200px] flex-col gap-4">
                    <MarqueeRow clients={row1} direction="left" label="Primary client list" />
                    <MarqueeRow clients={row2} direction="right" label="Secondary client list" />
                </div>
            </section>
        </>
    );
}

/* ── Single marquee row ───────────────────────────────── */
function MarqueeRow({ clients, direction, label }) {
    // Duplicate for seamless loop
    const track = [...clients, ...clients, ...clients];

    const handlePause = (e) => e.currentTarget.style.setProperty("animation-play-state", "paused");
    const handleResume = (e) => e.currentTarget.style.setProperty("animation-play-state", "running");

    return (
        <div
            aria-label={label}
            className="marquee-viewport relative overflow-hidden"
            style={{
                maskImage:
                    "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
        >
            <ul
                role="list"
                className={`marquee-track marquee-${direction} flex w-max items-center gap-4`}
                onMouseEnter={handlePause}
                onMouseLeave={handleResume}
                onFocusCapture={handlePause}
                onBlurCapture={handleResume}
            >
                {track.map((name, i) => (
                    <li
                        key={i}
                        aria-hidden={i >= clients.length ? "true" : undefined}
                    >
                        <ClientPill name={name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ── Pill ─────────────────────────────────────────────── */
function ClientPill({ name }) {
    return (
        <div
            className="flex h-[52px] min-w-[170px] items-center justify-center border border-[#e2e8f0] bg-[#e2e8f0] px-5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1b3a8f] transition-colors duration-150 hover:border-[#1b3a8f] hover:bg-white"
            style={{ borderRadius: 0, whiteSpace: "nowrap" }}
        >
            {name}
        </div>
    );
}

/* ── CSS ──────────────────────────────────────────────── */
const MARQUEE_CSS = (speed) => `
  /* Left → right direction (normal) */
  @keyframes marquee-left {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-33.333%); }
  }

  /* Right → left direction (reverse) */
  @keyframes marquee-right {
    0%   { transform: translateX(-33.333%); }
    100% { transform: translateX(0); }
  }

  .marquee-left  { animation: marquee-left  ${speed}s linear infinite; }
  .marquee-right { animation: marquee-right ${speed}s linear infinite; }

  .marquee-track { will-change: transform; }

  @media (prefers-reduced-motion: reduce) {
    .marquee-left,
    .marquee-right {
      animation: none;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }
    .marquee-viewport {
      mask-image: none !important;
      -webkit-mask-image: none !important;
    }
  }
`;