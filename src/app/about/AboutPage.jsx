"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-red-50 px-4 py-24">
      <div className="max-w-7xl mx-auto">
       <div>
        <Breadcrumb/>
       </div>
        {/* ================= HERO ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Trusted Real Estate Experts in{" "}
              <span className="text-[#AF1740]">
                Faridabad
              </span>
            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed max-w-xl">
              We help families, buyers, sellers, and investors navigate the
              Faridabad real estate market with confidence. Verified listings,
              transparent pricing, expert negotiation, and complete end-to-end
              property assistance.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/"
                className="px-6 py-3 rounded-full text-sm font-semibold
                bg-[#AF1740] text-white shadow-lg hover:bg-black transition"
              >
                Explore Properties
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full text-sm font-semibold
                border border-[#AF1740] text-[#AF1740]
                hover:bg-[#AF1740]/10 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT HIGHLIGHT CARD */}
          <div className="bg-white border border-[#AF1740]/20 rounded-3xl p-12 shadow-xl">

            <h3 className="text-4xl font-bold text-[#AF1740]">
              500+
            </h3>
            <p className="text-gray-600 mt-2">
              Verified Property Listings
            </p>

            <div className="h-px bg-[#AF1740]/20 my-8"></div>

            <h3 className="text-4xl font-bold text-[#AF1740]">
              1000+
            </h3>
            <p className="text-gray-600 mt-2">
              Happy Buyers & Investors
            </p>

          </div>
        </div>

        {/* ================= OUR MISSION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-28">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Our mission is to simplify real estate transactions in Faridabad by
            offering verified properties, fair market pricing, expert guidance,
            and complete transparency at every step.
          </p>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="mb-32">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="bg-white rounded-2xl p-10 border border-[#AF1740]/20 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-[#AF1740]/10 flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-[#AF1740] rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Verified Listings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every property is carefully verified for ownership clarity
                and legal compliance.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl p-10 border border-[#AF1740]/20 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-[#AF1740]/10 flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-[#AF1740] rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Prime Locations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We focus on high-growth sectors with strong infrastructure
                development and appreciation potential.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl p-10 border border-[#AF1740]/20 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-[#AF1740]/10 flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-[#AF1740] rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Transparent Process
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clear communication, fair pricing, and complete support
                from enquiry to registration.
              </p>
            </div>

          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="bg-gradient-to-r from-[#AF1740] to-black rounded-3xl p-16 text-center text-white shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Next Property Move?
          </h2>

          <p className="text-red-100 mb-10 max-w-2xl mx-auto">
            Connect with trusted real estate agents in Faridabad and
            make confident property decisions today.
          </p>

          <Link
            href="/"
            className="bg-white text-[#AF1740] px-8 py-3 rounded-full font-semibold
            hover:bg-gray-100 transition shadow-md"
          >
            Browse Properties
          </Link>

        </div>

      </div>
    </section>
  );
}