import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "1.5rem 2rem",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <p>© Copyright {new Date().getFullYear()} Bhive Private Limited. All rights reserved.</p>
      <p>
        Designed by <span style={{ color: "#4caf50" }}>Samiksha Ghugare</span>
      </p>
    </footer>
  );
};

export default Footer;
