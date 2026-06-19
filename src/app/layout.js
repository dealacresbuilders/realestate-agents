import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { DealerProvider } from "@/contextapi/propertycontext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { BlogProvider } from "@/contextapi/BlogContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Real Estate Agents in Faridabad | Verified Local Dealers",

  description:
    "Find verified real estate agents in Faridabad by area & specialisation. Compare local property dealers for residential, commercial, rental & plot deals.",

keywords: [
  "real estate agents in faridabad",
  "property dealers faridabad",
  "verified real estate agents faridabad",
  "faridabad agent directory",
  "find a real estate agent near me in faridabad",
  "best property dealers in faridabad 2025",
  "real estate agents by sector in faridabad",
  "property dealer",
  "broker",
  "rera registered agent",
  "local agent directory",
  "agent specialisation",
  "nit faridabad",
  "ballabhgarh",
  "greater faridabad"
],

  alternates: {
    canonical: "https://www.realestateagentsinfaridabad.com/",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DealerProvider>
           <BlogProvider>
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
          {/* <Toaster position="top-right" reverseOrder={false} /> */}
          </BlogProvider>
        </DealerProvider>
      </body>
    </html>
  );
}