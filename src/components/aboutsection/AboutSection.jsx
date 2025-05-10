import React from "react";

const AboutSection = () => {
  return (
    <section
      style={{
        background: "linear-gradient(to right, #031e39, #00010d)",
        color: "#f6c400",
        padding: "48px 0",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 12 }}>
          <circle cx="24" cy="24" r="22" stroke="#f6c400" strokeWidth="4" fill="#031e39" />
          <rect x="14" y="14" width="20" height="20" rx="5" fill="#f6c400" opacity="0.8" />
          <text x="24" y="30" textAnchor="middle" fill="#031e39" fontSize="14" fontWeight="bold">NFT</text>
        </svg>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 16 }}>
          About Our NFT Market
        </h2>
      </div>
      <p className="text-white" style={{ maxWidth: 600, margin: "0 auto", fontSize: "1.2rem", opacity: 0.9 }}>
        NFT-Market is a modern platform for buying, selling, and creating NFTs. We strive to make digital art accessible to everyone by providing a safe and convenient experience for our users. Join our community and discover new opportunities in the world of NFTs!
      </p>
    </section>
  );
};

export default AboutSection; 