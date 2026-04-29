import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import logo from '../assets/icons/mapple_logo.png'
const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Facility", href: "/facility" },
    { label: "Our Commitment", href: "/quality" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);
    const toggleRef = useRef(null);

    // Scroll shadow
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Outside click closes drawer
    useEffect(() => {
        if (!menuOpen) return;
        const handleClick = (e) => {
            if (
                menuRef.current && !menuRef.current.contains(e.target) &&
                toggleRef.current && !toggleRef.current.contains(e.target)
            ) setMenuOpen(false);
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [menuOpen]);

    // Escape key
    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <nav
                className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-5 md:px-8 lg:px-50 bg-[#1E3A5F]/95 backdrop-blur-md border-b border-white/10 z-50"
                aria-label="Main navigation"
            >
                {/* ── Logo ── */}
                <a
                    href="/"
                    className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    aria-label="Mapple Prints – home"
                >
                    <img src={logo} alt="" className="w-11 md:w-13" />

                    <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                        MAPLE <span className="text-[#E09A00]">PRINTS</span>
                    </span>
                </a>

                {/* ── Desktop links ── */}
                <ul className="hidden md:flex items-center gap-6" role="list">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={label}>
                            <NavLink
                                to={href}
                                className={({ isActive }) =>
                                    `text-[14px] font-semibold uppercase tracking-[0.06em] transition-colors duration-200 ${isActive
                                        ? "text-[#E09A00] decoration-4 underline underline-offset-22"
                                        : "text-white/80 hover:text-[#E09A00]"
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* ── CTA (desktop) ── */}
                <div className="hidden md:block">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center h-10 px-6 text-sm font-semibold text-white bg-[#E09A00] rounded-sm shadow-md transition-all duration-200 hover:bg-[#c98700] hover:shadow-lg active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#E09A00]"
                    >
                        Contact
                    </a>
                </div>

                {/* ── Hamburger (mobile) ── */}
                <button
                    ref={toggleRef}
                    type="button"
                    className="flex h-15 w-15 scale-130 items-center justify-center text-white outline-none transition-colors duration-150 hover:text-[#f0a500] focus-visible:ring-2 focus-visible:ring-[#1b3a8f] md:hidden"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    <HamburgerIcon open={menuOpen} />
                </button>
            </nav>

            {/* ── Mobile Drawer ── */}
            <div
                id="mobile-nav"
                ref={menuRef}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                className="fixed inset-x-0 top-16 border-t border-gray-200 bg-white text-white shadow-[0_8px_24px_rgba(27,58,143,0.10)] md:hidden z-40"
                style={{
                    transformOrigin: "top",
                    transform: menuOpen ? "scaleY(1)" : "scaleY(0)",
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? "auto" : "none",
                    transition:
                        "transform 220ms cubic-bezier(0.16,1,0.3,1), opacity 180ms ease",
                }}
            >
                <ul role="list" className="flex flex-col px-4 py-2 divide-y divide-gray-100">

                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={label}>
                            <NavLink
                                to={href}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center py-4 text-sm font-semibold uppercase tracking-[0.06em] transition-colors duration-200 ${isActive
                                        ? "text-[#E09A00]"
                                        : "text-[#1E3A5F] hover:text-[#E09A00]"
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}

                    {/* CTA */}
                    <li className="pt-4">
                        <a
                            href="#quote"
                            onClick={() => setMenuOpen(false)}
                            className="flex h-11 items-center justify-center bg-[#E09A00] text-sm font-semibold text-white rounded-sm shadow-md transition-all duration-200 hover:bg-[#c98700] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#E09A00]"
                        >
                            Get Quote
                        </a>
                    </li>

                </ul>
            </div>
        </>
    );
}

/* ────────────────── Hamburger icon ────────────────── */
function HamburgerIcon({ open }) {
    const base =
        "origin-center transition-[transform,opacity] duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)]";
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
        >
            {/* Top bar */}
            <line
                x1="3" y1="6" x2="19" y2="6"
                stroke="currentColor" strokeWidth="2" strokeLinecap="square"
                className={`${base} ${open ? "translate-y-[5px] rotate-45" : ""}`}
                style={{ transformBox: "fill-box" }}
            />
            {/* Mid bar */}
            <line
                x1="3" y1="11" x2="19" y2="11"
                stroke="currentColor" strokeWidth="2" strokeLinecap="square"
                className={`${base} ${open ? "opacity-0" : "opacity-100"}`}
                style={{ transformBox: "fill-box" }}
            />
            {/* Bottom bar */}
            <line
                x1="3" y1="16" x2="19" y2="16"
                stroke="currentColor" strokeWidth="2" strokeLinecap="square"
                className={`${base} ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
                style={{ transformBox: "fill-box" }}
            />
        </svg>
    );
}