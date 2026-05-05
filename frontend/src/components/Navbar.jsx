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
            {/* <div className="absolute flex flex-col md:flex-row bg-[#08111f] z-50 w-full mt-16 justify-around py-2">
                <div className="text-[#f0a500] flex items-center gap-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" >
                        <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                    </svg>
                    <h4>
                        <p>Plot No. 2173, HSIIDC Industrial Estate, Rai, Sonipat (Haryana), India</p>
                    </h4>
                </div>
                <div className="text-[#f0a500] flex items-center gap-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" >
                        <path d="M6.6 3.5 9.2 6.1c.7.7.8 1.8.2 2.6l-1.2 1.7c.9 2 2.6 3.7 4.6 4.6l1.7-1.2c.8-.6 1.9-.5 2.6.2l2.6 2.6c.8.8.8 2 0 2.8l-1.2 1.2c-.9.9-2.1 1.3-3.3 1.1-6.5-1.2-11.6-6.3-12.8-12.8-.2-1.2.2-2.4 1.1-3.3l1.2-1.2c.8-.8 2-.8 2.8 0Z" />
                    </svg>
                    <h4>
                        <p>9810152101, 9212540800</p>
                    </h4>
                </div>
            </div> */}
            <nav
                className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-5 md:px-8 lg:px-50 bg-white backdrop-blur-md border-b border-white/10 z-50"
                aria-label="Main navigation"
            >
                {/* ── Logo ── */}
                <a
                    href="/"
                    className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    aria-label="Mapple Prints – home"
                >
                    <img src={logo} alt="" className="w-11 md:w-13" />

                    <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#1E3A5F]">
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
                                        ? "text-[#E09A00] decoration-6 underline underline-offset-28"
                                        : "text-[#1E3A5F]/95 hover:text-[#E09A00]"
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
                        href="https://wa.me/9810152101"
                        className="inline-flex items-center justify-center h-12 px-10 text-sm font-semibold text-white bg-[#E09A00] shadow-md transition-all duration-200 hover:bg-[#c98700] hover:shadow-lg active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#E09A00]"
                    >
                        Contact
                    </a>
                </div>

                {/* ── Hamburger (mobile) ── */}
                <button
                    ref={toggleRef}
                    type="button"
                    className="flex h-15 w-15 scale-130 items-center justify-center text-[#1E3A5F] outline-none transition-colors duration-150 hover:text-[#f0a500] focus-visible:ring-2 focus-visible:ring-[#1b3a8f] md:hidden"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    <HamburgerIcon open={menuOpen} />
                </button>
            </nav>


            {/* ── Backdrop ── */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* ── Right Side Drawer ── */}
            <div
                id="mobile-nav"
                ref={menuRef}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                className="fixed top-0 right-0 h-full w-[70%] bg-white shadow-[-8px_0_32px_rgba(27,58,143,0.12)] md:hidden z-40 flex flex-col"
                style={{
                    transformOrigin: "right",
                    transform: menuOpen ? "translateX(0)" : "translateX(100%)",
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? "auto" : "none",
                    transition:
                        "transform 260ms cubic-bezier(0.16,1,0.3,1), opacity 200ms ease",
                }}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <span className="text-[#1E3A5F] text-sm font-bold uppercase tracking-[0.08em]">
                        Menu
                    </span>
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className="w-8 h-8 flex items-center justify-center rounded-full text-[#1E3A5F] hover:bg-gray-100 transition-colors duration-200"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Nav Links */}
                <ul
                    role="list"
                    className="flex flex-col px-4 py-2 divide-y divide-gray-100 flex-1 overflow-y-auto"
                >
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
                </ul>

                {/* CTA — Pinned to Bottom */}
                <div className="px-4 pb-8 pt-4 border-t border-gray-100">
                    <a
                        href="https://wa.me/9810152101"
                        onClick={() => setMenuOpen(false)}
                        className="flex h-11 items-center justify-center bg-[#E09A00] text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#c98700] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#E09A00]"
                    >
                        Get Quote
                    </a>
                </div>
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