import React, { useState, useEffect, useRef, useCallback } from "react";
import machine_1 from '../../assets/images/Machines/KBA75.png'
import machine_2 from '../../assets/images/Machines/KBA65.png'
import machine_3 from '../../assets/images/Machines/hybrid.png'
import machine_4 from '../../assets/images/Machines/auto-pasting.png'

const slides = [
    {
        image: machine_1,
        heading: "Engineered for Precision.",
        subheading: "Built for Scale.",
        description:
            "Advanced printing infrastructure designed to deliver consistent quality, fast turnaround, and reliable output for every project.",
    },
    {
        image: machine_2,
        heading: "Industrial Finishing.",
        subheading: "At Every Detail.",
        description:
            "From embossing to foil stamping, our finishing capabilities transform ordinary print into premium brand experiences.",
    },
    {
        image: machine_3,
        heading: "Precision at Scale.",
        subheading: "Zero Compromise.",
        description:
            "High-volume production lines built to maintain micron-level accuracy across thousands of impressions every day.",
    },
    {
        image: machine_4,
        heading: "Trusted by Industry.",
        subheading: "Proven in Output.",
        description:
            "Serving sectors from pharmaceuticals to luxury packaging — our processes are certified, consistent, and scalable.",
    },
];

const INTERVAL = 4500;
const TRANSITION_MS = 500;

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(null);
    const [transitioning, setTransitioning] = useState(false);
    const [textVisible, setTextVisible] = useState(true);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef(null);
    const total = slides.length;

    const goTo = useCallback(
        (index) => {
            if (transitioning || index === current) return;
            setPrev(current);
            setTransitioning(true);
            setTextVisible(false);

            setTimeout(() => {
                setCurrent(index);
                setPrev(null);
                setTransitioning(false);
                setTextVisible(true);
            }, TRANSITION_MS);
        },
        [current, transitioning]
    );

    const next = useCallback(() => goTo((current + 1) % total), [current, total, goTo]);
    const previous = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo]);

    /* Auto-play */
    useEffect(() => {
        if (paused) return;
        timerRef.current = setTimeout(next, INTERVAL);
        return () => clearTimeout(timerRef.current);
    }, [current, paused, next]);

    const slide = slides[current];

    const textStyle = {
        transition: `opacity ${TRANSITION_MS}ms ease, transform ${TRANSITION_MS}ms ease`,
        opacity: textVisible ? 1 : 0,
        transform: textVisible ? "translateY(0)" : "translateY(10px)",
    };

    return (
        <section className="w-full pt-20 md:pt-25 md:pb-10 bg-[#0b1f3a] flex items-center">
            <div className="w-full max-w-300 mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py20 lg:py-0">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

                    {/* LEFT: Text Content */}
                    <div className="w-full lg:w-[45%] flex flex-col justify-center">
                        <div style={textStyle}>
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#f0a500] mb-6">
                                Industrial Excellence
                            </p>
                            <h1 className="font-bold leading-[1.08] text-white text-[clamp(2rem,3.5vw+0.5rem,3.5rem)] mb-2">
                                {slide.heading}
                            </h1>
                            <h2 className="font-bold leading-[1.08] text-white/70 text-[clamp(2rem,3.5vw+0.5rem,3.5rem)] mb-6">
                                {slide.subheading}
                            </h2>
                            <p className="text-gray-300 leading-relaxed max-w-[44ch] text-[clamp(0.875rem,1vw+0.3rem,1.05rem)] mb-10">
                                {slide.description}
                            </p>
                            {/* <a
                                href="#"
                                className="inline-block bg-[#1a2644] text-white text-xs font-semibold tracking-[0.15em] uppercase px-8 py-4 transition-all duration-200 hover:bg-[#243460] hover:tracking-[0.2em] active:scale-[0.98]"
                            >
                                Explore Our Capabilities
                            </a> */}
                        </div>
                    </div>

                    {/* RIGHT: Image Carousel */}
                    <div
                        className="w-full lg:w-[55%] relative"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        <div className="relative overflow-hidden  w-full" style={{ aspectRatio: "16 / 11" }}>

                            {/* Previous image fading out */}
                            {prev !== null && (
                                <img
                                    src={slides[prev].image}
                                    alt=""
                                    aria-hidden="true"
                                    width={1200}
                                    height={825}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    style={{ opacity: transitioning ? 0 : 1, transition: `opacity ${TRANSITION_MS}ms ease` }}
                                />
                            )}

                            {/* Current image fading in */}
                            <img
                                key={current}
                                src={slide.image}
                                alt={slide.heading}
                                width={1200}
                                height={825}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover"
                                style={{ opacity: transitioning ? 0 : 1, transition: `opacity ${TRANSITION_MS}ms ease` }}
                            />

                            {/* Bottom gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-[#1a2644]/20 to-transparent pointer-events-none" />

                            {/* Arrows */}
                            <button onClick={previous} aria-label="Previous slide"
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#1a2644] text-base border border-white/50 transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95">
                                ‹
                            </button>
                            <button onClick={next} aria-label="Next slide"
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#1a2644] text-base border border-white/50 transition-all duration-200 hover:bg-white hover:scale-105 active:scale-95">
                                ›
                            </button>

                            {/* Dot indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-[6px]">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goTo(i)}
                                        aria-label={`Go to slide ${i + 1}`}
                                        className={`rounded-full transition-all duration-300 ${i === current ? "w-5 h-[5px] bg-white" : "w-[5px] h-[5px] bg-white/50 hover:bg-white/80"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div className="mt-3 w-full h-[2px] bg-[#d8dae2] rounded-full overflow-hidden">
                            <div
                                key={`progress-${current}`}
                                className="h-full bg-[#1a2644] rounded-full"
                                style={{ animation: paused ? "none" : `progress ${INTERVAL}ms linear forwards` }}
                            />
                        </div>

                        <style>{`
              @keyframes progress {
                from { width: 0%; }
                to   { width: 100%; }
              }
            `}</style>
                    </div>

                </div>
            </div>
        </section>
    );
}