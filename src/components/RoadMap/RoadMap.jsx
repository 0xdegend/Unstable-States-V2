import React from "react";
import { FaHandshake, FaFire, FaCookieBite } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
const RoadMap = () => {
  const contractAddress = "7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk";
  return (
    <>
      <section id="roadmap" className="section roadmap">
        <div className="container roadmap-container">
          <h2>Roadmap</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaHandshake />
              </div>
              <div className="timeline-content">
                <h3>Partner with Streamflow</h3>
                <ul>
                  <li>
                    Offer <span className="contract-inline">$USD</span> staking
                    via Streamflow
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaFire />
              </div>
              <div className="timeline-content">
                <h3>Buybacks&nbsp;&amp;&nbsp;Burn Plan</h3>
                <ul>
                  <li>
                    Use creator fees from Let’s Bonk tokens for direct buybacks
                  </li>
                  <li>
                    Burn repurchased tokens or add them to the staking pool
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaDisplay />
              </div>
              <div className="timeline-content">
                <h3>Website&nbsp;&amp;&nbsp;Dashboard</h3>
                <ul>
                  <li>
                    Launch a basic landing page with{" "}
                    <span className="contract-inline">$USD</span> token info
                  </li>
                  <li>Integrate Streamflow staking UI</li>
                  <li>Burn tracker &amp; buyback history</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaCookieBite />
              </div>
              <div className="timeline-content">
                <h3>SocialFi Expansion</h3>
                <ul>
                  <li>
                    Integrate Cookie&nbsp;Fun to boost community engagement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoadMap;
