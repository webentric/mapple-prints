import React from "react";
import hero_img from '../assets/images/service-page-hero.png'
import {
    Package,
    Tag,
    Monitor,
    Wrench,
    CheckCircle2,
    ArrowRight,
    User,
    Cpu,
    BarChart2,
} from "lucide-react";

import carton_box from '../assets/images/carton-boxes.png'
import transport_box from '../assets/images/transport-box.png'


const ServicesPage = () => {
    return (
        <>
            <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="flex-1 flex flex-col justify-center space-y-5">
                        {/* Accent Line */}
                        <div className="w-12 h-1 bg-[#E09A00] rounded-full"></div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                            Industrial Packaging <br className="hidden md:block" /> Solutions
                        </h2>

                        <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                            Precision-engineered manufacturing capabilities designed for FMCG
                            leaders, pharmaceutical executives, and global manufacturers
                            demanding uncompromising reliability.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <button className="inline-flex items-center gap-2 bg-[#E09A00] hover:scale-105 text-white text-sm font-medium px-6 py-3  transition-colors duration-200 shadow-sm">
                                Learn More
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Image — Fixed Aspect Ratio */}
                    <div className="flex-1 w-full">
                        <div className="relative w-full aspect-[4/3]  overflow-hidden shadow-lg">
                            <img
                                src={hero_img}
                                alt="Industrial Packaging Machine"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24">
                {/* Section Header */}
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                        Core Capabilities
                    </h2>
                    <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
                        Comprehensive packaging manufacturing tailored for high-volume,
                        critical infrastructure demands.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1 — Carton Boxes (with image) */}
                    <div className="bg-white  border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
                        {/* Text */}
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Package className="w-5 h-5 text-blue-600" />
                                    <h3 className="text-lg font-bold text-gray-900">Carton Boxes</h3>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                    High-speed precision folding cartons for FMCG and pharmaceutical
                                    applications. Manufactured with structural integrity and automated
                                    assembly in mind.
                                </p>
                                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
                                    Industrial Uses
                                </p>
                                <ul className="space-y-1">
                                    {[
                                        "Pharmaceutical Blister Packs",
                                        "Premium Cosmetics",
                                        "Food Grade Retail Packaging",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Fixed Aspect Ratio Image */}
                        <div className="w-full md:w-48 lg:w-56 flex-shrink-0">
                            <div className="relative w-full h-48 md:h-full">
                                <img
                                    src={carton_box}
                                    alt="Carton Boxes"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 — Labels */}
                    <div className="bg-white  border border-gray-200 shadow-sm p-6 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Tag className="w-5 h-5 text-blue-600" />
                                <h3 className="text-lg font-bold text-gray-900">Labels</h3>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Industrial-grade self-adhesive labels capable of withstanding extreme
                                temperatures and logistical friction.
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                                Specifications
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["UV Coating", "Tamper Evident", "Thermal Transfer"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs text-gray-700 bg-gray-100 border border-gray-200  px-3 py-1.5 font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 3 — Corrugated Boxes (with image) */}
                    <div className="bg-white  border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Monitor className="w-5 h-5 text-blue-600" />
                                <h3 className="text-lg font-bold text-gray-900">Corrugated Boxes</h3>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Heavy-duty transport infrastructure. Engineered for optimal stacking
                                strength (BCT) and global supply chain resilience.
                            </p>
                        </div>
                        {/* Fixed Aspect Ratio Image */}
                        <div className="relative w-full aspect-[16/9] mx-auto px-6 pb-6">
                            <div className="relative w-full h-full  overflow-hidden">
                                <img
                                    src={transport_box}
                                    alt="Corrugated Boxes"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 — Custom Packaging */}
                    <div className="bg-white  border border-gray-200 shadow-sm p-6 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Wrench className="w-5 h-5 text-blue-600" />
                                <h3 className="text-lg font-bold text-gray-900">Custom Packaging</h3>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Bespoke structural engineering for specialized product dimensions,
                                ensuring maximum protection and material efficiency.
                            </p>
                        </div>

                        {/* Development Process */}
                        <div className="bg-gray-50 border border-gray-200  p-4">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                                Development Process
                            </p>
                            <div className="flex items-center justify-between gap-2">
                                {[
                                    { icon: <User className="w-5 h-5 text-gray-600" />, label: "CAD Design" },
                                    { icon: <Cpu className="w-5 h-5 text-gray-600" />, label: "Prototyping" },
                                    { icon: <BarChart2 className="w-5 h-5 text-gray-600" />, label: "Mass Prod." },
                                ].map((step, index, arr) => (
                                    <React.Fragment key={step.label}>
                                        <div className="flex flex-col items-center gap-1 text-center">
                                            <div className="bg-white border border-gray-200 p-2 shadow-sm">
                                                {step.icon}
                                            </div>
                                            <span className="text-xs text-gray-600 font-medium">{step.label}</span>
                                        </div>
                                        {index < arr.length - 1 && (
                                            <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default ServicesPage;