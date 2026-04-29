import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────
const contactDetails = [
  {
    icon: <MapPin className="w-5 h-5 text-blue-600" />,
    label: "Headquarters",
    lines: ["14/2 Industrial Area, Phase II", "New Delhi – 110020, India"],
  },
  {
    icon: <Phone className="w-5 h-5 text-blue-600" />,
    label: "Phone",
    lines: ["+91 11 4567 8900", "+91 98765 43210 (Sales Hotline)"],
  },
  {
    icon: <Mail className="w-5 h-5 text-blue-600" />,
    label: "Email",
    lines: ["info@mapleprints.com", "sales@mapleprints.com"],
  },
  {
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    label: "Business Hours",
    lines: ["Mon – Sat: 9:00 AM – 6:30 PM IST", "Sunday: Closed"],
  },
];

const departments = [
  {
    title: "Sales & Quotes",
    email: "sales@mapleprints.com",
    phone: "+91 98765 43210",
    description:
      "For product pricing, bulk order inquiries, and custom packaging requirements.",
  },
  {
    title: "Quality & Compliance",
    email: "quality@mapleprints.com",
    phone: "+91 98765 43211",
    description:
      "ISO certifications, CoA requests, and compliance documentation queries.",
  },
  {
    title: "Logistics & Dispatch",
    email: "logistics@mapleprints.com",
    phone: "+91 98765 43212",
    description:
      "Shipment tracking, delivery schedules, and supply chain coordination.",
  },
];


// ── Component ─────────────────────────────────────────────────────────
const Contact = () => {
  return (
    <main className="bg-white">

      {/* ── Hero Banner ── */}
      <section className="relative w-full min-h-[300px] md:min-h-[360px] overflow-hidden">
        <img
          src="/contact-hero-bg.jpg"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/78"></div>

        <div className="relative z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 max-w-5xl">
          <div className="mb-5">
            <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5">
              Get In Touch
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-xl mb-4">
            Let's Build Something <br /> Reliable Together
          </h1>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-md">
            Reach out to our team for product inquiries, bulk quotes, or
            partnership discussions. We respond within one business day.
          </p>
        </div>
      </section>

      {/* ── Contact Info + Map ── */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* Left — Contact Details */}
          <div className="flex-1">
            <div className="w-10 h-1 bg-blue-600 mb-5"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Contact Information
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Our facilities and teams are available across all major operational
              channels.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 py-8">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-center gap-3 py-2">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                      {item.label}
                    </p>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-gray-700 font-medium">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>


            {/* Right — Embedded Map */}
            <div className="flex-1">
              <div className="relative w-full aspect-[4/3] overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  title="Mapple Prints Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89796633625!2d77.06889754725785!3d28.527554007954324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto"> */}

      {/* Header */}
      {/* <div className="mb-12">
            <div className="w-10 h-1 bg-blue-600 mb-5"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Reach the Right Department
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
              Connect directly with the team that handles your specific need — no
              waiting, no redirects.
            </p>
          </div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {departments.map((dept) => (
              <div
                key={dept.title}
                className="bg-white border border-gray-200 shadow-sm p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">
                    {dept.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-5">
                    {dept.description}
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <a
                    href={`mailto:${dept.email}`}
                    className="flex items-center gap-2 text-xs text-blue-600 font-medium hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {dept.email}
                  </a>
                  <a
                    href={`tel:${dept.phone}`}
                    className="flex items-center gap-2 text-xs text-gray-600 font-medium hover:text-blue-600 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {dept.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── CTA Strip ── */}
      {/* <section className="bg-blue-700 py-14 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              Ready to request a quote?
            </h3>
            <p className="text-blue-200 text-sm">
              Send us your specifications and we'll respond within 24 hours.
            </p>
          </div>
          <a
            href="mailto:sales@mappleprints.com"
            className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-xs font-bold uppercase tracking-wider px-8 py-4 transition-colors duration-200"
          >
            Email Us Now
          </a>
        </div>
      </section> */}

    </main>
  );
};

export default Contact;