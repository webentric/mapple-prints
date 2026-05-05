// Hero.jsx
import { useState, useEffect, useRef, useCallback } from "react";
import hero_main from "../assets/images/Hero/hero-main.png"
import hero_pharma from "../assets/images/Hero/hero-pharma.png"
import hero_nutra from "../assets/images/Hero/hero-nutra.png"
import hero_cosmetics from "../assets/images/Hero/hero-cosmetics.png"
import hero_ayurvedic from "../assets/images/Hero/hero-ayurvedic.png"
import hero_food from "../assets/images/Hero/hero-food.png"
import hero_electronics from "../assets/images/Hero/hero-electronics.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'


const slides = [
  {
    id: 0,
    title: "Manufacturing Excellence",
    description:
      "For over 20 years, Maple Prints has been delivering packaging that elevates products and strengthens brand presence. Based in Rai, Haryana, we provide end-to-end solutions—from design and prototyping to printing and production—with complete in-house control.",
    image: hero_main,
    cta: "Get Quote",
  },
  {
    id: 1,
    title: "Pharmaceutical Packaging Solutions",
    description:
      "High-precision packaging for pharmaceutical brands, ensuring regulatory compliance, product safety, and consistent brand integrity through advanced print and finishing systems.",
    image: hero_pharma,
    cta: "Get Quote",
  },
  {
    id: 2,
    title: "Nutraceutical Packaging",
    description:
      "Premium packaging solutions for nutraceutical brands, combining regulatory precision with strong shelf presence and scalable production for growing markets.",
    image: hero_nutra,
    cta: "Get Quote",
  },
  {
    id: 3,
    title: "Cosmetics & Beauty Packaging",
    description:
      "Luxury packaging crafted for beauty brands, featuring refined finishes, accurate color reproduction, and designs that enhance shelf appeal and brand perception.",
    image: hero_cosmetics,
    cta: "Get Quote",
  },
  {
    id: 4,
    title: "Ayurvedic Product Packaging",
    description:
      "Thoughtfully designed packaging for Ayurvedic brands, blending traditional aesthetics with modern printing technology for authenticity and market relevance.",
    image: hero_ayurvedic,
    cta: "Get Quote",
  },
  {
    id: 5,
    title: "Food Containers and Packaging",
    description:
      "Reliable, food-safe packaging solutions designed for freshness, durability, and strong visual impact across fast-moving consumer markets.",
    image: hero_food,
    cta: "Get Quote",
  },
  {
    id: 6,
    title: "Electronics Packaging",
    description:
      "Precision-built packaging for electronics, offering structural protection, clean design, and a premium unboxing experience for modern tech products.",
    image: hero_electronics,
    cta: "Get Quote",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const total = slides.length;

  useEffect(() => {
    AOS.init({ duration: 700, once: false, easing: "ease-out-cubic" });
  }, []);

  // Re-trigger AOS on every slide change
  useEffect(() => {
    AOS.refresh();
  }, [current]);

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 450);
    },
    [animating]
  );

  const next = useCallback(() => goTo((current + 1) % total), [current, total, goTo]);
  const prev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo]);

  // Auto-slide
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  const formatIndex = (n) => String(n + 1).padStart(2, "0");
  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[80vh] overflow-hidden select-none mt-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background Images (preload all, only active is visible) ── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${i === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover "
            // style={{ filter: "blur(1px)" }}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* ── Gradient Overlay ── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "rgba(13,33,55,0.80)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-90 ">
        <div className="max-w-full">

          {/* Category label */}
          <div
            key={`label-${current}`}
            data-aos="fade-down"
            className="mb-4"
          >
            <span className="text-[#e8820c] text-sm md:text-md font-semibold tracking-[3px] uppercase">
              Your Vision, Perfectly Packaged
            </span>
          </div>

          {/* Heading */}
          <h1
            key={`title-${current}`}
            data-aos="fade-up"
            className={`text-white font-bold leading-[1.1] tracking-tight mb-5 transition-opacity duration-450 ${animating ? "opacity-0" : "opacity-100"
              } text-[clamp(36px,4.5vw,65px)]`}
          >
            {slide.title}
          </h1>

          {/* Description */}
          <p
            key={`desc-${current}`}
            data-aos="fade-up"
            data-aos-delay="150"
            className={`text-white/80 text-[clamp(16px,1.5vw,20px)] leading-relaxed mb-9 max-w-[480px] transition-opacity duration-450 ${animating ? "opacity-0" : "opacity-100"
              }`}
          >
            {slide.description}
          </p>

          {/* CTA Button */}
          <div
            key={`cta-${current}`}
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col md:flex-row gap-5"
          >
            <Link to='https://wa.me/9810152101'>
              <button
                className="group inline-flex items-center gap-3 border border-[#e8820c] bg-[#e8820c] hover:bg-[#cf7009] text-white text-[13px] font-semibold tracking-[2px] uppercase px-7 py-3.5 transition-all duration-200 hover:gap-4"
              >
                {slide.cta}
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
            </Link>
            <Link to='/services'>
              <button
                className="group inline-flex items-center gap-3 border border-[#e8820c] hover:bg-[#cf7009] hover:text-white text-[#e8820c] text-[13px] font-semibold tracking-[2px] uppercase px-7 py-3.5 transition-all duration-200 hover:gap-4"
              >
                Explore Services
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* ── Slide Counter — Bottom Left ── */}
      <div className="absolute bottom-10 left-6 sm:left-12 lg:left-20 xl:left-28 z-20 flex items-center gap-2">
        <span className="text-white text-sm font-semibold tracking-widest">
          {formatIndex(current)}
        </span>
        <span className="text-white/30 text-sm tracking-widest">/</span>
        <span className="text-white/40 text-sm tracking-widest">
          {formatIndex(total - 1)}
        </span>
      </div>

      {/* ── Right Side: Vertical Indicators + Nav Buttons ── */}
      <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${i === current
              ? "w-[3px] h-9 bg-[#e8820c]"
              : "w-[2px] h-5 bg-white/25 hover:bg-white/50"
              }`}
          />
        ))}
      </div>

      {/* ── Nav Buttons — Bottom Right ── */}
      <div className="absolute bottom-8 right-5 sm:right-8 z-20 flex items-center gap-2">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#e8820c] border border-white/20 hover:border-[#e8820c] text-white text-base transition-all duration-200 hover:scale-105"
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#e8820c] border border-white/20 hover:border-[#e8820c] text-white text-base transition-all duration-200 hover:scale-105"
        >
          →
        </button>
      </div>
    </section>
  );
}