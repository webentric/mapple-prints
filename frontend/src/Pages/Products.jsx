import React, { useState } from "react";
import { Search } from "lucide-react";
import printed_box_1 from '../assets/images/printed-box-1.jpg'
import printed_box_2 from '../assets/images/printed-box-2.jpg'
import printed_box_3 from '../assets/images/printed-box-3.jpg'
import transport_box from '../assets/images/transport-box.png'
import beverage_box from '../assets/images/beverage-box.jpg'
import heavy_box from '../assets/images/heavy-duty-box.jpg'
import roll_label from '../assets/images/roll-label.jpg'

// ── Data ──────────────────────────────────────────────────────────────
const categories = [
    "All Products",
    "Printed Cartons and Boxes",
    "Corrugated Boxes",
    "Labels",
    "Custom Packaging",

];

const products = [
    {
        id: 1,
        name: "Food Grade Folding Carton",
        category: "Printed Cartons and Boxes",
        image: printed_box_1,
        specs: [
            { label: "GSM", value: "300–450" },
            { label: "Finish", value: "Matte/Gloss Lamination" },
        ],
    },
    {
        id: 2,
        name: "E-commerce Shipping Box",
        category: "Corrugated Boxes",
        image: transport_box,
        specs: [
            { label: "Flute", value: "B, C, E, BC" },
            { label: "Print", value: "Up to 6 colors" },
        ],
    },
    {
        id: 3,
        name: "Pharma Secondary Packaging",
        category: "Printed Cartons and Boxes",
        image: printed_box_2,
        specs: [
            { label: "Compliance", value: "ISO 9001, cGMP" },
            { label: "Features", value: "Braille, Tamper-Evident" },
        ],
    },
    {
        id: 4,
        name: "Premium Beverage Carrier",
        category: "Custom Packaging",
        image: beverage_box,
        specs: [
            { label: "Material", value: "Wet-strength Kraft" },
            { label: "Finish", value: "UV Coating, Foil Stamping" },
        ],
    },
    {
        id: 5,
        name: "Heavy-Duty Gaylord Boxes",
        category: "Corrugated Boxes",
        image: heavy_box,
        specs: [
            { label: "Wall", value: "Double/Triple Wall" },
            { label: "Capacity", value: "Up to 2000 lbs" },
        ],
    },
    {
        id: 6,
        name: "Industrial Roll Labels",
        category: "Labels",
        image: roll_label,
        specs: [
            { label: "Substrate", value: "BOPP, PET, Paper" },
            { label: "Adhesive", value: "Permanent, Removable" },
        ],
    },
];

// ── Product Card ──────────────────────────────────────────────────────
const ProductCard = ({ product }) => (
    <div className="border border-gray-200 bg-white shadow-sm flex flex-col">
        {/* Fixed Aspect Ratio Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50">
            <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1 ">
            <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug">
                {product.name}
            </h3>

            {/* Specs */}
            <div className="space-y-0.5 mb-4 flex-1">
                {product.specs.map((spec) => (
                    <p key={spec.label} className="text-xs text-gray-500">
                        <span className="font-semibold text-gray-700">{spec.label}: </span>
                        {spec.value}
                    </p>
                ))}
            </div>

            {/* CTA */}
            {/* <button className="w-full border border-blue-600 text-blue-600 text-xs font-semibold uppercase tracking-wider py-2 px-4 hover:bg-blue-600 hover:text-white transition-colors duration-200">
                Request Quote
            </button> */}
        </div>
    </div>
);

// ── Main Component ────────────────────────────────────────────────────
const Products = () => {
    const [activeCategory, setActiveCategory] = useState("All Products");
    const [searchQuery, setSearchQuery] = useState("");

    const filtered = products.filter((p) => {
        const matchCategory =
            activeCategory === "All Products" || p.category === activeCategory;
        const matchSearch = p.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <section className="bg-gray-50 min-h-screen py-20 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">

                {/* ── Section Header ── */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                        Our Products
                    </h1>
                    <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
                        High-performance packaging solutions engineered for reliability,
                        precision, and global scale.
                    </p>
                </div>

                {/* ── Body: Sidebar + Grid ── */}
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start ">

                    {/* Sidebar */}
                    <aside className="w-full md:w-48 lg:w-52 flex-shrink-0">
                        {/* Search */}
                        <div className="relative mb-5">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full border border-gray-300 bg-white text-sm pl-9 pr-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Categories */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                                Categories
                            </p>
                            <ul className="space-y-1">
                                {categories.map((cat) => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => setActiveCategory(cat)}
                                            className={`w-full text-left text-sm px-3 py-2 font-medium transition-colors duration-150 ${activeCategory === cat
                                                ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                                                : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {filtered.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {filtered.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-64 text-gray-400 text-sm">
                                No products found.
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Products;