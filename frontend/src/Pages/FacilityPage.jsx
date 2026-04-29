import React from "react";
import kba75 from '../assets/images/Machines/KBA75.png'
import kba65 from '../assets/images/Machines/KBA65.png'
import auto_die_cutting from '../assets/images/Machines/auto-die-cutting.png'
import auto_pasting from '../assets/images/Machines/auto-pasting.png'
import hybrid from '../assets/images/Machines/hybrid.png'
import paper_cutting_polar from '../assets/images/Machines/paper-cutting-polar.png'
import uv_coater from '../assets/images/Machines/UV-coater.png'


const machines = [
    {
        title: "KBA 75",
        tag: "Offset Printing",
        description:
            "High-performance offset printing machine designed for large-scale production. Delivers excellent color consistency, registration accuracy, and high-speed output across all paper formats.",
        image: kba75,
    },
    {
        title: "KBA 65",
        tag: "Germany Machinery",
        description:
            "German-engineered precision printing machine renowned for reliability, fine detailing, and long-run stability. The backbone of our commercial printing operations.",
        image: kba65,
    },
    {
        title: "POLAR Paper Cutting Machine",
        tag: "Cutting & Trimming",
        description:
            "Industrial-grade paper cutting technology that ensures consistently accurate, clean, and perfectly aligned cuts — essential for maintaining precise specifications across every order.",
        image: paper_cutting_polar,
    },
    {
        title: "Automatic Die Cutting Machine",
        tag: "Die Cutting",
        description:
            "Built for high-precision die cutting of custom shapes, cartons, and packaging. Handles complex cutting patterns for custom retail and industrial packaging at scale.",
        image: auto_die_cutting,
    },
    {
        title: "Automatic Pasting Machine",
        tag: "Assembly",
        description:
            "Automates the pasting and assembly process for faster, consistent production output. Eliminates manual error and dramatically increases throughput speed for box and carton production.",
        image: auto_pasting,
    },
    {
        title: "UV Coater",
        tag: "Finishing",
        description:
            "Applies a uniform UV coating layer to enhance surface durability, protect the print, and create premium gloss or matte finishes across all paper and board substrates.",
        image: uv_coater,
    },
    {
        title: "Hybrid Machine",
        tag: "Multi-Function",
        description:
            "A multi-functional production unit combining multiple finishing processes into a single workflow — improving efficiency, reducing turnaround time, and ensuring flexible output options.",
        image: hybrid,
    },
];

export default function FacilityPage() {
    return (
        <main className="bg-white font-sans text-[#0d2137]">

            {/* ─── HERO ──────────────────────────────────────────── */}
            <section className="bg-[#f5f5f5] border-b border-[#e8e8e8] py-20 px-6">
                <div className="max-w-[1200px] mx-auto text-center">
                    <span className="inline-block text-[11px] font-semibold tracking-[3px] uppercase text-[#e8820c] mb-5">
                        Infrastructure
                    </span>
                    <h1 className="text-[44px] lg:text-[54px] font-bold leading-[1.15] tracking-tight text-[#0d2137] max-w-[720px] mx-auto">
                        Our Facility &amp; Machinery
                    </h1>
                    <p className="mt-5 text-[17px] leading-relaxed text-[#5f6b76] max-w-[560px] mx-auto">
                        Advanced printing and finishing equipment that ensures precision,
                        speed, and consistent quality across every project.
                    </p>
                    <div className="mt-10 flex justify-center gap-12">
                        {[
                            ["7+", "Production Machines"],
                            ["100%", "In-House Operations"],
                            ["24hr", "Turnaround Capability"],
                        ].map(([stat, label]) => (
                            <div key={label} className="text-center">
                                <p className="text-[32px] font-bold text-[#0d2137] leading-none">{stat}</p>
                                <p className="text-[13px] text-[#5f6b76] mt-2 tracking-wide">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── MACHINE LIST ──────────────────────────────────── */}
            <section className="px-6">
                <div className="max-w-[1200px] mx-auto">
                    {machines.map((machine, index) => {
                        const isReverse = index % 2 !== 0;
                        return (
                            <div
                                key={index}
                                className={[
                                    "grid grid-cols-1 lg:grid-cols-2 items-center",
                                    index !== machines.length - 1
                                        ? "border-b border-[#eeeeee]"
                                        : "",
                                ].join(" ")}
                            >
                                {/* Image */}
                                <div
                                    className={[
                                        "bg-[#f7f8f9] flex items-center justify-center p-8",
                                        isReverse ? "lg:order-2" : "lg:order-1",
                                    ].join(" ")}
                                    style={{ minHeight: "320px" }}
                                >
                                    <img
                                        src={machine.image}
                                        alt={machine.title}
                                        className="border border-gray-300 w-full max-h-[300px] object-contain block"
                                    />
                                </div>

                                {/* Text */}
                                <div
                                    className={[
                                        "flex flex-col",
                                        isReverse ? "lg:order-1" : "lg:order-2",
                                    ].join(" ")}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[11px] font-semibold tracking-[2.5px] uppercase text-[#b0bac2]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="w-6 h-px bg-[#d0d8df]" />
                                        <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#e8820c]">
                                            {machine.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-[26px] font-bold leading-snug text-[#0d2137] mb-4">
                                        {machine.title}
                                    </h3>

                                    <p className="text-[16px] leading-[1.75] text-[#5f6b76] max-w-[420px] mb-6">
                                        {machine.description}
                                    </p>

                                    <div className="flex items-center gap-2">
                                        <span className="w-5 h-px bg-[#0d2137]" />
                                        <span className="text-[12px] font-semibold tracking-[1px] uppercase text-[#0d2137]">
                                            In-House Equipment
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

        </main>
    );
}