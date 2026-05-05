import React from "react";
import gloss from '../../assets/images/Products/grouped-cosmetic-1.png'
import corrugated from '../../assets/images/Products/nutra-7.png'
import foodTray from '../../assets/images/Products/food-3.png'

const services = [
    {
        title: "Gloss & Matte Lamination",
        description:
            "Enhance durability and visual appeal with our precision lamination processes. Choose between high-impact gloss for vibrant colour pop or sophisticated matte for a refined, premium feel.",
        image:
            gloss,
    },
    {
        title: "Corrugated Cartons",
        description:
            "Draw focus to critical design elements with targeted high-gloss coating. This technique creates a striking contrast against matte backgrounds, perfect for logos and key typography.",
        image:
            corrugated,
    },
    {
        title: "Food Disposable Trays",
        description:
            "Food-grade disposable trays designed for safe, hygienic serving and reliable performance, offering strength, moisture resistance, and convenience for everyday food packaging needs.",
        image:
            foodTray,
    },
];

function ServiceBlock({ item, index }) {
    const isEven = index % 2 === 0;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">

            {/* Image — always order-1 on mobile, alternates on md+ */}
            <div
                className={`overflow-hidden order-1 ${isEven ? "md:order-1" : "md:order-2"}`}
                style={{ aspectRatio: "4 / 3" }}
            >
                <img
                    src={item.image}
                    alt={item.title}
                    width={900}
                    height={675}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-[1.04] border border-gray-300"
                />
            </div>

            {/* Text — always order-2 on mobile, alternates on md+ */}
            <div
                className={`order-2 ${isEven ? "md:order-2" : "md:order-1"} flex flex-col justify-center px-0 md:px-4 lg:px-8`}
            >
                <span className="block text-xs font-semibold tracking-[0.18em] uppercase text-[#9ea4b4] mb-4">
                    {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-bold leading-[1.15] text-[#1a2644] text-[clamp(1.45rem,2.2vw+0.5rem,2.1rem)] mb-4">
                    {item.title}
                </h3>

                <div className="w-10 h-[2px] bg-[#1a2644] mb-5 opacity-30" />

                <p className="text-[#5a6478] leading-relaxed text-[clamp(0.875rem,1vw+0.3rem,1rem)] max-w-[42ch]">
                    {item.description}
                </p>
            </div>
        </div>
    );
}

export default function OtherProducts() {
    return (
        <section className="w-full bg-[#f4f5f7] py-16 md:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-24">
            <div className="max-w-[1100px] mx-auto">

                {/* Section header */}
                <div className="mb-14 md:mb-20">
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#9ea4b4] mb-3">
                        What We Offer
                    </p>
                    <h2 className="font-bold text-[#1a2644] leading-[1.1] text-[clamp(1.75rem,3vw+0.5rem,2.75rem)] max-w-[18ch]">
                        Our Finishing Services
                    </h2>
                </div>

                {/* Service blocks */}
                <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
                    {services.map((item, index) => (
                        <ServiceBlock key={item.title} item={item} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}