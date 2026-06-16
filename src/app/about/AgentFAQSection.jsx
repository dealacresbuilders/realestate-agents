"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AgentFAQSection() {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "Are you a real estate company or agency yourselves?",
      answer:
        "No, we're not. We don't have our own property listings to sell, we don't represent buyers or sellers in transactions, and we don't earn brokerage on any deal. We are purely a directory platform — a place where property seekers in Faridabad can find local real estate agents based on area and specialisation. Once you find an agent through our platform and reach out to them, any further conversation, negotiation, or transaction happens directly between you and that agent — we're not involved in it, and we don't take a cut of it either. We think this separation is actually important, because it means we have no financial interest in pushing you toward any particular agent or any particular deal.",
    },
    {
      question: "How do you decide which agents to list on this platform?",
      answer:
        "Our approach has largely been to identify agents who have a genuine, ongoing presence in specific localities across Faridabad — people who've been operating in an area for a meaningful length of time and have an established local reputation. This has involved visiting local property markets, having conversations with agents directly, and in some cases, getting introduced to agents through other agents who vouch for them. We also accept agents who reach out to us directly to be listed, after a basic review of their details. We're not using any automated scraping of phone numbers from classified ads or old listings — every agent on this platform has been added through some form of direct verification or introduction, even if that process is informal.",
    },
    {
      question: "What if I have a bad experience with an agent listed on your platform?",
      answer:
        "Please tell us. We mean this genuinely — if you reach out to an agent through this platform and the experience doesn't match what you expected (unresponsiveness, misrepresentation of a property, unprofessional behaviour, and so on), we want to know about it. You can share your feedback through our contact section. We can't guarantee how every interaction will go — at the end of the day, we're connecting you with independent agents, and we can't control every conversation that happens after that. But your feedback genuinely helps us review and, where necessary, remove agents from the directory who consistently don't meet a basic standard. This is one of the main ways we keep this directory honest over time.",
    },
    {
      question: "Do I have to pay you anything to use this directory?",
      answer:
        "No, nothing at all. Browsing agent profiles, searching by area or specialisation, and accessing contact details is completely free for property seekers. There's no membership, no subscription, and no fee for unlocking an agent's contact information. Any brokerage or fees involved in an actual property transaction are between you and the agent you choose to work with — and those are standard market practices that exist independent of our platform, not something we add on top.",
    },
    {
      question: "Why should I trust the agents listed here more than ones I find elsewhere?",
      answer:
        "We'd actually encourage a slightly different framing: rather than thinking of this as more trustworthy than anything else, think of it as a more organised starting point. Every agent listed here has at least gone through some basic verification of their identity, the area they operate in, and their specialisation — which is more than you'd typically get from a random number on a signboard or an old classified ad. That said, we still think it's wise to do your own basic checks before working closely with any agent — ask questions, gauge their responses, and trust your own judgment in early conversations. We see ourselves as helping you start from a better, more informed position — not as a replacement for your own due diligence.",
    },{
      question: "Can I request a specific type of agent — for example, someone who deals only with NRI property sales?",
      answer:
        "Yes, and this is actually one of the more useful ways to use this directory. If you have a specific requirement — say, you're an NRI looking to sell ancestral property and need an agent experienced in handling such transactions, including coordination with local authorities and documentation — you can look for agents whose profiles indicate this kind of specialisation. If you don't find an exact match for your specific need in your target area, feel free to reach out to us directly. While we can't guarantee we'll always have the perfect match, we do try to point people in the right direction when we can, based on what we know about the agents in our directory.",
    },{
      question: "How often is the agent information on this platform updated?",
      answer:
        "We try to keep agent information current, but we'll be honest — in a market with as many independent, small-scale agents as Faridabad has, keeping every single detail perfectly up to date at all times is genuinely difficult. Phone numbers occasionally change, agents sometimes shift their primary area of operation, and some become less active over time. We periodically review listed agents to check for outdated information, and we rely on feedback from users to flag agents who may no longer be reachable or active. If you come across an agent listing that seems outdated, letting us know helps us keep things accurate for the next person searching.",
    },{
      question: "Do you only cover residential properties, or also commercial and agricultural?",
      answer:
        "We cover all of it. Faridabad's real estate market includes residential properties (flats, houses, builder floors), commercial properties (shops, offices, showrooms), plots (both residential and commercial), and agricultural or rural land in the outer parts of the district. Different agents specialise in different segments, and our directory reflects this — agent profiles indicate what type of properties they typically deal with, so whether you're looking for a 2BHK to rent, a shop to lease, a plot to invest in, or agricultural land near Ballabhgarh, you can look for agents whose specialisation matches your specific need.",
    },{
      question: "I'm an agent in Faridabad — how do I get listed, and is there a cost?",
      answer:
        "There's no cost involved in being listed on this platform. If you're an active real estate agent or property dealer in Faridabad, you can reach out to us through the contact section with some basic information — your name, the area(s) you primarily operate in, your specialisation (residential, commercial, rental, plots, agricultural, or a mix), roughly how long you've been working in the local market, and a contact number that property seekers can reach you on. We'll review the details and set up your profile. We do ask that agents keep their contact details accurate and stay reasonably responsive, since the value of this directory for everyone depends on the agents listed here actually being reachable.",
    },{
      question: "What's next for this platform — are you planning to expand beyond Faridabad?",
      answer:
        "For now, our entire focus is on doing right by Faridabad — covering its neighbourhoods properly, including the ones that often get overlooked, and making sure the agents listed here are genuinely active and reachable. We think there's a lot of value in going deep in one city rather than spreading thin across many. That said, the core idea — a simple, honest, locally-organised directory of real estate agents — is something that could genuinely help people in other cities too, and it's something we may explore down the line. But for the foreseeable future, Faridabad is where our attention is, and we'd rather get this right here first.",    },
  ];

  return (
    <section className="py-6 bg-[#FFF6F8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="bg-[#F8D7E0] text-[#AF1740] px-4 py-2 rounded-full text-sm font-medium">
            Questions People Often Ask Us
          </span>

          <h2 className="text-2xl md:text-4xl font-bold text-[#AF1740] mt-5">
            Common Questions About Finding a
            <span className="block text-gray-900">
              Real Estate Agent in Faridabad
            </span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
            Everything you need to know about finding, hiring, and working
            with trusted property dealers and real estate agents in Faridabad.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#F3D5DE] rounded-3xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-semibold text-lg text-gray-900 pr-4">
                  {faq.question}
                </h3>

                <div
                  className={`w-10 h-10 rounded-full bg-[#AF1740] text-white flex items-center justify-center transition-all duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  active === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-8">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}