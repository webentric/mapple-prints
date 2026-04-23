import { useEffect, useRef, useState, useCallback } from "react";

import box_1 from '../assets/images/box-type-1.jpg'
import box_2 from '../assets/images/box-type-2.jpg'
import box_3 from '../assets/images/box-type-3.jpg'
import box_4 from '../assets/images/box-type-4.jpg'
import hero_bg from '../assets/images/hero-bg.jpg'

const DEFAULT_SLIDES = [
    {
        src: box_1,
        alt: "Stack of custom packaging boxes manufactured by Mapple Prints",
    },
    {
        src: box_2,
        alt: "Single custom-printed folding carton",
    },
    {
        src: box_3,
        alt: "High-volume label rolls off the press",
    },
    {
        src: box_4,
        alt: "Pharmaceutical blister packaging",
    },
];

export default function HeroSection({
    eyebrow = "Industrial Excellence",
    heading = "Custom Packaging Solutions That Sell Your Product",
    body = "Mapple Prints delivers high-quality mono cartons and paper-based packaging solutions designed for performance and visual impact. With end-to-end capabilities—from printing to finishing—we ensure precision, consistency, and reliable delivery for brands across industries.",
    primaryCta = { label: "Request a Quote", href: "#quote" },
    secondaryCta = { label: "View Infrastructure", href: "#infrastructure" },
    slides = DEFAULT_SLIDES,
    autoPlayMs = 4000,
}) {
    const [active, setActive] = useState(0);
    const [loaded, setLoaded] = useState({});        // { [index]: true }
    const [paused, setPaused] = useState(false);
    const [dir, setDir] = useState("next");    // "next" | "prev" — drives slide direction
    const timerRef = useRef(null);
    const total = slides.length;

    /* ── Auto-play ── */
    const scheduleNext = useCallback(() => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            if (!paused) {
                setDir("next");
                setActive((i) => (i + 1) % total);
            }
        }, autoPlayMs);
    }, [paused, total, autoPlayMs]);

    useEffect(() => {
        scheduleNext();
        return () => clearTimeout(timerRef.current);
    }, [active, scheduleNext]);

    /* ── Navigation helpers ── */
    const goTo = (index, direction = "next") => {
        setDir(direction);
        setActive(index);
        clearTimeout(timerRef.current);
        scheduleNext();
    };

    const prev = () => goTo((active - 1 + total) % total, "prev");
    const next = () => goTo((active + 1) % total, "next");

    /* ── Keyboard on the slideshow ── */
    const handleKey = (e) => {
        if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
        if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    };

    return (
        <>
            {/* Keyframe styles injected once */}
            <style>{SLIDE_CSS}</style>

            <section
                aria-labelledby="hero-heading"
                className="relative w-full h-auto overflow-visible bg-[#eef1f8]"
                style={{
                    backgroundImage: `url(${hero_bg})`,
                }}
            // 
            >
                <div className="absolute inset-0" style={{
                    background: "linear-gradient(to right, white 40%, rgba(255,255,255,0.8) 80%, rgba(255,255,255,0) 100%)",
                }} />

                <div className="mx-auto flex w-full max-w-[1400px] h-auto md:h-screen flex-col items-center gap-8 px-4 py-30 md:flex-row md:gap-12 md:px-6 md:py-20 lg:px-8 lg:py-24 " >

                    {/* ── Left: Copy ── */}
                    <div className="relative z-20 flex w-full flex-col md:w-1/2 lg:w-[52%]">

                        {/* Eyebrow */}
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1b3a8f]/80">
                            {eyebrow}
                        </p>

                        {/* Heading */}
                        <h1
                            id="hero-heading"
                            className="mb-6 font-extrabold leading-[1.05] tracking-tight text-[#1b3a8f]"
                            style={{ fontSize: "clamp(2.2rem, 4.8vw, 3.4rem)" }}
                        >
                            {heading}
                        </h1>

                        {/* Body */}
                        <p
                            className="mb-8 text-[#374151]"
                            style={{
                                fontSize: "xs",
                                maxWidth: "48ch",
                                lineHeight: "1.50",
                            }}
                        >
                            {body}
                        </p>

                        {/* Trust Signals (NEW - VERY IMPORTANT) */}
                        <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-md font-semibold text-[#1b3a8f]/80">
                            <span>✔ 15+ Years Experience</span>
                            <span>✔ 100+ Clients</span>
                            <span>✔ Pan India & Global Supply</span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4">

                            {/* Primary CTA */}
                            <a
                                href={primaryCta.href}
                                className="inline-flex h-[48px] items-center justify-center bg-[#f0a500] px-7 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-md transition-all duration-200 hover:bg-[#d4920a] hover:shadow-lg active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#f0a500] focus-visible:ring-offset-2"
                            >
                                {primaryCta.label}
                            </a>

                            {/* Secondary CTA */}
                            <a
                                href={secondaryCta.href}
                                className="hidden sm:inline-flex h-[48px] items-center justify-center border-2 border-[#1b3a8f] px-7 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1b3a8f] transition-all duration-200 hover:bg-[#1b3a8f] hover:text-white active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#1b3a8f] focus-visible:ring-offset-2"
                            >
                                {secondaryCta.label}
                            </a>

                        </div>
                    </div>

                    {/* ── Right: Slideshow ── */}
                    <div className="relative flex w-full flex-col items-center md:w-1/2 lg:w-[48%]">

                        {/* Slide stage */}
                        <div
                            role="region"
                            aria-label="Product image slideshow"
                            aria-roledescription="carousel"
                            tabIndex={0}
                            onKeyDown={handleKey}
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
                            onFocus={() => setPaused(true)}
                            onBlur={() => setPaused(false)}
                            className="relative w-full overflow-hidden bg-[#6b7280] outline-none focus-visible:ring-2 focus-visible:ring-[#1b3a8f] focus-visible:ring-offset-2"
                            style={{ aspectRatio: "1/1", maxWidth: "460px", borderRadius: 0 }}
                        >
                            {slides.map((slide, i) => (
                                <div
                                    key={i}
                                    aria-hidden={i !== active}
                                    className="absolute inset-0"
                                    style={{
                                        animation:
                                            i === active
                                                ? `slide-in-${dir} 420ms cubic-bezier(0.16,1,0.3,1) both`
                                                : "none",
                                        zIndex: i === active ? 2 : 1,
                                        opacity: i === active ? 1 : 0,
                                    }}
                                >
                                    {/* Skeleton */}
                                    {!loaded[i] && (
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                            style={{ background: "#9ca3af", animation: "shimmer 1.5s ease-in-out infinite" }}
                                        />
                                    )}
                                    <img
                                        src={slide.src}
                                        alt={slide.alt}
                                        width={460}
                                        height={460}
                                        loading={i === 0 ? "eager" : "lazy"}
                                        decoding="async"
                                        onLoad={() => setLoaded((p) => ({ ...p, [i]: true }))}
                                        className="h-full w-full object-cover"
                                        style={{
                                            borderRadius: 0,
                                            opacity: loaded[i] ? 1 : 0,
                                            transition: "opacity 400ms ease",
                                        }}
                                    />
                                </div>
                            ))}

                            {/* Slide counter badge */}
                            <div
                                aria-live="polite"
                                aria-atomic="true"
                                className="absolute bottom-3 right-3 z-10 flex items-center gap-1 bg-black/40 px-2 py-1"
                                style={{ borderRadius: 0 }}
                            >
                                <span className="text-[11px] font-bold tabular-nums text-white">
                                    {active + 1} / {total}
                                </span>
                            </div>

                            {/* Prev arrow */}
                            <button
                                type="button"
                                onClick={prev}
                                aria-label="Previous image"
                                className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-[#1b3a8f]/80 text-white outline-none transition-colors duration-150 hover:bg-[#1b3a8f] focus-visible:ring-2 focus-visible:ring-white"
                                style={{ borderRadius: 0 }}
                            >
                                <ChevronLeft />
                            </button>

                            {/* Next arrow */}
                            <button
                                type="button"
                                onClick={next}
                                aria-label="Next image"
                                className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-[#1b3a8f]/80 text-white outline-none transition-colors duration-150 hover:bg-[#1b3a8f] focus-visible:ring-2 focus-visible:ring-white"
                                style={{ borderRadius: 0 }}
                            >
                                <ChevronRight />
                            </button>
                        </div>

                        {/* Dot indicators */}
                        <div
                            className="mt-3 flex items-center gap-2"
                            role="tablist"
                            aria-label="Slide indicators"
                        >
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    role="tab"
                                    type="button"
                                    aria-selected={i === active}
                                    aria-label={`Go to slide ${i + 1}`}
                                    onClick={() => goTo(i, i > active ? "next" : "prev")}
                                    className="outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#1b3a8f] focus-visible:ring-offset-1"
                                    style={{
                                        borderRadius: 0,
                                        width: i === active ? "24px" : "8px",
                                        height: "8px",
                                        background: i === active ? "#f0a500" : "#1b3a8f",
                                        opacity: i === active ? 1 : 0.35,
                                        border: "none",
                                        cursor: "pointer",
                                        transition: "width 250ms ease, background 200ms, opacity 200ms",
                                    }}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </section >
        </>
    );
}

/* ────────────────── Icon sub-components ────────────────── */
function ChevronLeft() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
    );
}
function ChevronRight() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
    );
}

/* ────────────────── Keyframe CSS string ────────────────── */
const SLIDE_CSS = `
@keyframes slide-in-next {
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}
@keyframes slide-in-prev {
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0);     opacity: 1; }
}
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}
@media (prefers-reduced-motion: reduce) {
  [style*="slide-in"] { animation: none !important; }
}
`;