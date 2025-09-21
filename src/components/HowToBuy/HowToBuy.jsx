import React from "react";
import { FaWallet, FaCoins, FaExchangeAlt } from "react-icons/fa";

const HowToBuy = () => {
  const contractAddress = "7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk";
  return (
    <section
      id="buy"
      className="relative flex items-center justify-center min-h-[60vh] py-20 bg-transparent p-3"
    >
      {/* Glassmorphism Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#072b0e]/60 to-[#062938]/70 z-0" />
      <div className="relative w-full max-w-4xl mx-auto px-6 py-12 rounded-3xl backdrop-blur-2xl bg-white/10 border border-[#4bbf67]/30 shadow-2xl flex flex-col items-center gap-10 z-10">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-xl tracking-tight mb-8 animate-fade-in"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          How to Buy <span className="text-[#4bbf67]">$USD</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Step 1 */}
          <div
            className="group bg-white/10 rounded-3xl p-8 shadow-xl border border-[#4bbf67]/20 backdrop-blur-xl flex flex-col items-center text-center gap-4 hover:scale-[1.04] transition-transform duration-300 animate-slide-up"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="w-16 h-16 rounded-full bg-[#4bbf67]/30 border-2 border-[#4bbf67]/40 flex items-center justify-center shadow-lg text-3xl text-[#4bbf67] mb-2 ">
              <FaWallet />
            </div>
            <h3 className="text-xl font-bold text-[#4bbf67] mb-2">
              Set up a wallet
            </h3>
            <p className="text-[#b2c4cd]">
              Download a Solana‑compatible wallet such as{" "}
              <a
                href="https://phantom.app/"
                target="_blank"
                rel="noopener"
                className="text-[#4bbf67] underline hover:text-[#63d382] transition-colors"
              >
                Phantom
              </a>{" "}
              or{" "}
              <a
                href="https://solflare.com/"
                target="_blank"
                rel="noopener"
                className="text-[#4bbf67] underline hover:text-[#63d382] transition-colors"
              >
                Solflare
              </a>{" "}
              and create your address. Secure your recovery phrase and ensure
              you have full control over your private keys.
            </p>
          </div>
          {/* Step 2 */}
          <div
            className="group bg-white/10 rounded-3xl p-8 shadow-xl border border-[#63d382]/20 backdrop-blur-xl flex flex-col items-center text-center gap-4 hover:scale-[1.04] transition-transform duration-300 animate-slide-up delay-100"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="w-16 h-16 rounded-full bg-[#63d382]/30 border-2 border-[#63d382]/40 flex items-center justify-center shadow-lg text-3xl text-[#63d382] mb-2 ">
              <FaCoins />
            </div>
            <h3 className="text-xl font-bold text-[#63d382] mb-2">
              Fund your wallet
            </h3>
            <p className="text-[#b2c4cd]">
              Buy SOL on a centralized exchange or fiat on‑ramp and send it to
              your wallet. You’ll need SOL to pay network fees and to swap for
              USD.
            </p>
          </div>
          {/* Step 3 */}
          <div
            className="group bg-white/10 rounded-3xl p-8 shadow-xl border border-[#072b0e]/20 backdrop-blur-xl flex flex-col items-center text-center gap-4 hover:scale-[1.04] transition-transform duration-300 animate-slide-up delay-200 "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="w-16 h-16 rounded-full bg-[#072b0e]/30 border-2 border-[#072b0e]/40 flex items-center justify-center shadow-lg text-3xl text-[#072b0e] mb-2 ">
              <FaExchangeAlt />
            </div>
            <h3 className="text-xl font-bold text-[#072b0e] mb-2">
              Swap for $USD
            </h3>
            <p className="text-[#b2c4cd]  text-base md:text-[0.97rem] overflow-y-auto px-1 w-full h-fit ">
              Use a Solana DEX aggregator like{" "}
              <a
                href="https://jup.ag/"
                target="_blank"
                rel="noopener"
                className="text-[#4bbf67] underline hover:text-[#63d382] transition-colors"
              >
                Jupiter
              </a>{" "}
              or your preferred DEX to swap your $SOL for $USD. Enter the
              contract address{" "}
              {/* <span className="font-mono text-[#4bbf67] bg-white/10 px-1 py-0.5 rounded-lg border border-[#4bbf67]/30 shadow text-sm tracking-wide select-all">
                {contractAddress}
              </span>{" "} */}
              and approve the transaction using your wallet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
