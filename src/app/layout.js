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
  title: "Real Estate Agents Faridabad",
  description: "Find verified real estate agents in Faridabad with best deals.",
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