import { useRef, useEffect, useState } from "react";
import CEO from '../assets/images/CEO.jpeg'

const DEFAULT_BADGE = {
    label: "Your Vision, Perfectly Packaged",
};

export default function About({
    eyebrow = null,
    heading = "Excellence in Packaging Since 2007",
    body = "For over 15 years, Mapple Prints has been helping businesses stand out with custom packaging that sells. Based in Rai, Haryana, we offer end-to-end packaging solutions—from design and prototyping to printing and production—ensuring seamless execution and on-time delivery.We believe packaging is the first tangible connection between a brand and its customer. That’s why we combine innovation, precision, and reliability to deliver packaging that not only protects your product but also enhances its shelf appeal.",
    badge = DEFAULT_BADGE,
    cta = { label: "Read More About Us", href: "/about" },
    imageSrc = CEO,
    imageAlt = "Mapple Prints team reviewing packaging designs in a modern facility",
}) {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    /* Intersection Observer — fade-in on scroll into view */
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <>
            <style>{ABOUT_CSS}</style>

            <section
                ref={sectionRef}
                aria-labelledby="about-heading"
                className={`about-section w-full bg-white ${visible ? "about-visible" : ""}`}
                id="about"
            >
                <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-4 py-16 md:flex-row md:gap-14 md:px-6 md:py-20 lg:px-8 lg:py-24">

                    {/* ── Left: Copy ── */}
                    <div className="about-copy flex w-full flex-col md:w-1/2 lg:w-[52%]">

                        {/* Optional eyebrow */}
                        {eyebrow && (
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f0a500]">
                                {eyebrow}
                            </p>
                        )}

                        {/* Heading */}
                        <h2
                            id="about-heading"
                            className="mb-5 font-black uppercase leading-[1.1] tracking-tight text-[#1b3a8f]"
                            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}
                        >
                            {heading}
                        </h2>

                        {/* Body */}
                        <p
                            className="mb-7 leading-[1.75] text-[#4a5568]"
                            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)", maxWidth: "54ch" }}
                        >
                            {body}
                        </p>

                        {/* CTA */}
                        <div>
                            <a
                                href={cta.href}
                                className="inline-flex h-[44px] items-center justify-center border border-[#1b3a8f] bg-transparent px-6 text-[11px] font-bold uppercase tracking-[0.1em] text-[#1b3a8f] outline-none transition-colors duration-150 hover:bg-[#1b3a8f] hover:text-white active:bg-[#12296e] focus-visible:ring-2 focus-visible:ring-[#1b3a8f] focus-visible:ring-offset-2"
                                style={{ borderRadius: 0 }}
                            >
                                {cta.label}
                            </a>
                        </div>
                    </div>

                    {/* ── Right: Image ── */}
                    <div className="about-image relative flex w-full items-center justify-center md:w-1/2 lg:w-[48%]">
                        <div
                            className="relative w-full overflow-hidden bg-[#d1d5db]"
                            style={{
                                maxWidth: "460px",
                                aspectRatio: "4 / 3",
                                borderRadius: 0,
                            }}
                        >
                            <ImageWithSkeleton src={imageSrc} alt={imageAlt} />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

/* ── Image with skeleton loader ── */
function ImageWithSkeleton({ src, alt }) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <>
            {!loaded && !error && (
                <div
                    aria-hidden="true"
                    className="absolute inset-0 about-skeleton"
                />
            )}
            {error && (
                <div
                    role="img"
                    aria-label={alt}
                    className="absolute inset-0 flex items-center justify-center bg-[#e5e7eb]"
                >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                        <rect width="48" height="48" fill="#d1d5db" />
                        <path d="M8 36l10-12 8 9 6-7 8 10H8z" fill="#9ca3af" />
                        <circle cx="32" cy="16" r="5" fill="#9ca3af" />
                    </svg>
                </div>
            )}
            <img
                src={src}
                alt={alt}
                width={460}
                height={345}
                loading="lazy"
                decoding="async"
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                className="h-full w-full object-cover"
                style={{
                    borderRadius: 0,
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 500ms ease",
                    display: "block",
                }}
            />
        </>
    );
}

/* ── Badge icon (checkmark star) ── */
function BadgeIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
                d="M10 2l2.09 4.26L17 7.27l-3.5 3.41.83 4.82L10 13.27l-4.33 2.23.83-4.82L3 7.27l4.91-.71L10 2z"
                fill="#fff"
                stroke="#fff"
                strokeWidth="0.5"
            />
            <path d="M7.5 10.5l1.5 1.5 3-3" stroke="#f0a500" strokeWidth="1.6" strokeLinecap="square" />
        </svg>
    );
}

/* ── Scroll-reveal + skeleton CSS ── */
const ABOUT_CSS = `
  .about-section {
    --about-duration: 600ms;
    --about-ease: cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Initial hidden state */
  .about-copy  { opacity: 0; transform: translateX(-28px); }
  .about-image { opacity: 0; transform: translateX(28px);  }

  /* Revealed state */
  .about-visible .about-copy {
    opacity: 1; transform: translateX(0);
    transition: opacity var(--about-duration) var(--about-ease),
                transform var(--about-duration) var(--about-ease);
  }
  .about-visible .about-image {
    opacity: 1; transform: translateX(0);
    transition: opacity var(--about-duration) var(--about-ease),
                transform var(--about-duration) var(--about-ease);
    transition-delay: 120ms;
  }

  /* Skeleton shimmer */
  @keyframes about-shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position:  200% 0; }
  }
  .about-skeleton {
    background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
    background-size: 200% 100%;
    animation: about-shimmer 1.5s ease-in-out infinite;
  }

  /* Reduced-motion: disable entrance animations */
  @media (prefers-reduced-motion: reduce) {
    .about-copy, .about-image {
      opacity: 1 !important; transform: none !important; transition: none !important;
    }
    .about-skeleton { animation: none; }
  }

  /* Forced-colors */
  @media (forced-colors: active) {
    .about-section a { forced-color-adjust: none; border: 1px solid ButtonText; color: ButtonText; }
    .about-section a:hover { background: Highlight; color: HighlightText; }
  }
`;