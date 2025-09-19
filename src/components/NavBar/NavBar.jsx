"use client";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
const NavBar = () => {
  // State to toggle mobile navigation menu
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -70% 0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  const closeMenu = () => setNavOpen(false);
  return (
    <div>
      {/* Navigation Bar with Glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-[#4bbf67]/20 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <a
            href="#home"
            className="flex items-center gap-2 font-bold text-[#4bbf67] text-lg"
            onClick={() => setNavOpen(false)}
          >
            <img
              src="/assets/LOGO_small_topbar.png"
              alt="Unstable States Dollar logo"
              className="w-50 h-10 rounded-xl shadow"
            />
          </a>
          <nav
            className={`hidden md:flex gap-6 items-center font-semibold text-[#b2c4cd]`}
          >
            <a
              href="#home"
              className={`transition-colors px-2 py-1 rounded-xl ${
                activeSection === "home"
                  ? "bg-[#4bbf67]/20 text-[#4bbf67]"
                  : "hover:bg-[#4bbf67]/10"
              }`}
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className={`transition-colors px-2 py-1 rounded-xl ${
                activeSection === "about"
                  ? "bg-[#4bbf67]/20 text-[#4bbf67]"
                  : "hover:bg-[#4bbf67]/10"
              }`}
              onClick={closeMenu}
            >
              About
            </a>
            <div className="relative group">
              <a
                href="#"
                className="transition-colors px-2 py-1 rounded-xl hover:bg-[#4bbf67]/10"
              >
                Stake ▾
              </a>
              <div className="absolute left-0 top-full mt-2 min-w-[220px] bg-white/10 backdrop-blur-xl border border-[#4bbf67]/20 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                <a
                  href="https://app.streamflow.finance/staking/solana/mainnet/zEYkTNer9K8iV8tcBLW75pRxw4NSBrttC7hDBFP9oBT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-[#b2c4cd] hover:bg-[#4bbf67]/10"
                >
                  Old Pool ($USD)
                </a>
                <a
                  href="https://app.streamflow.finance/staking/solana/mainnet/5hKwkhvCzJbkGyKtrdRm9t1QYecAvz1CQvdvMvQ29sKu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-[#b2c4cd] hover:bg-[#4bbf67]/10"
                >
                  New Pool ($USD + other $Bonk memes)
                </a>
              </div>
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                window.open(
                  "https://fascinated-fog-3ab.notion.site/ebd/25476dc4eb938026a2e3e8605b6ac0e0",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="transition-colors px-2 py-1 rounded-xl hover:bg-[#4bbf67]/10"
            >
              Meme Bank
            </a>
            <a
              href="#tokenomics"
              className={`transition-colors px-2 py-1 rounded-xl ${
                activeSection === "tokenomics"
                  ? "bg-[#4bbf67]/20 text-[#4bbf67]"
                  : "hover:bg-[#4bbf67]/10"
              }`}
              onClick={closeMenu}
            >
              Tokenomics
            </a>
            <a
              href="#roadmap"
              className={`transition-colors px-2 py-1 rounded-xl ${
                activeSection === "roadmap"
                  ? "bg-[#4bbf67]/20 text-[#4bbf67]"
                  : "hover:bg-[#4bbf67]/10"
              }`}
              onClick={closeMenu}
            >
              Roadmap
            </a>
            <a
              href="#buy"
              className={`transition-colors px-2 py-1 rounded-xl ${
                activeSection === "buy"
                  ? "bg-[#4bbf67]/20 text-[#4bbf67]"
                  : "hover:bg-[#4bbf67]/10"
              }`}
              onClick={closeMenu}
            >
              How&nbsp;To&nbsp;Buy
            </a>
            <a
              href="#community"
              className={`transition-colors px-2 py-1 rounded-xl ${
                activeSection === "community"
                  ? "bg-[#4bbf67]/20 text-[#4bbf67]"
                  : "hover:bg-[#4bbf67]/10"
              }`}
              onClick={closeMenu}
            >
              Community
            </a>
          </nav>
          {/* Hamburger button for mobile */}
          <button
            className="md:hidden nav-toggle text-[#4bbf67] bg-white/10 backdrop-blur-xl border border-[#4bbf67]/20 rounded-xl p-2 shadow"
            aria-label="Open navigation"
            onClick={() => setNavOpen((v) => !v)}
          >
            <FaBars size={22} />
          </button>
        </div>
        {/* Mobile Nav Drawer */}
        <nav
          className={`fixed top-0 left-0 h-full w-[70vw] max-w-xs bg-white/10 backdrop-blur-xl border-r border-[#4bbf67]/20 shadow-lg z-50 flex flex-col gap-6 p-8 pt-24 transition-transform duration-300 ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <a
            href="#home"
            className={`transition-colors px-2 py-1 rounded-xl ${
              activeSection === "home"
                ? "bg-[#4bbf67]/20 text-[#4bbf67]"
                : "hover:bg-[#4bbf67]/10"
            }`}
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className={`transition-colors px-2 py-1 rounded-xl ${
              activeSection === "about"
                ? "bg-[#4bbf67]/20 text-[#4bbf67]"
                : "hover:bg-[#4bbf67]/10"
            }`}
            onClick={closeMenu}
          >
            About
          </a>
          <div className="relative group">
            <a
              href="#"
              className="transition-colors px-2 py-1 rounded-xl hover:bg-[#4bbf67]/10"
            >
              Stake ▾
            </a>
            <div className="mt-2 min-w-[220px] bg-white/10 backdrop-blur-xl border border-[#4bbf67]/20 rounded-xl shadow-lg">
              <a
                href="https://app.streamflow.finance/staking/solana/mainnet/zEYkTNer9K8iV8tcBLW75pRxw4NSBrttC7hDBFP9oBT"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-[#b2c4cd] hover:bg-[#4bbf67]/10"
              >
                Old Pool ($USD)
              </a>
              <a
                href="https://app.streamflow.finance/staking/solana/mainnet/5hKwkhvCzJbkGyKtrdRm9t1QYecAvz1CQvdvMvQ29sKu"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-[#b2c4cd] hover:bg-[#4bbf67]/10"
              >
                New Pool ($USD + other $Bonk memes)
              </a>
            </div>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              window.open(
                "https://fascinated-fog-3ab.notion.site/ebd/25476dc4eb938026a2e3e8605b6ac0e0",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            className="transition-colors px-2 py-1 rounded-xl hover:bg-[#4bbf67]/10"
          >
            Meme Bank
          </a>
          <a
            href="#tokenomics"
            className={`transition-colors px-2 py-1 rounded-xl ${
              activeSection === "tokenomics"
                ? "bg-[#4bbf67]/20 text-[#4bbf67]"
                : "hover:bg-[#4bbf67]/10"
            }`}
            onClick={closeMenu}
          >
            Tokenomics
          </a>
          <a
            href="#roadmap"
            className={`transition-colors px-2 py-1 rounded-xl ${
              activeSection === "roadmap"
                ? "bg-[#4bbf67]/20 text-[#4bbf67]"
                : "hover:bg-[#4bbf67]/10"
            }`}
            onClick={closeMenu}
          >
            Roadmap
          </a>
          <a
            href="#buy"
            className={`transition-colors px-2 py-1 rounded-xl ${
              activeSection === "buy"
                ? "bg-[#4bbf67]/20 text-[#4bbf67]"
                : "hover:bg-[#4bbf67]/10"
            }`}
            onClick={closeMenu}
          >
            How&nbsp;To&nbsp;Buy
          </a>
          <a
            href="#community"
            className={`transition-colors px-2 py-1 rounded-xl ${
              activeSection === "community"
                ? "bg-[#4bbf67]/20 text-[#4bbf67]"
                : "hover:bg-[#4bbf67]/10"
            }`}
            onClick={closeMenu}
          >
            Community
          </a>
        </nav>
        {/* Overlay for mobile nav */}
        <div
          className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
            navOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
          aria-hidden={!navOpen}
        />
      </header>
    </div>
  );
};

export default NavBar;
