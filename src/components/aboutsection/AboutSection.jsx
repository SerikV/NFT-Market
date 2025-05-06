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
      <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 16 }}>
        About Our NFT Market
      </h2>
      <p className="text-white" style={{ maxWidth: 600, margin: "0 auto", fontSize: "1.2rem", opacity: 0.9 }}>
        NFT-Market is a modern platform for buying, selling, and creating NFTs. We strive to make digital art accessible to everyone by providing a safe and convenient experience for our users. Join our community and discover new opportunities in the world of NFTs!
      </p>
    </section>
  );
};

export default AboutSection; 