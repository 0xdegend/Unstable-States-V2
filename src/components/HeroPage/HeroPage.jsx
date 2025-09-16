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
      className="relative flex items-center justify-center min-h-[80vh] bg-cover bg-center"
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
      {/* Glasmorphism Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/60 to-gray-800/60 z-0" />
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-12 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl flex flex-col items-center gap-8">
        {/* New Illustration */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-lg bg-white/10 flex items-center justify-center">
          <img
            src="/assets/LOGO_Big_center.png"
            alt="$USD logo"
            className="w-28 h-28 object-contain drop-shadow-xl"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
          Unstable States Dollar
        </h1>
        <p className="text-lg md:text-xl text-gray-200 text-center max-w-xl">
          The real USD is collapsing. The Unstable States Dollar is just as
          unstable.
          <br />
          <span className="text-xs text-gray-400">CA: {contractAddress}</span>
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          <a
            href="https://jup.ag"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform backdrop-blur-md border border-white/20"
          >
            Buy $USD
          </a>
          <a
            href="https://x.com/i/communities/1951079426835267602"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold shadow-lg hover:bg-white/20 hover:scale-105 transition-transform border border-white/20 backdrop-blur-md"
          >
            Join Community
          </a>
        </div>
        {contextHolder}
        <button
          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 text-white font-medium shadow hover:bg-white/20 hover:scale-105 transition-transform border border-white/20 backdrop-blur-md "
          onClick={handleCopy}
        >
          <FaCopy className="text-lg" /> Copy Token Address
        </button>
      </div>
    </section>
  );
};

export default HeroPage;
