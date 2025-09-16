import React from "react";
import { FaCopy } from "react-icons/fa";
import { message } from "antd";
const HeroPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const contractAddress = "7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk";
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
    <div>
      <section
        id="home"
        className="hero"
        style={{
          backgroundImage: "url('/assets/USD-new-hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-logo">
            <img src="/assets/LOGO_Big_center.png" alt="$USD logo" />
          </div>
          <h1 className="hero-title">Unstable States Dollar</h1>
          <p className="hero-subtitle">
            The real USD is collapsing, The Unstable States Dollar is just as
            unstable.
          </p>
          <div className="hero-buttons">
            <a
              href="https://jup.ag"
              target="_blank"
              className="btn btn-primary"
            >
              Buy $USD
            </a>
            <a
              href="https://x.com/i/communities/1951079426835267602"
              target="_blank"
              className="btn btn-secondary"
            >
              Join Community
            </a>
          </div>
          {contextHolder}
          <div className="hero-last-btn">
            <button className="btn btn-secondary" onClick={handleCopy}>
              <FaCopy className="copy-icon" />
              Copy Token Address
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
