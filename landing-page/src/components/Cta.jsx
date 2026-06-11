export default function CTA() {
  return (
    <section
      style={{
        padding: "100px 48px",
        background: "var(--white)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          borderRadius: "28px",
          padding: "72px 64px",
          background:
            "linear-gradient(135deg,#4f46e5 0%,#7c3aed 50%,#0ea5e9 100%)",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          boxShadow: "0 24px 80px rgba(79,70,229,0.35)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 14px",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              marginBottom: "24px",
            }}
          >
            <span style={{ fontSize: "14px" }}>🚀</span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              No credit card required
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem,4.5vw,3.4rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "white",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Ready to ship faster?
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.75)",
              maxWidth: "480px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Join 14,000+ teams already using TaskFlow to plan, build, and
            deliver great products.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#"
              style={{
                padding: "15px 32px",
                borderRadius: "12px",
                background: "white",
                color: "#4f46e5",
                fontSize: "15px",
                fontWeight: 700,
                display: "inline-block",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
              }}
            >
              Start for free →
            </a>
            <a
              href="#"
              style={{
                padding: "15px 28px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(255,255,255,0.3)",
                color: "white",
                fontSize: "15px",
                fontWeight: 600,
                display: "inline-block",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "none";
              }}
            >
              Talk to sales
            </a>
          </div>

          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.5)",
              marginTop: "20px",
            }}
          >
            Free forever for small teams · No credit card · Cancel anytime
          </p>
        </div>
      </div>
      <style>{`@media(max-width:640px){section > div > div[style*="padding: 72px"]{padding:40px 28px!important;}section{padding:64px 20px!important;}}`}</style>
    </section>
  );
}
