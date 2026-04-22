import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import logo from '../assets/icons/mapple_logo.png'
const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
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
                className="fixed top-0 left-0 w-full flex h-16 items-center justify-between px-4 md:px-6 lg:px-50 border-b border-gray-300 bg-white z-50"
                aria-label="Main navigation"
            >
                {/* ── Logo ── */}
                <a
                    href="/"
                    className="flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-[#1b3a8f] focus-visible:ring-offset-2"
                    aria-label="Mapple Prints – home"
                >
                    <img src={logo} alt="" className="w-10 md:w-15" />

                    <span className="text-2xl md:text-3xl font-extrabold leading-none tracking-tight text-[#1b3a8f]">
                        MAPPLE{" "}
                        <span className="text-[#f0a500]">PRINTS</span>
                    </span>
                </a>

                {/* ── Desktop links ── */}
                <ul className="hidden items-center gap-0 md:flex" role="list">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={label}>
                            <NavLink
                                key={label}
                                to={href}
                                className={({ isActive }) =>
                                    `group relative inline-flex items-center px-3 py-2 text-sm font-bold uppercase tracking-[0.08em] text-[#1b3a8f] outline-none transition-colors duration-150 hover:text-[#f0a500] focus-visible:ring-2 focus-visible:ring-[#1b3a8f] focus-visible:ring-offset-1 ${isActive
                                        ? "text-[#f0a500] border-[#b07d5e]"
                                        : ""
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
                        href="#quote"
                        className="inline-flex py-4 items-center justify-center bg-[#f0a500] px-8 text-sm font-bold uppercase tracking-[0.1em] text-white outline-none transition-colors duration-150 hover:bg-[#d4920a] active:bg-[#b97d08] focus-visible:ring-2 focus-visible:ring-[#f0a500] focus-visible:ring-offset-2"
                    >
                        Get Quote
                    </a>
                </div>

                {/* ── Hamburger (mobile) ── */}
                <button
                    ref={toggleRef}
                    type="button"
                    className="flex h-15 w-15 scale-130 items-center justify-center text-[#1b3a8f] outline-none transition-colors duration-150 hover:text-[#f0a500] focus-visible:ring-2 focus-visible:ring-[#1b3a8f] md:hidden"
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
                className="fixed inset-x-0 top-16 border-t border-gray-200 bg-white shadow-[0_8px_24px_rgba(27,58,143,0.10)] md:hidden z-40"
                style={{
                    transformOrigin: "top",
                    transform: menuOpen ? "scaleY(1)" : "scaleY(0)",
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? "auto" : "none",
                    transition:
                        "transform 220ms cubic-bezier(0.16,1,0.3,1), opacity 180ms ease",
                }}
            >
                <ul role="list" className="flex flex-col divide-y divide-gray-100">
                    {NAV_LINKS.map(({ label, href }) => (
                        <NavLink
                            key={label}
                            to={href}
                            className={({ isActive }) =>
                                `group relative inline-flex items-center px-3 py-4 text-xs font-bold uppercase tracking-[0.08em] text-[#1b3a8f] outline-none transition-colors duration-150 hover:text-[#f0a500] focus-visible:ring-2 focus-visible:ring-[#1b3a8f] focus-visible:ring-offset-1 ${isActive
                                    ? "text-[#f0a500] bg-[#1b3a8f]"
                                    : ""
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                    <li>
                        <a
                            href="#quote"
                            onClick={() => setMenuOpen(false)}
                            className="flex min-h-[52px] items-center justify-center bg-[#f0a500] px-6 text-[11px] font-bold uppercase tracking-[0.1em] text-white outline-none transition-colors duration-150 hover:bg-[#d4920a] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
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