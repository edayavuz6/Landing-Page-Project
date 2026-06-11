const logos = [
  "Notion",
  "Slack",
  "GitHub",
  "Figma",
  "Jira",
  "Linear",
  "Vercel",
  "Stripe",
  "Loom",
  "Zoom",
];

export default function LogoBar() {
  return (
    <section
      style={{
        padding: "40px 0",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--white)",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: "var(--text-3)",
          marginBottom: "24px",
        }}
      >
        Trusted by teams at
      </p>
      <div style={{ overflow: "hidden" }}>
        <div
          className="marquee"
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            width: "max-content",
            gap: "0",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0 36px",
              }}
            >
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--text-3)",
                  letterSpacing: "-0.01em",
                }}
              >
                {logo}
              </span>
              <span
                style={{
                  marginLeft: "36px",
                  color: "var(--border)",
                  fontSize: "18px",
                }}
              >
                ·
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
