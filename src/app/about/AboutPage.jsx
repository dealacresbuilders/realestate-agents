"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-red-50 px-4 py-24">
      <div className="max-w-7xl mx-auto">
       <div>
        <Breadcrumb/>
       </div>
        {/* ================= HERO ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              The Story Behind Faridabad's Local Agent Directory{" "}
              <span className="text-[#AF1740]">
                Faridabad
              </span>
            </h1>

            <p className="text-gray-600 mt-6 leading-relaxed max-w-xl">
              A few years ago, someone close to us spent almost three weekends trying to find a decent 2BHK on rent in Faridabad — calling numbers from old "To-Let" boards, getting passed from one sub-broker to another, and eventually finding a place through a chance conversation with a shopkeeper who happened to know "a guy" in the right sector. It worked out in the end, but it shouldn't have taken three weekends and a stroke of luck.
That's really where the idea for this platform came from.
We realised that Faridabad has no shortage of good, experienced, hardworking real estate agents — people who genuinely know their localities, who've been quietly helping families find homes and shops for years. What was missing was a simple way for people to actually find these agents, based on where they are and what they specialise in.
So we built this — a straightforward directory connecting property seekers in Faridabad with local real estate agents. No big promises, no flashy claims. Just real names, real areas, and real phone numbers, organised in a way that actually makes sense.
If it saves even one person three weekends of frustration, it's worth it.

            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/"
                className="px-6 py-3 rounded-full text-sm font-semibold
                bg-[#AF1740] text-white shadow-lg hover:bg-black transition"
              >
                Browse Real Estate Agents Across Faridabad
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full text-sm font-semibold
                border border-[#AF1740] text-[#AF1740]
                hover:bg-[#AF1740]/10 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT HIGHLIGHT CARD */}
          <div className="bg-white border border-[#AF1740]/20 rounded-3xl p-12 shadow-xl">

            <h3 className="text-4xl font-bold text-[#AF1740]">
              500+
            </h3>
            <p className="text-gray-600 mt-2">
              Verified Property Listings
            </p>

            <div className="h-px bg-[#AF1740]/20 my-8"></div>

            <h3 className="text-4xl font-bold text-[#AF1740]">
              1000+
            </h3>
            <p className="text-gray-600 mt-2">
              Happy Buyers & Investors
            </p>

          </div>
        </div>

        {/* ================= OUR MISSION ================= */}
        <div className="text-center max-w-7xl mx-auto mb-28">
  <h2 className="text-3xl font-bold text-gray-900 mb-12">
    A Few Honest Things About What We Do
  </h2>

  <div className="grid md:grid-cols-2 gap-8 text-left">

    {/* 1 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        We're a Directory, Not a Brokerage
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Let's get this out of the way first: we don't buy, sell, or rent
        properties ourselves, and we're not anyone's broker. We're a directory
        — a list of real estate agents working across Faridabad, organised by
        area and specialisation, so that property seekers can find someone
        relevant without having to ask five different people for "a good
        agent's number." Think of us as a well-organised contact book for
        Faridabad's property market, nothing more, nothing less — but a
        genuinely useful one.
      </p>
    </div>

    {/* 2 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        We Started Small, Locally, and On Foot
      </h3>
      <p className="text-gray-600 leading-relaxed">
        This directory didn't begin as a big database pulled from somewhere
        online. It started with conversations — visiting local property offices
        in different sectors, talking to agents about the areas they cover,
        understanding which ones specialise in rentals versus resale versus
        plots, and slowly building a list that actually reflects how
        Faridabad's real estate market works on the ground. It's slower this
        way, but it means the information behind every listed agent has some
        real basis to it.
      </p>
    </div>

    {/* 3 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        We Care About Faridabad's Smaller Markets Too
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Most online attention goes to the "popular" sectors — the ones that
        show up first in searches. But Faridabad is much bigger than that.
        There are active, functioning property markets in areas like Tigaon,
        Sector 75-89, parts of Ballabhgarh, and the villages along the
        Faridabad-Palwal stretch — areas that often get overlooked by larger
        platforms simply because the search volume is lower. We make a
        deliberate effort to include agents from these areas too, because the
        people living and working there deserve the same easy access to local
        agents as anyone in Sector 15.
      </p>
    </div>

    {/* 4 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        We're Honest About Our Limitations
      </h3>
      <p className="text-gray-600 leading-relaxed">
        We won't pretend this directory is complete or perfect. There are
        certainly good agents in Faridabad who aren't listed here yet — either
        because we haven't connected with them, or because they're still being
        verified. If you ever reach out to an agent through this platform and
        have a disappointing experience, we genuinely want to know — not to
        "punish" anyone, but because it helps us keep this directory honest and
        useful over time. A directory is only as good as the trust people place
        in it, and we take that seriously.
      </p>
    </div>

    {/* 5 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        No Hidden Agenda, No Paid Rankings
      </h3>
      <p className="text-gray-600 leading-relaxed">
        We don't have a system where agents pay extra to appear higher up, get
        a "featured" badge, or push other agents down the list. Every agent on
        this platform is listed based on their area, specialisation, and how
        long they've been active — not based on who's paid us the most. We know
        this is the kind of thing every platform says, but it matters enough to
        us that we wanted to say it plainly, in our own words, rather than
        burying it in fine print.
      </p>
    </div>

    {/* 6 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Built With Property Seekers' Frustrations in Mind
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Every part of how this directory works — searching by area, filtering
        by property type, seeing an agent's specialisation upfront — comes from
        thinking about the actual frustrations people face when looking for
        property in Faridabad. Calling the wrong person. Dealing with
        sub-brokers who don't really have the listing. Not knowing if an agent
        even covers your area before you've already had a long phone
        conversation. We tried to design around these specific pain points,
        because we've experienced most of them ourselves.
      </p>
    </div>

    {/* 7 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        We Also Think About the Agents' Side
      </h3>
      <p className="text-gray-600 leading-relaxed">
        This isn't just about helping property seekers — we also genuinely
        believe that many hardworking local agents in Faridabad deserve more
        visibility than they currently get. Plenty of experienced agents have
        built their entire reputation through word-of-mouth in their locality,
        with no online presence at all. For them, being part of a directory
        like this can mean reaching people who would never have found them
        otherwise — without having to spend money on ads or learn how to "do
        digital marketing."
      </p>
    </div>

    {/* 8 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-black">
        A Work in Progress, On Purpose
      </h3>
      <p className="text-gray-600 leading-relaxed">
        This platform is continuously evolving — we're adding more agents,
        covering more localities, and refining how information is presented
        based on feedback from the people actually using it. We'd rather grow
        steadily and keep things accurate than rush to list hundreds of agents
        we haven't properly checked. If that means this directory grows a
        little slower than some others, we think that's a fair trade-off.
      </p>
    </div>

    {/* 9 */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm ">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Our Promise, Simply Put
      </h3>
      <p className="text-gray-600 leading-relaxed">
        We'll keep this simple, accurate, and free for property seekers to use.
        We'll keep adding genuine local agents across Faridabad's many
        neighbourhoods. And we'll keep listening — to both sides of this market
        — because that's really the only way a directory like this stays useful
        over time.
      </p>
    </div>

  </div>
</div>

        {/* ================= WHY CHOOSE US ================= */}
        {/* <div className="mb-32">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            
            <div className="bg-white rounded-2xl p-10 border border-[#AF1740]/20 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-[#AF1740]/10 flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-[#AF1740] rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Verified Listings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every property is carefully verified for ownership clarity
                and legal compliance.
              </p>
            </div>

           
            <div className="bg-white rounded-2xl p-10 border border-[#AF1740]/20 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-[#AF1740]/10 flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-[#AF1740] rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Prime Locations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We focus on high-growth sectors with strong infrastructure
                development and appreciation potential.
              </p>
            </div>

            
            <div className="bg-white rounded-2xl p-10 border border-[#AF1740]/20 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-[#AF1740]/10 flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-[#AF1740] rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Transparent Process
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clear communication, fair pricing, and complete support
                from enquiry to registration.
              </p>
            </div>

          </div>
        </div> */}

        {/* ================= CTA ================= */}
        <div className="bg-gradient-to-r from-[#AF1740] to-black rounded-3xl p-16 text-center text-white shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Next Property Move?
          </h2>

          <p className="text-red-100 mb-10 max-w-2xl mx-auto">
            Connect with trusted real estate agents in Faridabad and
            make confident property decisions today.
          </p>

          <Link
            href="/"
            className="bg-white text-[#AF1740] px-8 py-3 rounded-full font-semibold
            hover:bg-gray-100 transition shadow-md"
          >
            Browse Properties
          </Link>

        </div>

      </div>
    </section>
  );
}