import React from "react";
import BlogList from "./BlogList";

export async function generateMetadata() {
  return {
    title: "Faridabad Real Estate Blog | Agent Tips & Market News",
    description:
      "Get expert tips on choosing a real estate agent in Faridabad, brokerage norms, rental advice, and local property market news updated regularly for you.",
   keywords: [
  "faridabad real estate agent blog",
  "how to choose a real estate agent faridabad",
  "brokerage fee faridabad",
  "faridabad property market news",
  "how to find a reliable real estate agent in faridabad",
  "standard brokerage fee charged by agents in faridabad",
  "real estate agent vs property dealer difference",
  "rera registration check",
  "brokerage percentage",
  "agent verification tips",
  "rental agreement",
  "nri property sale",
  "sub-broker"
],
    alternates: {
      canonical: "www.realestateagentsinfaridabad.com/blog", // 🔥 apna final domain yaha set kar dena
    },
  };
}

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F9] to-[#F3E3E8]">
      <BlogList />
    </div>
  );
};

export default page;