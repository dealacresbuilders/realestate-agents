"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Date formatter
const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${d.getFullYear()}`;
};

export default function BlogList() {

  const loading = false;
  const error = null;

  const blogs = [
    {
      _id: "1",
      Slug: "why-buy-property-in-faridabad",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      },
      HeroAltText: "Why Buy Property in Faridabad",
      Category: "Investment Guide",
      Title: "Why Buying Property in Faridabad is a Smart Investment",
      Date: "2024-05-10",
    },
    {
      _id: "2",
      Slug: "best-sectors-to-invest-in-faridabad",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      },
      HeroAltText: "Best Sectors in Faridabad",
      Category: "Location Guide",
      Title: "Top Sectors to Invest in Faridabad Real Estate",
      Date: "2024-04-22",
    },
    {
      _id: "3",
      Slug: "builder-floor-vs-apartment",
      HeroImg: {
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      },
      HeroAltText: "Builder Floor vs Apartment",
      Category: "Buying Guide",
      Title: "Builder Floor vs Apartment: Which is Better?",
      Date: "2024-03-18",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto py-16 bg-gradient-to-b from-white to-red-50">

      {/* ===== HEADING ===== */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Latest Insights on{" "}
          <span className="text-[#AF1740]">Faridabad Real Estate</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Stay updated with expert buying guides, investment tips, and
          real estate insights to make smarter property decisions.
        </p>

        <div className="w-20 h-1 bg-[#AF1740] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* ===== LOADING ===== */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full border-4 border-red-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#AF1740] border-r-black animate-spin"></div>
          </div>
        </div>
      )}

      {/* ===== ERROR ===== */}
      {error && !loading && (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-[#AF1740] mb-3">
            Something went wrong
          </h2>
          <p className="text-gray-600">
            Unable to load blogs right now.
          </p>
        </div>
      )}

      {/* ===== BLOG GRID ===== */}
      {!loading && !error && blogs?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogs.map((post, index) => (
            <Link
              href={`/blog/${post.Slug}`}
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-[#AF1740]/10 transition duration-300 hover:-translate-y-1"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  src={post.HeroImg?.url}
                  alt={post?.HeroAltText}
                  width={600}
                  height={350}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* CATEGORY */}
                <span className="inline-block text-xs font-semibold bg-[#AF1740]/10 text-[#AF1740] px-3 py-1 rounded-full mb-3">
                  {post.Category}
                </span>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-3 group-hover:text-[#AF1740] transition-colors duration-300">
                  {post.Title}
                </h3>

                {/* DATE */}
                <p className="text-sm text-gray-500">
                  {formatDate(post.Date)}
                </p>

              </div>

            </Link>
          ))}

        </div>
      )}

      {/* ===== EMPTY ===== */}
      {!loading && !error && blogs?.length === 0 && (
        <div className="text-center py-16 text-gray-600">
          No blogs found.
        </div>
      )}

    </section>
  );
}