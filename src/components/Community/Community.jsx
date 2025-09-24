import Image from "next/image";
import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Community = () => {
  return (
    <section
      id="community"
      className="relative flex items-center justify-center min-h-[50vh] py-20 bg-transparent p-3"
    >
      {/* Glassmorphism Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#072b0e]/60 to-[#062938]/70 z-0" />
      <div className="relative w-full max-w-xl mx-auto px-8 py-12 rounded-3xl backdrop-blur-2xl bg-white/10 border border-[#4bbf67]/30 shadow-2xl flex flex-col items-center gap-8 z-10 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-xl tracking-tight mb-4">
          Join the Community
        </h2>
        <p className="text-lg md:text-xl text-[#b2c4cd] text-center max-w-lg font-medium mb-4">
          USD thrives on its holders. Follow us on social platforms, share your
          best memes and ideas, and help shape the future of the Unstable States
          Dollar.
        </p>
        <div className="flex items-center justify-center gap-8 mt-4">
          <a
            href="https://x.com/USD_BONK"
            target="_blank"
            rel="noopener"
            aria-label="Twitter"
            className="group"
          >
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-[#4bbf67]/20 border border-[#4bbf67]/30 shadow-lg backdrop-blur-xl text-3xl text-[#4bbf67] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#4bbf67]/40">
              <FaTwitter />
            </span>
          </a>
          <a
            href="https://t.me/usd_bonk/1"
            target="_blank"
            rel="noopener"
            aria-label="Telegram"
            className="group"
          >
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-[#63d382]/20 border border-[#63d382]/30 shadow-lg backdrop-blur-xl text-3xl text-[#63d382] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#63d382]/40">
              <FaTelegramPlane />
            </span>
          </a>
          <a
            href="https://www.coingecko.com/en/coins/unstable-states-dollar"
            target="_blank"
            rel="noopener"
            aria-label="Discord"
            className="group"
          >
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-[#b2c4cd]/20 border border-[#b2c4cd]/30 shadow-lg backdrop-blur-xl text-3xl text-[#b2c4cd] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#b2c4cd]/40 ">
              <Image
                src={"/coingecko-logo.png"}
                alt="Coingecko"
                width={30}
                height={30}
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
