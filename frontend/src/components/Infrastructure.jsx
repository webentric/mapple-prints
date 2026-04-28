import { useEffect, useRef, useState } from "react";
import industry from '../assets/images/Machines/machine-1.jpeg'

const HIGHLIGHTS = [
    {
        id: "space",
        icon: <FactoryIcon />,
        title: "50,000 sq ft",
        desc: "Dedicated manufacturing space",
    },
    {
        id: "machines",
        icon: <RobotIcon />,
        title: "Advanced Machines",
        desc: "Latest prepress & printing tech",
    },
];

export default function Infrastructure({
    eyebrow = "Infrastructure",
    heading = "World-Class Infrastructure",
    body = "Our manufacturing process is backed by extensive infrastructure, integrating the latest printing technology with automated processes to ensure precision, scale, and speed.",
    cta = { label: "Explore Facility", href: "#facility" },
    imageSrc = industry,
    imageAlt = "Modern packaging manufacturing facility with machinery and stacked cartons",
    highlights = HIGHLIGHTS,
}) {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="facility"
            aria-labelledby="infra-heading"
            className="w-full bg-gradient-to-b from-white to-[#eef1f8] px-4 py-20 md:px-6 md:py-24 lg:px-8 lg:py-28"
        >
            <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 md:flex-row md:gap-12">
                <div className="w-full md:w-1/2">
                    <div
                        className="relative overflow-hidden border border-[#e5e7eb] bg-[#dbe7f3] shadow-[0_12px_30px_rgba(27,58,143,0.12)]"
                        style={{ borderRadius: 0 }}
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                style={{ borderRadius: 0 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#1b3a8f]/8 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a500]">
                        {eyebrow}
                    </p>

                    <h2
                        id="infra-heading"
                        className="max-w-[540px] font-black uppercase leading-[1.05] tracking-tight text-[#1b3a8f]"
                        style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
                    >
                        {heading}
                    </h2>

                    <p className="mt-4 max-w-[560px] text-[clamp(0.9rem,1.4vw,1rem)] leading-[1.8] text-[#4a5568]">
                        {body}
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {highlights.map((item, i) => (
                            <div
                                key={item.id}
                                className="group flex items-start gap-3 border border-transparent bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d7dbe3] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
                                style={{
                                    borderRadius: 0,
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? "translateY(0)" : "translateY(16px)",
                                    transition: `opacity 480ms ease ${120 + i * 80}ms, transform 480ms ease ${120 + i * 80}ms`,
                                }}
                            >
                                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-[#1b3a8f]/10 text-[#f0a500] transition-colors duration-300 group-hover:bg-[#f0a500]/20 group-hover:text-[#f0a500]">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-[#1b3a8f]">{item.title}</h3>
                                    <p className="mt-1 text-xs leading-5 text-[#6b7280]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <a
                            href={cta.href}
                            className="inline-flex h-[44px] items-center justify-center border border-[#1b3a8f] bg-transparent px-6 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1b3a8f] outline-none transition-all duration-300 hover:bg-[#1b3a8f] hover:text-white focus-visible:ring-2 focus-visible:ring-[#1b3a8f] focus-visible:ring-offset-2"
                            style={{ borderRadius: 0 }}
                        >
                            {cta.label}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FactoryIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 21V10l6 3V10l6 3V8l6 3v10H3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="miter" />
            <path d="M6 21v-5h3v5M12 21v-7h3v7M18 21v-4h3v4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="miter" />
            <path d="M6 6h2M10 6h2M14 6h2M18 6h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
        </svg>
    );
}

function RobotIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="5" y="6" width="14" height="12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="miter" />
            <path d="M8 6V4M16 6V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
            <circle cx="10" cy="12" r="1.2" fill="currentColor" />
            <circle cx="14" cy="12" r="1.2" fill="currentColor" />
            <path d="M9 15h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
            <path d="M12 18v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
        </svg>
    );
}