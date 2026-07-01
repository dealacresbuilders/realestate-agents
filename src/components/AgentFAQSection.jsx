"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AgentFAQSection() {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "How do I find a reliable real estate agent in Faridabad?",
      answer:
        "Finding a reliable agent really comes down to three things: local knowledge, transparency, and reachability. Start by narrowing your search to agents who specifically work in the locality you're interested in — an agent based in Sector 15 may not be the right fit if you're looking in Ballabhgarh, even though both are technically Faridabad. On this platform, you can browse agents by area and see what they specialise in, which is a much better starting point than a random Google search or an old contact saved from a relative. Once you've shortlisted a few agents, have a basic conversation before committing — ask about recent deals they've closed in that area, how they typically charge brokerage, and whether they can show you multiple options or just one or two. A reliable agent won't pressure you into a quick decision and will be upfront about brokerage charges from the start. Word of mouth still matters too — if someone in your target locality has had a good experience with a particular agent, that's often a strong signal.",
    },
    {
      question: "What is the standard brokerage fee charged by real estate agents?",
      answer:
        "Brokerage charges in Faridabad generally follow informal market norms rather than fixed government rates, and they can vary depending on the type of transaction and the agent involved. For residential resale properties (buying or selling a flat, house, or plot), the common practice is for the agent to charge approximately 1% to 2% of the property value from each party — the buyer and the seller — though this can be negotiated, especially on higher-value transactions. For rental properties, the standard practice in most parts of Faridabad is that the agent charges one month's rent as brokerage, often split between the landlord and the tenant, though in many cases the tenant ends up paying the full amount. Commercial property transactions can sometimes involve slightly different arrangements depending on the deal size and complexity. It's always a good idea to clarify the brokerage amount and who is responsible for paying it — buyer, seller, landlord, or tenant — right at the start of the conversation, before you get emotionally invested in a property. A transparent agent will discuss this openly without you having to ask twice.",
    },
    {
      question: "Should I use a local agent or a big national property portal?",
      answer:
        "This isn't really an either-or question — the two serve different purposes, and many smart property seekers use both. National property portals are useful for getting a broad sense of what's available, comparing prices across different areas, and seeing photos and basic details from the comfort of your home. However, listings on these portals can sometimes be outdated, duplicated by multiple agents, or simply unavailable by the time you call. A local agent, on the other hand, often has on-ground, real-time knowledge — they know what's actually available right now, what's likely to come on the market soon, and details about the property and locality that simply don't show up in an online listing. For a city like Faridabad, where the market can vary block-by-block within the same sector, a good local agent's knowledge is often far more valuable than scrolling through hundreds of online listings. Our suggestion: use portals to get oriented, then connect with a local agent who specialises in your target area to actually get things done.",
    },
    {
      question: "How can I verify if a real estate agent is genuine?",
      answer:
        "A few practical steps can help you assess whether an agent is genuine and worth working with. First, check how long they've been operating in the specific area you're interested in — agents with several years of presence in a locality usually have an established reputation they care about protecting. Second, ask if they are registered with RERA (Real Estate Regulatory Authority) Haryana, as real estate agents dealing in properties covered under RERA are required to register, and a registered agent has at least gone through a basic verification process. Third, ask for references — a genuine local agent will often be happy to connect you with previous clients or point you to a property they've recently helped sell or rent in the area, which you can independently verify. Fourth, be cautious of agents who ask for upfront payments before showing you any property, or who are unwilling to discuss brokerage terms clearly. Finally, trust your own observations during initial interactions — a genuine agent listens to your requirements carefully rather than immediately pushing whatever property earns them the highest commission.",
    },
    {
      question: "Can a real estate agent help me with buying and selling in faridabad?",
      answer:
        "Yes, most real estate agents in Faridabad handle both buying and selling, and many also handle renting. In fact, having the same agent represent both the buying and selling side of certain transactions is quite common in the local market — though this is something to be aware of, as it means the agent has an interest on both sides of the deal. If you're selling a property, a good agent will help you price it realistically based on recent comparable sales in your locality, market it to their network of potential buyers, and coordinate site visits. If you're buying, the same agent (or a different one) will help you identify properties matching your budget and requirements, arrange visits, and assist with negotiation. Some agents specialise more heavily in one side — for instance, some focus primarily on helping NRIs or out-of-town owners sell inherited property, while others focus on helping buyers, especially first-time buyers, navigate the process. When browsing agent profiles on this platform, you'll often get a sense of where their strength lies based on their stated specialisation and experience.",
    },{
      question: "What should I keep ready before contacting a real estate agent for buying a flat in Faridabad?",
      answer:
        "Coming prepared to your first conversation with an agent will save both of you a lot of time and help the agent show you genuinely relevant options. Be clear about your budget range — including whether you're financing through a home loan and roughly how much loan amount you're likely to be eligible for, since this affects which properties are realistically within reach. Have a clear idea of your preferred location or locations — and if you're open to a few different areas, mention that too, as it gives the agent more flexibility to find good options. Think about your must-haves versus nice-to-haves: for example, number of bedrooms, floor preference, parking, whether a lift is essential, proximity to schools or your workplace, and so on. If you already have pre-approved home loan paperwork or a sanction letter from a bank, mentioning this upfront signals to the agent that you're a serious, ready buyer — which often means they'll prioritise showing you properties more proactively. Finally, be honest about your timeline — whether you need to move in within a month or you're exploring options for the next six months — as this helps the agent manage expectations on both sides.",
    },{
      question: "How do real estate agents in Faridabad help with rental properties?",
      answer:
        "For rental properties, agents typically act as the connecting point between landlords with vacant properties and tenants looking for a place to stay. A good rental-focused agent in Faridabad will usually have an updated list of available flats, floors, or houses in their area — often properties that haven't even been listed online yet, because many landlords prefer to rent through known local agents rather than dealing with online inquiries directly. When you approach an agent for a rental, be specific about your budget (including whether that's inclusive of maintenance charges), preferred locality, family size or number of occupants (some societies and landlords have preferences here), and whether you need a furnished, semi-furnished, or unfurnished place. The agent will typically arrange visits to a few matching properties, help negotiate the rent and security deposit with the landlord, and assist with the rental agreement paperwork — including registration of the agreement where required. A good agent will also clarify society rules, maintenance charges, and any restrictions (like parking allocation or pet policies) before you commit, which can save you from surprises after moving in.",
    },{
      question: "Do real estate agents in Faridabad deal in plots and agricultural land too?",
      answer:
        "Yes, though this is often a specialised segment, and not every residential property agent deals in plots or agricultural land — these require a different kind of local knowledge, particularly around revenue records, land classification, and the specific village or sector-level dynamics involved. Agents who specialise in plots typically operate in areas with active development activity, such as Greater Faridabad, sectors along the Faridabad-Palwal road, and other peripheral growth zones, where residential and commercial plots are bought both for construction and for investment. Agents who deal in agricultural land usually have strong connections within specific villages and a working understanding of revenue documentation like Jamabandi and Khasra records — this is genuinely a different skill set from urban residential dealing. On this platform, you can specifically look for agents whose profiles indicate plot or agricultural land specialisation, rather than assuming any agent can help equally with every property type. If you're looking for land specifically, it's worth being upfront about that from the first conversation, since it will quickly tell you whether the agent is genuinely experienced in that segment or just willing to try.",
    },{
      question: "What's the difference between a real estate agent and a property dealer in Faridabad?",
      answer:
        "In everyday usage in Faridabad and most of North India, the terms real estate agent, property dealer,and broker are largely used interchangeably, and most people use whichever term feels natural to them — there isn't usually a strict formal distinction in how the local market refers to them. That said, in a more formal sense, a real estate agent registered under RERA refers specifically to an individual or entity that has registered with the Real Estate Regulatory Authority and is authorised to facilitate transactions in real estate projects that fall under RERA's purview. Property dealer is more of a traditional, locally-used term that has been around far longer than RERA itself, and refers broadly to anyone in the business of helping people buy, sell, or rent property — which could range from a one-person operation working out of a small office in a local market to a more established firm with multiple staff. For a property seeker, what matters less is the exact title someone uses, and more their track record, local knowledge, and how transparently they operate — which is exactly the information we try to surface through agent profiles on this platform.",
    },{
      question: "How can I list myself as a real estate agent on this platform?",
      answer:
        "If you're a real estate agent or property dealer actively working in Faridabad and you'd like to be listed on this platform, we'd genuinely love to hear from you — especially if you specialise in an area or property type that isn't well represented yet. Reach out to us through the contact section with some basic details: your name, the area(s) you primarily work in, the type of properties you deal with (residential, commercial, rental, plots, agricultural), how long you've been active in the Faridabad market, and a contact number where property seekers can reach you. Our team will review the details and get your profile set up. We do ask agents to keep their contact information accurate and responsive — this directory only works well for everyone if the agents listed here are genuinely reachable and active. There's no cost involved for being listed, and we believe it's a straightforward way for genuine, hardworking local agents to be discoverable by the people who actually need their help.",    },
  ];

  return (
    <>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
        />
    <section className="py-6 bg-[#FFF6F8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="bg-[#F8D7E0] text-[#AF1740] px-4 py-2 rounded-full text-sm font-medium">
            Frequently Asked Questions
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
    </>
  );
}