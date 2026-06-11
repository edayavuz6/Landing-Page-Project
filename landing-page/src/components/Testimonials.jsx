const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Product @ Notion",
    avatar: "👩‍💼",
    rating: 5,
    text: "TaskFlow completely replaced our Jira + Trello combo. The AI suggestions alone saved us hours every week. Our team ships 40% faster now.",
  },
  {
    name: "Marcus Rivera",
    role: "Engineering Lead @ Stripe",
    avatar: "🧑‍💻",
    rating: 5,
    text: "I've tried every PM tool out there. TaskFlow is the first one my engineers actually enjoy using. The GitHub integration is seamless.",
  },
  {
    name: "Priya Patel",
    role: "Design Director @ Figma",
    avatar: "👩‍🎨",
    rating: 5,
    text: "The design is so thoughtful. It feels like the tool was built by designers, for designers. Our sprints have never been this organized.",
  },
  {
    name: "James Kim",
    role: "CTO @ Vercel",
    avatar: "👨‍🔬",
    rating: 5,
    text: "We onboarded 50 engineers in a single afternoon. The learning curve is basically zero. Best PM tool investment we've made.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="customers"
      style={{
        padding: "100px 0",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--indigo)",
              background: "rgba(79,70,229,0.08)",
              padding: "5px 14px",
              borderRadius: "100px",
              marginBottom: "16px",
            }}
          >
            Customers
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--text)",
              lineHeight: 1.15,
            }}
          >
            Teams who <span className="grad-text">love TaskFlow</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "20px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                padding: "28px",
                borderRadius: "18px",
                background: "var(--white)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
                transition: "all 0.25s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "var(--shadow)";
              }}
            >
              <div
                style={{ display: "flex", gap: "2px", marginBottom: "16px" }}
              >
                {"★★★★★".split("").map((s, j) => (
                  <span key={j} style={{ color: "#f59e0b", fontSize: "14px" }}>
                    {s}
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text-2)",
                  lineHeight: 1.75,
                  marginBottom: "20px",
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(79,70,229,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "var(--text)",
                    }}
                  >
                    {t.name}
                  </p>
                  <p style={{ fontSize: "12px", color: "var(--text-3)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){section#customers > div > div:last-child{grid-template-columns:1fr!important;}section#customers > div{padding:0 24px!important;}section#customers{padding:64px 0!important;}}`}</style>
    </section>
  );
}
