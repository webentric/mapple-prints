// Industries.jsx
import { useRef } from "react";

import agarbatti from '../assets/images/agarbatti-package.jpg';
import ayurvedic from '../assets/images/Products/grouped-ayurvedic-1.png';
import cosmetics from '../assets/images/Products/grouped-cosmetic-1.png';
import electronics from '../assets/images/Products/electric-1.png';
import food from '../assets/images/Products/food-3.png';
import medicine from '../assets/images/Products/pharma-1.png';

const INDUSTRIES = [
  {
    id: "pharma",
    tags: ["RESEARCH REPORT", "HEALTHCARE"],
    title: "Pharmaceutical Packaging",
    desc: "Regulatory-compliant, tamper-evident packaging designed for safety and global standards.",
    image: medicine,
  },
  {
    id: "cosmetics",
    tags: ["WHITEPAPER", "BEAUTY"],
    title: "Cosmetics Packaging",
    desc: "Premium packaging solutions crafted to enhance brand appeal and shelf presence.",
    image: cosmetics,
  },
  {
    id: "food",
    tags: ["RESEARCH REPORT", "FOOD & BEVERAGE"],
    title: "Food & Beverage Packaging",
    desc: "High-barrier, food-safe packaging that preserves freshness and ensures quality.",
    image: food,
  },
  {
    id: "ayurvedic",
    tags: ["WHITEPAPER", "WELLNESS"],
    title: "Ayurvedic Packaging",
    desc: "Nature-inspired packaging solutions for herbal and wellness product lines.",
    image: ayurvedic,
  },
  {
    id: "agarbatti",
    tags: ["BLOG"],
    title: "Agarbatti Packaging",
    desc: "Elegant packaging crafted for incense and devotional product lines.",
    image: agarbatti,
  },
  {
    id: "electronics",
    tags: ["BLOG"],
    title: "Electronics Packaging",
    desc: "Durable, protective packaging engineered for devices and electronic accessories.",
    image: electronics,
  },
];

function IndustryCard({ item }) {
  return (
    <article className="relative overflow-hidden group cursor-pointer " style={{ aspectRatio: "1/1" }}>
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ filter: "brightness(0.9) contrast(1.05)" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,25,47,0.92) 0%, rgba(10,25,47,0.55) 15%, rgba(10,25,47,0.15) 25%, rgba(10,25,47,0.0) 35%)",
        }}
      />

      {/* Top Tags */}
      {/* <div className="absolute top-0 left-0 right-0 p-4 flex flex-wrap items-center gap-1.5">
        {item.tags.map((tag, i) => (
          <span key={tag} className="flex items-center gap-1.5">
            <span className="text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-1 border border-white/20 bg-black/20 backdrop-blur-sm">
              {tag}
            </span>
            {i < item.tags.length - 1 && (
              <span className="text-white/40 text-[10px]">|</span>
            )}
          </span>
        ))}
      </div> */}

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white text-[clamp(15px,1.6vw,19px)] font-bold leading-tight mb-1.5">
          {item.title}
        </h3>
        <p className="text-white/65 text-[13px] leading-relaxed mb-3 line-clamp-2">
          {item.desc}
        </p>
        {/* <a
          href="#"
          className="inline-flex items-center gap-1.5 text-[#F97316] text-[12px] font-semibold group-hover:gap-2.5 transition-all duration-200"
        >
          Read More
          <svg
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a> */}
      </div>

      {/* Hover tint */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
    </article>
  );
}

export default function Industries() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "next" ? 320 : -320,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#F8F9FB] py-16 md:py-20 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto">

        {/* ── Header ── */}
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[540px]">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f0a500]">
              Diverse Industry Expertise
            </p>
            <h2
              className="font-black uppercase leading-[1.05] tracking-tight text-[#1b3a8f]"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
            >
              Industries We Serve
            </h2>
            <p className="mt-4 max-w-[500px] text-[clamp(0.9rem,1.4vw,1rem)] leading-[1.75] text-[#4a5568]">
              Delivering specialized packaging across regulated and high-performance industries.
            </p>
          </div>
          <div className="shrink-0 lg:mt-1">
            <a
              href="/industries"
              className="inline-flex h-[42px] items-center justify-center border border-[#1b3a8f] bg-transparent px-5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1b3a8f] outline-none transition-all duration-200 hover:bg-[#1b3a8f] hover:text-white focus-visible:ring-2 focus-visible:ring-[#1b3a8f] focus-visible:ring-offset-2"
              style={{ borderRadius: 0 }}
            >
              See More Industries
            </a>
          </div>
        </div>

        {/* ── Desktop Grid — 3 columns, 2 rows, all equal ── */}
        <div className="hidden md:grid grid-cols-3 gap-4">
          {INDUSTRIES.map((item) => (
            <IndustryCard key={item.id} item={item} />
          ))}
        </div>

        {/* ── Mobile Slider ── */}
        <div className="md:hidden">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory"
            style={{
              paddingLeft: "4px",
              paddingRight: "48px",
              paddingBottom: "8px",
              scrollbarWidth: "none",
            }}
          >
            <style>{`::-webkit-scrollbar { display: none; }`}</style>
            {INDUSTRIES.map((item) => (
              <div
                key={item.id}
                className="snap-start shrink-0"
                style={{ width: "78vw" }}
              >
                <IndustryCard item={item} />
              </div>
            ))}
          </div>

          
          

          {/* Slider Controls */}
          <div className="flex justify-end gap-2 mt-4 pr-1">
            <button
          onClick={() => scroll("prev")}
          aria-label="Previous slide"
          className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#e8820c] border border-black/50 hover:border-[#e8820c] text-white text-base transition-all duration-200 hover:scale-105"
        >
          <span className='text-black/50'>←</span>
        </button>
        <button
          onClick={() => scroll("next")}
          aria-label="Next slide"
          className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#e8820c] border border-black/50 hover:border-[#e8820c] text-white text-base transition-all duration-200 hover:scale-105"
        >
          <span className='text-black/50'>→</span>
        </button>
          </div>
        </div>

      </div>
    </section>
  );
}