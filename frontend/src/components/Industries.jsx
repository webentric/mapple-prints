import { useEffect, useRef, useState } from "react";
import agarbatti from '../assets/images/agarbatti-package.jpg'
import ayurvedic from '../assets/images/ayurvedic-package.jpg'
import cosmetics from '../assets/images/cosmetics-package.jpg'
import electronics from '../assets/images/electronics-package.jpg'
import fmcg from '../assets/images/fmcg-package.jpg'
import food from '../assets/images/food-package.jpg'
import medicine from '../assets/images/medicine-package.jpg'

const INDUSTRIES = [
    {
        id: "pharma",
        title: "Pharma",
        desc: "Packaging for regulated pharmaceutical products",
        icon: <PharmaIcon />,
        href: "#pharma",
        featured: true,
        image: medicine,
    },
    {
        id: "fmcg",
        title: "FMCG",
        desc: "High-volume packaging for fast-moving goods",
        icon: <FmcgIcon />,
        href: "#fmcg",
        image: fmcg,
    },
    {
        id: "cosmetics",
        title: "Cosmetics",
        desc: "Premium packaging for beauty brands",
        icon: <CosmeticsIcon />,
        href: "#cosmetics",
        image:
            cosmetics,
    },
    {
        id: "food",
        title: "Food",
        desc: "Packaging for confectionery and food products",
        icon: <FoodIcon />,
        href: "#food",
        image:
            food,
    },
    {
        id: "ayurvedic",
        title: "Ayurvedic",
        desc: "Natural-product packaging with a premium finish",
        icon: <AyurvedicIcon />,
        href: "#ayurvedic",
        image:
            ayurvedic,
    },
    {
        id: "agarbatti",
        title: "Agarbatti",
        desc: "Boxes for incense and spiritual packaging",
        icon: <AgarbattiIcon />,
        href: "#agarbatti",
        image:
            agarbatti,
    },
    {
        id: "electronics",
        title: "Electronics",
        desc: "Durable packaging for devices and accessories",
        icon: <ElectronicsIcon />,
        href: "#electronics",
        image:
            electronics,
    },
];

