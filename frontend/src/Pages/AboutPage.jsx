import React from "react";
import about_hero_bg from '../assets/images/about-hero.png'
import team from '../assets/images/team.jpg'
import CEO from '../assets/images/CEO.jpeg'

import { CheckCircle2, Cpu, ShieldCheck, Zap, Award } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────
const leaders = [
    {
        name: "Mr. Naveen Monga",
        title: "Chief Executive Officer",
        bio: "Over 30 years steering industrial manufacturing operations across global markets.",
        image: CEO,
    },
];

const qualityFeatures = [
    { icon: <Cpu className="w-6 h-6 text-blue-300" />, label: "Advanced Machinery" },
    { icon: <ShieldCheck className="w-6 h-6 text-blue-300" />, label: "Global Compliance" },
    { icon: <Zap className="w-6 h-6 text-blue-300" />, label: "Rapid Throughput" },
    { icon: <Award className="w-6 h-6 text-blue-300" />, label: "Maximum Durability" },
];

const qualityChecks = [
    "ISO 9001:2015 Certified Manufacturing",
    "Automated Defect Detection Systems",
    "Rigorous Material Stress Testing",
];

const AboutPage = () => {
    return (
        <main className="bg-white">

            {/* ── Hero Banner ── */}
            <section className="relative w-full h-100 md:h-80 lg:h-[520px] overflow-hidden">

                {/* Background Image */}
                <img
                    src={about_hero_bg}
                    alt="Industrial Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0b1f3a]/70" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E09A00] mb-3">
                        Corporate Heritage
                    </span>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-xl">
                        Decades of Industrial <br /> Excellence in Packaging
                    </h1>

                    <p className="mt-4 text-blue-100 text-sm md:text-base leading-relaxed max-w-md">
                        Mapple Prints stands as a pillar of reliability in the B2B packaging sector,
                        engineering solutions that protect products and elevate global brands with
                        uncompromising precision.
                    </p>

                </div>
            </section>


            {/* ── Building Trust Section ── */}
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 lg:gap-16">

                    {/* Left Image */}
                    <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
                        <div className="relative w-full aspect-[4/3]  overflow-hidden shadow-md">
                            <img
                                src={team}
                                alt="Team collaborating"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>


                    {/* Right Content */}
                    <div className="flex-1">

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-5">
                            Building Trust Through Engineering
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Founded on the principles of structural integrity and material science,
                            Mapple Prints has evolved from a regional supplier to a global partner
                            for Fortune 500 manufacturers. Our approach is deeply analytical,
                            treating every packaging challenge as an engineering problem to be
                            solved efficiently at scale.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed mb-8">
                            We understand that in the B2B landscape, packaging is not merely
                            aesthetic—it is a critical logistical component that safeguards
                            product integrity across complex global supply chains. Our facilities
                            are designed for continuous output, ensuring zero downtime for our
                            partners.
                        </p>


                        {/* Stats */}
                        <div className="flex flex-wrap gap-10 border-t border-gray-200 pt-6">

                            <div>
                                <p className="text-3xl font-extrabold text-[#1E3A5F]">19+</p>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mt-1">
                                    Years of Operations
                                </p>
                            </div>

                            <div>
                                <p className="text-3xl font-extrabold text-[#1E3A5F]">1000+</p>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mt-1">
                                    Units Produced Annually
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
            <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                            Executive Leadership
                        </h2>
                        <p className="text-gray-500 text-base max-w-lg mx-auto">
                            Guided by industry veterans committed to operational excellence and
                            strategic foresight.
                        </p>
                    </div>

                    <div className="flex justify-center">

                        <div className="w-full max-w-sm border border-gray-200 shadow-sm overflow-hidden bg-white">

                            {/* Image */}
                            <div className="relative w-full aspect-[3/3.2]">
                                <img
                                    src={leaders[0].image}
                                    alt={leaders[0].name}
                                    className="absolute inset-0 w-full h-full object-cover "
                                />
                            </div>

                            {/* Text */}
                            <div className="p-5 text-center">
                                <h3 className="text-lg font-bold text-gray-900">
                                    {leaders[0].name}
                                </h3>

                                <p className="text-xs font-semibold uppercase tracking-widest text-[#E09A00] mt-1 mb-3">
                                    {leaders[0].title}
                                </p>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {leaders[0].bio}
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* ── Unyielding Quality Control ── */}
            <section className="bg-slate-800 py-20 px-6 md:px-16 lg:px-24">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-start">

                    {/* Left — Text Content */}
                    <div className="flex-1">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
                            Rigorous Standards
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5">
                            Unyielding Quality Control
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8">
                            Our commitment to excellence is certified and measurable. Every batch
                            undergoes stringent stress-testing and defect analysis to ensure
                            compliance with international industrial standards. We do not
                            compromise on structural integrity.
                        </p>

                        {/* Checklist */}
                        <ul className="space-y-3">
                            {qualityChecks.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right — Feature Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-px bg-slate-600">
                        {qualityFeatures.map((feature) => (
                            <div
                                key={feature.label}
                                className="bg-slate-700 flex flex-col items-center justify-center gap-3 py-10 px-6 text-center hover:bg-slate-600 transition-colors duration-200"
                            >
                                {feature.icon}
                                <p className="text-xs font-semibold uppercase tracking-widest text-slate-300">
                                    {feature.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
};

export default AboutPage;