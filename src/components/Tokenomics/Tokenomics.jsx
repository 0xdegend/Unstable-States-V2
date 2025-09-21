"use client";
import React, { useState } from "react";

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk";
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  // Pie chart data
  const pieData = [
    {
      label: "Community",
      value: 50,
      color: "#4bbf67",
    },
    {
      label: "Staking Pool",
      value: 30,
      color: "#63d382",
    },
    {
      label: "Raydium LP",
      value: 10,
      color: "#072b0e",
    },
    {
      label: "Bonk Guy & Nom",
      value: 10,
      color: "#b2c4cd",
    },
  ];

  // Pie chart geometry
  const radius = 16;
  const center = 18;
  const total = pieData.reduce((acc, d) => acc + d.value, 0);
  // Static pie chart segments
  const getPieSegments = () => {
    let cumulative = 0;
    return pieData.map((d, i) => {
      const startAngle = (cumulative / total) * 360;
      const endAngle = ((cumulative + d.value) / total) * 360;
      const largeArc = d.value > total / 2 ? 1 : 0;
      const startRadians = (startAngle - 90) * (Math.PI / 180);
      const endRadians = (endAngle - 90) * (Math.PI / 180);
      const x1 = center + radius * Math.cos(startRadians);
      const y1 = center + radius * Math.sin(startRadians);
      const x2 = center + radius * Math.cos(endRadians);
      const y2 = center + radius * Math.sin(endRadians);
      const arcFlag = largeArc;
      const pathData = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${arcFlag} 1 ${x2} ${y2} Z`;
      cumulative += d.value;
      return (
        <path key={d.label} d={pathData} fill={d.color} fillOpacity={0.7} />
      );
    });
  };

  return (
    <section
      id="tokenomics"
      className="relative flex items-center justify-center min-h-[60vh] py-20 bg-transparent p-3"
    >
      {/* Glassmorphism Card */}
      <div className="relative w-full max-w-4xl mx-auto px-10 py-14 rounded-3xl backdrop-blur-2xl bg-white/10 border border-[#4bbf67]/30 shadow-2xl flex flex-col items-center gap-10 z-10">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-xl tracking-tight mb-6"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Tokenomics
        </h2>
        <p
          className="text-lg md:text-xl text-[#b2c4cd] text-center max-w-2xl font-medium mb-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          The Unstable States Dollar supply has been capped at{" "}
          <span className="text-[#4bbf67] font-bold">1,000,000,000 USD</span>{" "}
          tokens. Minted on Solana using Bonk, the token contract lives at:
        </p>
        <div
          className="flex flex-col items-center gap-2 mb-6"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <span
            className="font-mono text-[#4bbf67] bg-white/10 px-4 py-2 rounded-xl border border-[#4bbf67]/30 shadow text-lg tracking-wider select-all block max-w-[350px] md:max-w-xl overflow-x-auto whitespace-nowrap text-sm md:text-lg lg:text-[18px] text-[11px]"
            style={{ wordBreak: "break-all" }}
          >
            {contractAddress}
          </span>
          <button
            className="px-4 py-1 rounded-xl bg-[#4bbf67]/10 text-[#4bbf67] font-semibold shadow hover:bg-[#4bbf67]/20 transition-colors border border-[#4bbf67]/30"
            onClick={handleCopy}
            aria-label="Copy contract address"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div
            className="bg-white/10 rounded-2xl p-6 shadow-lg border border-[#4bbf67]/20 backdrop-blur-xl flex flex-col items-center"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h3 className="text-xl font-bold text-[#4bbf67] mb-4">
              Token Distribution
            </h3>
            {/* Pie Chart with interaction/animation */}
            <div className="flex flex-col items-center w-full">
              <div className="relative">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 36 36"
                  className="mb-4"
                >
                  {getPieSegments()}
                  {/* Center circle for glassmorphism */}
                  <circle
                    cx="18"
                    cy="18"
                    r="12"
                    fill="#fff"
                    fillOpacity="0.05"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-2 w-full">
                {pieData.map((d, i) => (
                  <div key={d.label} className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ background: d.color }}
                    ></span>
                    <span className="text-[#b2c4cd]">{d.label}</span>
                    <span
                      className="ml-auto font-bold"
                      style={{ color: d.color }}
                    >
                      {d.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="bg-white/10 rounded-2xl p-6 shadow-lg border border-[#4bbf67]/20 backdrop-blur-xl flex flex-col items-center"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h3 className="text-xl font-bold text-[#4bbf67] mb-2">Details</h3>
            <ul className="list-disc list-inside text-[#b2c4cd] mb-4">
              <li>
                <span className="font-bold text-white">LP Burned:</span>{" "}
                Liquidity is locked and burned forever to ensure fairness and
                trust.
              </li>
              <li>
                <span className="font-bold text-white">
                  Community take over:
                </span>{" "}
                With the liquidity burned and ownership renounced, the community
                fully controls the token’s future.
              </li>
            </ul>
            <h3 className="text-xl font-bold text-[#4bbf67] mb-2">
              Fair Launch
            </h3>
            <ul className="list-disc list-inside text-[#b2c4cd]">
              <li>
                <span className="font-bold text-white">100% Community:</span> No
                presale, no team allocation and no tax—just pure community
                ownership. Everyone has an equal chance to participate from day
                one.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Subtle background accent for glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#072b0e]/60 to-[#062938]/70 z-0" />
    </section>
  );
};

export default Tokenomics;
