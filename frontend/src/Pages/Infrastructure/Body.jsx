import React from "react";
import machine_5 from '../../assets/images/Machines/auto-die-cutting.png'
import machine_6 from '../../assets/images/Machines/paper-cutting-polar.png'
import machine_7 from '../../assets/images/Machines/UV-coater.png'

/* ── Label ── */
const Label = ({ children }) => (
    <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#c07a3a] mb-4">
        {children}
    </p>
);

/* ── BulletList ── */
const BulletList = ({ items }) => (
    <ul className="mt-6 flex flex-col gap-[10px]">
        {items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-[#3a4060] text-sm leading-snug">
                <span className="flex-shrink-0 w-[18px] h-[18px] rounded-full border border-[#1a2644]/60 flex items-center justify-center">
                    <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5" aria-hidden="true">
                        <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#1a2644" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
                {item}
            </li>
        ))}
    </ul>
);

/* ── FeatureBlock ── */
const FeatureBlock = ({ label, title, description, footer, bullets, image, imageAlt, reverse = false }) => {
    const textOrder = reverse ? "order-1 lg:order-2" : "order-1 lg:order-1";
    const imgOrder = reverse ? "order-2 lg:order-1" : "order-2 lg:order-2";

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Text */}
            <div className={`flex flex-col justify-center ${textOrder}`}>
                <Label>{label}</Label>
                <h2 className="font-bold leading-[1.1] text-[#1a2644] text-[clamp(1.6rem,2.8vw+0.4rem,2.5rem)] mb-4">
                    {title}
                </h2>
                <p className="text-[#5a6478] leading-relaxed text-[clamp(0.875rem,1vw+0.25rem,1rem)] max-w-[44ch]">
                    {description}
                </p>
                <BulletList items={bullets} />
                {footer && (
                    <p className="mt-7 text-[10px] font-semibold tracking-[0.16em] uppercase text-[#9ea4b4]">
                        {footer}
                    </p>
                )}
            </div>

            {/* Image */}
            <div className={`w-full h-[240px] md:h-[340px] lg:h-[420px] overflow-hidden ${imgOrder}`}>
                <img
                    src={image}
                    alt={imageAlt}
                    width={900}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                />
            </div>

        </div>
    );
};

const Divider = () => <div className="w-full h-px bg-[#d8dae2]" aria-hidden="true" />;

/* ── Data ── */
const blocks = [
    {
        label: "Infrastructure",
        title: "Precision That Reflects Your Brand",
        description: "Every print is produced with a focus on color accuracy, fine detailing, and consistency—ensuring your brand maintains its integrity across every batch.",
        footer: "Powered by advanced offset printing systems",
        bullets: ["High color consistency", "Sharp detailing", "Accurate registration"],
        image: machine_5,
        imageAlt: "Large-format industrial printing machinery on the production floor",
        reverse: false,
    },
    {
        label: "Technology",
        title: "Built for High-Volume Reliability",
        description: "Our production setup supports large-scale printing requirements while maintaining consistent quality and minimal turnaround times.",
        bullets: ["Stable long-run output", "Fast production cycles", "Industrial-grade performance"],
        image: machine_6,
        imageAlt: "Workers overseeing a high-volume industrial production line",
        reverse: true,
    },
    {
        label: "Production",
        title: "Consistency Across Every Print Run",
        description: "From the first unit to the last, we ensure uniformity in output—critical for packaging, branding, and large distribution cycles.",
        bullets: ["Batch consistency", "Controlled processes", "Quality assurance checks"],
        image: machine_7,
        imageAlt: "Quality assurance team inspecting finished print materials",
        reverse: false,
    },
];

/* ── Main export ── */
export default function Body() {
    return (
        <section className="w-full bg-[#f4f5f7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20">
                <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
                    {blocks.map((block, i) => (
                        <React.Fragment key={block.label}>
                            <FeatureBlock {...block} />
                            {i < blocks.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}