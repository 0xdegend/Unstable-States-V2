import React, { useState } from "react";

const Staking = () => {
  const contractAddress = "7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk";
  const [stakeAmount, setStakeAmount] = useState("");
  const burnData = [
    {
      date: "2025-08-01",
      type: "Burn",
      amount: "10,000 USD",
      notes: "Initial liquidity burn",
    },
    {
      date: "2025-08-02",
      type: "Buyback",
      amount: "20,000 USD",
      notes: "Tokens bought back and added to the staking pool",
    },
  ];

  const handleStake = () => {
    const amount = parseFloat(stakeAmount);
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount of USD to stake.");
      return;
    }
    alert(
      `Demo: You would stake ${amount.toLocaleString()} USD. This is a simulation only.`
    );
    setStakeAmount("");
  };
  return (
    <div>
      <section id="dashboard" className="section dashboard">
        <div className="container">
          <h2>Dashboard&nbsp;&amp;&nbsp;Staking</h2>
          <p>
            Explore essential information about{" "}
            <span className="contract-inline">$USD</span> and upcoming DeFi
            features. Stake your tokens, track burn events and monitor
            buybacks—all in one place.
          </p>
          <div className="dashboard-grid">
            <div className="dashboard-item">
              <h3>$USD Token Info</h3>
              <p>
                Total Supply:&nbsp;<strong>1,000,000,000&nbsp;USD</strong>
                <br />
                Contract:&nbsp;
                <span className="contract-inline">{contractAddress}</span>
              </p>
            </div>
            <div className="dashboard-item">
              <h3>Staking UI</h3>
              <p>
                Partnered with <strong>Streamflow</strong>, our staking portal
                allows you to lock up your USD tokens to earn rewards. Enter the
                amount you wish to stake and click stake to simulate the
                process.
              </p>
              <div className="staking-ui">
                <input
                  type="number"
                  placeholder="Amount of USD to stake"
                  min="1"
                  step="1"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleStake}>
                  Stake
                </button>
                <p className="note">
                  This is a demo. Actual staking will be available via
                  Streamflow integration.
                </p>
              </div>
            </div>
            <div className="dashboard-item">
              <h3>Burn Tracker &amp; Buyback History</h3>
              <p>
                Keep tabs on all burn events and buybacks funded by creator fees
                from Let’s&nbsp;Bonk tokens. The table below shows a running
                history of burns and buybacks (sample data for demonstration).
              </p>
              <table className="burn-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {burnData.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.date}</td>
                      <td>{row.type}</td>
                      <td>{row.amount}</td>
                      <td>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staking;
