const cols = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  },
  { title: "Company", links: ["About", "Blog", "Careers", "Press", "Contact"] },
  {
    title: "Resources",
    links: ["Docs", "API", "Templates", "Integrations", "Community"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies", "GDPR"],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--text)", padding: "64px 48px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(4,1fr)",
            gap: "48px",
            marginBottom: "56px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg,#4f46e5,#7c3aed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                  color: "white",
                  letterSpacing: "-0.02em",
                }}
              >
                TaskFlow
              </span>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                maxWidth: "220px",
                marginBottom: "20px",
              }}
            >
              The project management tool that actually helps your team ship.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {["𝕏", "in", "gh", "▶"].map((s) => (
                <button
                  key={s}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "12px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "16px",
                }}
              >
                {col.title}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.35)",
                      transition: "color 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.85)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.35)")
                    }
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            © 2026 TaskFlow, Inc. All rights reserved.
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            Designed & built with ❤️ by{" "}
            <a
              href="https://edayavuz6-portfolio.vercel.app"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "rgba(255,255,255,0.5)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "white")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(255,255,255,0.5)")
              }
            >
              Eda Yavuz
            </a>
          </p>
        </div>
      </div>
      <style>{`@media(max-width:900px){footer > div > div:first-child{grid-template-columns:1fr 1fr!important;gap:32px!important;}footer{padding:48px 24px 24px!important;}}`}</style>
    </footer>
  );
}
