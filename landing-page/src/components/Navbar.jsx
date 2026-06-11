import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "60px",
        display: "flex",
        alignItems: "center",
        padding: "0 48px",
        background: scrolled ? "rgba(246,247,251,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "all 0.35s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "9px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "8px",
            background: "var(--grad)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(79,70,229,0.35)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        </div>
        <span
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}
        >
          Task
          <span
            style={{
              background: "var(--grad)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Flow
          </span>
        </span>
      </div>

      <ul
        style={{
          display: "flex",
          gap: "4px",
          listStyle: "none",
          margin: "0 auto",
        }}
        className="hidden md:flex"
      >
        {["Features", "Pricing", "Customers", "Blog"].map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--text-2)",
                transition: "all 0.2s",
                display: "block",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "var(--text)";
                e.target.style.background = "rgba(79,70,229,0.06)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--text-2)";
                e.target.style.background = "transparent";
              }}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <a
          href="#"
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--text-2)",
            padding: "8px 14px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--indigo)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--text-2)")}
        >
          Log in
        </a>
        <a
          href="#"
          style={{
            padding: "8px 18px",
            borderRadius: "9px",
            fontSize: "13px",
            fontWeight: 700,
            background: "var(--grad)",
            color: "white",
            boxShadow: "0 4px 14px rgba(79,70,229,0.35)",
            transition: "all 0.2s",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.88";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "none";
          }}
        >
          Get started free
        </a>
      </div>
    </nav>
  );
}
