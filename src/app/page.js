
import Image from "next/image";
import Hero from "@/components/Hero.jsx"
import DealersPage from "@/components/DealersPage";
import WhyChooseDirectory from "@/components/WhyChooseDirectory";
import AgentFAQSection from "@/components/AgentFAQSection";

export default function Home() {
  return (
    <>
     <Hero/>
     <DealersPage/>
     <WhyChooseDirectory/>
     <AgentFAQSection/>
     {/* <Properties/> */}
    </>
  );
}
