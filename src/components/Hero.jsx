"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import AlertPopup from "@/components/AlertPopup";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

   const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({
  open: false,
  type: "",
  message: "",
});

  

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
 setPopup({
  open: true,
  type: "error",
  message: "Phone number must be 10 digits",
});      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website:"realestateagentinfaridabad.com",
        }),
      });

      const result = await res.json();

      if (result.success) {
setPopup({
  open: true,
  type: "success",
  message: "Enquiry submitted successfully!",
});
        setFormData({ name: "", phone: "", message: "" });
      } else {
 setPopup({
  open: true,
  type: "error",
  message: "Something went wrong. Try again.",
});
      }
    } catch (err) {
setPopup({
  open: true,
  type: "error",
  message: "Server error. Please try later.",
});
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 sm:px-6 py-16 bg-gradient-to-br from-[#AF1740] to-[#7f102d]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
<AlertPopup
    open={popup.open}
    type={popup.type}
    message={popup.message}
    onClose={() =>
      setPopup({
        open: false,
        type: "",
        message: "",
      })
    }
  />
        {/* LEFT CONTENT */}
        <div className="md:col-span-7 lg:col-span-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Trusted Real Estate Agents in{" "}
            <span className="bg-white text-[#AF1740] px-3 py-1 rounded">
              Faridabad
            </span>
          </h1>

          <p className="text-lg max-w-2xl text-red-100 leading-relaxed">
            Looking for reliable and experienced real estate agents in Faridabad? 
            Our expert team helps you buy, sell, and invest in verified properties 
            with complete transparency and legal clarity.

            We provide professional guidance, property valuation support, 
            site visits, negotiation assistance, and smooth documentation handling 
            to ensure a hassle-free real estate experience.

            Whether you are a first-time buyer, seller, or investor, 
            we help you make confident and profitable property decisions.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl">

            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              Free Property Consultation
            </h3>

            <p className="text-sm mb-6 text-gray-500">
              Fill in your details and our real estate expert will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                border border-gray-300 bg-white text-gray-900
                focus:ring-2 focus:ring-[#AF1740] focus:border-[#AF1740]
                outline-none transition"
              />

              <input
                name="phone"
                required
                inputMode="numeric"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                border border-gray-300 bg-white text-gray-900
                focus:ring-2 focus:ring-[#AF1740] focus:border-[#AF1740]
                outline-none transition"
              />

              <textarea
                rows="3"
                name="message"
                placeholder="Your Requirement (Buy / Sell / Invest)"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg 
                border border-gray-300 bg-white text-gray-900
                focus:ring-2 focus:ring-[#AF1740] focus:border-[#AF1740]
                outline-none resize-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold 
                bg-[#AF1740] hover:bg-black
                text-white transition duration-300 
                disabled:opacity-70 shadow-md"
              >
                {loading ? "Submitting..." : "Get Free Consultation"}
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;