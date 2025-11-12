"use client";
import React from "react";

export default function Navbar() {
  return (
    <header
  style={{
    background: "rgba(83, 107, 122, 0.9)",
    backdropFilter: "blur(6px)",
    padding: "1rem 3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999, // 👈 ensure it stays on top
  }}
>
  {/* LEFT: Logo */}
  <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
  <img
    src="/RealEstate.png"      // ✅ Correct file name
    alt="RealEstate Logo"
    style={{
      height: "90px",          // ⬆️ Larger logo
      width: "auto",
      objectFit: "contain",
      display: "block",
      transform: "scale(1.8)", // 🔍 Makes logo visually bigger if PNG has padding
      transformOrigin: "left center",
    }}
  />
  <span
    style={{
      fontSize: "2rem",        // ⬆️ Larger text
      fontWeight: "700",
      color: "#fff",
      letterSpacing: "0.8px",
    }}
  >
  </span>
</div>



      {/* CENTER: Menu */}
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "2rem",
            color: "#fff",
            fontSize: "1rem",
          }}
        >
          {["Home", "Catalog", "About Us", "Blogs", "Contact"].map((item, idx) => (
            <li
              key={idx}
              style={{
                cursor: "pointer",
                fontWeight: "500",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderBottom = "2px solid #fff";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderBottom = "none";
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* RIGHT: Log in / Cart */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        {/* Log in */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#fff" }}>
          <span style={{ fontSize: "1.2rem" }}>👤</span>
          <span>Log in</span>
        </div>

        {/* Cart */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            background: "rgba(255,255,255,0.2)",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            color: "#fff",
          }}
        >
          <span>Cart</span>
          <span>🛒</span>
          <span
            style={{
              background: "#fff",
              color: "#333",
              borderRadius: "50%",
              fontSize: "0.8rem",
              padding: "0.1rem 0.5rem",
              marginLeft: "0.2rem",
            }}
          >
            0
          </span>
        </div>
      </div>
    </header>
  );
}
