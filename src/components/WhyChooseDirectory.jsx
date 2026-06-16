"use client";

import React from "react";

const WhyChooseDirectory = () => {
  const sections = [
    {
      title: "A City This Big Deserves a Directory This Focused",
      content:
        "Faridabad isn't a small town anymore — it's a sprawling city with dozens of sectors, old neighbourhoods, new townships, and industrial belts, each with its own pricing patterns and its own set of local agents who know that specific area inside out. An agent who's brilliant in Sector 21 might know almost nothing about the property market in Ballabhgarh or Tigaon village. We built this directory so you can find an agent based on where you actually need help — not just whoever happens to answer the phone first.",
    },
    {
      title: "Real Profiles, Not Just Phone Numbers",
      content:
        "We've all been there — calling a number from an old newspaper ad or a faded signboard, only to reach someone who deals in a completely different part of the city, or worse, doesn't pick up at all. Every agent on this platform has a proper profile: their name, the areas they cover, the kind of properties they specialise in (residential, commercial, rental, plots, agricultural land), how long they've been working in Faridabad's market, and a working contact number. You know who you're calling before you call.",
    },
    {
      title: "Agents for Every Kind of Requirement",
      content:
        "Not every agent does everything well, and that's normal. Some agents are excellent with rental properties and tenant-landlord matching. Others specialise in resale flats in established sectors. Some focus purely on commercial shops and office spaces, while others have deep networks in agricultural land deals in the rural belts around Faridabad. This directory lets you filter and find an agent who actually specialises in what you need — instead of a generalist who's okay at everything.",
    },
    {
      title: "Local Knowledge You Simply Can't Get From an App",
      content:
        "Big property apps can show you listings, but they can't tell you that a particular society in Sector 49 has had water supply issues for the last two summers, or that a certain stretch of Mathura Road floods during heavy monsoon, or that one builder in Greater Faridabad has a reputation for delayed possession. A good local agent carries this knowledge — the kind that comes only from years of walking these streets, attending society meetings, and closing deals in the same neighbourhood again and again.",
    },
    {
      title: "Built on Trust, Not Just Listings",
      content:
        "We know that trust is a word every real estate platform uses — and that most people are tired of hearing it. So instead of just saying it, we try to show it. Agents on this platform are listed with their real names, real contact numbers, and the actual areas they operate in. We encourage users to leave honest feedback about their experience, and we take that feedback seriously when reviewing agent profiles.",
    },
    {
      title: "Saves You From the Middleman of a Middleman Problem",
      content:
        "One of the most common frustrations in property hunting is dealing with sub-brokers — agents who don't actually have the listing, but know someone who knows someone who might. This adds delays, confusion, and sometimes extra brokerage that nobody asked for. By connecting you directly with agents who have genuine local listings and relationships with property owners in their area, we help cut out unnecessary layers between you and the deal.",
    },
    {
      title: "Useful for Sellers and Landlords Too",
      content:
        "This directory isn't just for buyers and tenants. If you're a property owner in Faridabad looking to sell or rent out your property, finding the right agent — one who genuinely knows your locality and has a real buyer or tenant network there — can make the difference between your property sitting vacant for months and getting a fair deal within weeks.",
    },
    {
      title: "Free, Simple, and Built for Real People",
      content:
        "You don't need to create an account, fill out long forms, or get bombarded with calls from twenty different agents just to find one contact. Search by area or property type, browse agent profiles, and call the one that fits your need. That's it. We built this for people who just want to get on with finding a property.",
    },
    {
      title: "A Directory That Reflects Faridabad's Real Geography",
      content:
        "From the older, established sectors near Delhi border to the rapidly developing pockets of Greater Faridabad, Sector 75-89, and the industrial-residential mix around Ballabhgarh — Faridabad's real estate isn't one market, it's many small markets stitched together. Our directory is organised around this reality, so the agent you find is genuinely relevant to the part of Faridabad you care about.",
    },
    {
      title: "We're Continuously Adding Agents Across the City",
      content:
        "This is a living, growing directory. As we identify and verify more agents across different sectors and localities — including the newer development zones along the Faridabad-Palwal road and the upcoming areas near the metro extension — we keep adding them. If you don't find an agent for your exact locality today, check back, or reach out to us and we'll try to help you connect with someone who covers that area.",
    },
  ];

  return (
    <section className="py-5 bg-[#FFF5F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-[#F8D7E0] text-[#AF1740] font-medium text-sm">
            Trusted Real Estate Network
          </span>

          <h2 className="mt-5 text-2xl md:text-4xl font-bold text-[#AF1740]">
            Why Property Seekers in Faridabad Rely on This Directory
          </h2>

          <div className="w-24 h-1 bg-[#AF1740] mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#F5D0D9] rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#AF1740] text-white font-bold shrink-0">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#AF1740] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 leading-8 text-[15px]">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDirectory;