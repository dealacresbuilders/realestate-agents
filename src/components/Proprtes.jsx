"use client";

import { useState } from "react";
import { useProperty } from "@/contextapi/propertycontext";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup";
import SidebarEnquiryForm from "./SidebarEnquiryForm";
import Pagination from "@/components/Pagination";

export default function Properties() {
  const { properties, loading, error } = useProperty();

  const [open, setOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");

  /* ================= PAGINATION ================= */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 150;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProperties = properties?.slice(indexOfFirst, indexOfLast);

  const formatArea = (area, unit) => {
    if (!area) return "N/A";
    const formattedNumber = Number(area).toLocaleString("en-IN");
    if (!unit) return formattedNumber;
    const formattedUnit =
      unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();
    return `${formattedNumber} ${formattedUnit}`;
  };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-red-50">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-red-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#AF1740] border-r-black animate-spin"></div>
        </div>
        <p className="mt-5 text-sm font-medium text-gray-600 tracking-wide">
          Loading Premium Properties...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-20 text-[#AF1740]">
        Something went wrong while loading properties.
      </p>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-800">
          No Properties Available in Faridabad
        </h2>
        <p className="text-gray-500 mt-2">
          New listings will be updated soon.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-red-50 px-4 py-16">

      {/* ================= HEADING ================= */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Premium Properties in Faridabad
        </h1>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Discover premium real estate opportunities offering modern amenities,
          prime locations, and strong investment potential across Faridabad.
        </p>

        <div className="w-24 h-1 bg-[#AF1740] mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ================= LEFT LIST ================= */}
        <div className="lg:col-span-2 space-y-10">

          {currentProperties.map((property) => (
            <div
              key={property._id}
              className="bg-white  rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-[#AF1740]"
            >
              <div className="flex flex-col md:flex-row">

                {/* IMAGE */}
                <div className="relative md:w-[35%]">
                  <Image
                    src={property?.media?.url || "/no-image.png"}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="w-full h-60 md:h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#AF1740] text-white text-xs px-4 py-1 rounded-full shadow-md font-medium">
                    {property.propertyType || "Property"}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex-1 flex flex-col">

                  <h2 className="text-xl font-bold text-gray-900">
                    {property.title}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    {property.locality}
                  </p>

                  {/* DETAILS GRID */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 relative">

                    {/* PRICE */}
                    <div className="relative">
                      <p className="text-2xl font-bold text-[#AF1740]">
                        ₹ {property.price?.toLocaleString("en-IN")}
                      </p>
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gray-300"></div>
                    </div>

                    {/* AREA */}
                    <div className="relative">
                      <p className="font-semibold text-gray-800">
                        {formatArea(property.area, property.areaUnit)}
                      </p>
                      <p className="text-sm text-gray-500">
                        Total Area
                      </p>
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gray-300"></div>
                    </div>

                    {/* STATUS */}
                    <div>
                      <p className="font-semibold text-gray-800">
                        {property.propertyCategory || "Ready to Move"}
                      </p>
                      <p className="text-sm text-gray-500">
                        Status
                      </p>
                    </div>

                  </div>

                  <p className="text-gray-500 text-sm mt-4 line-clamp-2 leading-relaxed">
                    {property.description ||
                      "Premium property offering spacious layout, modern design, and excellent connectivity in prime Faridabad sectors."}
                  </p>

                  <div className="flex-1" />

                  {/* BUTTONS */}
                  <div className="flex flex-col md:flex-row justify-between items-center border-t mt-6 pt-4 gap-4">

                    <button
                      onClick={() => {
                        setSelectedProperty(property.title);
                        setOpen(true);
                      }}
                      className="border border-[#AF1740] text-[#AF1740] px-5 py-2 rounded-lg hover:bg-[#AF1740]/10 transition w-full md:w-auto font-medium"
                    >
                      Enquire Now
                    </button>

                    <Link
                      href={`/properties/${property.slug}`}
                      className="bg-[#AF1740] text-white px-6 py-2 rounded-lg hover:bg-black transition w-full md:w-auto text-center font-medium"
                    >
                      View Details
                    </Link>

                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* ================= PAGINATION ================= */}
          <Pagination
            totalItems={properties.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />

        </div>

        {/* ================= SIDEBAR ================= */}
        <div className="lg:col-span-1 sticky top-28">
          <SidebarEnquiryForm />
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