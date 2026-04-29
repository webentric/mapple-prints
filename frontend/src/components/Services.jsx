import { useEffect, useRef, useState } from "react";

/* ─── Data ─────────────────────────────────────────────── */
const CAPABILITIES = [
    {
        id: "carton",
        icon: <CartonIcon />,
        title: "Carton Boxes",
        body: "Premium folding cartons with high-quality offset printing and diverse finishing options.",
    },
    {
        id: "corrugated",
        icon: <CorrugatedIcon />,
        title: "Corrugated Boxes",
        body: "Durable master cartons and e-commerce packaging designed for maximum transit protection.",
    },
    {
        id: "labels",
        icon: <LabelIcon />,
        title: "Labels",
        body: "Precision roll and sheet labels suitable for various applications and environments.",
    },
    {
        id: "custom",
        icon: <CustomIcon />,
        title: "Custom Packaging",
        body: "Bespoke structural designs engineered specifically for your product's unique requirements.",
    },
];

/* ─── Main component ────────────────────────────────────── */
export default function Services({
    heading = "Our Capabilities",
    subheading = "Comprehensive packaging solutions tailored to meet the rigorous demands of modern supply chains.",
    cta = { label: "View All Services", href: "/services" },
    items = CAPABILITIES,
}) {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            aria-labelledby="cap-heading"
            className="w-full bg-[#eef1f8] px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24"
            id="services"
        >
            {/* ── Header ── */}
            <div className="mx-auto mb-12 max-w-[680px] text-center">
                <h2
                    id="cap-heading"
                    className="mb-4 font-black uppercase leading-tight tracking-tight text-[#1b3a8f]"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                >
                    {heading}
                </h2>
                <p
                    className="leading-[1.7] text-[#4a5568]"
                    style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
                >
                    {subheading}
                </p>
            </div>

            {/* ── Cards grid ── */}
            <div className="mx-auto mb-12 grid w-full max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item, i) => (
                    <CapabilityCard
                        key={item.id}
                        {...item}
                        visible={visible}
                        delay={i * 80}
                    />
                ))}
            </div>

            {/* ── CTA ── */}
            <div className="flex justify-center">
                <a
                    href={cta.href}
                    className="inline-flex h-[44px] items-center justify-center border border-[#1b3a8f] bg-transparent px-8 text-[11px] font-bold uppercase tracking-[0.1em] text-[#1b3a8f] outline-none transition-colors duration-150 hover:bg-[#1b3a8f] hover:text-white active:bg-[#12296e] focus-visible:ring-2 focus-visible:ring-[#1b3a8f] focus-visible:ring-offset-2"
                    style={{ borderRadius: 0 }}
                >
                    {cta.label}
                </a>
            </div>
        </section>
    );
}

/* ─── Card ──────────────────────────────────────────────── */
function CapabilityCard({ icon, title, body, visible, delay }) {
    return (
        <article
            className="group flex flex-col bg-white p-6 shadow-[0_2px_12px_rgba(27,58,143,0.07)] outline-none transition-shadow duration-200 hover:shadow-[0_6px_24px_rgba(27,58,143,0.13)]"
            style={{
                borderRadius: 0,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 500ms cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform 500ms cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     box-shadow 200ms ease`,
            }}
        >
            {/* Icon */}
            <div className="mb-5 flex h-10 w-10 items-center justify-center text-[#1b3a8f]">
                {icon}
            </div>

            {/* Title */}
            <h3
                className="mb-3 font-bold leading-tight text-[#1b3a8f]"
                style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)" }}
            >
                {title}
            </h3>

            {/* Body */}
            <p
                className="leading-[1.7] text-[#4a5568]"
                style={{ fontSize: "clamp(0.85rem, 1.3vw, 0.9rem)" }}
            >
                {body}
            </p>
        </article>
    );
}

/* ─── SVG Icons (inline, navy, no border-radius) ──────── */
function CartonIcon() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <rect x="4" y="10" width="28" height="20" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter" />
            <path d="M4 10l5-6h18l5 6" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter" />
            <line x1="18" y1="4" x2="18" y2="10" stroke="currentColor" strokeWidth="2" />
            <line x1="4" y1="10" x2="32" y2="10" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

function CorrugatedIcon() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <rect x="2" y="14" width="32" height="16" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter" />
            <path d="M6 14V8h24v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter" />
            <circle cx="12" cy="11" r="2" fill="currentColor" />
            <circle cx="24" cy="11" r="2" fill="currentColor" />
            <line x1="2" y1="22" x2="34" y2="22" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

function LabelIcon() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <path
                d="M6 6h16l8 12-8 12H6V6z"
                stroke="currentColor" strokeWidth="2" strokeLinejoin="miter"
            />
            <circle cx="24" cy="18" r="2.5" fill="currentColor" />
            <line x1="10" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="1.8" />
            <line x1="10" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8" />
            <line x1="10" y1="22" x2="20" y2="22" stroke="currentColor" strokeWidth="1.8" />
        </svg>
    );
}

function CustomIcon() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <rect x="4" y="4" width="12" height="12" stroke="currentColor" strokeWidth="2" />
            <circle cx="28" cy="10" r="6" stroke="currentColor" strokeWidth="2" />
            <path d="M4 22l8 10 8-10H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter" fill="none" />
            <rect x="22" y="20" width="12" height="12" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}