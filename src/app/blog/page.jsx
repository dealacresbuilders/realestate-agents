import React from "react";
import { headers } from "next/headers";
import BlogList from "./BlogList";

export async function generateMetadata() {
  const h = await headers();
  const domain = h.get("host") || "localhost";

  const cleanDomain = domain.replace(/^www\./, "");

  return {
    title: "Faridabad Real Estate Blog | Investment & Buying Guides",
    description:
      "Explore expert insights on Faridabad real estate. Get property investment tips, sector-wise guides, market trends, pricing updates, and home buying advice.",
    keywords: [
      "Faridabad real estate blog",
      "property investment in Faridabad",
      "buy property in Faridabad",
      "Faridabad property price trends",
      "best sectors in Faridabad",
      "real estate buying guide"
    ],
    alternates: {
      canonical: `https://${cleanDomain}/blog`
    },
    openGraph: {
      title: "Faridabad Real Estate Blog | Investment & Buying Guides",
      description:
        "Stay updated with property trends, investment tips, and expert real estate insights in Faridabad.",
      url: `https://${cleanDomain}/blog`,
      type: "website",
    },
  };
}

const page = () => {
  return (
    <div className="min-h-screen bg-red-50">
      <BlogList />
    </div>
  );
};

export default page;