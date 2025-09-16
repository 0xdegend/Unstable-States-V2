import React from "react";

const Community = () => {
  return (
    <div>
      <section id="community" className="section community">
        <div className="container">
          <h2>Join the Community</h2>
          <p>
            USD thrives on its holders. Follow us on social platforms, share
            your best memes and ideas, and help shape the future of the Unstable
            States Dollar.
          </p>
          <div className="social-links">
            <a
              href="https://x.com/USD_BONK"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
            >
              <span className="social-icon">X</span>
            </a>
            <a
              href="https://t.me/usd_bonk/1"
              target="_blank"
              rel="noopener"
              aria-label="Telegram"
            >
              <span className="social-icon">TG</span>
            </a>
            <a href="##" target="_blank" rel="noopener" aria-label="Discord">
              <span className="social-icon">DC</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
