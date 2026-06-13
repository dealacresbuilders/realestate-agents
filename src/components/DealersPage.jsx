"use client";

import { useDealer } from "@/contextapi/propertycontext";
import DealerCard from "@/components/DealerCard";
import Pagination from "./Pagination";
import SidebarEnquiryForm from "@/components/SidebarEnquiryForm";
export default function DealersPage() {
const {
  dealers,
  loading,
  error,
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
} = useDealer();

  if (loading) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#FFF8F9] to-[#F3E3E8]">
        <div className="text-lg font-semibold text-red-900">
          Loading Dealers...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-red-500 font-medium">{error}</div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-[#FFF8F9] to-[#F3E3E8] py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className=" mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Top Property Dealers in Faridabad
          </h1>

          <p className="text-gray-600 mt-3 max-w-4xl">
            Connect with trusted real estate agents and property consultants
            across Faridabad for buying, selling, and investment opportunities.
          </p>
        </div>

        
         
<div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

  {/* Left Content */}
  <div className="xl:col-span-8">
    <div className="space-y-6">
      {dealers.map((dealer) => (
        <DealerCard
          key={dealer._id}
          dealer={dealer}
        />
      ))}
    </div>

    <Pagination
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      onPageChange={(page) => {
        setCurrentPage(page);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    />
  </div>

  {/* Right Sidebar */}
  <div className="xl:col-span-4">
  <div className="sticky top-24 self-start">
    <SidebarEnquiryForm />
  </div>
</div>

</div>
</div>
    </section>
  );
}