"use client";
import React from "react";
import { FaCopy } from "react-icons/fa";
import { message } from "antd";

const contractAddress = "7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk";

const HeroPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleCopy = () => {
    if (contractAddress) {
      navigator.clipboard.writeText(contractAddress);
      messageApi.open({
        type: "success",
        content: "Copied",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative p-3 flex items-center justify-center min-h-[90vh] bg-cover bg-center"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/unstable-market.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Enhanced Glasmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#072b0e]/60 to-[#062938]/70 z-0" />
      {/* Main Card */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-10 py-16 rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/30 shadow-2xl flex flex-col items-center gap-10 mt-20">
        {/* Logo Illustration */}
        <div
          className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-[#4bbf67]/30 shadow-xl bg-white/10 flex items-center justify-center mb-2"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src="/usd-3d-logo.png"
            alt="$USD logo"
            className="w-32 h-32 object-contain drop-shadow-2xl"
          />
        </div>
        <h1
          className="text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-xl tracking-tight"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Unstable States Dollar.
        </h1>
        <p
          className="text-xl md:text-2xl text-[#b2c4cd] text-center max-w-lg font-medium"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          The real USD is collapsing.
          <br />
          <span className="lg:text-[17.5px] text-[14.5px] text-[#4bbf67] ">
            CA: {contractAddress}
          </span>
        </p>
        <div className="flex flex-col md:flex-row gap-5 w-full justify-center mt-2">
          <a
            href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#4bbf67] via-[#63d382] to-[#062938] text-gray-900 font-bold shadow-xl hover:scale-105 transition-transform border border-[#4bbf67]/40 backdrop-blur-md hover:text-white"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Buy $USD
          </a>
          <a
            href="https://x.com/i/communities/1951079426835267602"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl bg-[#072b0e]/60 text-white font-bold shadow-xl hover:bg-[#4bbf67]/20 hover:scale-105 transition-transform border border-[#4bbf67]/40 backdrop-blur-md"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Join Community
          </a>
        </div>
        {contextHolder}
        <button
          className="flex items-center gap-2 px-6 py-2 rounded-xl bg-[#4bbf67]/10 text-white font-semibold shadow hover:bg-[#4bbf67]/20 hover:scale-105 transition-transform border border-[#4bbf67]/40 backdrop-blur-md mt-2"
          onClick={handleCopy}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <FaCopy className="text-xl text-[#4bbf67]" /> Copy Token Address
        </button>
      </div>
    </section>
  );
};

export default HeroPage;
