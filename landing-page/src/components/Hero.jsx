import { useState, useEffect } from "react";

const avatars = ["🧑‍💻", "👩‍🎨", "👨‍🔬", "👩‍💼", "🧑‍🚀"];

const taskCards = [
  {
    title: "Design system update",
    tag: "Design",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    avatar: "👩‍🎨",
    due: "Today",
    progress: 72,
  },
  {
    title: "API integration",
    tag: "Dev",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.08)",
    avatar: "🧑‍💻",
    due: "Tomorrow",
    progress: 45,
  },
  {
    title: "User research report",
    tag: "Research",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    avatar: "👩‍💼",
    due: "Fri",
    progress: 90,
  },
];

function MiniBoard() {
  const cols = [
    {
      label: "To Do",
      color: "#9497b0",
      tasks: ["Write Q3 brief", "Review PRD", "Update roadmap"],
    },
    {
      label: "In Progress",
      color: "#4f46e5",
      tasks: ["Design system", "API integration", "Onboarding flow"],
    },
    {
      label: "Done",
      color: "#10b981",
      tasks: ["User interviews", "Wireframes v2", "Sprint planning"],
    },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px",
      }}
    >
      {cols.map((col) => (
        <div key={col.label}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: col.color,
              }}
            />
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                color: col.color,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {col.label}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {col.tasks.map((t) => (
              <div
                key={t}
                style={{
                  padding: "8px 10px",
                  borderRadius: "8px",
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "var(--text-2)",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let n = 0;
    const t = setInterval(() => {
      n += 127;
      setCount(n);
      if (n >= 14000) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(79,70,229,0.08) 0%,transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(124,58,237,0.06) 0%,transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 12px",
              borderRadius: "100px",
              background: "rgba(79,70,229,0.08)",
              border: "1px solid rgba(79,70,229,0.18)",
              marginBottom: "24px",
            }}
          >
            <span style={{ fontSize: "14px" }}>✨</span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--indigo)",
              }}
            >
              New: AI-powered task suggestions
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.6rem,5vw,4.2rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              color: "var(--text)",
              marginBottom: "20px",
            }}
          >
            Ship faster.
            <br />
            <span
              className="serif"
              style={{ fontStyle: "italic", fontWeight: 400 }}
            >
              Stay{" "}
            </span>
            <span className="grad-text">organized.</span>
          </h1>

          <p
            style={{
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: 1.75,
              color: "var(--text-2)",
              maxWidth: "440px",
              marginBottom: "36px",
            }}
          >
            TaskFlow gives your team one place to plan, track, and ship work —
            from the first idea to the final release. No chaos, no context
            switching.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "48px",
            }}
          >
            <a
              href="#"
              style={{
                padding: "14px 28px",
                borderRadius: "12px",
                background: "var(--grad)",
                color: "white",
                fontSize: "15px",
                fontWeight: 700,
                boxShadow: "0 8px 24px rgba(79,70,229,0.4)",
                display: "inline-block",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(79,70,229,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(79,70,229,0.4)";
              }}
            >
              Start for free →
            </a>
            <a
              href="#"
              style={{
                padding: "14px 24px",
                borderRadius: "12px",
                background: "var(--white)",
                border: "1.5px solid var(--border)",
                color: "var(--text)",
                fontSize: "15px",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "var(--shadow)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--indigo)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "none";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch demo
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ display: "flex" }}>
              {avatars.map((a, i) => (
                <div
                  key={i}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "2px solid white",
                    background: "var(--bg2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    marginLeft: i === 0 ? 0 : "-8px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  {a}
                </div>
              ))}
            </div>
            <div>
              <div style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} style={{ color: "#f59e0b", fontSize: "13px" }}>
                    {s}
                  </span>
                ))}
              </div>
              <span style={{ fontSize: "12px", color: "var(--text-2)" }}>
                Loved by{" "}
                <strong style={{ color: "var(--text)" }}>
                  {count.toLocaleString()}+
                </strong>{" "}
                teams
              </span>
            </div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div
            className="float"
            style={{
              borderRadius: "20px",
              background: "var(--white)",
              border: "1px solid var(--border)",
              boxShadow:
                "0 24px 80px rgba(79,70,229,0.12), 0 4px 16px rgba(0,0,0,0.06)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "14px 20px",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "var(--bg)",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#f43f5e",
                  }}
                />
                <div
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#f59e0b",
                  }}
                />
                <div
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#10b981",
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--text-2)",
                }}
              >
                TaskFlow — Q3 Sprint
              </span>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "var(--grad)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                }}
              >
                👩‍💻
              </div>
            </div>
            {/* Board */}
            <div style={{ padding: "20px" }}>
              <MiniBoard />
            </div>

            <div
              style={{
                padding: "0 20px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {taskCards.map((t, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px 14px",
                    borderRadius: "10px",
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: t.color,
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--text)",
                        marginBottom: "3px",
                      }}
                    >
                      {t.title}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 600,
                          padding: "1px 7px",
                          borderRadius: "100px",
                          background: t.bg,
                          color: t.color,
                        }}
                      >
                        {t.tag}
                      </span>
                      <span
                        style={{ fontSize: "10px", color: "var(--text-3)" }}
                      >
                        Due {t.due}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        width: "60px",
                        height: "5px",
                        borderRadius: "3px",
                        background: "var(--bg2)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${t.progress}%`,
                          height: "100%",
                          borderRadius: "3px",
                          background: t.color,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "var(--text-3)",
                        textAlign: "right",
                        marginTop: "3px",
                      }}
                    >
                      {t.progress}%
                    </div>
                  </div>
                  <span style={{ fontSize: "16px" }}>{t.avatar}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="float-slow"
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              padding: "10px 14px",
              borderRadius: "12px",
              background: "white",
              border: "1px solid var(--border)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(16,185,129,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              ✅
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--text)",
                }}
              >
                Sprint completed!
              </div>
              <div style={{ fontSize: "10px", color: "var(--text-3)" }}>
                12/12 tasks done
              </div>
            </div>
          </div>

          <div
            className="float"
            style={{
              position: "absolute",
              bottom: "-16px",
              left: "-16px",
              padding: "10px 14px",
              borderRadius: "12px",
              background: "white",
              border: "1px solid var(--border)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              zIndex: 2,
              animationDelay: "1.5s",
            }}
          >
            <div style={{ display: "flex" }}>
              {["🧑‍💻", "👩‍🎨", "👨‍🔬"].map((a, i) => (
                <div
                  key={i}
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    border: "2px solid white",
                    background: "var(--bg2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    marginLeft: i === 0 ? 0 : "-6px",
                  }}
                >
                  {a}
                </div>
              ))}
            </div>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--text-2)",
              }}
            >
              3 online now
            </span>
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 6px #10b981",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){section > div[style*="grid-template-columns"]{grid-template-columns:1fr!important;gap:40px!important;padding:40px 24px!important;}}`}</style>
    </section>
  );
}
