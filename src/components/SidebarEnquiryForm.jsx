"use client";

import React, { useState } from "react";
import AlertPopup from "@/components/AlertPopup";

const SidebarEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const showPopup = (type, message) => {
    setPopup({
      open: true,
      type,
      message,
    });
  };

  const closePopup = () => {
    setPopup((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      showPopup(
        "error",
        "Phone number must be exactly 10 digits."
      );
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...formData,
        website:
          "realestateagentinfaridabad.com",
        source:
          "Residential Sidebar Enquiry — Buy House in Faridabad",
      };

      console.log("PAYLOAD:", payload);

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("STATUS:", res.status);

      const data = await res.json();

      console.log("RESPONSE:", data);

      if (data.success) {
        showPopup(
          "success",
          "Your enquiry has been submitted successfully!"
        );

        setFormData({
          name: "",
          phone: "",
          message: "",
        });
      } else {
        showPopup(
          "error",
          data.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.log("ERROR:", err);

      showPopup(
        "error",
        "Server error. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sticky top-28 bg-white rounded-2xl shadow-xl p-8 border border-[#AF1740]/20">

      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        Get Instant Call Back
      </h3>

      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        Looking for trusted real estate agents in Faridabad? Share your requirement 
        and our property consultant will contact you shortly with complete details.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* NAME */}
        <input
          name="name"
          required
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl 
          bg-gray-50 border border-gray-300
          text-gray-900 placeholder:text-gray-500
          focus:ring-2 focus:ring-[#AF1740] focus:border-[#AF1740]
          outline-none transition"
        />

        {/* PHONE */}
        <input
          name="phone"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl 
          bg-gray-50 border border-gray-300
          text-gray-900 placeholder:text-gray-500
          focus:ring-2 focus:ring-[#AF1740] focus:border-[#AF1740]
          outline-none transition"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          rows="4"
          placeholder="Write your requirement (budget, preferred sector, property type, etc.)"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl 
          bg-gray-50 border border-gray-300
          text-gray-900 placeholder:text-gray-500
          focus:ring-2 focus:ring-[#AF1740] focus:border-[#AF1740]
          outline-none resize-none transition"
        />

        {/* ERROR */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        {/* SUCCESS (Branded) */}
        {success && (
          <div className="bg-[#AF1740]/10 border border-[#AF1740]/30 text-[#AF1740] text-sm px-4 py-2 rounded-lg">
            {success}
          </div>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 
          bg-[#AF1740] hover:bg-black
          text-white font-semibold rounded-xl 
          transition shadow-md disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>

      </form>
       <AlertPopup
        open={popup.open}
        type={popup.type}
        message={popup.message}
        onClose={closePopup}
      />
    </div>
  );
};

export default SidebarEnquiryForm;