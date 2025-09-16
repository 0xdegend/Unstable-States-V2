import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="section about">
        <div className="container">
          <h2>About Unstable States Dollar</h2>

          <p>
            $USD is a community-led meme coin that turns the concept of
            stability on its head. In a world where fiat is shaky and
            “stablecoins” are anything but, $USD proudly leans into volatility.
            <sup>
              <a href="#ref2">[2]</a>
            </sup>
            . It’s not trying to stay at $1 — it’s daring the community to
            re-peg it through pure meme power and market energy.
          </p>
          <p>
            Already aligned with the BONK ecosystem and featuring Nom
            (co-founder of Let’s BONK) as a top holder, $USD has now taken a
            serious step forward by appointing
            <sup>
              <a href="#ref1">[1]</a>
            </sup>
            a new CTO to lead development and coordination efforts.
          </p>
          <p>
            The mission is simple: build infrastructure, rally the troops, and
            push $USD toward becoming the official unstable coin of crypto. Why
            $USD? • Meme-first, mission-powered • BONK ecosystem synergy • ATH
            of $2M — still very early • Narrative-driven: the ultimate re-peg
            challenge • Now with a committed CTO building with the community
            This isn’t your average stablecoin. This is $USD. Volatile by
            design.
            <sup>
              <a href="#ref3">[3]</a>
            </sup>
            .
          </p>
        </div>
        <div className="dextools-iframe">
          <div>
            <h2>Live Chart</h2>
            <p>Real-time price data and trading volume</p>
          </div>
          <iframe
            id="dextools-widget"
            title="DEXTools Trading Chart"
            src="https://www.dextools.io/widget-chart/en/solana/pe-light/F8afaNTv6cKZU7uTPkj1o49dNtJxMaPDNcu7W47sw3Hs?theme=light&chartType=1&chartResolution=30&drawingToolbars=false"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default About;
