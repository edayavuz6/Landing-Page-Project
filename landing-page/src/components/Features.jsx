const features = [
  {
    icon: "⚡",
    color: "#4f46e5",
    bg: "rgba(79,70,229,0.08)",
    title: "Lightning-fast boards",
    desc: "Kanban, list, timeline — switch views in one click. Your work, your way.",
  },
  {
    icon: "🤖",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    title: "AI task suggestions",
    desc: "TaskFlow learns your workflow and suggests what to work on next. Stay in flow.",
  },
  {
    icon: "🔗",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.08)",
    title: "Connects everything",
    desc: "Slack, GitHub, Figma, Notion — all your tools in one place. No more tab juggling.",
  },
  {
    icon: "📊",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    title: "Real-time reporting",
    desc: "Velocity charts, burndown graphs, team load — see exactly how your sprint is going.",
  },
  {
    icon: "🔒",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    title: "Granular permissions",
    desc: "Guests, members, admins — control who sees and edits what, down to the task level.",
  },
  {
    icon: "🌍",
    color: "#f43f5e",
    bg: "rgba(244,63,94,0.08)",
    title: "Works anywhere",
    desc: "Native apps for iOS, Android, Mac and Windows. Full offline support included.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{ padding: "100px 0", background: "var(--bg)" }}
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
            Features
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--text)",
              lineHeight: 1.15,
              marginBottom: "14px",
            }}
          >
            Everything your team needs.
            <br />
            <span className="grad-text">Nothing you don't.</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text-2)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Built for modern teams who ship fast, think clearly, and hate
            unnecessary complexity.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                padding: "28px",
                borderRadius: "16px",
                background: "var(--white)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
                transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                e.currentTarget.style.borderColor = f.color + "40";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "var(--shadow)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: f.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  marginBottom: "16px",
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "8px",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-2)",
                  lineHeight: 1.7,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){section#features > div > div:last-child{grid-template-columns:1fr!important;}section#features > div{padding:0 24px!important;}section#features{padding:64px 0!important;}}`}</style>
    </section>
  );
}
