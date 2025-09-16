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
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="container nav-container">
          <a
            href="#home"
            className="logo-wrap"
            onClick={() => setNavOpen(false)}
          >
            <img
              src="/assets/LOGO_small_topbar.png"
              alt="Unstable States Dollar logo"
              className="logo"
            />
          </a>
          <nav className={`nav-links ${navOpen ? "open" : ""}`} id="navLinks">
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={() => setNavOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={() => setNavOpen(false)}
            >
              About
            </a>
            <div class="dropdown">
              <a href="#">Stake ▾</a>
              <div class="dropdown-content">
                <a
                  href="https://app.streamflow.finance/staking/solana/mainnet/zEYkTNer9K8iV8tcBLW75pRxw4NSBrttC7hDBFP9oBT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Old Pool ($USD)
                </a>
                <a
                  href="https://app.streamflow.finance/staking/solana/mainnet/5hKwkhvCzJbkGyKtrdRm9t1QYecAvz1CQvdvMvQ29sKu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New Pool ($USD + other $Bonk memes)
                </a>
              </div>
            </div>
            {/* <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // stop the "#" jump
                setNavOpen(false); // close drawer/nav
                window.open(
                  "https://app.streamflow.finance/staking/solana/mainnet/5hKwkhvCzJbkGyKtrdRm9t1QYecAvz1CQvdvMvQ29sKu",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Stake
            </a> */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // stop the "#" jump
                setNavOpen(false); // close drawer/nav
                window.open(
                  "https://fascinated-fog-3ab.notion.site/ebd/25476dc4eb938026a2e3e8605b6ac0e0",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Meme Bank
            </a>
            <a
              href="#tokenomics"
              className={activeSection === "tokenomics" ? "active" : ""}
              onClick={() => setNavOpen(false)}
            >
              Tokenomics
            </a>
            <a
              href="#roadmap"
              className={activeSection === "roadmap" ? "active" : ""}
              onClick={() => setNavOpen(false)}
            >
              Roadmap
            </a>
            {/* <a
              href="#dashboard"
              className={activeSection === "dashboard" ? "active" : ""}
              onClick={() => setNavOpen(false)}
            >
              Dashboard
            </a> */}
            <a
              href="#buy"
              className={activeSection === "buy" ? "active" : ""}
              onClick={() => setNavOpen(false)}
            >
              How&nbsp;To&nbsp;Buy
            </a>
            <a
              href="#community"
              className={activeSection === "community" ? "active" : ""}
              onClick={() => setNavOpen(false)}
            >
              Community
            </a>
          </nav>
          {/* Hamburger button for mobile */}
          <button
            className="nav-toggle"
            aria-label="Open navigation"
            onClick={() => setNavOpen((v) => !v)}
          >
            <FaBars />
          </button>
        </div>
      </header>
      {/* Overlay */}
      <div
        className={`nav-overlay ${navOpen ? "active" : ""}`}
        onClick={closeMenu}
        aria-hidden={!navOpen}
      />
    </div>
  );
};

export default NavBar;
