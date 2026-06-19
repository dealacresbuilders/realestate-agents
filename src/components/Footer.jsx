// "use client";

// import Link from "next/link";

// const locations = [
//   "Sector 70, Neharpar",
//   "Sector 86",
//   "Ashoka Enclave",
//   "Sector 82",
//   "Sector 21C",
//   "Sector 83",
//   "Sector 21A",
//   "Sector 9",
// ];

// const createSlug = (location) => {
//   return location
//     .toLowerCase()
//     .replace(/,/g, "")
//     .replace(/\s+/g, "-");
// };

// export default function Footer() {
//   return (
//     <footer className="bg-[#7f102d] pt-16 pb-8 px-4 border-t border-[#AF1740]">
//       <div className="max-w-7xl mx-auto">

//         {/* BRAND */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-bold text-white">
//             Real Estate Agents in{" "}
//             <span className="text-[#ffccd5]">Faridabad</span>
//           </h2>

//           <p className="text-red-100 mt-4 max-w-2xl leading-relaxed">
//             Trusted real estate agents helping you buy, sell, and invest 
//             in prime locations of Faridabad. Get expert guidance, verified 
//             properties, transparent deals, and smooth documentation support.
//           </p>
//         </div>

//         {/* LOCATIONS */}
//         <div className="mb-10">
//           <h3 className="text-lg font-semibold text-white mb-6">
//             Popular Locations
//           </h3>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 text-sm">
//             {locations.map((loc, index) => (
//               <Link
//                 key={index}
//                 href={`/${createSlug(loc)}`}
//                 className="text-red-200 hover:text-white transition duration-300"
//               >
//                 {loc}, Faridabad
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* BOTTOM */}
//         <div className="border-t border-[#AF1740] pt-6 flex flex-col md:flex-row items-center justify-between">
//           <p className="text-sm text-red-200 text-center md:text-left">
//             © {new Date().getFullYear()} RealEstateAgentsFaridabad.com — All Rights Reserved.
//           </p>

//           <Link
//             href="https://www.parcharmanch.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-sm text-red-200 hover:text-white transition mt-3 md:mt-0"
//           >
//             Designed By Parchar Manch
//           </Link>
//         </div>

//       </div>
//     </footer>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";

import { locations } from "../data/locations";

// ✅ CLEAN SLUG
const createSlug = (location) => {
  return location
    .replace(", Faridabad", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-");
};

export default function Footer() {
  const [showAll, setShowAll] = useState(false);

  const initialCount = 30;
  const visibleLocations = showAll
    ? locations
    : locations.slice(0, initialCount);

  return (
    <footer className="bg-[#252528] pt-16 pb-8 px-4 border-t border-[#1c1c2b]">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white">
            Real Estate Agent <span className="text-red-700">Faridabad</span>
          </h2>

          <p className="text-white mt-4 max-w-2xl leading-relaxed">
            Discover premium rental homes and high-value residential opportunities across prime sectors of Faridabad.
          </p>
        </div>

        {/* LOCATIONS */}
          <h3 className="text-lg font-semibold text-white mb-6">
            Popular Locations
          </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-x-6 gap-y-4 text-sm overflow-visible">
          {visibleLocations.map((loc, index) => (
            <div key={index} className="relative group overflow-visible">

              <Link
                href={`https://www.dealacres.com/faridabad/property-dealer`}
                 target="_blank"
  rel="noopener noreferrer"
                className="block truncate text-white hover:text-red-700 transition duration-300"
              >
                Real Estate Agent  {loc}
              </Link>

              <div
                className="
                absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                opacity-0 scale-95
                group-hover:opacity-100 group-hover:scale-100
                transition-all duration-200
                whitespace-nowrap
                bg-[#1a1333] text-white text-xs
                px-3 py-1.5 rounded-md
                shadow-lg border border-red-700/40
                z-[9999]
                pointer-events-none
              "
              >
                Real Estate Agent  {loc}
              </div>

            </div>
          ))}

          {!showAll && locations.length > initialCount && (
            <div>
              <span
                onClick={() => setShowAll(true)}
                className="block cursor-pointer text-red-700 hover:underline"
              >
                Read More...
              </span>
            </div>
          )}

          {showAll && locations.length > initialCount && (
            <div>
              <span
                onClick={() => setShowAll(false)}
                className="block cursor-pointer text-red-700 hover:underline"
              >
                Read Less...
              </span>
            </div>
          )}

        </div>
{/* 🔥 Bottom Navigation Buttons - CENTER */}
<div className="border-t border-[#1c1c2b] pt-6 mt-10 mb-6">
  <div className="flex justify-center items-center">
    
    <div className="flex flex-wrap gap-6 justify-center text-sm">
      <Link
        href="/about"
        className="text-white hover:text-red-700 transition"
      >
        About
      </Link>

      <Link
        href="/blog"
        className="text-white hover:text-red-700 transition"
      >
        Blog
      </Link>

      <Link
        href="/contact"
        className="text-white hover:text-red-700 transition"
      >
        Contact
      </Link>

      {/* <Link
        href="/how-it-works"
        className="text-white hover:text-red-700 transition"
      >
        How It's Work
      </Link> */}
    </div>

  </div>
</div>
        {/* BOTTOM */}
        <div className="border-t border-[#1c1c2b] pt-6 flex flex-col md:flex-row items-center justify-between mt-10">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} RealEstateAgentInFaridabad.com - All rights reserved.
          </p>

         <p className="text-sm text-gray-500 mt-3 md:mt-0">
  Designed By - {" "}
  <Link
    href="https://www.parcharmanch.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-red-700 transition cursor-pointer underline-offset-4 hover:underline"
  >
    Parchar Manch
  </Link>
</p>
        </div>

      </div>
    </footer>
  );
}