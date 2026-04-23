import { useEffect, useRef, useState } from "react";

const QUICK_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Industries", href: "#industries" },
    { label: "Services", href: "#services" },
    { label: "Infrastructure", href: "#facility" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
];

const INDUSTRIES = [
    { label: "Pharmaceuticals", href: "#pharma" },
    { label: "FMCG", href: "#fmcg" },
    { label: "Cosmetics", href: "#cosmetics" },
    { label: "Food & Confectionery", href: "#food" },
    { label: "Agarbatti & Religious", href: "#agarbatti" },
    { label: "Electronics & Appliances", href: "#electronics" },
];

const CONTACT = {
    address: "Mapple Prints, Industrial Packaging Unit, Delhi, India",
    phone: "+91 98765 43210",
    email: "info@mappleprints.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
};

function LogoMark() {
    return (
        <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M5 22V6l9 8 9-8v16" stroke="#fff" strokeWidth="2.4" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.94 6.5A1.94 1.94 0 1 1 3.06 6.5a1.94 1.94 0 0 1 3.88 0ZM3.4 8.75H6.5V21H3.4V8.75Zm5.32 0h2.98v1.68h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.1v-5.22c0-1.24-.02-2.84-1.73-2.84-1.74 0-2 1.36-2 2.75V21H8.72V8.75Z" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.5 21v-7h2.4l.36-2.7h-2.76v-1.72c0-.78.22-1.3 1.35-1.3h1.44V5.84c-.25-.03-1.12-.1-2.13-.1-2.11 0-3.56 1.29-3.56 3.66v1.9H8.2V14h2.4v7h2.9Z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5-2.7a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.6 3.5 9.2 6.1c.7.7.8 1.8.2 2.6l-1.2 1.7c.9 2 2.6 3.7 4.6 4.6l1.7-1.2c.8-.6 1.9-.5 2.6.2l2.6 2.6c.8.8.8 2 0 2.8l-1.2 1.2c-.9.9-2.1 1.3-3.3 1.1-6.5-1.2-11.6-6.3-12.8-12.8-.2-1.2.2-2.4 1.1-3.3l1.2-1.2c.8-.8 2-.8 2.8 0Z" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 3v9h16V8l-8 5-8-5Zm8 3.6L4.5 7h15L12 11.6Z" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 5v5.2l4 2.4-1 1.7-5-3V7h2Z" />
        </svg>
    );
}

export default function Footer({
    companyName = "Mapple Prints",
    description = "Delivering premium packaging solutions with precision, reliability, and modern manufacturing capabilities.",
    quickLinks = QUICK_LINKS,
    industries = INDUSTRIES,
    contact = CONTACT,
    year = new Date().getFullYear(),
}) {
    const footerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = footerRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <footer ref={footerRef} className="w-full bg-[#08111f] text-white">
            <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
                <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
                    <div
                        className="space-y-5"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(16px)",
                            transition: "opacity 500ms ease, transform 500ms ease",
                        }}
                    >
                        <a
                            href="#home"
                            className="inline-flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-[#f0a500] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08111f]"
                            style={{ borderRadius: 0 }}
                        >
                            <span className="flex h-10 w-10 items-center justify-center bg-[#1b3a8f]" style={{ borderRadius: 0 }}>
                                <LogoMark />
                            </span>
                            <span className="text-xl font-black tracking-tight text-white">
                                {companyName}
                            </span>
                        </a>
                        <p className="max-w-[360px] text-sm leading-7 text-white/70">
                            {description}
                        </p>
                        <div className="flex items-center gap-3">
                            <SocialLink label="LinkedIn" href="#" icon={<LinkedInIcon />} />
                            <SocialLink label="Facebook" href="#" icon={<FacebookIcon />} />
                            <SocialLink label="Instagram" href="#" icon={<InstagramIcon />} />
                        </div>
                    </div>

                    <FooterColumn title="Quick Links" visible={visible} delay={80}>
                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-white/70 transition-colors duration-200 hover:text-[#f0a500] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0a500] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08111f]"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </FooterColumn>

                    <FooterColumn title="Industries" visible={visible} delay={160}>
                        <ul className="space-y-3">
                            {industries.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-white/70 transition-colors duration-200 hover:text-[#f0a500] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0a500] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08111f]"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </FooterColumn>

                    <FooterColumn title="Contact" visible={visible} delay={240}>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#f0a500]"><LocationIcon /></span>
                                <span>{contact.address}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#f0a500]"><PhoneIcon /></span>
                                <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`} className="transition-colors hover:text-[#f0a500]">
                                    {contact.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#f0a500]"><MailIcon /></span>
                                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-[#f0a500]">
                                    {contact.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 text-[#f0a500]"><ClockIcon /></span>
                                <span>{contact.hours}</span>
                            </li>
                        </ul>
                    </FooterColumn>
                </div>

                <div className="mt-14 border-t border-white/10 pt-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <p className="text-sm text-white/55">
                            © {year} {companyName}. All rights reserved.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-white/55">
                            <a href="#privacy" className="transition-colors hover:text-[#f0a500]">Privacy Policy</a>
                            <a href="#terms" className="transition-colors hover:text-[#f0a500]">Terms of Service</a>
                            <a href="#sitemap" className="transition-colors hover:text-[#f0a500]">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, children, visible, delay }) {
    return (
        <div
            className="space-y-5"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
            }}
        >
            <h3 className="text-sm font-black uppercase tracking-[0.14em] text-white">
                {title}
            </h3>
            {children}
        </div>
    );
}

function SocialLink({ label, href, icon }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f0a500] hover:bg-[#f0a500] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0a500] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08111f]"
            style={{ borderRadius: 0 }}
        >
            {icon}
        </a>
    );
}

