import React from "react";
import metallic from '../assets/images/Products/pharma-4.png'
import embossed from '../assets/images/Products/ayurvedic-3.png'
import glossed from '../assets/images/Products/ayurvedic-4.png'
import uvCoating from '../assets/images/Products/ayurvedic-2.png'
import silver from '../assets/images/Products/cosmetic-2.png'

const services = [
    {
        title: "Embossing & Debossing",
        description:
            "We create raised or pressed impressions on paper surfaces to add depth and texture. This enhances brand elements with a tactile presence that leaves a lasting impression.",
        image: embossed,
    },
    {
        title: "Gloss & Matte Lamination",
        description:
            "A protective layer that enhances durability and elevates visual appeal. Gloss adds a vivid shine, while matte creates a refined, soft finish.",
        image: glossed,
    },
    {
        title: "Spot UV Coating",
        description:
            "Selective high-gloss coating applied precisely to highlight specific design areas, creating striking contrast against matte or uncoated surfaces.",
        image: uvCoating,
    },
    {
        title: "Gold & Silver Foil Stamping",
        description:
            "Metallic foil applied using heat and pressure to deliver a premium reflective finish — ideal for logos, titles, and brand marks.",
        image: silver,
    },
    {
        title: "Metallic Printing",
        description:
            "Special metallic inks produce a subtle shimmer across the printed surface, perfect for modern, high-end, and creative design applications.",
        image: metallic,
    },
];

export default function ServicesPage() {
    return (
        <main className="font-sans text-[#0d2137]">

            {/* ─── HERO SECTION ─────────────────────────────────── */}
            <section className="bg-[#f5f5f5] py-[90px]">
                <div className="max-w-[1200px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* Left: Text */}
                    <div className="flex flex-col items-start">
                        <h1 className="text-[42px] lg:text-[52px] font-bold leading-[1.15] tracking-tight text-[#0d2137]">
                            Our Printing Services &amp; Finishes
                        </h1>
                        <p className="mt-5 text-[17px] leading-relaxed text-[#5f6b76] max-w-[480px]">
                            High-quality printing enhanced with premium finishes—all managed
                            in-house for precision, consistency, and impact. <br />
                            At Maple Prints, every print product is engineered to deliver both
                            visual appeal and tactile experience. We handle all advanced
                            finishing processes in-house, ensuring strict quality control and
                            flawless execution across every order.
                        </p>
                        <a
                            href="/contact"
                            className="mt-8 inline-block px-7 py-3 bg-[#e8820c] hover:bg-[#c96e08] text-white text-[13px] font-semibold tracking-[1px] uppercase transition-colors duration-200"
                        >
                            GET A QUOTE
                        </a>
                    </div>

                </div>
            </section>

            {/* ─── SERVICES LIST ────────────────────────────────── */}
            <section className="bg-white py-[90px]">
                <div className="max-w-[1200px] mx-auto px-10">
                    {services.map((service, index) => {
                        const isReverse = index % 2 !== 0;
                        return (
                            <div
                                key={index}
                                className={[
                                    "grid grid-cols-1 lg:grid-cols-2 gap-14 items-center",
                                    index !== services.length - 1 ? "mb-24" : "",
                                ].join(" ")}
                            >
                                {/* Image */}
                                <div className={isReverse ? "lg:order-2" : "lg:order-1"}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-[360px] object-cover block"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className={[
                                    "flex flex-col",
                                    isReverse ? "lg:order-1" : "lg:order-2",
                                ].join(" ")}>
                                    <span className="text-[11px] font-semibold tracking-[2px] uppercase text-[#b0bac2] mb-3">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="text-[26px] font-bold leading-snug text-[#0d2137] mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-[16px] leading-[1.75] text-[#5f6b76] mb-6">
                                        {service.description}
                                    </p>
                                    <a
                                        href="/contact"
                                        className="text-[14px] font-semibold text-[#0d2137] w-fit border-b border-transparent hover:border-[#e8820c] hover:text-[#e8820c] pb-[2px] transition-all duration-200"
                                    >
                                        Get Quote &rarr;
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

        </main>
    );
}