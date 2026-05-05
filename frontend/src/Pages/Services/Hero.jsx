import React from "react";
import hero from "../../assets/images/Hero/grouped-all-16-9.png"

const Hero = ({
  title = "Services",
  description = "Our printing and finishing solutions are engineered for reliability, consistency, and large-scale production. With advanced techniques and strict quality control, we ensure every output meets the highest standards of performance, durability, and visual precision.",
  imageSrc = hero,
  imageAlt = "Industrial printing facility with large-scale machinery",
}) => {
  return (
    <section className="relative w-full overflow-hidden  min-h-[420px] md:min-h-[500px] lg:min-h-[560px] pt-10 lg:px-40 "
      style={{
        background: "linear-gradient(160deg, #05122B 0%, #0A1A3A 50%, #060D1F 100%)",
        // ── CSS VARIABLES FOR CARD SIZE ──
        // Change these two values to resize all cards globally
        "--card-w": "220px",          // Desktop card width
        "--card-h": "130px",          // Desktop card height
        "--logo-w": "110px",          // Logo image width inside card
        "--logo-h": "44px",           // Logo image height inside card
        "--badge-size": "52px",       // Initials badge size (placeholder)
        "--badge-font": "15px",       // Initials badge font size
        "--name-font": "13px",        // Company name font size
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[420px] md:min-h-[500px] lg:min-h-[560px]">

        {/* ── Left: Text Content ── */}
        <div className="flex flex-col justify-center px-8 py-14 md:px-12 lg:px-20 xl:px-28 order-1 ">
          <h1
            className="
              font-bold tracking-tight leading-[1.1]
              text-[clamp(2.25rem,4vw+0.5rem,4rem)]
              text-white
              mb-4 md:mb-5
            "
          >
            {title}
          </h1>
          <p
            className="
              text-[clamp(0.95rem,1vw+0.5rem,1.125rem)]
              text-gray-300
              leading-relaxed
              max-w-[38ch]
            "
          >
            {description}
          </p>
        </div>

        {/* ── Right: Image with diagonal left edge ── */}
        <div className="hidden md:block relative order-2 w-full overflow-hidden">
          {/*
            Desktop: apply diagonal clip-path (top-left inset creates the slant)
            Mobile:  soften to a gentle top-left angle, preserving layout
          */}
          <div
            className="
              w-full h-full
              transition-[clip-path] duration-500 ease-in-out md:min-h-0
            "
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              width={900}
              height={560}
              loading="lazy"
              decoding="async"
              className="
                w-full h-full object-cover object-center
                transition-transform duration-700 ease-out
                hover:scale-[1.03]
                min-h-[260px] md:min-h-0
              "
              style={{ display: "block" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;