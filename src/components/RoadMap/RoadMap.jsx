import React from "react";
import { FaHandshake, FaFire, FaCookieBite } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
const RoadMap = () => {
  const contractAddress = "7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk";
  return (
    <section
      id="roadmap"
      className="relative flex items-center justify-center min-h-[60vh] py-20 bg-transparent"
    >
      {/* Glassmorphism Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#072b0e]/60 to-[#062938]/70 z-0" />
      <div className="relative w-full max-w-3xl mx-auto px-6 py-12 rounded-3xl backdrop-blur-2xl bg-white/10 border border-[#4bbf67]/30 shadow-2xl flex flex-col items-center gap-10 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-xl tracking-tight mb-8 animate-fade-in">
          Roadmap
        </h2>
        <div className="flex flex-col gap-8 w-full">
          {/* Timeline Items */}
          <div className="flex flex-col gap-8">
            {/* Partner with Streamflow */}
            <div className="flex items-start gap-6 group animate-slide-up">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#4bbf67]/30 border border-[#4bbf67]/40 flex items-center justify-center shadow-lg backdrop-blur-xl text-3xl text-[#4bbf67] group-hover:scale-110 transition-transform duration-300">
                <FaHandshake />
              </div>
              <div className="bg-white/10 rounded-2xl p-6 shadow-lg border border-[#4bbf67]/20 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-[#4bbf67] mb-2">
                  Partner with Streamflow
                </h3>
                <ul className="list-disc list-inside text-[#b2c4cd]">
                  <li>
                    Offer <span className="text-[#4bbf67] font-bold">$USD</span>{" "}
                    staking via Streamflow
                  </li>
                </ul>
              </div>
            </div>
            {/* Buybacks & Burn Plan */}
            <div className="flex items-start gap-6 group animate-slide-up delay-100">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#ff6f61]/30 border border-[#ff6f61]/40 flex items-center justify-center shadow-lg backdrop-blur-xl text-3xl text-[#ff6f61] group-hover:scale-110 transition-transform duration-300">
                <FaFire />
              </div>
              <div className="bg-white/10 rounded-2xl p-6 shadow-lg border border-[#ff6f61]/20 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-[#ff6f61] mb-2">
                  Buybacks &amp; Burn Plan
                </h3>
                <ul className="list-disc list-inside text-[#b2c4cd]">
                  <li>
                    Use creator fees from Let’s Bonk tokens for direct buybacks
                  </li>
                  <li>
                    Burn repurchased tokens or add them to the staking pool
                  </li>
                </ul>
              </div>
            </div>
            {/* Website & Dashboard */}
            <div className="flex items-start gap-6 group animate-slide-up delay-200">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#4bbf67]/30 border border-[#4bbf67]/40 flex items-center justify-center shadow-lg backdrop-blur-xl text-3xl text-[#4bbf67] group-hover:scale-110 transition-transform duration-300">
                <FaDisplay />
              </div>
              <div className="bg-white/10 rounded-2xl p-6 shadow-lg border border-[#4bbf67]/20 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-[#4bbf67] mb-2">
                  Website &amp; Dashboard
                </h3>
                <ul className="list-disc list-inside text-[#b2c4cd]">
                  <li>
                    Launch a basic landing page with{" "}
                    <span className="text-[#4bbf67] font-bold">$USD</span> token
                    info
                  </li>
                  <li>Integrate Streamflow staking UI</li>
                  <li>Burn tracker &amp; buyback history</li>
                </ul>
              </div>
            </div>
            {/* SocialFi Expansion */}
            <div className="flex items-start gap-6 group animate-slide-up delay-300">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#b2c4cd]/30 border border-[#b2c4cd]/40 flex items-center justify-center shadow-lg backdrop-blur-xl text-3xl text-[#b2c4cd] group-hover:scale-110 transition-transform duration-300">
                <FaCookieBite />
              </div>
              <div className="bg-white/10 rounded-2xl p-6 shadow-lg border border-[#b2c4cd]/20 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-[#b2c4cd] mb-2">
                  SocialFi Expansion
                </h3>
                <ul className="list-disc list-inside text-[#b2c4cd]">
                  <li>Integrate Cookie Fun to boost community engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
