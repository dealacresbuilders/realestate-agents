import AboutPage from "./AboutPage";
import AgentFAQSection from "./AgentFAQSection";


export const metadata = {
  title: "About Us | Faridabad Real Estate Agent Directory Site",
  description:
    "Learn how our Faridabad real estate agent directory verifies local property dealers by area and specialisation, helping you find a trustworthy agent faster.",
keywords: [
  "faridabad real estate agent directory",
  "verified property dealers faridabad",
  "about real estate agents faridabad",
  "trusted agent directory faridabad",
  "how are agents verified on this faridabad directory",
  "is this real estate platform a brokerage",
  "free real estate agent listing faridabad",
  "no paid ranking",
  "agent verification",
  "local knowledge",
  "specialisation by area",
  "sub-broker",
  "rera haryana"
],
   alternates: {
    canonical: "https://www.realestateagentsinfaridabad.com/about",
  },
};

export default function Page() {
  return (
    <>
     <AboutPage/>
     <AgentFAQSection/>
    </>
  );
}