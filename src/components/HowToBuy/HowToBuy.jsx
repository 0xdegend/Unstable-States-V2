import React from "react";

const HowToBuy = () => {
  const contractAddress = "7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk";
  return (
    <div>
      <section id="buy" className="section buy">
        <div className="container">
          <h2>How to Buy&nbsp;$USD</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Set up a wallet</h3>
                <p>
                  Download a Solana‑compatible wallet such as{" "}
                  <a href="https://phantom.app/" target="_blank" rel="noopener">
                    Phantom{" "}
                  </a>
                  or{" "}
                  <a
                    href="https://solflare.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    Solflare
                  </a>{" "}
                  and create your address. Secure your recovery phrase and
                  ensure you have full control over your private keys.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Fund your wallet</h3>
                <p>
                  Buy SOL on a centralized exchange or fiat on‑ramp and send it
                  to your wallet. You’ll need SOL to pay network fees and to
                  swap for USD.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Swap for&nbsp;$USD</h3>
                <p>
                  Use a Solana DEX aggregator like{" "}
                  <a href="https://jup.ag/" target="_blank" rel="noopener">
                    Jupiter
                  </a>{" "}
                  or your preferred DEX to swap your $SOL for $USD. Enter the
                  contract address
                  <span className="contract-inline">{contractAddress}</span>
                  and approve the transaction using your wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToBuy;