export default function Industries({
    heading = "Industries We Serve",
    subheading = "Delivering specialized packaging that meets strict regulatory and branding requirements across key sectors.",
    cta = { label: "See More Industries", href: "#industries" },
    industries = INDUSTRIES,
}) {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [activeId, setActiveId] = useState(industries[0]?.id || "pharma");

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                obs.disconnect();
            }
        }, { threshold: 0.12 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const active = industries.find((x) => x.id === activeId) || industries[0];

    return (
        <section
            ref={sectionRef}
            id="industries"
            aria-labelledby="industries-heading"
            className="w-full bg-gradient-to-b from-white to-[#eef1f8] px-4 py-20 md:px-6 md:py-24 lg:px-8 lg:py-28"
        >

            <div className="mx-auto max-w-[1200px]">

                <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-[540px]">
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a500]">
                            Diverse Industry Expertise
                        </p>
                        <h2
                            id="industries-heading"
                            className="font-black uppercase leading-[1.05] tracking-tight text-[#1b3a8f]"
                            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
                        >
                            {heading}
                        </h2>
                        <p className="mt-4 max-w-[500px] text-[clamp(0.9rem,1.4vw,1rem)] leading-[1.75] text-[#4a5568]">
                            {subheading}
                        </p>
                    </div>
                    {/* <div className="hidden mt-8 md:grid  grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="border border-[#e5e7eb] bg-white p-4 shadow-[0_8px_24px_rgba(27,58,143,0.08)] md:p-5">
                            <div className="relative overflow-hidden">
                                <img
                                    src={active.image}
                                    alt={active.title}
                                    className="h-[260px] w-full object-cover md:h-[300px]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a8f]/45 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="inline-flex items-center gap-2 bg-white/90 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1b3a8f] backdrop-blur-sm">
                                        <span className="h-2 w-2 bg-[#f0a500]" />
                                        Active Industry
                                    </div>
                                    <h3 className="mt-3 text-2xl font-black text-white">{active.title}</h3>
                                    <p className="mt-1 max-w-[42ch] text-sm leading-6 text-white/90">{active.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div>
                        <a
                            href={cta.href}
                            className="inline-flex h-[42px] items-center justify-center border border-[#1b3a8f] bg-transparent px-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1b3a8f] outline-none transition-all duration-300 hover:bg-[#1b3a8f] hover:text-white focus-visible:ring-2 focus-visible:ring-[#1b3a8f] focus-visible:ring-offset-2"
                            style={{ borderRadius: 0 }}
                        >
                            {cta.label}
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    {industries.map((item, i) => (
                        <IndustryCard
                            key={item.id}
                            {...item}
                            active={activeId === item.id}
                            featured={item.featured}
                            visible={visible}
                            delay={i * 70}
                            onHover={() => setActiveId(item.id)}
                        />
                    ))}
                </div>


            </div>
        </section>
    );
}

function IndustryCard({ icon, title, desc, image, active, featured, visible, delay, onHover }) {
    return (
        <article
            tabIndex={0}
            onMouseEnter={onHover}
            onFocus={onHover}
            className={`group relative overflow-hidden border bg-white p-5 text-left outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#1b3a8f] focus-visible:ring-offset-2 ${featured
                ? "border-[#1b3a8f] shadow-[0_12px_30px_rgba(27,58,143,0.16)] scale-[1.03]"
                : "border-[#e5e7eb] shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
                } ${active ? "ring-1 ring-[#f0a500]/30" : ""}`}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 520ms ease ${delay}ms, transform 520ms ease ${delay}ms`,
            }}
        >
            <div className="relative mb-4 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-28 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b3a8f]/20 via-transparent to-transparent" />
            </div>

            <div className="mb-4 flex h-12 w-12 items-center justify-center bg-[#1b3a8f]/10 text-[#1b3a8f] transition-colors duration-300 group-hover:bg-[#f0a500]/20 group-hover:text-[#f0a500]">
                {icon}
            </div>

            <h3 className="text-sm font-bold text-[#1b3a8f] transition-colors duration-300 group-hover:text-[#f0a500]">
                {title}
            </h3>
            <p className="mt-2 text-xs leading-5 text-[#6b7280]">{desc}</p>
        </article>
    );
}

function PharmaIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="10" y="2" width="12" height="6" stroke="currentColor" strokeWidth="2" />
            <rect x="4" y="8" width="24" height="22" stroke="currentColor" strokeWidth="2" />
            <line x1="16" y1="14" x2="16" y2="24" stroke="currentColor" strokeWidth="2" />
            <line x1="11" y1="19" x2="21" y2="19" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}
function FmcgIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M3 8h26l-3 16H6L3 8z" stroke="currentColor" strokeWidth="2" />
            <path d="M3 8l3-5h20l3 5" stroke="currentColor" strokeWidth="2" />
            <circle cx="11" cy="28" r="2" fill="currentColor" />
            <circle cx="22" cy="28" r="2" fill="currentColor" />
            <line x1="12" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}
function CosmeticsIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
            <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
            <line x1="16" y1="26" x2="16" y2="30" stroke="currentColor" strokeWidth="2" />
            <line x1="2" y1="16" x2="6" y2="16" stroke="currentColor" strokeWidth="2" />
            <line x1="26" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}
function FoodIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <line x1="10" y1="4" x2="10" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            <path d="M6 4h8v10a4 4 0 01-8 0V4z" stroke="currentColor" strokeWidth="2" />
            <line x1="22" y1="4" x2="22" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            <path d="M18 4c0 0 8 2 8 8s-8 8-8 8" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}
function AyurvedicIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 4C8 4 4 10 4 16s4 10 12 14c8-4 12-8 12-14S24 4 16 4z" stroke="currentColor" strokeWidth="2" />
            <path d="M16 10v12M10 16h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
        </svg>
    );
}
function AgarbattiIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <line x1="16" y1="28" x2="16" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            <path d="M16 8 Q12 4 14 2 Q16 4 16 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M16 8 Q20 4 18 2 Q16 4 16 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <rect x="8" y="28" width="16" height="3" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}
function ElectronicsIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="4" y="6" width="24" height="16" stroke="currentColor" strokeWidth="2" />
            <line x1="4" y1="26" x2="28" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            <line x1="12" y1="26" x2="12" y2="30" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="26" x2="20" y2="30" stroke="currentColor" strokeWidth="2" />
            <circle cx="16" cy="14" r="3" stroke="currentColor" strokeWidth="1.8" />
        </svg>
    );
}