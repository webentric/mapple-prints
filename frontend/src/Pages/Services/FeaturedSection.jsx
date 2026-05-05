import React, { useState, useRef } from "react";
import embossing from '../../assets/images/Products/grouped-nutra-1.png'
import foilStamping from '../../assets/images/Products/grouped-ayurvedic-1.png'
import rigidCartons from '../../assets/images/Products/ayurvedic-4.png'
import metallic from '../../assets/images/Products/grouped-pharma-1.png'

const services = [
    {
        title: "Embossing & Debossing",
        description:
            "Adding dimensional depth and sophisticated texture to transform print into a tactile experience that strengthens high-end brand identity.",
        image:
            embossing,
    },
    {
        title: "Foil Stamping",
        description:
            "Precision-applied metallic and holographic foils that deliver controlled reflectivity, dimensional highlights, and a refined premium finish.",
        image:
            foilStamping,
    },
    {
        title: "Rigid Cartons",
        description:
            "Sturdy, premium-grade rigid cartons designed to provide superior protection while delivering a refined, high-end unboxing experience for luxury and retail packaging.",
        image:
            rigidCartons,
    },
    {
        title: "Metallic Cartons",
        description:
            "Metallic cartons designed to capture light and attention, delivering a sophisticated, high-end finish that elevates product presentation.",
        image:
            metallic,
    },
];

export default function FeaturedSection() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState("next");
    const [visible, setVisible] = useState(true);
    const timerRef = useRef(null);

    const total = services.length;

    const navigate = (dir) => {
        if (animating) return;
        setAnimating(true);
        setDirection(dir);
        setVisible(false);

        timerRef.current = setTimeout(() => {
            setCurrent((prev) =>
                dir === "next" ? (prev + 1) % total : (prev - 1 + total) % total
            );
            setVisible(true);
            setTimeout(() => setAnimating(false), 350);
        }, 220);
    };

    const slide = services[current];

    const contentTransition = {
        transition: "opacity 220ms ease, transform 220ms ease",
        opacity: visible ? 1 : 0,
        transform: visible
            ? "translateX(0)"
            : direction === "next"
                ? "translateX(12px)"
                : "translateX(-12px)",
    };

    const imageTransition = {
        transition: "opacity 220ms ease, transform 300ms ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.97)",
    };

    return (
        <section className="w-full bg-[#f4f5f7] py-12 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-[1100px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

                    {/* Left: Image */}
                    <div className="w-full overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
                        <img
                            key={current}
                            src={slide.image}
                            alt={slide.title}
                            width={900}
                            height={675}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover border border-gray-300"
                            style={imageTransition}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col justify-between h-full">

                        {/* Nav buttons */}
                        <div className="flex justify-end gap-3 mb-8 md:mb-10">
                            <button
                                onClick={() => navigate("prev")}
                                disabled={animating}
                                aria-label="Previous service"
                                className="
                  w-10 h-10 rounded-full border border-[#c5c8d0]
                  flex items-center justify-center
                  text-[#3a4060] text-sm
                  transition-all duration-200
                  hover:bg-[#1a2644] hover:text-white hover:border-[#1a2644] hover:scale-105
                  active:scale-95
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent
                  disabled:hover:text-[#3a4060] disabled:hover:border-[#c5c8d0] disabled:hover:scale-100
                "
                            >
                                ‹
                            </button>
                            <button
                                onClick={() => navigate("next")}
                                disabled={animating}
                                aria-label="Next service"
                                className="
                  w-10 h-10 rounded-full border border-[#c5c8d0]
                  flex items-center justify-center
                  text-[#3a4060] text-sm
                  transition-all duration-200
                  hover:bg-[#1a2644] hover:text-white hover:border-[#1a2644] hover:scale-105
                  active:scale-95
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent
                  disabled:hover:text-[#3a4060] disabled:hover:border-[#c5c8d0] disabled:hover:scale-100
                "
                            >
                                ›
                            </button>
                        </div>

                        {/* Animated content */}
                        <div style={contentTransition}>
                            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#8a90a2] mb-4">
                                Featured Service
                            </p>
                            <h2
                                className="
                  font-bold leading-[1.12] text-[#1a2644]
                  text-[clamp(1.75rem,3vw+0.5rem,2.75rem)]
                  mb-5
                "
                            >
                                {slide.title}
                            </h2>
                            <p className="text-[#5a6478] text-[clamp(0.9rem,1vw+0.4rem,1.05rem)] leading-relaxed max-w-[36ch] mb-8">
                                {slide.description}
                            </p>
                            {/* <a
                                href="#"
                                className="
                  inline-flex items-center gap-2
                  text-xs font-semibold tracking-[0.12em] uppercase
                  text-[#1a2644] group
                  transition-colors duration-200
                  hover:text-[#3d6fff]
                "
                            >
                                Read More
                                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                            </a> */}
                        </div>

                        {/* Progress dots */}
                        <div className="mt-10 flex items-center gap-2">
                            {services.map((_, i) => (
                                <span
                                    key={i}
                                    className={`
                    block h-[2px] rounded-full transition-all duration-300
                    ${i === current ? "w-6 bg-[#1a2644]" : "w-3 bg-[#c5c8d0]"}
                  `}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}