const plans = [
  {
    name: "Free",
    price: 0,
    desc: "Perfect for individuals and small teams getting started.",
    color: "#9497b0",
    features: [
      "Up to 5 members",
      "3 active projects",
      "Basic Kanban board",
      "Slack integration",
      "5GB storage",
      "Community support",
    ],
    cta: "Get started free",
    popular: false,
  },
  {
    name: "Pro",
    price: 12,
    desc: "For growing teams that need more power and flexibility.",
    color: "#4f46e5",
    features: [
      "Unlimited members",
      "Unlimited projects",
      "All board views",
      "All integrations",
      "100GB storage",
      "Priority support",
      "AI task suggestions",
      "Custom workflows",
    ],
    cta: "Start 14-day trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: 29,
    desc: "For large teams with advanced security and control needs.",
    color: "#7c3aed",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Advanced permissions",
      "Audit logs",
      "Custom contracts",
      "Dedicated CSM",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "100px 0",
        background: "var(--white)",
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
            Pricing
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
            Simple, transparent pricing.
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text-2)",
              maxWidth: "440px",
              margin: "0 auto",
            }}
          >
            No hidden fees. No surprises. Cancel anytime.
          </p>
        </div>

        {/* Plans */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            alignItems: "start",
          }}
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                padding: "32px",
                borderRadius: "20px",
                background: plan.popular
                  ? "linear-gradient(135deg,#4f46e5,#7c3aed)"
                  : "var(--bg)",
                border: plan.popular ? "none" : "1.5px solid var(--border)",
                boxShadow: plan.popular
                  ? "0 20px 60px rgba(79,70,229,0.3)"
                  : "var(--shadow)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    padding: "3px 12px",
                    borderRadius: "100px",
                    background: "rgba(255,255,255,0.2)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div style={{ marginBottom: "24px" }}>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: plan.popular
                      ? "rgba(255,255,255,0.7)"
                      : "var(--text-3)",
                    marginBottom: "8px",
                  }}
                >
                  {plan.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "4px",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "42px",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      color: plan.popular ? "white" : "var(--text)",
                      lineHeight: 1,
                    }}
                  >
                    ${plan.price}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: plan.popular
                        ? "rgba(255,255,255,0.6)"
                        : "var(--text-3)",
                    }}
                  >
                    /user/mo
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: plan.popular
                      ? "rgba(255,255,255,0.7)"
                      : "var(--text-2)",
                    lineHeight: 1.6,
                  }}
                >
                  {plan.desc}
                </p>
              </div>

              <a
                href="#"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  background: plan.popular ? "white" : "var(--grad)",
                  color: plan.popular ? "#4f46e5" : "white",
                  boxShadow: plan.popular
                    ? "none"
                    : "0 4px 14px rgba(79,70,229,0.35)",
                  marginBottom: "28px",
                  transition: "all 0.2s",
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
                {plan.cta}
              </a>

              <div
                style={{
                  borderTop: plan.popular
                    ? "1px solid rgba(255,255,255,0.15)"
                    : "1px solid var(--border)",
                  paddingTop: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {plan.features.map((f, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: plan.popular
                          ? "rgba(255,255,255,0.2)"
                          : "rgba(79,70,229,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={plan.popular ? "white" : "#4f46e5"}
                        strokeWidth="3"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontSize: "13px",
                        color: plan.popular
                          ? "rgba(255,255,255,0.85)"
                          : "var(--text-2)",
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){section#pricing > div > div:last-child{grid-template-columns:1fr!important;}section#pricing > div{padding:0 24px!important;}section#pricing{padding:64px 0!important;}}`}</style>
    </section>
  );
}
