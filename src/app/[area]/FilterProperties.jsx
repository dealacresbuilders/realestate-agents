"use client";

import { useEffect, useState } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import ContactPopup from "@/components/ContactPopup";
import PropertyCard from "@/components/PropertyCard";

export default function FilterProperties({ area }) {
  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  const { data, loading2, error2, setLocality } = useProperty();

  const formattedArea = area
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    if (formattedArea) {
      setLocality(formattedArea);
    }
  }, [formattedArea]);

  /* ================= LOADING ================= */
  if (loading2) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-red-50">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-red-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#AF1740] border-r-black animate-spin"></div>
        </div>
        <p className="mt-6 text-sm font-medium text-gray-600 tracking-wide">
          Loading Premium Properties...
        </p>
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (error2) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-white to-red-50">
        <p className="text-[#AF1740] text-lg font-medium">
          Something went wrong while loading properties.
        </p>
      </div>
    );
  }

  /* ================= EMPTY ================= */
  if (!data || data.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-red-50">
        <h2 className="text-2xl font-semibold text-gray-800">
          No Properties Available in {formattedArea}
        </h2>
        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-red-50 px-4 py-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Premium Properties in{" "}
            <span className="text-[#AF1740]">{formattedArea}</span>
          </h1>

          <p className="text-gray-600 mt-3">
            Verified real estate properties in prime residential sectors of Faridabad.
          </p>

          <div className="w-20 h-1 bg-[#AF1740] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>

      </div>

      <ContactPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        propertyTitle={selectedProperty}
      />
    </section>
  );
}