import React from "react";
import TradingViewChart from "../TradingViewChart/TradingViewChart";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-[70vh] py-20 bg-transparent"
    >
      {/* Glassmorphism Card - Flex Row Layout */}
      <div className="relative w-full max-w-5xl mx-auto px-10 py-14 rounded-3xl backdrop-blur-2xl bg-white/10 border border-[#4bbf67]/30 shadow-2xl flex flex-row items-stretch gap-10 z-10">
        {/* Left: About Content */}
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-left drop-shadow-xl tracking-tight mb-2">
            About Unstable States Dollar
          </h2>
          <p className="text-lg md:text-xl text-[#b2c4cd] text-left max-w-xl font-medium">
            $USD is a community-led meme coin that turns the concept of
            stability on its head. In a world where fiat is shaky and
            “stablecoins” are anything but, $USD proudly leans into volatility.
            <sup>
              <a href="#ref2" className="text-[#4bbf67]">
                [2]
              </a>
            </sup>
            <br />
            It’s not trying to stay at $1 — it’s daring the community to re-peg
            it through pure meme power and market energy.
          </p>
          <p className="text-lg md:text-xl text-[#b2c4cd] text-left max-w-xl font-medium">
            Already aligned with the BONK ecosystem and featuring Nom
            (co-founder of Let’s BONK) as a top holder, $USD has now taken a
            serious step forward by appointing
            <sup>
              <a href="#ref1" className="text-[#4bbf67]">
                [1]
              </a>
            </sup>
            a new CTO to lead development and coordination efforts.
          </p>
          <p className="text-lg md:text-xl text-[#b2c4cd] text-left max-w-xl font-medium">
            The mission is simple: build infrastructure, rally the troops, and
            push $USD toward becoming the official unstable coin of crypto.
            <br />
            <span className="block mt-2 text-[#4bbf67] font-semibold">
              Why $USD?
            </span>
            <span className="block text-[#b2c4cd]">
              • Meme-first, mission-powered
              <br />• BONK ecosystem synergy
              <br />• ATH of $2M — still very early
              <br />• Narrative-driven: the ultimate re-peg challenge
              <br />• Now with a committed CTO building with the community
            </span>
            <br />
            This isn’t your average stablecoin. This is $USD. Volatile by
            design.
            <sup>
              <a href="#ref3" className="text-[#4bbf67]">
                [3]
              </a>
            </sup>
          </p>
        </div>
        {/* Right: Glassmorphism Chart Card */}
        <div className="flex-1 flex flex-col items-center justify-center rounded-2xl backdrop-blur-xl bg-white/10 border border-[#4bbf67]/20 shadow-lg p-8 min-w-[340px] max-w-lg">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">
            Live Charts
          </h3>
          <p className="text-[#b2c4cd] mb-4 text-center">
            Real-time price data and trading volume
          </p>
          <iframe
            id="dextools-widget"
            title="DEXTools Trading Chart"
            src="https://www.dextools.io/widget-chart/en/solana/pe-light/F8afaNTv6cKZU7uTPkj1o49dNtJxMaPDNcu7W47sw3Hs?theme=light&chartType=1&chartResolution=30&drawingToolbars=false"
            className="w-full h-[340px] rounded-xl border-none"
            style={{ background: "transparent" }}
          ></iframe>

          <TradingViewChart />
        </div>
      </div>
      {/* Subtle background accent for glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#072b0e]/60 to-[#062938]/70 z-0" />
    </section>
    // ...existing code...
  );
};

export default About;
