import React from "react";
import hero from '../assets/images/quality-hero.png'
import {
    FlaskConical,
    ScanLine,
    ClipboardCheck,
    Truck,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────
const steps = [
    {
        step: "STEP 01",
        icon: <FlaskConical className="w-5 h-5 text-blue-700" />,
        title: "Raw Material",
        description:
            "Incoming material testing for tensile strength, barrier properties, and chemical composition before entering production.",
    },
    {
        step: "STEP 02",
        icon: <ScanLine className="w-5 h-5 text-blue-700" />,
        title: "In-Process (IPQC)",
        description:
            "Automated vision systems and hourly sampling intervals to monitor gauge thickness and seal integrity.",
    },
    {
        step: "STEP 03",
        icon: <ClipboardCheck className="w-5 h-5 text-blue-700" />,
        title: "Final Assurance",
        description:
            "Comprehensive batch testing in our climate-controlled lab, ensuring regulatory compliance and specification match.",
    },
    {
        step: "STEP 04",
        icon: <Truck className="w-5 h-5 text-blue-700" />,
        title: "Pre-Shipment",
        description:
            "Final visual inspection, packaging verification, and generation of Certificate of Analysis (CoA) for dispatch.",
    },
];

// ── Component ─────────────────────────────────────────────────────────
const Quality = () => {
    return (
        <main className="bg-white">

            {/* ── Hero Banner ── */}
            <section className="relative w-full min-h-[360px] md:min-h-[420px] overflow-hidden md:px-40">
                {/* Background Image */}
                <img
                    src={hero}
                    alt="Quality Control Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-blue-950/75"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 max-w-5xl">

                    {/* Eyebrow Badge */}
                    <div className="mb-5">
                        <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5">
                            Quality Assurance
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-xl mb-5">
                        Uncompromising Quality Control
                    </h1>

                    {/* Subtext */}
                    <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-md mb-8">
                        Our commitment to excellence is certified and measurable. Every batch
                        undergoes rigorous testing to ensure compliance with international
                        standards, delivering reliable packaging solutions for critical
                        industries.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-xs font-bold uppercase tracking-wider px-6 py-3 transition-colors duration-200">
                            View Certifications
                        </button>
                        <button className="border border-white text-white text-xs font-bold uppercase tracking-wider px-6 py-3 hover:bg-white hover:text-gray-900 transition-colors duration-200">
                            Our Standards
                        </button>
                    </div>

                </div>
            </section>

            {/* ── Standard Operating Procedures ── */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-14">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
                            Standard Operating Procedures
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                            Our systematic approach guarantees consistency and traceability from
                            raw material intake to final dispatch.
                        </p>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {steps.map((step) => (
                            <div
                                key={step.step}
                                className="bg-white border border-gray-200 shadow-sm p-6 flex flex-col justify-between"
                            >
                                {/* Icon */}
                                <div>
                                    <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 border border-blue-100 mb-4">
                                        {step.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-sm font-bold text-gray-900 mb-2">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Step Label */}
                                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-6">
                                    {step.step}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
};

export default Quality;